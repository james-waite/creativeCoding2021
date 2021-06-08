let squareSize, strokeWidth;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
  background(100);
}

function draw() {
  strokeWidth = random(4, 20);
  squareSize = random(5, 200);

  strokeWeight(strokeWidth);
  stroke(0, 0, 255, 10);
  fill(0, 255, 0, 10);
  // ellipse(mouseX, mouseY, squareSize);
  ellipse(mouseX, mouseY, squareSize);
}

function mousePressed() {
  background(100);
}
