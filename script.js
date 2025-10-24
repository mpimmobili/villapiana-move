// Registra il Service Worker per la modalità offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("✅ Service Worker registrato"))
    .catch(err => console.log("❌ Errore Service Worker:", err));
}
