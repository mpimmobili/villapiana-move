export function initMap() {
  const map = L.map("map").setView([39.805, 16.483], 12); // Coordinate Villapiana
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
}
