class Juego {
  constructor() {
    this.personaje = new Personaje(width / 2, height - 50);
    this.objetivo = new Objetivo(300, 0);
    this.obstaculo = new Obstaculo(0, random(height), 100, 100, 2);
    this.metaY = height - 10
    this.colisionador = new Colisionador(this.personaje, this.objetivo, this.obstaculo);
  }
  
  drawMinijuego(){
    image(fondoImg, 0, 0);
    pantallaInicio.mostrar();
    if (iniciarPartida) {
      background(fondoImg);
      juego.mostrar();
      juego.actualizar();
    }
  }

  mostrar() {
    //background(220);
    this.personaje.mostrar();
    this.objetivo.mostrar();
    this.obstaculo.mostrar();
  }
  
  actualizar() {
    this.personaje.mover();
    this.objetivo.mover();
    this.obstaculo.mover();
    this.obstaculo.mover();
   if (this.colisionador.colisionConObstaculo()) {
      console.log("¡Has perdido!");
      noLoop(); 
    }

    if (this.colisionador.colisionConObjetivo()) {
      console.log("¡Has ganado!");
      enPantallaInicio = false;
      partidaTerminada = true;
    }
  }
}
