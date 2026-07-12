export async function renderOrbit() {
  const out = document.getElementById("orbit-map");

  try {
    const res = await fetch("./data/orbit.json");
    const data = await res.json();

    data.path.forEach(step => {
      const div = document.createElement("div");
      div.className = "step";
      div.textContent = step;
      out.appendChild(div);
    });

  } catch (e) {
    out.innerHTML = "Fehler: " + e.message;
  }
}
