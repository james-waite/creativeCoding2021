let posX = 0;
let speed = 5;

let greeting = "Hello World!";

// The setup function is called once at the start
function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");

  console.log(greeting);
}

// the draw function is called each 'frame' of the browser
function draw() {
  //    console.log("Hello!");
  background(50);

  strokeWeight(4);
  stroke(250);
  fill(0);
  ellipse(posX, 200, 50, 50);

  posX = posX + speed;

  if (posX > width || posX < 0) {
    speed = speed * -1;
  } else {
    // do that other thing
  }
}
