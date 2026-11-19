"""
AI Chat Bridge — connects the ai.html web interface to LM Studio.

Run locally:
    pip install flask flask-cors requests
    python bot.py

Requires LM Studio running locally with the server enabled (default: http://localhost:1234).
"""

import os
import json
import requests
from flask import Flask, request, Response, jsonify

# ── Configuration ──────────────────────────────────────────────────────────────
LM_STUDIO_URL = os.environ.get("LM_STUDIO_URL", "http://localhost:1234/v1/chat/completions")
FLASK_PORT = int(os.environ.get("FLASK_PORT", 5000))
SYSTEM_PROMPT = os.environ.get("SYSTEM_PROMPT", "You are a helpful AI assistant.")

# Comma-separated extra origins via env var
_extra = os.environ.get("ALLOWED_ORIGINS", "")
ALLOWED_ORIGINS = {
    "https://ethanskis.github.io",
    "https://ethgrd.com",
    "https://www.ethgrd.com",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
} | {o.strip() for o in _extra.split(",") if o.strip()}

# ── Flask App ──────────────────────────────────────────────────────────────────
app = Flask(__name__)


@app.before_request
def handle_preflight():
    """Intercept OPTIONS before routing so preflights can never 404."""
    if request.method != "OPTIONS":
        return
    origin = request.headers.get("Origin", "")
    resp = Response(status=204)
    if origin in ALLOWED_ORIGINS:
        resp.headers["Access-Control-Allow-Origin"] = origin
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, ngrok-skip-browser-warning"
    resp.headers["Access-Control-Max-Age"] = "3600"
    return resp


@app.after_request
def add_cors(response):
    """Add CORS headers to all non-OPTIONS responses."""
    origin = request.headers.get("Origin", "")
    if origin in ALLOWED_ORIGINS:
        response.headers["Access-Control-Allow-Origin"] = origin
    return response


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

    def generate():
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
            # LM Studio returns `Content-Type: text/event-stream` without a
            # charset, which makes `requests` default to ISO-8859-1 and mangle
            # multi-byte UTF-8 sequences (e.g. emojis) when decoding. Force
            # UTF-8 so the incremental decoder reassembles them correctly.
            r.encoding = "utf-8"

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
                        yield f"data: {json.dumps({'token': token})}\n\n"
                except json.JSONDecodeError:
                    continue

            yield "data: [DONE]\n\n"


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


# ── Main ───────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print(f"[Server]   Flask running on http://localhost:{FLASK_PORT}")
    print(f"[LMStudio] Targeting {LM_STUDIO_URL}")
    print()

    app.run(host="0.0.0.0", port=FLASK_PORT, debug=False)
