export class Jumper {
  constructor(game) {
    this.game = game;
    this.x = 50;
    this.y = 50;
    this.vy = 0;
    this.radius = 20;
  }


  draw(ctx) {

    ctx.fillStyle = 'red'
    // ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill()
    // ctx.closePath()
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