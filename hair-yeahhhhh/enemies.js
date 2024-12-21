import { CELL, COLUMNS, ENEMY, ROWS } from './constants.js'

// better to create a pool of enemy objects and to pull from the pool
// instead of generating new ones every time
// to stop the garbage xcollection process that can interfere with gameplay

// class to make inital pool of 20 projectiles


export class Enemy{ // enemy is a projectile pool member
    constructor(game){
        this.game = game
        this.position = { 
            x: Math.ceil(Math.random() * COLUMNS),
            y: Math.ceil(Math.random() * ROWS)
            // x: 0,
            // y: 1
        } // where it lands on the grid
        this.isAvailable = true // is it inside the array buffer ready to use?
    }

    start(){
        this.isAvailable = false
        this.position.x = Math.ceil(Math.random() * COLUMNS),
        this.position.y = Math.ceil(Math.random() * ROWS)
    }

    reset(){
        this.isAvailable = true
    }

    draw(context){
        if(!this.isAvailable){
            context.fillStyle='green';
            context.fillRect(this.position.x * CELL.width, this.position.y * CELL.height, ENEMY.width, ENEMY.height);    
    }}


    update(){
        if (this.game.collision(this.position, this.game.player.position)){
            console.log(this.game.enemyPool)
            this.reset()
            this.game.launchNewEnemy()
        
        }
    }

}
