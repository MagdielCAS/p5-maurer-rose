let vw, vh;
let n = 2;
let d = 29;
let s = 10;

function setup() {
  vw = windowWidth;
  vh = windowHeight;
  createCanvas(vw, vh);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  frameRate(1);
  vw = windowWidth;
  vh = windowHeight;
  translate(vw / 2, vh / 2);
  scale(s);

  stroke(0);
  strokeWeight(1 / s);
  line(vw / 2, 0, -vw / 2, 0);
  line(0, vh / 2, 0, -vh / 2);

  stroke(0, 0, 255, 255);
  noFill();
  beginShape();
  strokeWeight(1 / s);
  for (let i = 0; i <= 360; i++) {
    let k = i * d;
    let r = (sin(n * k) * min(vh / 2, vw / 2)) / s;
    let a = k;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
  noFill();
  stroke(255, 0, 0, 255);
  strokeWeight(3 / s);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = (sin(n * k) * min(vh / 2, vw / 2)) / s;
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
}
