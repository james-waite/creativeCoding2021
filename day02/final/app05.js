let r = 255;
let g = 255;
let b = 255;
let r1 = 255;
let posX = 50;
let posY = 200;
let speedX = 5;
let speedY = 5;
let diameter = 40;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  r = map(posX, 0, width, 0, 255);
  b = map(posX, 0, width, 255, 0);
  g = map(posY, 0, height, 0, 255);
  r1 = map(posY, 0, height, 255, 0);

  background(r, 0, b);

  noStroke();

  fill(r1, g, 0);
  ellipse(posX, height / 2, diameter, diameter * 10);

  fill(255);
  ellipse(posX, posY, diameter / 4);

  posX += speedX;
  posY += speedY;

  if (posX >= width - diameter / 2 || posX <= 0 + diameter / 2) {
    speedX *= -1;
  }

  if (posY >= height - diameter / 2 || posY <= 0 + diameter / 2) {
    speedY *= -1;
  }
}
