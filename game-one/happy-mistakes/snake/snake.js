import Inputs from "./inputs.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1500
const CANVAS_HEIGHT = canvas.height = 1000

let foodId = document.getElementById("food");


class SnakeGame {
    constructor(){

    }

    
}

class Snake {

    constructor(){
        this.x = 0
        this.y = 0

        this.width = 60 
        this.height = 60

        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;

        this.moveX = 0;
        this.moveY = 0;

        this.collision =  false
    }

    draw(){
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();  
    }

    update(input, food){
        if (input.keys.indexOf("ArrowRight") > -1) {
            this.moveX = 20;
          } else if (input.keys.indexOf("ArrowLeft") > -1){
            this.moveX = -20;
          } else if (input.keys.indexOf("ArrowUp") > -1){
            this.moveY = -20;
          } else if (input.keys.indexOf("ArrowDown") > -1){
            this.moveY = 20;
          } else {
            this.moveX = 0
            this.moveY = 0
          }

      
        // snake movement
          // left to right 
          if (this.x > this.gameWidth){
            this.x = 0 - this.width;
          }
          if (this.x + this.width < 0){
            this.x = this.gameWidth;
          }
          //top to bottom
          if (this.y > this.gameHeight){
            this.y = 0 - this.height;
          }

          if (this.y + this.width < 0){
            this.y =  this.gameHeight;
          }

          
          this.x += this.moveX;
          this.y += this.moveY;

        // collisons
          if((this.x + this.width > food.xLocation ) && (this.x < food.xLocation + food.x) && (this.y + this.height > food.yLocation ) && (this.y < food.yLocation + food.y)){
            console.log('collision')
            this.width += 60 // add length to the snake
            // how to make it add the length just once?
            this.collision = true
            foodId.setAttribute('hidden', true)
          }
    }
}

class Food {

    constructor(){
        this.x = 50
        this.y = 50
        this.xLocation = 0
        this.yLocation = 0
        this.frame = 0
        this.staggerFrames = 360
    }

    draw(){
    // draw food
    ctx.fillStyle = "green";
    ctx.fillRect(this.xLocation, this.yLocation, this.x, this.y)
    }



    update(collision){

    const hidden = () => {
        foodId.setAttribute('hidden', false)
    }

    const handler = () =>{ // set position of xLocation + yLocation

        return(
            this.xLocation = Math.ceil(Math.random() * 1500 - this.x), // number between 0 - 5000
            this.yLocation = Math.ceil(Math.random() * (1000 - this.y) ) // number between 0 - 5000
        ) 
        }

        if( this.frame % this.staggerFrames === 0){ 
           handler()
        }

        if(collision){
            setTimeout(hidden(), 200)

            handler() 
        }
        this.frame++
    }
}


const food = new Food()
const snake = new Snake()
const input = new Inputs()



function animate(){
//each second refresh

ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        food.draw()
        food.update() 
        snake.draw()
        snake.update(input, food)
    requestAnimationFrame(animate);


}
animate()