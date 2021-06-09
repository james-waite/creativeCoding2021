function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(0);
  noStroke();
  fill(255);

  // The control structure of a while/for loop is similar to an if/else statement
  //   DRY: Don't Repeat Yourself!
  let x = 0;
  //   circle(0, 200, 25);
  //   circle(50, 200, 25);
  //   circle(100, 200, 25);
  //   circle(150, 200, 25);
  //   circle(200, 200, 25);
  //   circle(250, 200, 25);

  //   circle(x, 200, 25);
  //   x = x + 50;
  //   ...
  // What is our exit condition?
  while (x <= width) {
    circle(x, 300, 25);
    x = x + 50;
  }
  // }

  for (let x = 0; x <= width; x = x + 50) {
    fill(255, 0, 200);
    circle(x, 100, 25);
  }
  //   x += 50
  //   x++
}
