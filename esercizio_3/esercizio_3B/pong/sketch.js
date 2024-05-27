let posizioneX, posizioneY; 
let velX, velY; 
let rectWidth, rectHeight; 
let trail = []; // array vuoto: trail (traccia del rettangolo), che conterrà le tracce visive delle posizioni precedenti del rettangolo

function setup() {
  createCanvas(windowWidth, windowHeight);

  posizioneX = width / 2;
  posizioneY = height / 2;

  velX = random(-10, 10);
  velY = random(-10, 10);

  rectWidth = 50;
  rectHeight = 50;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key == 's') {
    save('pingpong.png');
  }
}

function draw() {
  background(220);

  // aggiornamento della posizione del rettangolo aggiungendo le variabili posizione con le variabili velocità, in modo che il rettangolo si muova sugli assi x e y
  posizioneX += velX;
  posizioneY += velY;

  // controllo della posizione del rettangolo quando raggiunge il bordo in modo da evitare che esca dai bordi
  if (posizioneX >= width - rectWidth) {
    posizioneX = width - rectWidth;
    velX = -velX;
    updateRect(); // per cambiare la dimensione del rettangolo per non farlo uscire dai bordi
  }
  if (posizioneX <= 0) {
    posizioneX = 0;
    velX = -velX;
    updateRect();
  }
  if (posizioneY >= height - rectHeight) {
    posizioneY = height - rectHeight;
    velY = -velY;
    updateRect();
  }
  if (posizioneY <= 0) {
    posizioneY = 0;
    velY = -velY;
    updateRect();
  }

  // inizio del ciclo for per disegnare la traccia che viene lasciata dal rettangolo in base alla sua posizione
    for (let z = 0; z < trail.length; z++) { // il ciclo attraversa tutti gli elementi dell'array. viene creata la variabile z, che inizia a 0 ed aumenterà di 1 ad ogni iterazione finchè non raggiunge la lunghezza dell'array
    let alpha = map(z, 0, trail.length, 255, 0); // creazione del canale alpha per opacità, mappando z (posizione del rettangolo) da un'intervallo da 0 alla lunghezza della traccia e da 255 a 0, in modo che man mano l'opacità diminuirà
    fill(trail[z].r, trail[z].g, trail[z].b, alpha);// riempimento specificato utilizzando i valori RGB dalla posizione corrispondente nella traccia e l'opacità calcolata
    noStroke();
    rect(trail[z].x, trail[z].y, trail[z].rectWidth, trail[z].rectHeight); // rettangolo disegnato alla posizione della traccia: coordinate della posizione e larghezza e altezza
  }

  // creazione del rettangolo
  fill(frameCount % 255, frameCount % 255, frameCount % 255);
  rect(posizioneX, posizioneY, rectWidth, rectHeight);

  // aggiunta della posizione del rettangolo alla traccia
  trail.push({
    x: posizioneX,
    y: posizioneY,
    r: random(255),
    g: random(255),
    b: random(255),
    rectWidth: random(20, 80),
    rectHeight: random(20, 80)
  });

}
//generazione di dimensioni casuali del rettangolo nel caso essi tocchi il bordo della finestra
function updateRect() {
  rectWidth = random(20, 80);
  rectHeight = random(20, 80);
}
