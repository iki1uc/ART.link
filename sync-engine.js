// ------------------------------------------------------
// NC² → ORBIT CONNECTOR
// ------------------------------------------------------

import { orbitUpdateHeatmap } from "./orbit-engine.js";
import ncData from "./NC.json" assert { type: "json" };

export function syncOrbit() {

    const axisNC2 = ncData.align.axis_nc2;     // □
    const axisOcta = ncData.align.axis_octa;   // octa³
    const pulse = ncData.align.pulse;          // NC² Pulse
    const error = ncData.align.error;          // NC² Error

    orbitUpdateHeatmap({
        axisNC2,
        axisOcta,
        pulse,
        error
    });
}
