const CACHE_NAME = 'ajh-vault-v6-cache-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/index.css',
    '/index.js',
    '/home/icon.png',
    '/home/manifest.json'
];

// Install event - Cache essential assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch event - Serve cached files & allow Ultraviolet
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Bypass cache for Bare server (Ultraviolet proxy)
    if (url.hostname === 'bare.benrogo.net') {
        return; // Let Ultraviolet handle it
    }

    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
