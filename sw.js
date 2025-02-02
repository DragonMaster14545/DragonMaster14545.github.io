self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Ensure response is valid before modifying headers
                if (!response || response.status < 200 || response.status > 599) {
                    return response; // Return the response as is
                }

                const newHeaders = new Headers(response.headers);
                newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
                newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");

                return new Response(response.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders
                });
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                return new Response("Service Worker Fetch Error", {
                    status: 500,
                    statusText: "Internal Server Error"
                });
            })
    );
});

