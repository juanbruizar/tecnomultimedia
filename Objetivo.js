class Objetivo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamaño = 50;
  }

   mostrar() {
    image(objetivoImg, this.x, this.y, this.tamaño, this.tamaño);
  }

  mover() {
    
  }
}
