class Colisionador {
  constructor(personaje, objetivo, obstaculo) {
    this.personaje = personaje;
    this.objetivo = objetivo;
    this.obstaculo = obstaculo;
  }

  colisionConObjetivo() {
    const distancia = dist(this.personaje.x, this.personaje.y, this.objetivo.x, this.objetivo.y);
    return distancia < this.personaje.tamaño / 2 + this.objetivo.tamaño / 2;
  }

  colisionConObstaculo() {
    const distancia = dist(this.personaje.x, this.personaje.y, this.obstaculo.x, this.obstaculo.y);
    return distancia < this.personaje.tamaño / 2 + this.obstaculo.tamaño / 2;
  }
}
