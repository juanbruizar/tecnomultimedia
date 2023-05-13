PImage img1;
PImage img2;
PImage img3;
PFont tipografia;
int textoboton = 18;
int estado = 0;
int transicion = 0;
int duracionTransicion = 300;
int tiempoTransicion = 0;
int param1; 
int param2;
int opacity = 0;
int opacityAmount = 1;
int xPos = 48;
int yPos = 48;
int xPos1 = 48;
int yPos1 = 80;
int speed = 1;
int pantalla;
int textSize = 26;
int sizeIncrement = 1;
int posXImageMain= 500;
int posYImageMain= 420;
int posXTextMain= 520;
int posYTextMain= 450;
int segundos = 0;
int posX;
int posXImagenes;
int tiempoTranscurrido = 20; // Variable para llevar el tiempo transcurrido
int newWidth = 640;
int newHeight = 480;

void setup() {
  background (0);
  size (640, 480);
  img1 = loadImage("1.jpeg");
  img1.resize(newWidth,newHeight);
  img2 = loadImage("2.jpg");
  img2.resize(newWidth,newHeight);
  img3 = loadImage("3.jpeg");
  img3.resize(newWidth,newHeight);
 
  
  tipografia= loadFont("BodoniMT-48.vlw");
  textFont(tipografia);
   param1= width;
  param2= height;
}
void draw(){
  tiempoTranscurrido++; // Incrementamos el tiempo transcurrido en cada ciclo del draw
  
  if (tiempoTranscurrido >= duracionTransicion) { // Si ha pasado el tiempo suficiente para hacer la transición
    tiempoTranscurrido = 5; // Reiniciamos el tiempo transcurrido
    estado++; // Pasamos al siguiente estado
    if (estado > 2) {
      estado = 2;
    }
    transicion = 1; // Iniciamos la transición
  }
  
  if (estado == 0) {
    image(img1, 0, 0);  // Agregar botón de inicio
  fill(255);
  rect(posXImageMain, posYImageMain, 85, 40);
  fill(0);
  textSize(textoboton);
  text("Inicio", posXTextMain, posYTextMain);
    textSize (40);
    fill (255,0,0);
    text ("los martillos son una de las",xPos, yPos);
    text ("herramientas por excelencia",xPos1,yPos1);
    xPos = xPos + speed;
    if (xPos > width)
    xPos = 0;
    
    xPos1 = xPos1 + speed;
    if (xPos1 > width)
    xPos1 = 0;
    
  } else if (estado == 1) {
    image(img2, 0, 0);
    textSize (40);
    fill (#03710F,opacity);
    text ("pero también tiene funciones",20,40); 
    text ("desconocidas dependiendo de su tipo",20,70);
    text ("como el galponero que saca clavos",20,100);
    text ("clavos con su parte trasera",20,130);
     opacity += opacityAmount;
  if (opacity > 255 || opacity < 0) {
    opacityAmount *= -1;
  }
   
  } else if (estado == 2) {
    image(img3, 0, 0);
    textSize (textSize);
    fill (0);
    text ("además de eso los martillos combinados ",10,50);
    text ("con otras herramientas pueden tener nuevas funciones",10,70);
    text ("como romper paredes por ejemplo",10,90);
    textSize += sizeIncrement;
    fill(255);
    rect(width - 100, height - 50, 80, 30);
    fill(0);
    textSize (textoboton);
    text("Reiniciar", width - 90, height - 30);
  
  if (textSize > 60 || textSize < 10) {
    sizeIncrement = -sizeIncrement;
  }
  }
  
  if (transicion > 0) {
   
    tiempoTransicion++;
    if (tiempoTransicion >= duracionTransicion) {
      tiempoTransicion = 20;
      transicion = 0;
    }
  }
}
 void mousePressed() {
  if (mouseX > width - 100 && mouseX < width - 20 && mouseY > height - 50 && mouseY < height - 20) {
    // Código para reiniciar el sketch
    estado = 0;
    transicion = 0;
    tiempoTransicion = 0;
    opacity = 0;
    textSize = 26;
    sizeIncrement = 1;
    xPos = 48;
    yPos = 48;
    xPos1 = 48;
    yPos1 = 80;
    segundos = 0;
    posX = 0;
    tiempoTranscurrido = 20;
  }
    else if (mouseX > posXImageMain && mouseX < posXImageMain + 80 && mouseY > posYImageMain && mouseY < posYImageMain + 30) {
    estado = 0;
    transicion = 0;
    tiempoTransicion = 0;
    opacity = 0;
    textSize = 26;
    sizeIncrement = 1;
    xPos = 48;
    yPos = 48;
    xPos1 = 48;
    yPos1 = 80;
    segundos = 0;
    posX = 0;
    tiempoTranscurrido = 20;
  }

}
  
