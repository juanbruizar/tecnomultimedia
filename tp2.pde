// Link del video explicativo: https://youtu.be/w4OWz2_SZLM
//tp2
//Alumno: Ruiz Arizcuren Juan Bautista
//Legajo:88526/4
int windowWidth = 800;
int windowHeight = 400;
PImage img;
float rotationSpeed = 0.01;
float imageX = 400;
float imageY = 0;

void setup() {
  size(800, 400);
  img = loadImage("45387233.png");
}

void draw() {
  background(255);
 
  image(img, 0, 0);
  
  // se desvanece la segunda imagen
  float tintValue = map(mouseX, 0, width, 0, 255);
  tint(255, 255 - tintValue);
  image(img, imageX, imageY);
  noTint();
  
  if (mouseY < windowHeight / 2) {
    imageX = 400; // Si el mouse está arriba de la mitad de la ventana, la imagen estará en la posición original
  } else {
    imageX = 500; // Si el mouse está abajo de la mitad de la ventana, la imagen se desplazará hacia la derecha
  }
  
  // ciclo for
  for (int i = 0; i < 10; i++) {
   float y = i * 50;
   strokeWeight(i + 1);
  line(500, y, width, y);
  }
}

void adjustRotationSpeed(float newSpeed) {
  rotationSpeed = newSpeed;
}

float calculateCircleArea(float radius) {
  return PI * radius * radius;
}

// Reiniciar el programa al presionar la tecla 'R'
void keyPressed() {
  if (key == 'R' || key == 'r') {
    resetProgram();
  }
}

void resetProgram() {
  rotationSpeed = 0.01;
  imageX = 400;
  imageY = 0;
}
