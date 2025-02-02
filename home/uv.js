importScripts('/home/uv/uv.bundle.js');
importScripts('/home/uv/uv.config.js');
importScripts('/home/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));