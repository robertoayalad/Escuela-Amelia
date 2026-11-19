// Registro mínimo para que Chrome ofrezca «Añadir a pantalla de inicio».
// No guarda caché: cada página se pide de nuevo y las actividades nuevas aparecen al subirlas.

self.addEventListener("install", function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function () {
  // El navegador pide cada archivo a la red. El oyente basta para poder instalar la app.
});
