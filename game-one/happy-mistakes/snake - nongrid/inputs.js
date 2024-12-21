export default class Inputs {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', (e) => {
            if (e.key === "ArrowUp" && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
              }
              if (e.key === "ArrowLeft" && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
              }
              if (e.key === "ArrowRight" && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
              }
              if (e.key === "ArrowDown" && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
              }
        
              window.addEventListener("keyup", (e) => {
                this.keys = [];
              });
        })
    }
}