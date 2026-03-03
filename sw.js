self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('impostor-v1').then(cache => {
      return cache.addAll([
        '/impostor/',
        '/impostor/index.html',
        '/impostor/manifest.json',
        '/impostor/icon-192.png',
        '/impostor/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
