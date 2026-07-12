export async function loadID() {
  const res = await fetch("./data/ID.json");
  const data = await res.json();
  return Object.keys(data).length;
}

export async function renderID() {
  const status = document.getElementById("status");
  const out = document.getElementById("id-table");

  try {
    const res = await fetch("./data/ID.json");
    const data = await res.json();

    status.textContent = "ID‑System geladen.";

    Object.keys(data).forEach(key => {
      const id = data[key];
      const row = document.createElement("tr");
      row.className = `depth-${id.depth}`;
      row.innerHTML = `
        <td>${key}</td>
        <td>${id.layer}</td>
        <td>${id.cluster}</td>
        <td>${id.depth}</td>
        <td>${id.signature}</td>
      `;
      out.appendChild(row);
    });

  } catch (e) {
    status.textContent = "Fehler: " + e.message;
  }
}
