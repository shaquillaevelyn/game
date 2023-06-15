window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 190;
  const framestagger = 1;
  const gameframe = 0;

  class Bird {
    // these properties
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

    //this method
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
    // this method
    update() {
      // method up to frame 10
      this.flightX--;

      if (this.frame < this.maxFrameForward && this.flightX < 1000)
        this.frame++;
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

  const bird = new Bird(canvas.width, canvas.height);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.draw(ctx);
    bird.update();

    if (gameframe % framestagger == 0) requestAnimationFrame(animate);
  }

  console.log("its animating");
  animate();

  const forward = bird.setAnimation(0, 10);
  const backward = bird.setAnimation(11, 21);
});
