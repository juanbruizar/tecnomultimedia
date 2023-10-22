// Link del video explicativo: https://youtu.be/8l4gZIbW9uM
//tp5
//Alumno: Ruiz Arizcuren Juan Bautista
//Legajo:88526/4
let juego;
let obstaculo;
let fondoimg;
let personajeImg;
let obstaculoImg;
let objetivoImg;
let canvas;
let pantallaInicio;
let enPantallaInicio = true;

function preload() {
  fondoImg = loadImage('assets/fondo.jpg')
  personajeImg = loadImage('assets/Hyde.png');
  obstaculoImg = loadImage('assets/police.png'); 
  objetivoImg = loadImage('assets/exit.png');
}

function setup() {
  canvas = createCanvas(600, 400);
  fondoImg.resize(width, height);
  image(fondoImg, 0, 0);
  juego = new Juego();
  pantallaInicio = new PantallaInicio();
}

function draw() {
 if (enPantallaInicio) {
    pantallaInicio.mostrar();
  } else {
  background(fondoImg);
  juego.mostrar();
  juego.actualizar();
}
}
function keyPressed() {
  if (enPantallaInicio && keyCode === ENTER) {
    enPantallaInicio = false;
  }
}
