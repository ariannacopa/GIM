function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(220)

	let s = second() // inserimento dello 0 prima dei numeri quando ricomincia il loop
	if (s < 10){
		s = "0" + s
	}

	// alternativa s = s:

	let m = minute()
	if (m < 10){
		m = "0" + m
	}

	let h = hour()
	if (h < 10){
		h = "0" + h
	}

	const txt = h + ":" +  m+ ":" + s //ritorna un valore che posso assegnare alla variabile x

	noStroke()
	fill(0)
	rect(0, height/3 * 0, second() /60 * width, height/3)
	rect(0, height/3 * 1, minute() /60 * width, height/3)
	rect(0, height/3 * 2, hour() /24 * width, height/3)
	
	fill(255)
	textAlign(CENTER, CENTER) // in grande perchè sono delle costanti e non delle variabili, perchè in teoria quando crei l'animazione non vuoi che questa costante cambi
	textSize(30)
	text(txt, width/2, height/2,) //stringa, posizione assi x e y
}