let r = 255;
let g = 255;
let b = 255;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseY, 0, 400, 255, 0);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, g, b);

  noStroke();
  fill(250, 118, 222);
  circle(mouseX, mouseY, 64);
}
