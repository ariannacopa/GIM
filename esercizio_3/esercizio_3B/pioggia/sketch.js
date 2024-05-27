let ultimoFulmine = 0; // memorizzare il tempo dell'ultimo fulmine
let durataFulmine = 100; // durata fulmine in millisecondi
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let tempo = millis();
  let tempoDaultimoFulmine = tempo - ultimoFulmine;

  // far partire il secondo fulmine dopo 5 secondi
  if (tempoDaultimoFulmine > 5000) {
    background(232,232,233); // fulmine bianco sporco
    if (tempoDaultimoFulmine > 5000 + durataFulmine) {
      ultimoFulmine = tempo; // resettare il timer per far partire il secondo fulmine
    }
  } else {
    background(57, 60, 85, 33); // sfondo blu cielo
    let numLinee = 80; // aumentare il numero delle linee per un effetto più denso
    for (let i = 0; i < numLinee; i++) {
      let spessoreRettangolo = random(0.5, 2);
      let lunghezza = random(8, 60);
      let posX = random(width);
      let posY = random(-lunghezza, height);

      stroke(160, 197, 245);
      strokeWeight(spessoreRettangolo);
      line(posX, posY, posX, posY + lunghezza);
    }
  }
}
