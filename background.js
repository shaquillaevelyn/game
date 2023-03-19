const canvas = document.getElementById('cheese');
const ctx = canvas.getContext('2d')
const canvasWidth = 1000
const canvasHeight = 250

let speed = 10

const background1 = new Image()
background1.src = 'background/2.png'
background1.width = "100%"

const background2 = new Image()
background2.src = 'background/3.png'

const background3 = new Image()
background3.src = 'background/4.png'

const background4 = new Image()
background4.src = 'background/5.png'

const pattern = ctx.createPattern(background2, 'repeat');

let x = 0
let x1 = 576

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    ctx.drawImage(background2, x, 0);
    x --;
    requestAnimationFrame(animate)
};
animate()