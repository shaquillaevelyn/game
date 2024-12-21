import Game from './game.js'
import { GAME } from './constants.js'


window.addEventListener('load', () => {
    const canvas = document.getElementById('game') // identifies the area 
    const ctx = canvas.getContext('2d'); // for which you want to use the html canvas methods on.

    canvas.width = GAME.width
    canvas.height = GAME.height

    const game = new Game(canvas)


    let lastTime = 0
    // whatever is called in here will be updated every 0.1 seconds
    // my mac is 120 frames per second
    // request animation frame will call 120 times a second

    // frame rate. 1s = 1000ms
    function animate(timestamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const deltaTime = timestamp - lastTime
        lastTime = timestamp
        game.initiate(ctx, deltaTime)
        // requestAnimationFrame(animate)

    }

    setInterval(animate, 100)
    // requestAnimationFrame(animate)

})

