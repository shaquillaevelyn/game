export class Jumper {
  constructor(game) {
    this.game = game;
    this.x = 50;
    this.y = 250;
    this.radius = 20;
    this.vy = 0;
    this.weight = 1;
  }

  update(input) {
    //vertial jump

    // if click is true and player is on the ground, lower vy by 10
    if (input === true && this.onGround()) this.vy -= 10;
    console.log(this.vy);

    // add vy value to y value with each animation frame
    this.y += this.vy;

    // on ground is false, add this.weight to vy until its on the ground
    if (!this.onGround()) this.vy += this.weight;
    // else, vy is zero
    else this.vy = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    // ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    // ctx.closePath()
  }

  onGround() {
    return this.y >= this.game.gameHeight - this.radius * 2;
  }
}

// Enemy blocks
// Parallax background
// Random birds
// Animation loop

// const jumper = new Jumper();
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

//   jumper.update()
//   jumper.draw(ctx)

//   requestAnimationFrame(animate)
// }
// animate();
