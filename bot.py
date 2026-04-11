"""
AI Chat Bridge — connects the ai.html web interface to LM Studio via Telegram.

Run locally:
    pip install flask flask-cors requests python-telegram-bot
    export AI_TELEGRAM_BOT_TOKEN="your-bot-token"
    export TELEGRAM_CHAT_ID="your-chat-id"
    python bot.py

Requires LM Studio running locally with the server enabled (default: http://localhost:1234).
"""

import os
import json
import threading
import requests
from flask import Flask, request, Response, jsonify
from flask_cors import CORS

# ── Configuration ──────────────────────────────────────────────────────────────
TELEGRAM_BOT_TOKEN = os.environ.get("AI_TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "")
LM_STUDIO_URL = os.environ.get("LM_STUDIO_URL", "http://localhost:1234/v1/chat/completions")
FLASK_PORT = int(os.environ.get("FLASK_PORT", 5000))
SYSTEM_PROMPT = os.environ.get("SYSTEM_PROMPT", "You are a helpful AI assistant.")

# Comma-separated extra origins (e.g. a Cloudflare tunnel or ngrok URL)
_extra = os.environ.get("ALLOWED_ORIGINS", "")
ALLOWED_ORIGINS = [
    "https://ethanskis.github.io",
    "https://ethgrd.com",
    "https://www.ethgrd.com",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
] + [o.strip() for o in _extra.split(",") if o.strip()]

# ── Flask App ──────────────────────────────────────────────────────────────────
app = Flask(__name__)
CORS(app, origins=ALLOWED_ORIGINS, supports_credentials=False)


@app.route("/health", methods=["GET"])
def health():
    """Health check endpoint for the web UI status indicator."""
    try:
        r = requests.get(
            LM_STUDIO_URL.replace("/v1/chat/completions", "/v1/models"),
            timeout=3,
        )
        lm_ok = r.status_code == 200
    except Exception:
        lm_ok = False

    return jsonify({"status": "ok", "lm_studio": lm_ok}), 200


@app.route("/chat", methods=["POST"])
def chat():
    """
    Accepts { message: string, history: array } from ai.html.
    Streams the LM Studio response back as Server-Sent Events.
    Also logs the exchange to Telegram.
    """
    data = request.get_json(force=True)
    user_msg = data.get("message", "").strip()
    history = data.get("history", [])

    if not user_msg:
        return jsonify({"error": "Empty message"}), 400

    # Build messages array for LM Studio
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for h in history:
        messages.append({"role": h["role"], "content": h["content"]})
    messages.append({"role": "user", "content": user_msg})

    # Log user message to Telegram
    send_telegram(f"[Web] User: {user_msg}")

    def generate():
        full_response = ""
        try:
            r = requests.post(
                LM_STUDIO_URL,
                json={
                    "messages": messages,
                    "stream": True,
                    "temperature": 0.7,
                    "max_tokens": 2048,
                },
                stream=True,
                timeout=120,
            )
            r.raise_for_status()

            for line in r.iter_lines(decode_unicode=True):
                if not line or not line.startswith("data: "):
                    continue
                payload = line[6:]
                if payload.strip() == "[DONE]":
                    break
                try:
                    chunk = json.loads(payload)
                    delta = chunk.get("choices", [{}])[0].get("delta", {})
                    token = delta.get("content", "")
                    if token:
                        full_response += token
                        yield f"data: {json.dumps({'token': token})}\n\n"
                except json.JSONDecodeError:
                    continue

            yield "data: [DONE]\n\n"

            # Log assistant response to Telegram
            if full_response:
                # Truncate long responses for Telegram (4096 char limit)
                tg_text = full_response if len(full_response) < 3900 else full_response[:3900] + "... [truncated]"
                send_telegram(f"[Web] AI: {tg_text}")

        except requests.ConnectionError:
            yield f"data: {json.dumps({'error': 'Cannot connect to LM Studio. Is it running on ' + LM_STUDIO_URL + '?'})}\n\n"
            yield "data: [DONE]\n\n"
        except requests.Timeout:
            yield f"data: {json.dumps({'error': 'LM Studio request timed out.'})}\n\n"
            yield "data: [DONE]\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
            yield "data: [DONE]\n\n"

    return Response(generate(), mimetype="text/event-stream")


# ── Telegram Helpers ───────────────────────────────────────────────────────────
def send_telegram(text):
    """Send a message to the configured Telegram chat."""
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_ID:
        return
    try:
        requests.post(
            f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage",
            json={"chat_id": TELEGRAM_CHAT_ID, "text": text},
            timeout=5,
        )
    except Exception:
        pass  # Don't crash if Telegram is unreachable


def start_telegram_bot():
    """
    Run a Telegram bot that accepts direct messages and forwards them to LM Studio.
    This lets you chat with your LM Studio model directly through Telegram too.
    """
    if not TELEGRAM_BOT_TOKEN:
        print("[Telegram] No bot token set — Telegram bot disabled.")
        return

    try:
        from telegram import Update
        from telegram.ext import ApplicationBuilder, MessageHandler, filters, ContextTypes
    except ImportError:
        print("[Telegram] python-telegram-bot not installed — Telegram bot disabled.")
        print("           Install with: pip install python-telegram-bot")
        return

    async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
        user_text = update.message.text
        if not user_text:
            return

        # Send to LM Studio (non-streaming for Telegram)
        try:
            r = requests.post(
                LM_STUDIO_URL,
                json={
                    "messages": [
                        {"role": "system", "content": SYSTEM_PROMPT},
                        {"role": "user", "content": user_text},
                    ],
                    "temperature": 0.7,
                    "max_tokens": 2048,
                },
                timeout=120,
            )
            r.raise_for_status()
            data = r.json()
            reply = data["choices"][0]["message"]["content"]
        except Exception as e:
            reply = f"Error contacting LM Studio: {e}"

        await update.message.reply_text(reply)

    tg_app = ApplicationBuilder().token(TELEGRAM_BOT_TOKEN).build()
    tg_app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    print(f"[Telegram] Bot started — listening for messages.")
    tg_app.run_polling(drop_pending_updates=True)


# ── Main ───────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print(f"[Server]   Flask running on http://localhost:{FLASK_PORT}")
    print(f"[LMStudio] Targeting {LM_STUDIO_URL}")
    print(f"[Telegram] Token: {'set' if TELEGRAM_BOT_TOKEN else 'NOT SET'}")
    print(f"[Telegram] Chat:  {'set' if TELEGRAM_CHAT_ID else 'NOT SET'}")
    print()

    # Start Telegram bot in a background thread
    if TELEGRAM_BOT_TOKEN:
        tg_thread = threading.Thread(target=start_telegram_bot, daemon=True)
        tg_thread.start()

    app.run(host="0.0.0.0", port=FLASK_PORT, debug=False)
