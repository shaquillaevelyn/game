// This game will have
// random enemies
// bird sprite across the top of the screen
// parallax background

window.addEventListener("load", function () {
  // Add game here
});

const canvas = document.getElementById("cheese");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 250;

let clickCount = 0;

const updateScore = () => {
  scorecard.innerHTML = clickCount;
};

let scorecard = document.getElementById("scorecard");

class Game {
  constructor() {
    // space of game area
    this.x = CANVAS_WIDTH;
    this.y = CANVAS_HEIGHT;
    // Add enemy
    this.enemy = [];
    this.addEnemy();
    // add bird
    this.bird = [];
    this.addBird();
    // add jumper
    this.jumper = [];
    this.addJumper();
  }

  draw() {
    this.jumper.draw()
    this.enemy.forEach((obj) => obj.draw());
    this.bird.forEach((obj) => obj.draw());
  }

  addEnemy() {
    this.enemy.push(new Enemy());
  }

  addBird() {
    this.bird.push(new Bird());
  }

  
}

class Jumper {
  constructor() {
    this.x = 10;
    this.y = 245;
  }

  jump() {
    console.log("im jumping");
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

class Enemy {
  constructor() {
    this.x = 1000;
    this.y = 500;
    this.width = 25;
    this.height = 25;
    this.blockNumber = Math.floor(Math.random() * 4);
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width * this.blockNumber, this.height);
  }

  update() {
    this.x--;
  }
}

class Bird {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.image = document.getElementById("bird");
    this.spriteWidth = 190;
    this.spriteHeight = 190;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = 1;
    this.y = 1;
    this.minFrameForward = 0;
    this.maxFrameForward = 10;
    this.minFrameBackwards = 11;
    this.maxFrameBackwards = 22;
    this.frame = 0;
    this.FrameX = 0;
    this.FrameY = 1;
    this.flightX = 1000;
  }

  draw(context) {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    context.drawImage(
      this.image,
      this.spriteWidth * this.FrameX,
      this.spriteHeight * this.FrameY,
      this.spriteWidth,
      this.spriteHeight,
      this.x * this.flightX,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    // method up to frame 10
    this.flightX--;

    if (this.frame < this.maxFrameForward && this.flightX < 1000) this.frame++;
    else this.frame = this.minFrameForward;

    this.FrameX = this.frame % 5;

    // method after frame 10 to 21

    //   if (this.frame < this.maxFrame) this.frame++;
    //   else this.frame = this.minFrame;
    //   this.FrameX = this.frame % 5;
    //   this.FrameY = Math.floor(this.frame / 5);

    //   if (this.flightX < 1000) this.flightX++;
    //   else this.flightX--;
  }
}

function animate() {
  cta
}