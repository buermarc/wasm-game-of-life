import { Universe } from "wasm-game-of-life";

console.log(Universe.new());
const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();
const renderLoop = async () => {
    pre.textContent = universe.render();
    await new Promise(r => setTimeout(r, 2000));
    universe.tick();
    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
