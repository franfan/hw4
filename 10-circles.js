function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var x = random(width);
  var y = random(height);

  stroke(x, y, 100);
  point(x, y);
    for (var i = 100; i < 400; i += 100) {
    ellipse(i, 100, 50);
    }
}
