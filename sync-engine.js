export async function syncOrbit() {
  const out = document.getElementById("sync");

  const sync = [
    "Orbit: ART.link → TriAxiom",
    "Orbit: TriAxiom → RAW‑SYS‑IKI‑AXI‑ATOR",
    "Orbit: RAW‑SYS‑IKI‑AXI‑ATOR → LOGIK‑ATOR‑SYS‑AXI",
    "Orbit: LOGIK‑ATOR‑SYS‑AXI → RESPO",
    "Orbit: RESPO → NC",
    "Orbit: NC → ART.link 7a"
  ];

  sync.forEach(step => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = step;
    out.appendChild(div);
  });
}
