function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(170);

  translate(300, 200);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65); // Body

  noStroke();
  fill(204);
  ellipse(-17.5, -65, 35, 35); // Left eye dome
  ellipse(17.5, -65, 35, 35); // Right eye dome
  arc(0, -65, 70, 70, 0, PI); // Chin
  fill(0);
  ellipse(-14, -65, 8, 8); // Left eye
  ellipse(14, -65, 8, 8); // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
}
