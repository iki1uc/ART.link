export async function generateAll() {
  const status = document.getElementById("gen-status");

  const ID = {
    "N0": { layer:"ORIGIN", cluster:"ROOT-CHAIN-0X", depth:0, signature:"N0::NS::NC::SUB" },
    "N1": { layer:"NC", cluster:"CHAIN-1", depth:1, signature:"N1::NC::SUB" },
    "N2": { layer:"NC", cluster:"CHAIN-2", depth:2, signature:"N2::NC::SUB" }
  };

  const NC = {
    "NC0": { orbit:"ROOT", cluster:"CHAIN-0", depth:0 },
    "NC1": { orbit:"UP", cluster:"CHAIN-1", depth:1 },
    "NC2": { orbit:"SET", cluster:"CHAIN-2", depth:2 }
  };

  const orbit = {
    "path": [
      "N0 → NC0",
      "NC0 → NC1",
      "NC1 → NC2",
      "NC2 → N0"
    ]
  };

  status.textContent = "AUTO‑GENERATOR aktiv · Daten erzeugt (6f).";
}
