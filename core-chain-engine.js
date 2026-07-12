export async function loadCoreChain() {
  const out = document.getElementById("core-chain");

  const chain = [
    "ART.link → RAW‑SYS‑IKI‑AXI‑ATOR",
    "RAW‑SYS‑IKI‑AXI‑ATOR → LOGIK‑ATOR‑SYS‑AXI",
    "LOGIK‑ATOR‑SYS‑AXI → TriAxiom",
    "TriAxiom → RESPO‑Cluster",
    "RESPO‑Cluster → NC‑System",
    "NC‑System → ART.link (7a)"
  ];

  chain.forEach(step => {
    const div = document.createElement("div");
    div.className = "step";
    div.textContent = step;
    out.appendChild(div);
  });
}
