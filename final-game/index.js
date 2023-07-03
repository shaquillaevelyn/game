import { Jumper } from "./game.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 250;

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.jumper = new Jumper(this);
    }

    update() {
        
    }

    draw(context) {
        this.jumper.draw(context)
    }


}

const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    game.draw(ctx)
    requestAnimationFrame(animate)
}
animate();