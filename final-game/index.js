const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 250);
let enemyArray = [];
let collision = false;

let gameSpeed = 3;

const background1 = new Image();
background1.src = "/game-one/final-game/background/1.png";

const background2 = new Image();
background2.src = "/game-one/final-game/background/2.png";

const background3 = new Image();
background3.src = "/game-one/final-game/background/3.png";

class Inputs {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.key === " " && this.keys.indexOf(e.key) === -1) {
        this.keys.push("spacebar");
      }
      if (e.key === "ArrowLeft" && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
      if (e.key === "ArrowRight" && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }

      window.addEventListener("keyup", (e) => {
        this.keys = [];
      });
    });
  }
}

class Jumper {
  constructor(CANVAS_WIDTH, CANVAS_HEIGHT) {
    this.gameWidth = CANVAS_WIDTH;
    this.gameHeight = CANVAS_HEIGHT;
    this.x = 0;
    this.y = this.gameHeight - 20;
    this.height = 20;
    this.width = 20;

    this.moveX = 0;
    this.moveY = 0;

    this.weight = 0.2;
    this.speed = 0.5;
    this.collision = false;
  }

  draw(context) {
    context.fillStyle = "orange";
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fill();
  }

  update(input, enemyArray) {
    // collison
    // this.x - this.width > enemy.x + enemy.width &&
    //   this.y + this.height < enemy.y;
    //  && this.y + this.height < enemy.y)
    enemyArray.forEach((enemy) => {
      let yCollide = this.y -

      if (this.x + this.width > enemy.x) {
        collision = true;
        alert("game over!");
      }
      console.log(this.y, this.gameHeight - enemy.height);
    });

    if (input.keys.indexOf("ArrowLeft") > -1) {
      this.moveX = -5;
    } else if (input.keys.indexOf("ArrowRight") > -1) {
      this.moveX = 5;
    } else if (input.keys.indexOf("spacebar") > -1 && this.floor()) {
      this.moveY = -10;
    } else {
      this.moveX = 0;
    }

    // left + right movements
    this.x += this.moveX;
    // left boundary

    if (this.x < 0) this.moveX = 0;
    else {
      this.moveX;
    }

    // right boundary
    if (this.x > this.gameWidth - this.width)
      this.x = this.gameWidth - this.weight;

    // jumper
    this.y += this.moveY;
    if (!this.floor()) {
      this.moveY += this.weight;
    } else {
      this.moveY = 0;
    }

    if (this.y > this.gameHeight - this.height) {
      this.y = this.gameHeight - this.height;
    }
  }

  floor() {
    if (this.y === 230) {
      return true;
    } else {
      return false;
    } //
  }
}

class Background {
  constructor(image, speedMod) {
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 250;
    this.x1 = this.width;
    this.image = image;
    this.speedMod = speedMod;
    this.speed = gameSpeed * this.speedMod;
  }

  update() {
    this.speed = gameSpeed * this.speedMod;

    if (this.x <= -this.width) {
      this.x = this.width + this.x1 - this.speed;
    }
    if (this.x1 <= -this.width) {
      this.x1 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x1 = Math.floor(this.x1 - this.speed);
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x1, this.y, this.width, this.height);
  }
}

class Enemy {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = 1000;
    this.y = 250;
    this.blockNumberX = Math.ceil(Math.random() * 4);
    this.blocknumberY = Math.floor(Math.random() * -3);
    this.width = 30 * this.blockNumberX;
    this.height = 30 * this.blocknumberY;
    this.delete = false;
  }

  draw(context) {
    context.strokeStyle = "white";
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fill();
  }

  update() {
    this.x--;
    if (this.x < 0 - this.width * this.blockNumber) this.delete = true;
  }
}

function handleEnemy(deltaTime) {
  if (enemyTimer > enemyInterval) {
    enemyArray.push(new Enemy());
    enemyTimer = 0;
  } else {
    enemyTimer += deltaTime;
  }

  if (enemyArray.length > 5) {
    enemyArray.splice(0, 1);
  }

  enemyArray = enemyArray.filter((enemy) => (enemy.delete = true));

  enemyArray.forEach((enemy) => {
    enemy.draw(ctx);
    enemy.update();
  });

  // console.log(enemyArray);
}

// function collisions() {
//   // const collisionCheck = setInterval(() => {
//   //   let jumperLeft = getComputedStyle(Jumper).getPropertyValue("left")
//   //   let enemyRight = getComputedStyle(Enemy).getPropertyValue("right")
//   // }, 1)
//   // if (Jumper.x)
// }

const input = new Inputs();
const jumper = new Jumper(CANVAS_WIDTH, CANVAS_HEIGHT);

const layer1 = new Background(background1, 0.01);
const layer2 = new Background(background2, 0.25);
const layer3 = new Background(background3, 0.5);

const backgroundObjects = [layer1, layer2, layer3];

let lastTime = 0;
let enemyTimer = 0;
let enemyInterval = 2000;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  backgroundObjects.forEach((background) => {
    background.draw(ctx);
    background.update();
  });

  jumper.draw(ctx);
  jumper.update(input, enemyArray);
  handleEnemy(deltaTime);

  if (!collision) requestAnimationFrame(animate);
}
animate(0);
