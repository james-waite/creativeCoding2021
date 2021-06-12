// encapsulation
// a class is like a template or a cookie cutter
// an object is the thing itself, commonly called an "instance"

let bubble1;
let bubble2;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
  bubble1 = new Bubble(300, 200);
  bubble2 = new Bubble(350, 250);
  // console.log(bubble.x, bubble.y);
  // type "bubble" into the console to show the object!
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.display();
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, 24);
  }
}
