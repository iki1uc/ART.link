import NC from "./NC.json" assert { type:"json" };
import ORBIT from "./orbit.json" assert { type:"json" };
import { syncOrbit } from "./sync-engine.js";
import { CoreChainConnector } from "./core-chain-engine.js";
import { AutoGenerator } from "./generator-engine.js";
import { BridgeNC2Connector } from "./bridge-engine.js";

const panel = document.getElementById("verifyPanel");

function verifyNC() {

    const sync = NC.sync;
    const align = NC.align;

    const chain = CoreChainConnector();
    BridgeNC2Connector();

    const orbitStatus = ORBIT.paths.length > 0 ? "OK" : "NEIN";

    const errors = [];

    // NC² Sync Checks
    if (!sync.axis) errors.push("Sync.axis fehlt");
    if (!sync.dual) errors.push("Sync.dual fehlt");
    if (!sync.merge) errors.push("Sync.merge fehlt");

    // NC² Align Checks
    if (!align.axis_nc2) errors.push("Align.axis_nc2 fehlt");
    if (!align.axis_octa) errors.push("Align.axis_octa fehlt");

    // Pulse / Error
    if (sync.error) errors.push("NC² ERROR aktiv");

    // Orbit
    if (ORBIT.paths.length === 0) errors.push("Orbit‑Heatmap leer");

    // Core‑Chain
    if (!chain.id) errors.push("Core‑Chain: ID fehlt");
    if (!chain.nc) errors.push("Core‑Chain: NC fehlt");

    // Generator
    AutoGenerator();

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
Status: ${orbitStatus}

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
