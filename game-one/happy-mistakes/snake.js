const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

CANVAS_WIDTH = canvas.width = 1500
CANVAS_HEIGHT = canvas.height = 1000

class SnakeGame {
    constructor(){

    }

    
}

class Snake {
    growFactor = 0 

    constructor(){
        this.x = 60
        this.y = 90
        this.snakeLength = this.x * growFactor
    }


}

class Food {

    constructor(){
        this.x = 50
        this.y = 50
        this.xLocation = 50
        this.yLocation = 20
        this.frame = 0
        this.staggerFrames = 360
    }

    draw(){
    // draw food
    ctx.fillRect(this.xLocation, this.yLocation, this.x, this.y)
        }



    update(){
    const handler = () =>{ // set position of xLocation + yLocation

        return(
            this.xLocation = Math.ceil(Math.random() * 1500 - this.x), // number between 0 - 5000
            this.yLocation = Math.ceil(Math.random() * (1000 - this.y) ) // number between 0 - 5000
        )
        }
        if( this.frame % this.staggerFrames === 0){ 
           handler()
           console.log(`interval run`)
        }
            // run handler every 5 seconds


        this.frame++
    }
}


const food = new Food()



function animate(){
//each second refresh

ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        food.draw()
        food.update() 
    console.log(food.xLocation, food.yLocation)
    requestAnimationFrame(animate);


}
animate()