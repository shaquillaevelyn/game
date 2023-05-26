const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = spriteWidth = 190;
CANVAS_HEIGHT = canvas.height = spriteHeight = 190;





const FlyingBird = new Image();
FlyingBird.src = 'bird-sprite.png';

    let x = 0
    let y = 0
    let spriteFrame = 0
    // let speed

// what does canvas animate do?
// animates cycles through frames

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


 
        if ((x % 5 === 0) && (x < 23)) {
            if ((x > 23) && (y < 4)) {
                y++
            }
            else x = 0, y = 0
        }

   

    xFrame = (spriteWidth * x)
    yFrame = (spriteHeight * y)
  
    ctx.drawImage(FlyingBird, xFrame, yFrame, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    
    x++;

    requestAnimationFrame(animate) 
}

animate()

