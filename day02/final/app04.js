let r = 0;
let b = 255;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b);

  noStroke();
  fill(250, 118, 222);
  circle(mouseX, 200, 64);
}
