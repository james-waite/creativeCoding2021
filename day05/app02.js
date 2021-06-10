let bubble = {
  x: 300,
  y: 200,
};

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(0);
  display();
  move();
}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  circle(bubble.x, bubble.y, 24);
}

function move() {
  bubble.x = bubble.x + random(-5, 5);
  bubble.y = bubble.y + random(-5, 5);
}
