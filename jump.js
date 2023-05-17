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
