// Link del video explicativo: https://youtu.be/E7_TwLcmPb0
//tp3
//Alumno: Ruiz Arizcuren Juan Bautista
//Legajo:88526/4
int pantallaActual = 0;
int numFinales = 17;
PFont tipografia;
boolean juegoTerminado = false;
color[] coloresTextos = new color[18];

PImage[] imagenes = new PImage[18];

String[] narrativa = new String[18];

Button siguienteButton;

Button boton1;
Button boton2;
Button boton3;

int imagenDestino1 = 13;
int imagenDestino2 = 14;
int imagenDestino3 = 15;


boolean mostrarBotones = false;


Button volverButton;

void setup() {
  size(600, 600);
  siguienteButton = new Button(width - 80, height - 30, 80, 30, "Siguiente");
  boton1 = new Button(width - 540, height - 550, 100, 50, "Buscar a Hyde");
  boton2 = new Button(width - 360, height - 550, 120, 50, "Llamar a la policía");
  boton3 = new Button(width - 180, height - 550, 100, 50, "Ir a ver a Jekyll");
  volverButton = new Button(width - 80, height - 30, 80, 30, "Volver");

  tipografia = loadFont("BellMTBold-20.vlw");
  textFont(tipografia);

  imagenes[1] = loadImage("img1.jpeg");
  imagenes[2] = loadImage("img2.jpeg");
  imagenes[3] = loadImage("img3.jpeg");
  imagenes[4] = loadImage("img4.jpeg");
  imagenes[5] = loadImage("img5.jpeg");
  imagenes[6] = loadImage("img6.jpeg");
  imagenes[7] = loadImage("img7.jpeg");
  imagenes[8] = loadImage("img8.jpeg");
  imagenes[9] = loadImage("img9.jpeg");
  imagenes[10] = loadImage("img10.jpeg");
  imagenes[11] = loadImage("img11.jpeg");
  imagenes[12] = loadImage("img12.jpeg");
  imagenes[13] = loadImage("img13.jpeg");
  imagenes[14] = loadImage("img14.jpeg");
  imagenes[15] = loadImage("img15.jpeg");
  imagenes[16] = loadImage("img16.jpeg");
  imagenes[17] = loadImage("img17.jpeg");

  for (int i = 1; i < imagenes.length; i++) {
    if (imagenes[i] != null) {
      imagenes[i].resize(width, height);
    }
  }

  narrativa[1] = "El extraño caso de Dr Jekyll y Mr Hyde";
  narrativa[2] = "Soy John Utterson y vivo en Londres, estoy a punto de visitar a mi amigo el Dr Jekyll en su casa.";
  narrativa[3] = "En mi visita a Jekyll me comenta que se ha vuelto íntimo de una persona llamada Mr Hyde y que le deja su herencia en su testamento.";
  narrativa[4] = "Después de la visita que realicé a mi amigo, traté de averiguar quién era este tal Mr Hyde entre mi círculo cercano y el trabajo.";
  narrativa[5] = "Un conocido mío llamado Enfield me comentó que había tenido un encuentro con este personaje, primero me describió que era una persona de aspecto grotesco y feo.";
  narrativa[6] = "El incidente que vio Enfield es cómo Mr Hyde golpeó a una niña en la calle, lo cual lo llevó a pagar una compensación económica ante las autoridades.";
  narrativa[7] = "A raíz de eso, me preocupo de cómo Jekyll ha podido acercarse a un personaje tan rancio teniendo en cuenta lo correcto y decente que es mi amigo.";
  narrativa[8] = "Meses después, me entero en el diario que ocurre el asesinato de una niña en las calles de Londres.";
  narrativa[9] = "Se ha encontrado en la escena del crimen el bastón de Mr Hyde y las pruebas apuntan a él como el principal sospechoso.";
  narrativa[10] = "Y un detalle que no es menor es que al acercarme a presenciar dicho bastón, pude reconocer que era de Jekyll, temo mucho por que incrimine a mi amigo.";
  narrativa[11] = "Posteriormente, un sirviente de mi amigo Jekyll me comentó que su amo está deteriorado de salud y está teniendo comportamientos raros y bipolares.";
  narrativa[12] = "Fue entonces que tuve que decidir entre 3 opciones: Buscar a Mr Hyde y acabar con él, ir de inmediato a ver a mi amigo Jekyll o llamar a las autoridades para que vayan al hogar de Jekyll.";
  narrativa[13] = "Logré encontrar el paradero de Mr Hyde, era más fuerte de lo que pensaba. Me dió una paliza, pero cuando tuvo la oportunidad de matarme, no lo hizo y se fue corriendo.";
  narrativa[14] = "Las autoridades tardaron en ir a la casa de Jekyll, ya que no creían encontrar relación con el crimen y por la buena postura social del doctor. Para cuando llegaron a su casa, no había nadie y nunca se supo más de mi amigo ni del señor Hyde.";
  narrativa[15] = "Voy a la casa de mi amigo con su sirviente, nos lo encontramos muerto en su oficina con una carta en su mano.";
  narrativa[16] = "Dicha carta explica que mediante experimentación, mi amigo logró transformarse en otra persona, el señor Hyde. Pero como esta entidad peligrosa estaba tomando su vida, decidió suicidarse con veneno por el bien común.";
  narrativa[17] = "Autor de la Novela: Robert Louis Stevenson Alumno: Ruiz Arizcuren Juan Bautista Legajo:88526/4";

  coloresTextos[1] = color(#2000FC);    
  coloresTextos[2] = color(0, 255, 0);    
  coloresTextos[3] = color(#EDFF00);   
  coloresTextos[4] = color(#FFFFFF);
  coloresTextos[5] = color(#FFFFFF);
  coloresTextos[6] = color(#FFFFFF);
  coloresTextos[7] = color(255, 0, 0);
  coloresTextos[8] = color(255, 0, 0);
  coloresTextos[9] = color(#FFFFFF);
  coloresTextos[10] = color(#FFFFFF);
  coloresTextos[11] = color(#FFFFFF);
  coloresTextos[12] = color(#FFFFFF);
  coloresTextos[13] = color(#000000);
  coloresTextos[14] = color(#FFFFFF);
  coloresTextos[15] = color(#FC00BE);
  coloresTextos[16] = color(#FFFFFF);
  coloresTextos[17] = color(#FFFFFF);
}

void draw() {
  if (!juegoTerminado) {
    background(255);

    if (pantallaActual > 0 && pantallaActual < imagenes.length) {
      image(imagenes[pantallaActual], 0, 0);
    }

    if (pantallaActual > 0 && pantallaActual < narrativa.length) {
      textAlign(LEFT, BOTTOM);
      fill(coloresTextos[pantallaActual]);
      stroke(0);
      strokeWeight(3);
      textSize(30);
      text(narrativa[pantallaActual], 10, 10, width - 20, height - 20);
    }

   
    if (pantallaActual == 12) {
      mostrarBotones = true;
    } else {
      mostrarBotones = false;
    }

    if (mostrarBotones) {
      boton1.display();
      boton2.display();
      boton3.display();
    }

    if (pantallaActual == 13 || pantallaActual == 14) {
      volverButton.display();
    }

    if (pantallaActual != 12 && pantallaActual != 13 && pantallaActual != 14) {
      siguienteButton.display();
    }
  }
}

void mousePressed() {
  if (!juegoTerminado) {
    if (siguienteButton.isClicked()) {
      pantallaActual++;

      if (pantallaActual > numFinales) {
        juegoTerminado = true;
      }
    }

    if (mostrarBotones) {
      if (boton1.isClicked()) {
        pantallaActual = imagenDestino1;
      } else if (boton2.isClicked()) {
        pantallaActual = imagenDestino2;
      } else if (boton3.isClicked()) {
        pantallaActual = imagenDestino3;
      }
    }

    if ((pantallaActual == 13 || pantallaActual == 14) && volverButton.isClicked()) {
      pantallaActual = 12;
    }
  }
}

class Button {
  int x, y;          
  int width, height; 
  String label;      

  Button(int x, int y, int width, int height, String label) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.label = label;
  }

  void display() {
    fill(200);
    rect(x, y, width, height);

    textAlign(CENTER, CENTER);
    fill(0);
    textSize(14);
    text(label, x + width / 2, y + height / 2);
  }

  boolean isClicked() {
    return mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height;
  }
}
