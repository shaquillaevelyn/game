
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
  x: 2,
  y: 2,
  height: 25,
  width: 25,
}

canvas.addEventListener('click', function (event) {
  
})

// Player

class Jumper {
  constructor() {
    this.x = 10;
    this.y = 245;
    this.radius = 50;
  }

  jump() {
    console.log("jumping");
    if (ball.classList !== "jump") {
      ball.classList.add("jump");
    }
    setTimeout(() => {
      ball.classList.remove("jump");
    }, 500);
  }

  update() {
    setInterval(() => {
      let ballTop = parseInt(getComputedStyle(ball).getPropertyValue("top"));
      let blockLeft = parseInt(
        getComputedStyle(block).getPropertyValue("left")
      );

      if (blockLeft <= 60 && blockLeft > 0 && 165 < ballTop) {
        block.style.animation = "none";
        block.style.display = "none";
        alert(`you lose- you scored ${clickCount}!`);
        location.reload();
      } else {
        clickCount++;
        updateScore();
      }
    }, 1);
  }
}



// Enemy blocks
// Parallax background
// Random birds
// Animation loop


let ball = document.getElementById("ball");
let block = document.getElementById("block");

let clickCount = 0;

const updateScore = () => {
  scorecard.innerHTML = clickCount;
};

let scorecard = document.getElementById("scorecard");



const gamey = new Game()
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  gamey.update()
  gamey.draw()

  requestAnimationFrame(animate)
}
animate();