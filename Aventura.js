class Aventura{
  constructor(){
  }
  
  setupAventura(){
      siguienteButton = createButton("Siguiente");
      siguienteButton.position(525, 575);
      siguienteButton.mousePressed(this.pasarImagen);
    
      textos = new Textos();
      
      boton1 = createButton("Buscar a Hyde");
      boton2 = createButton("Llamar a la policía");
      boton3 = createButton("Ir a ver a Jekyll");
      volverButton = createButton("Volver");
    
      boton1.position(50, 100);
      boton2.position(250, 100);
      boton3.position(450, 100);
      
      let onMousePressed = () => {
        boton1.hide();
        boton2.hide();
        boton3.hide();
      } 
      
      onMousePressed();
    
      boton1.mousePressed(() => {
        pantallaActual = imagenDestino1;
        onMousePressed(imagenDestino1);
      });
      boton2.mousePressed(() => {
        pantallaActual = imagenDestino2;
        onMousePressed(imagenDestino2);
      });
      boton3.mousePressed(() => {
        pantallaActual = imagenDestino3;
        onMousePressed(imagenDestino3);
      });
      
      volverButton.mousePressed(() => {
        pantallaActual = 12;
      });
  }
  
  drawAventura(){
    background(255);

    if (!juegoTerminado) {
      if (pantallaActual > 0 && pantallaActual < imagenes.length) {
        image(imagenes[pantallaActual], 0, 0, width, height);
      }
  
      if (pantallaActual > 0 && pantallaActual < narrativa.length) {
        textos.mostrar(pantallaActual);
      }
      
      if (pantallaActual == 12) {
  
        boton1.show();
        boton2.show();
        boton3.show();
        volverButton.show();
        siguienteButton.hide();
      }
  
      if (pantallaActual == 13 || pantallaActual == 14) {
        volverButton.position(550, 575);
        volverButton.show();
      }
      
      if(pantallaActual == 15){
        siguienteButton.show();
        volverButton.hide();
      }
  if(pantallaActual == 17){
        siguienteButton.hide();
        
      }  
if(pantallaActual <= 12){
        volverButton.hide();
        
      }    
}
  }
  
  pasarImagen(){
    if(pantallaActual == 8){
      enPantallaInicio = true;
      siguienteButton.hide();
    }
    
    pantallaActual++;
    if (pantallaActual > numFinales) {
      juegoTerminado = true;
    }
    
    
  }
  
  activarBotonSiguiente(){
    siguienteButton.show();
  }
  
}
