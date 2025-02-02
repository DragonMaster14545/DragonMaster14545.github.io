from http.server import SimpleHTTPRequestHandler, HTTPServer

class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        super().end_headers()

if __name__ == "__main__":
    server_address = ('', 8000)  # Serve on all addresses, port 8000
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)
    print("Serving on port 8000")
    httpd.serve_forever()
