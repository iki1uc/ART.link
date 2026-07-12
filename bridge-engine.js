export async function loadBridge() {
  const out = document.getElementById("bridge");

  const bridge = [
    "ART.link → TriAxiom/axis/",
    "TriAxiom/axis/ → Deck1 ROOT",
    "Deck1 ROOT → Station N, SYS‑x",
    "Deck2 MODULE → STA, IS, OUT, OI, IO, IN",
    "Deck3 VISUAL → 2me",
    "TriAxiom → ART.link Orbit",
    "ART.link Orbit → ART.link 7a"
  ];

  bridge.forEach(step => {
    const div = document.createElement("div");
    div.className = "link";
    div.textContent = step;
    out.appendChild(div);
  });
}
