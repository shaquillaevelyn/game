import { CELL, COLUMNS, GAME, ROWS } from './constants.js'

export default class Player{
    constructor(game){
        // we want to access the methods itn the enemy class for enemy
        this.game = game
        this.width = CELL.width
        this.height = CELL.height
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0 
        }

    }



    draw(context){
        context.fillStyle = 'orange';
        context.fillRect(this.position.x * CELL.width, this.position.y * CELL.height, CELL.width, CELL.height);   
        // context.moveTo(this.position.x , this.position.y);
        // context.lineTo(CELL.width, CELL.height,) 
        // context.stroke()
    }

    update(){

    // left boundary || top boundary || right boundary || bottom boundary
    if (this.position.x < 0) this.position.x = 0
    if (this.position.y < 0) this.position.y = 0
    if  (this.position.x * CELL.width >  GAME.width - CELL.width) this.position.x = ROWS - 1
    if  (this.position.y * CELL.height >  GAME.height - CELL.height) this.position.y = COLUMNS - 1

    // Movement
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    // keyboard movement
    addEventListener('keydown', (event) => {

    switch(event.key) {
        case 'ArrowUp':
            this.velocity.x = 0
            this.velocity.y = -1
        break;
        case 'ArrowDown':
            this.velocity.x = 0
            this.velocity.y =1

        break;
        case 'ArrowLeft':
            this.velocity.x = -1
            this.velocity.y = 0
        break;
        case 'ArrowRight':
            this.velocity.x =1
            this.velocity.y = 0
        break;  
    }})

    addEventListener('keyup', () => {
        this.velocity.x = 0
        this.velocity.y = 0
    }) 




}





}



