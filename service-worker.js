self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("villapiana-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/src/styles.css"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
