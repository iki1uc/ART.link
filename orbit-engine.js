// ------------------------------------------------------
// ORBIT HEATMAP ENGINE
// ------------------------------------------------------

import orbitData from "./orbit.json" assert { type: "json" };

let orbitTiles = [];

export function initOrbitHeatmap(scene) {

    orbitData.paths.forEach((p, i) => {
        const geo = new THREE.PlaneGeometry(0.5, 0.5);
        const mat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0, 0, 0),
            transparent: true,
            opacity: 0.8
        });

        const tile = new THREE.Mesh(geo, mat);
        tile.position.set((i % 6) - 3, Math.floor(i / 6) - 2, 0);
        scene.add(tile);

        orbitTiles.push(tile);
    });
}

export function orbitUpdateHeatmap(sync) {

    const { axisNC2, axisOcta, pulse, error } = sync;

    orbitTiles.forEach(tile => {

        const baseHue = axisNC2 === "□" ? 0.6 : 0.3;
        const octaBoost = axisOcta === "octa³" ? 0.2 : 0;

        const hue = baseHue + octaBoost;

        tile.material.color.setHSL(hue, 1, 0.5);

        tile.scale.set(
            1 + Math.sin(Date.now() / 300) * (pulse === "NC².pulse" ? 0.2 : 0),
            1 + Math.sin(Date.now() / 300) * (pulse === "NC².pulse" ? 0.2 : 0),
            1
        );

        if (error === "NC².error") {
            tile.material.color.setHSL(0, 1, 0.5);
            tile.material.opacity = 0.9;
        } else {
            tile.material.opacity = 0.8;
        }
    });
}
