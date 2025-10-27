import { getRoutes } from "../api/transportApi.js";

export function setupRouteSearch() {
  const container = document.getElementById("route-search");
  container.innerHTML = `
    <h2>Calcola percorso</h2>
    <form id="search-form">
      <input type="text" id="from" placeholder="Partenza (es. Villapiana)" value="Villapiana" required />
      <input type="text" id="to" placeholder="Destinazione (es. Roma)" required />
      <button type="submit">Cerca</button>
    </form>
    <div id="results"></div>
  `;

  const form = document.getElementById("search-form");
  const results = document.getElementById("results");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    results.textContent = "Ricerca in corso...";
    const from = form.from.value;
    const to = form.to.value;
    const data = await getRoutes(from, to);
    results.innerHTML = data ? data : "Nessun percorso trovato.";
  });
}
