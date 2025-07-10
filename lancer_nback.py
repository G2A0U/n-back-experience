import http.server
import socketserver
import socket
import os
import webbrowser

print("=== Script Python lancé ===")

# Se placer dans le dossier du script
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# Trouver un port libre
def find_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

PORT = find_free_port()
url = f"http://localhost:{PORT}/index.html"

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serveur lancé sur : {url}")
    webbrowser.open(url)
    httpd.serve_forever()
