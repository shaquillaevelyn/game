import  Player  from './player.js'
import { GAME } from './constants.js'
import { Enemy } from './enemies.js'

export default class Game{
    constructor(canvas){

        this.canvas = canvas;
        this.width = GAME.width;
        this.height = GAME.height;

        this.player = new Player(this)

        this.enemyNumber = 10
        this.enemyPool = []
        this.createEnemyPool()

        console.log(this.enemyPool)
        // in the array of enemies
        // if available, draw
        // if available and eaten
            // set enemy to new position
        // if available and time runs out, 
            // set enemy to new position

        this.enemyPool[0].start()
        this.enemyPool[1].start()
        this.enemyPool[2].start()
        this.enemyPool[3].start()

        this.enemyTimer = 0
        this.enemyInterval = 1000



    }



    // creates array of enemies to use.
    createEnemyPool(){
        for(let i = 0; i < this.enemyNumber; i++){
            this.enemyPool.push(new Enemy(this))
        }
    }

    launchNewEnemy(){
        const cheese = Math.floor(Math.random() * this.enemyNumber)
        console.log(cheese)
        if (this.enemyPool[cheese].isAvailable) return this.enemyPool[cheese].start()

    }


    // generic collision method
    // right now this only works with exact overlap
    // i want it so that a side only needs to touch
    collision(a, b){
        // if (a.x === b.x && a.y === b.y) return true

        // player right touch enemy left
        if (a.x === b.x && a.y === b.y) return true

    }


    initiate(context, deltaTime){

        for (let i=0; i < this.enemyPool.length; i++){
            
            if (!this.enemyPool[i].isAvailable){
                this.enemyPool[i].draw(context)
                this.enemyPool[i].update()

            }
        }

        this.player.draw(context)
        this.player.update()


        if (this.enemyTimer < this.enemyInterval){
            this.enemyTimer += deltaTime
        } else {
            this.enemyTimer = 0
        }
    }
}