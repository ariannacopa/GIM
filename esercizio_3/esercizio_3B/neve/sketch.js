let fiocchidineve = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 150; i++) {
    creaFiocco();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(28, 36, 69);

  for (let i = 0; i < fiocchidineve.length; i++) {
    scendere(fiocchidineve[i]);
    mostrare(fiocchidineve[i]);
  }
}

function creaFiocco() {
  fiocchidineve.push({
    x: random(width),
    y: random(-height, 0),
    diametro: random(2, 10),
    velocita: random(0.7, 1)
  });
}

function scendere(fiocco) {
  fiocco.y += fiocco.velocita;
  if (fiocco.y > height) {
    fiocco.y = random(-height, 0);
    fiocco.x = random(width);
  }
}

function mostrare(fiocco) {
  noStroke();
  fill(255);
  ellipse(fiocco.x, fiocco.y, fiocco.diametro, fiocco.diametro);
}
