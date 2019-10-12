var vw, vh;
let s = 10;

var n = 2;
var d = 29;

var nMin = 0;
var nMax = 20;
var nStep = 1;

var dMin = 0;
var dMax = 360;
var dStep = 0.1;

var dnoise = true;
var lightTheme = true;

var gui;

function setup() {
  vw = windowWidth;
  vh = windowHeight;
  createCanvas(vw, vh);
  angleMode(DEGREES);
  gui = createGui("Maurer Rose params:");
  gui.addGlobals("n", "d", "dnoise", "lightTheme");

  // noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (lightTheme) {
    background(255);
  } else {
    background(0);
  }
  // frameRate(1);
  vw = windowWidth;
  vh = windowHeight;
  translate(vw / 2, vh / 2);
  scale(s);
  if (lightTheme) {
    stroke(0);
  } else {
    stroke(255);
  }

  strokeWeight(1 / s);
  line(vw / 2, 0, -vw / 2, 0);
  line(0, vh / 2, 0, -vh / 2);
  if (lightTheme) {
    stroke(0, 0, 255, 255);
  } else {
    stroke(255, 255, 255, 158);
  }
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
  if (lightTheme) {
    stroke(255, 0, 0, 255);
  } else {
    stroke(255, 0, 255, 255);
  }
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
  if (dnoise) {
    d = noise(d) + d;
    d = d > 360 ? 0 : d;
  }
}
