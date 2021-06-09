let offset = 0;
function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(0);

  //   for (let x = 0; x <= width; x += 50) {
  //     fill(random(255), 0, random(255));
  //     circle(x + offset, 200, 25);
  //   }
  //   offset++;

  for (let x = 0; x <= innerWidth; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      fill(random(255), 0, random(255));
      circle(x, y, 25);
    }
  }

  //   show the loops separate, as well
}
