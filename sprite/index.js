const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = spriteWidth = 190;
CANVAS_HEIGHT = canvas.height = spriteHeight = 190;

const FlyingBird = new Image();
FlyingBird.src = 'bird-sprite.png';

// what does canvas animate do?
// animates cycles through frames

function animate() {
                
    
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


    let x = 0
    let y = 0

    for (x = 0; x < 23; x++){
        if (x % 5 == 0) {
            y++
        }
        if (y == 5) {
            y = 0
        }
        console.log(`x: ${x}, y: ${y}`)

    }
  
        ctx.drawImage(FlyingBird, spriteWidth * x, spriteHeight * y, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

        requestAnimationFrame(animate) 

}

animate()

