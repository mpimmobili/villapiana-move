import { initMap } from "./components/MapView.js";
import { setupRouteSearch } from "./components/RouteSearch.js";

window.addEventListener("load", () => {
  initMap();
  setupRouteSearch();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }
});
