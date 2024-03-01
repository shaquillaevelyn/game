// code that should be taken care of right away
window.onload = init;
  
function init(){
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')

    let playerState = 'idle'
    const dropdown = document.getElementById('animations');
    dropdown.addEventListener('change', function(e){
        playerState = e.target.value;
    })


    const CANVAS_WIDTH = canvas.width = 600
    const CANVAS_HEIGHT = canvas.height = 600
    const spriteWidth = 575
    const spritHeight = 525

    let gameFrame = 0 // goes up to be divided by stagger
    const stagger = 10 // the factor by which if allows statement to be met, frame moved forward in sprite sheet


    const spriteImage = new Image()
    spriteImage.src = './shadow_dog_sprite.png'

    let spriteAnimations = [];
    const animationStates = [
        {
            state: 'idle',
            frames: 7,
        },
        {
            state: 'jump-up',
            frames: 7,
        },
        {
            state: 'jump-down',
            frames: 7,
        },
        {
            state: 'run',
            frames: 9,
        },
        {
            state: 'dizzy',
            frames: 11,
        },
        {
            state: 'crouch',
            frames: 5,
        },
        {
            state: 'roll',
            frames: 7,
        },
        {
            state: 'bite',
            frames: 7,
        },
        {
            state: 'knock-out',
            frames: 12,
        },
        {
            state: 'get-hit',
            frames: 4,
        },
    ]

    animationStates.forEach((state, index) => {
    let frames = {
        location: [],
    }


    for (let i = 0; i < state.frames; i++){
        let positionX = i * spriteWidth
        let positionY = index * spritHeight
        frames.location.push({x: positionX, y: positionY})
        }
        // this line creates a key value pair 
        spriteAnimations[state.state] = frames
    })

    console.log(spriteAnimations)

    function animationLoop () {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        // round down the game frame number, divided by stagger, modulus 6
        let position = Math.floor(gameFrame / stagger) % spriteAnimations[playerState].location.length
        let frameX = position * spriteWidth
        let frameY = spriteAnimations[playerState].location[position].y;
        ctx.drawImage(spriteImage, frameX, frameY, spriteWidth, spritHeight, 0, 0, spriteWidth, spritHeight)

        gameFrame++
        requestAnimationFrame(animationLoop)
    }

    animationLoop()
}
