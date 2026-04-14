"""
Stream Server — serves video files from a local directory with HTTP Range
support so the public stream.html page can stream from your PC through an
ngrok tunnel.

Run locally:
    pip install flask
    python stream_server.py /path/to/videos

Then in another terminal:
    ngrok http 5002

Put the ngrok URL into stream.json, e.g.:
    {"url": "https://abcd-1-2-3-4.ngrok-free.app"}

The /list endpoint auto-enumerates video files in the directory, so you
don't have to list them manually in stream.json.
"""

import argparse
import mimetypes
import os

from flask import Flask, abort, jsonify, request, send_from_directory

# Origins the public site uses
ALLOWED_ORIGINS = {
    "https://ethanskis.github.io",
    "https://ethgrd.com",
    "https://www.ethgrd.com",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
}

VIDEO_EXTS = {".mp4", ".webm", ".mov", ".mkv", ".m4v", ".ogv", ".ogg", ".avi"}


def create_app(video_dir: str) -> Flask:
    app = Flask(__name__)
    video_dir_abs = os.path.abspath(video_dir)

    @app.after_request
    def cors(resp):
        origin = request.headers.get("Origin", "")
        if origin in ALLOWED_ORIGINS:
            resp.headers["Access-Control-Allow-Origin"] = origin
        resp.headers["Access-Control-Allow-Headers"] = "Range, ngrok-skip-browser-warning"
        resp.headers["Access-Control-Expose-Headers"] = (
            "Content-Length, Content-Range, Accept-Ranges"
        )
        resp.headers["Accept-Ranges"] = "bytes"
        return resp

    @app.route("/health", methods=["GET"])
    def health():
        return jsonify({"status": "ok"}), 200

    @app.route("/list", methods=["GET"])
    def list_videos():
        videos = []
        for entry in sorted(os.listdir(video_dir_abs)):
            path = os.path.join(video_dir_abs, entry)
            if not os.path.isfile(path):
                continue
            ext = os.path.splitext(entry)[1].lower()
            if ext not in VIDEO_EXTS:
                continue
            mime, _ = mimetypes.guess_type(entry)
            videos.append({
                "name": os.path.splitext(entry)[0],
                "file": entry,
                "size": os.path.getsize(path),
                "type": mime or "video/mp4",
            })
        return jsonify({"videos": videos})

    @app.route("/video/<path:filename>", methods=["GET"])
    def serve_video(filename):
        safe_path = os.path.abspath(os.path.join(video_dir_abs, filename))
        if not safe_path.startswith(video_dir_abs + os.sep) and safe_path != video_dir_abs:
            abort(403)
        if not os.path.isfile(safe_path):
            abort(404)
        # conditional=True enables HTTP Range responses (needed for seeking)
        return send_from_directory(video_dir_abs, filename, conditional=True)

    return app


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("directory", help="Directory containing video files")
    parser.add_argument("--port", type=int, default=5002, help="Port to listen on (default: 5002)")
    parser.add_argument("--host", default="0.0.0.0", help="Host to bind to (default: 0.0.0.0)")
    args = parser.parse_args()

    vd = os.path.abspath(args.directory)
    if not os.path.isdir(vd):
        raise SystemExit(f"Not a directory: {vd}")

    print(f"[Stream] Serving videos from {vd}")
    print(f"[Stream] Listening on http://{args.host}:{args.port}")
    print(f"[Stream] Expose with:   ngrok http {args.port}")
    print()

    create_app(vd).run(host=args.host, port=args.port, debug=False)
