let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
};

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("myContainer");
}

function draw() {
  background(0);

  // displays the circle on the screen
  stroke(255);
  strokeWeight(4);
  noFill();
  circle(ball.x, ball.y, 24);

  // handles the 'bounce' by inverting the speed
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }

  // moves the ball
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
