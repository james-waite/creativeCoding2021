let km = milesToKm(26.2);
console.log(km);
let km2 = milesToKm(100);
console.log(km2);

function milesToKm(miles) {
  let km = miles * 1.6;
  return km;
}

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(0);
}
