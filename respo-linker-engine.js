export async function linkRESPO() {
  const status = document.getElementById("respo-status");

  try {
    const res = await fetch("./data/respo.json");
    const data = await res.json();

    status.textContent = "RESPO‑LINKER aktiv · " + Object.keys(data).length + " Cluster geladen.";

  } catch (e) {
    status.textContent = "Fehler: " + e.message;
  }
}
