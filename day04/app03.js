let angle = 0;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
  background(0);
}

function draw() {
  //   rotate(angle);
  //   translate(mouseX, mouseY);
  //   rectMode(CENTER);
  //   rect(0, 0, 30, 30);
  //   angle += 0.1;

  //   translate(mouseX, mouseY);
  //   rotate(angle);
  //   rectMode(CENTER);
  //   rect(0, 0, 30, 30);
  //   angle += 0.1;

  translate(mouseX, mouseY);
  scale(mouseX / 60);
  rectMode(CENTER);
  rect(0, 0, 30, 30);
}

function mousePressed() {
  save("myImage.jpg");
}
