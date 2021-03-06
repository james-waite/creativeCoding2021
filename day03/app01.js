let on = false;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(0);
  if (on) {
    background(0, 255, 0);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(255, 0, 200);
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on;
    console.log(on);
  }
}
