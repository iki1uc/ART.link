export async function renderNC() {
  const out = document.getElementById("nc-out");

  try {
    const res = await fetch("./data/NC.json");
    const data = await res.json();

    Object.keys(data).forEach(key => {
      const n = data[key];
      const div = document.createElement("div");
      div.className = `node depth-${n.depth}`;
      div.innerHTML = `
        <b>${key}</b><br>
        Orbit: ${n.orbit}<br>
        Cluster: ${n.cluster}<br>
        Depth: ${n.depth}
      `;
      out.appendChild(div);
    });

  } catch (e) {
    out.innerHTML = "Fehler: " + e.message;
  }
}
