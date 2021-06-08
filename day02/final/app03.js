let x, y, r, g, b;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
  background(0);
  //   r = 255;
  //   g = 0;
  //   b = 255;
  //   x = 100;
  //   y = 100;
}

function draw() {
  r = random(255);
  g = 0;
  b = random(255);
  x = random(width);
  y = random(height);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
