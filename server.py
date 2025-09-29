import http.server
import socketserver

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(f"Solicitando: {self.path}")
        return super().do_GET()

    def end_headers(self):
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()

handler_object = MyHttpRequestHandler
PORT = 8000
my_server = socketserver.TCPServer(("", PORT), handler_object)
print(f"Servidor iniciado en el puerto {PORT}")
my_server.serve_forever()