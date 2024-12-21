// imports will only work if i have a server running.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width =  window.innerWidth
canvas.height = window.innerHeight
// console.log(window.innerWidth)

window.addEventListener(('resize'), e => { 
  console.log(window.innerWidth, window.innerHeight, window.outerWidth, window.outerHeight)

  })


class Game {
  constructor(canvas){
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
  
    // on creation of this object, all the methods inside the constructor are created
    window.addEventListener(('resize'), e => { 
      console.log(window.innerWidth)
      this.resize(window.innerWidth, window.innerHeight)
      })
  }
  
    resize(width, height){
      this.canvas.width = width;
      this.canvas.height = height
      this.width = width
      this.height = height
    }
  }


const game = new Game()


  function animate(){

    requestAnimationFrame()
    game.resize(canvas.width, canvas.height)
  }

  animate()


