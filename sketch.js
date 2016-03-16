var coordinates = [];
var colors = [];
var sizes = [];
var currentColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  for (var i = 0; i < coordinates.length; i++) {
    fill(colors[i]);
    ellipse(coordinates[i][0], coordinates[i][1], sizes[i], sizes[i]);
  }

  if (coordinates.length > 1000) {
    coordinates.splice(0, 1);
    sizes.splice(0, 1);
    colors.splice(0, 1);
  }
}

function mousePressed() {
  currentColor = color(random(255), random(255), random(255));
  centerDot();
}

function centerDot() {
  currentColor = color(red(currentColor), green(currentColor), blue(currentColor));
  colors.push(currentColor);
  sizes.push(random(10, 15));
  coordinates.push([mouseX, mouseY]);
}

function mouseDragged() {
  centerDot();
  for (var i = 0; i < 10; i++) {
    currentColor = color(red(currentColor), green(currentColor), blue(currentColor), random(100, 240)); // = random(10, 100);
    colors.push(currentColor);
    var s = random(1, 5);
    sizes.push(s);
    var x = random(mouseX - 15, mouseX + 15);
    var y = random(mouseY - 15, mouseY + 15);
    coordinates.push([x, y]);
  }
}