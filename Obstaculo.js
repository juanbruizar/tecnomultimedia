class Obstaculo {
  constructor(x, y, ancho, alto, velocidad) {
    this.x = x;
    this.y = y;
    this.tamaño= 100;
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = velocidad;
    
  }

  mostrar() {
    image(obstaculoImg, this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    this.x += this.velocidad;
  
    if (this.x > width) {
      this.x = -this.ancho;
      this.y = random(height);
    }
  }
}
