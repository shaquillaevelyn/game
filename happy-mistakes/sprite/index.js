const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


CANVAS_WIDTH = canvas.width = 190;
CANVAS_HEIGHT = canvas.height = 190;

const spriteWidth = 190;
const spriteHeight = 190;




const FlyingBird = new Image();
FlyingBird.src = 'bird-sprite.png';


    let x = 0
    let y = 0 
    let xFrame = x * spriteWidth
    let yFrame = y * spriteHeight

    // what does canvas animate do?
    // animates cycles through frames

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.drawImage(FlyingBird, x * spriteWidth, y * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    
    if (x < 23) {
           x++ 
    } else {
        x = 0
    }
    
    if (x % 5 === 0) {
        y++
    }

    if (y > 5) {
      y = 0
    } 

    // console.log(` x: ${x}, y:${y}`)

    requestAnimationFrame(animate) 
}

animate()

