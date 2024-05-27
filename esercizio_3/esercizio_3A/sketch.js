let diametro1 = 300;
let diametro2 = 500;
let diametro3 = 700;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let centerX = width / 2;
  let centerY = height / 2;
  let seconds = second();
  let minutes = minute();
  let hours = hour();

  noFill();
  strokeWeight(5);
  stroke(255);
  ellipse(centerX, centerY, diametro1);
  ellipse(centerX, centerY, diametro2);
  ellipse(centerX, centerY, diametro3);

  let startAngleSeconds = map(0, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
  let endAngleSeconds = map(seconds, 0, 60, -HALF_PI, TWO_PI - HALF_PI);

  let startAngleMinutes = map(0, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
  let endAngleMinutes = map(minutes, 0, 60, -HALF_PI, TWO_PI - HALF_PI);

  let startAngleHours = map(0, 0, 24, -HALF_PI, TWO_PI - HALF_PI);
  let endAngleHours = map(hours % 24, 0, 24, -HALF_PI, TWO_PI - HALF_PI);

  let rSeconds = map(seconds, 0, 60, 204, 79);
  let gSeconds = map(seconds, 0, 60, 189, 53);
  let bSeconds = map(seconds, 0, 60, 240, 240);

  let rMinutes = map(minutes, 0, 60, 189, 62);
  let gMinutes = map(minutes, 0, 60, 249, 240);
  let bMinutes = map(minutes, 0, 60, 195, 53);

  let rHours = map(hours % 24, 0, 24, 240, 240);
  let gHours = map(hours % 24, 0, 24, 215, 131);
  let bHours = map(hours % 24, 0, 24, 190, 54);

  strokeWeight(70);

  stroke(rSeconds, gSeconds, bSeconds);
  arc(centerX, centerY, diametro3, diametro3, startAngleSeconds, endAngleSeconds);

  stroke(rMinutes, gMinutes, bMinutes);
  arc(centerX, centerY, diametro2, diametro2, startAngleMinutes, endAngleMinutes);

  stroke(rHours, gHours, bHours);
  arc(centerX, centerY, diametro1, diametro1, startAngleHours, endAngleHours);

  let percentualeMinuti = map(minutes, 0, 60, 0, 100);

  textAlign(CENTER, CENTER);
  fill(rMinutes, gMinutes, bMinutes);
  noStroke();
  textSize(40);
  text(nf(percentualeMinuti, 2, 0) + "%", centerX, centerY);

  let percentualeSecondi = map(seconds, 0, 60, 0, 100);

  textAlign(CENTER, CENTER);
  fill(rSeconds, gSeconds, bSeconds);
  noStroke();
  textSize(40);
  text(nf(percentualeSecondi, 2, 0) + "%", centerX, centerY + 50); 

  let percentualeOre = map(hours % 24, 0, 24, 0, 100);

  textAlign(CENTER, CENTER);
  fill(rHours, gHours, bHours);
  noStroke();
  textSize(40);
  text(nf(percentualeOre, 2, 0) + "%", centerX, centerY - 50); 
}
