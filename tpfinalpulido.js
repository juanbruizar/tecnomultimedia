//Alumno: Ruiz Arizcuren Juan Bautista
//Legajo:88526/4

// Variables de aventura grafica
let aventura;
// Arreglos
let coloresTextos = new Array(18);
let imagenes = new Array(18);
let narrativa = new Array(18);

// Botones
let siguienteButton;
let boton1;
let boton2;
let boton3;
let volverButton;

let pantallaActual = 1;
let numFinales = 18;
let juegoTerminado = false;

let imagenDestino1 = 13;
let imagenDestino2 = 14;
let imagenDestino3 = 15;

let textos;

// Variables del Minijuego
let juego;
let obstaculo;
let fondoimg;
let personajeImg;
let obstaculoImg;
let objetivoImg;
let canvas;
let pantallaInicio;
let enPantallaInicio = false;
let iniciarPartida = false;
let partidaTerminada = false;

function preload() {
  preloadDataAventura();
  preloadDataMinijuego();
}

function preloadDataAventura(){
  for (let i = 1; i < 18; i++) {
    imagenes[i] = loadImage("assets/img" + i + ".jpeg");
  }

  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i] != null) {
      imagenes[i].resize(600, 600);
    }
  }
}

function preloadDataMinijuego(){
  fondoImg = loadImage('assets/fondo.jpg')
  personajeImg = loadImage('assets/Hyde.png');
  obstaculoImg = loadImage('assets/police.png'); 
  objetivoImg = loadImage('assets/exit.png');
  fondoImg.resize(width, height);
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
  aventura.setupAventura();
  
  juego = new Juego();
  pantallaInicio = new PantallaInicio();
}

function draw() {
  if(partidaTerminada){
   aventura.activarBotonSiguiente();
   partidaTerminada = false;
  }
  
  aventura.drawAventura();
  
  if(enPantallaInicio){
   juego.drawMinijuego();
  }

}

function keyPressed() {
  if (enPantallaInicio && keyCode === ENTER) {
    iniciarPartida = true;
  }
}
