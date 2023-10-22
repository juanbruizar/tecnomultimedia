class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamaño = 60;
    this.velocidad = 5; 
  }

  mostrar() {
    image(personajeImg, this.x, this.y, this.tamaño, this.tamaño);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    } if (keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
    }
  }
}
