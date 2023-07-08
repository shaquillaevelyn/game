const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1000);
const CANVAS_HEIGHT = (canvas.height = 250);

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

      // window.addEventListener("keyup", () => {
      //   if (
      //     (e.key === "spacebar" ||
      //       e.key === "ArrowLeft" ||
      //       e.key === "ArrowRight") &&
      //     this.keys.indexOf(e.key) > -1
      //   ) {
      //     this.keys.splice(this.keys.indexOf(e.key), 1);
      //   }

      //   console.log(this.keys);
      // });

      window.addEventListener("keyup", (e) => {
        this.keys = [];
      });

      console.log(this.keys);
    });
  }
}

class Jumper {
  constructor(CANVAS_WIDTH, CANVAS_HEIGHT) {
    this.gameWidth = CANVAS_WIDTH;
    this.gameHeight = CANVAS_HEIGHT;
    this.x = 0;
    this.y = this.gameHeight - 20;
    this.radius = 20;

    this.moveX = 0;
    this.moveY = 0;

    this.weight = 0.2;
    this.speed = 0.5;
  }

  draw(context) {
    context.fillStyle = "orange";
    context.fillRect(this.x, this.y, this.radius, this.radius);
    context.fill();
  }

  update(input) {
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
    if (this.x > this.gameWidth - this.radius)
      this.x = this.gameWidth - this.radius;

    // jumper
    this.y += this.moveY;
    if (!this.floor()) {
      this.moveY += this.weight;
    } else {
      this.moveY = 0;
    }

    if (this.y > this.gameHeight - this.radius) {
      this.y = this.gameHeight - this.radius;
    }

    console.log(this.x, this.moveX, this.y, this.moveY);
  }

  floor() {
    if (this.y === 230) {
      return true;
    } else {
      return false;
    } //
  }
}

let gameSpeed = 5;

const background1 = new Image();
background1.src = "/game-one/final-game/background/1.png";

const background2 = new Image();
background2.src = "/game-one/final-game/background/2.png";

const background3 = new Image();
background3.src = "/game-one/final-game/background/3.png";

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

const input = new Inputs();
const jumper = new Jumper(CANVAS_WIDTH, CANVAS_HEIGHT);

const layer1 = new Background(background1, 0.01);
const layer2 = new Background(background2, 0.25);
const layer3 = new Background(background3, 0.5);

const backgroundObjects = [layer1, layer2, layer3];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  backgroundObjects.map((obj) => {
    obj.update();
    obj.draw(ctx);
  });

  jumper.draw(ctx);
  jumper.update(input);

  requestAnimationFrame(animate);
}
animate();
