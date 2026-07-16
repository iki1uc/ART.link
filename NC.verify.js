import NC from "./NC.json" assert { type:"json" };
import RULES from "./NC.verify.json" assert { type:"json" };
import ORBIT from "./orbit.json" assert { type:"json" };

import { syncOrbit } from "./sync-engine.js";
import { CoreChainConnector } from "./core-chain-engine.js";
import { BridgeNC2Connector } from "./bridge-engine.js";
import { AutoGenerator } from "./generator-engine.js";

const panel = document.getElementById("verifyPanel");

function verifyNC() {

    const sync = NC.sync;
    const align = NC.align;

    const chain = CoreChainConnector();
    BridgeNC2Connector();
    AutoGenerator();

    const errors = [];

    // --- Regeln aus NC.verify.json anwenden ---
    if (RULES.rules.requireSyncAxis && !sync.axis) errors.push("Sync.axis fehlt");
    if (RULES.rules.requireSyncDual && !sync.dual) errors.push("Sync.dual fehlt");
    if (RULES.rules.requireSyncMerge && !sync.merge) errors.push("Sync.merge fehlt");

    if (RULES.rules.requireAlignNC2 && !align.axis_nc2) errors.push("Align.axis_nc2 fehlt");
    if (RULES.rules.requireAlignOcta && !align.axis_octa) errors.push("Align.axis_octa fehlt");

    if (sync.error) errors.push("NC² ERROR aktiv");

    if (RULES.rules.requireOrbitPaths && ORBIT.paths.length === 0)
        errors.push("Orbit‑Heatmap leer");

    if (RULES.rules.requireCoreChain) {
        if (!chain.id) errors.push("Core‑Chain: ID fehlt");
        if (!chain.nc) errors.push("Core‑Chain: NC fehlt");
    }

    // --- Ausgabe ---
    panel.innerHTML = `
<b>NC² Sync</b>
Axis: ${sync.axis}
Dual: ${sync.dual}
Merge: ${sync.merge}
Pulse: ${sync.pulse}
Error: ${sync.error}

<b>NC² Align</b>
Axis NC²: ${align.axis_nc2}
Axis Octa³: ${align.axis_octa}
Align Core: ${align.align}

<b>Orbit</b>
Tiles: ${ORBIT.paths.length}
Status: ${ORBIT.paths.length > 0 ? "OK" : "NEIN"}

<b>Core‑Chain</b>
ID: ${chain.id}
NC: ${chain.nc}
Orbit: ${chain.orbit}
Bridge: ${chain.bridge}
Generator: ${chain.generator}

<b>Verification</b>
${errors.length === 0 ? "✔ Alles OK" : "❌ Fehler gefunden:"}
${errors.join("\n")}
`;
}

setInterval(verifyNC, 500);
