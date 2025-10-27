const API_KEY = "INSERISCI_LA_TUA_GOOGLE_API_KEY"; // gratuita fino a 2500 richieste/giorno

export async function getRoutes(from, to) {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&mode=transit&region=it&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.routes && data.routes.length > 0) {
      const leg = data.routes[0].legs[0];
      return `
        <h3>Percorso trovato:</h3>
        <p><b>Da:</b> ${leg.start_address}</p>
        <p><b>A:</b> ${leg.end_address}</p>
        <p><b>Durata:</b> ${leg.duration.text}</p>
        <p><b>Distanza:</b> ${leg.distance.text}</p>
      `;
    } else {
      return "Nessun percorso disponibile.";
    }
  } catch (err) {
    console.error(err);
    return "Errore durante la ricerca del percorso.";
  }
}
