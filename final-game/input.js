export class Inputs {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.key === " " && this.keys.indexOf(e.key) === -1) {
        this.keys.push(`spacebar`);
      }
      if (KeyboardEvent.repeat ? console.log("repeater") : null)
        console.log(this.keys);
    });

    window.addEventListener("keyup", (e) => {
      // indexOf prints  index of first instance of  what is in the brackets
    });
  }
}
