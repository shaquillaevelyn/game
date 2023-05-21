const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 1000;
CANVAS_HEIGHT = canvas.height = 1000;

// random blocks

const numberOfBlocks = 6;
const blocksArray = [];


class Game{
  constructor() {
    this.enemies = [];
  }
}

class Enemy {
  constructor() {

    this.x = 1000;
    this.y = 500;
    this.width = 25;
    this.height = 25;
  }

  // can move each block in the same way
  move() {
    this.x--;
  }

  //can draw and animate all the blocks that this class can create
  draw() {
    ctx.fillRect(this.x, this.y, this.width * blockNumber, this.height);
  }

  // private method
  #addNewEnemy() {
    
  }
}

// break it down
// every 3 seconds setInterval()
// send out either one, two or three blocks together .
// // so multiply the length of the block by a random number between 1 and 3 -- equivalent of three blocks

// const block = new Enemy();

for (let i = 0; i < numberOfBlocks; i++) {
  blockNumber = Math.ceil(Math.random() * 3);
  blocksArray.push(new Enemy());

}



console.log(blocksArray);
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  blocksArray.forEach((block) => {
   block.move();
    block.draw();
}),

    
requestAnimationFrame(animate);

}

animate();
