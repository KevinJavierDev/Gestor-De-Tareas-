const NOMBRE_CACHE = 'tareas-kev-v1';
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json'
];

// Guardar todo cuando se instale
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(NOMBRE_CACHE).then(cache => cache.addAll(ARCHIVOS))
  );
});

// Usar guardado si no hay internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(respuesta => respuesta || fetch(e.request))
  );
});