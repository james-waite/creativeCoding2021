let bubbles = [];

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
}

function mousePressed() {
    let r = random(10, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log(bubbles);
}

function draw() {
    background(50);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
        let overlapping = false;
        for (let other of bubbles) {
            if (bubbles[i] !== other && bubbles[i].intersects(other)) {
                overlapping = true;
            }
        }
        if (overlapping) {
            bubbles[i].changeColor(255);
        } else {
            bubbles[i].changeColor(0);
        }
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.r + other.r;
    }

    changeColor(bright) {
        this.brightness = bright;
    }
    
    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.r;
    }
    
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
//        noFill();
//        noStroke();
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}