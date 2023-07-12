
// window.addEventListener("load", function () {
//   // Add game here
// });

// Canvas Set Up

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 250;

let score = 0;
let gameFrame = 0;
ctx.font = '12px Ariel'

// set 0, 0 cords within my cnavas
let canvasPosition = canvas.getBoundingClientRect();
console.log(canvasPosition)


// const topLeft = 
// const topRight =
// const bottomLeft = 
// const bottomRight = 

// Click to Jump Interactivity
const jump = {
  x: 0,
  y: 50,
  click: false,
}

canvas.addEventListener('mousedown', function (e) {
  jump.click = true
  jump.y = 50
 
})

// Player

class Jumper {
  constructor(game) {
    this.game = game;
    
    this.x = 30;
    this.y = 245;
    this.vy = 0;
    this.radius = 20;
  }

  update(input) {
    let dy = this.y - jump.y;

    if (this.y != dy) {
      this.y -= dy/100
    }
    };

  draw() {
    if (jump.click) {
      ctx.lineWidth = 0.2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, jump.y);
      ctx.stroke();
    }
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill()
    ctx.closePath()
  }
}



// Enemy blocks
// Parallax background
// Random birds
// Animation loop


const jumper = new Jumper();
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  jumper.update()
  jumper.draw()

  requestAnimationFrame(animate)
}
animate();