let ball = document.getElementById("ball");
let block = document.getElementById("block");

// jump

const jump = () => {
  console.log("jumping");
  if (ball.classList !== "jump") {
    ball.classList.add("jump");
  }
  setTimeout(() => {
    ball.classList.remove("jump");
  }, 500);
};

// pause

const pauseGame = () => {
  addEventListener("click", () => {
    block.classList.remove("block");
  });
};

// random blocks

const numero = 3000;
const numbersArray = [];
let blockNumber = math.floor(Math.random() * 4);

class enemyBlocks {
  // give this block the properties
  constructor() {
    this.block_x = 25;
    this.block_y = 25;
    this.top = 160;
    this.x = 1000;
    this.y = 0;
    this.topPosition = 160;
  }

  update() {
    this.x--;
    if (this.x > -50) {
      this.x = 100;
    }
  }

  draw() {}
}

for (let i = 0; i < numero; i++) {
  numbersArray.push(new enemyBlocks());
}

console.log(numbersArray);

// collision

const check = setInterval(() => {
  let ballTop = parseInt(getComputedStyle(ball).getPropertyValue("top"));
  let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

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

// score card
let clickCount = 0;

const updateScore = () => {
  scorecard.innerHTML = clickCount;
};

let scorecard = document.getElementById("scorecard");

const start = () => {
  alert("click to start");
};

window.addEventListener("click", function (e) {
  clickCount++;
});
