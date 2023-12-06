class PantallaInicio {
  mostrar() {
    background(fondoImg);
    fill(359,81,80);
    textAlign(CENTER);
    textSize(30);
    text("Hyde escapa de la policía", width / 2, height / 3);
    textSize(24);
    text("Instrucciones:", width / 2, height / 2);
    text("Mueve al Dr Hyde con las flechas", width / 2, height / 2 + 90);
    text("Evita a las autoridades y llega a la salida", width / 2, height / 2 + 120);
    text("Presiona ENTER para empezar", width / 2, height / 2 + 150);
  }
}
