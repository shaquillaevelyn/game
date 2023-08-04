const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 1000;
CANVAS_HEIGHT = canvas.height = 1000;

class Game {
  constructor() {
    this.enemy = [];
    this.#addEnemy();
    this.enemyInterval = 100;
    this.enemyTimer = 0
    console.log(this.enemy);
  }

  update() {
    if (this.enemyTimer > this.enemyInterval) {
      this.#addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer++
    }

    this.enemy.forEach((obj) => obj.update());
  }

  //all ene
  draw() {
    this.enemy.forEach((obj) => obj.draw());
  }

  // private method
  #addEnemy() {
    this.enemy.push(new Enemy());
  }
}

// class Bird { }

// creates new emnemy anytime I call new Enemy
class Enemy {
  constructor() {
    this.x = 1000;
    this.y = 500;
    this.width = 25;
    this.height = 25;
  }

  draw() {

    let blockNumber = Math.ceil(Math.random() * 3);
    this.width = this.width * blockNumber

    if (this.width > 75) {
      this.width = 25
    }

    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x--;
  }
}

const game = new Game();
let lastTimeStamp = 1;
function animate(timeStamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const difference = timeStamp - lastTimeStamp; // this gives us the refresh rate. about 8ms

  lastTimeStamp = timeStamp;
  //   console.log(difference);
  game.draw();
  game.update();
  // some code
  requestAnimationFrame(animate);
  // adjust next frame depening on frame rate.
  //after threshold- we show next frame
}
animate();
