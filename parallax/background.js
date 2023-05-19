const canvas = document.getElementById("cheese");
const ctx = canvas.getContext("2d");
const canvasWidth = 1000;
const canvasHeight = 250;

let gameSpeed = 10;

const background1 = new Image();
background1.src = "parallax/background/1.png";

const background2 = new Image();
background2.src = "parallax/background/2.png";

const background3 = new Image();
background3.src = "parallax/background/3.png";

class BackgroundLayer {
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

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x1, this.y, this.width, this.height);
  }
}

const layer1 = new BackgroundLayer(background1, 0.01);
const layer2 = new BackgroundLayer(background2, 0.25);
const layer3 = new BackgroundLayer(background3, 0.5);

const backgroundObjects = [layer1, layer2, layer3];

console.log(this.x);

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  //   layer1.draw();
  //   layer1.update();

  backgroundObjects.forEach((obj) => {
    obj.update();
    obj.draw();
  });

  requestAnimationFrame(animate);
}
animate();
