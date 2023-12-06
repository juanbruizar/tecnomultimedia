class Textos {


  constructor() {

    this.coloresTextos = new Array(17);
    this.narrativa = new Array(17);
    //let tipografia;

    //tipografia = loadFont("BellMTBold-20.vlw");
    //textFont(tipografia);
    this.narrativa[1] = "El extraño caso de Dr Jekyll y Mr Hyde";
    this.narrativa[2] = "Soy John Utterson y vivo en Londres, estoy a punto de visitar a mi amigo el Dr Jekyll en su casa.";
    this.narrativa[3] = "En mi visita a Jekyll me comenta que se ha vuelto íntimo de una persona llamada Mr Hyde y que le deja su herencia en su testamento.";
    this.narrativa[4] = "Después de la visita que realicé a mi amigo, traté de averiguar quién era este tal Mr Hyde entre mi círculo cercano y el trabajo.";
    this.narrativa[5] = "Un conocido mío llamado Enfield me comentó que había tenido un encuentro con este personaje, primero me describió que era una persona de aspecto grotesco y feo.";
    this.narrativa[6] = "El incidente que vio Enfield es cómo Mr Hyde golpeó a una niña en la calle, lo cual lo llevó a pagar una compensación económica ante las autoridades.";
    this.narrativa[7] = "A raíz de eso, me preocupo de cómo Jekyll ha podido acercarse a un personaje tan rancio teniendo en cuenta lo correcto y decente que es mi amigo.";
    this.narrativa[8] = "Meses después, me entero en el diario que ocurre el asesinato de una niña en las calles de Londres.";
    this.narrativa[9] = "Se ha encontrado en la escena del crimen el bastón de Mr Hyde y las pruebas apuntan a él como el principal sospechoso.";
    this.narrativa[10] = "Y un detalle que no es menor es que al acercarme a presenciar dicho bastón, pude reconocer que era de Jekyll, temo mucho por que incrimine a mi amigo.";
    this.narrativa[11] = "Posteriormente, un sirviente de mi amigo Jekyll me comentó que su amo está deteriorado de salud y está teniendo comportamientos raros y bipolares.";
    this.narrativa[12] = "Fue entonces que tuve que decidir entre 3 opciones: Buscar a Mr Hyde y acabar con él, ir de inmediato a ver a mi amigo Jekyll o llamar a las autoridades para que vayan al hogar de Jekyll.";
    this.narrativa[13] = "Logré encontrar el paradero de Mr Hyde, era más fuerte de lo que pensaba. Me dió una paliza, pero cuando tuvo la oportunidad de matarme, no lo hizo y se fue corriendo.";
    this.narrativa[14] = "Las autoridades tardaron en ir a la casa de Jekyll, ya que no creían encontrar relación con el crimen y por la buena postura social del doctor. Para cuando llegaron a su casa, no había nadie y nunca se supo más de mi amigo ni del señor Hyde.";
    this.narrativa[15] = "Voy a la casa de mi amigo con su sirviente, nos lo encontramos muerto en su oficina con una carta en su mano.";
    this.narrativa[16] = "Dicha carta explica que mediante experimentación, mi amigo logró transformarse en otra persona, el señor Hyde. Pero como esta entidad peligrosa estaba tomando su vida, decidió suicidarse con veneno por el bien común.";
    this.narrativa[17] = "Autor de la Novela: Robert Louis Stevenson Alumno: Ruiz Arizcuren Juan Bautista Legajo:88526/4";

    this.coloresTextos[1] = color('#EDFF03');
    this.coloresTextos[2] = color(0, 255, 0);
    this.coloresTextos[3] = color('#EDFF00');
    this.coloresTextos[4] = color('#FFFFFF');
    this.coloresTextos[5] = color('#FFFFFF');
    this.coloresTextos[6] = color('#FFFFFF');
    this.coloresTextos[7] = color(255, 0, 0);
    this.coloresTextos[8] = color(255, 0, 0);
    this.coloresTextos[9] = color('#FFFFFF');
    this.coloresTextos[10] = color('#FFFFFF');
    this.coloresTextos[11] = color('#FFFFFF');
    this.coloresTextos[12] = color('#FFFFFF');
    this.coloresTextos[13] = color('#000000');
    this.coloresTextos[14] = color('#FFFFFF');
    this.coloresTextos[15] = color('#FC00BE');
    this.coloresTextos[16] = color('#FFFFFF');
    this.coloresTextos[17] = color('#FFFFFF');
  }
  
  mostrar(textoActual){
    textAlign(LEFT, BOTTOM);
    fill(this.coloresTextos[textoActual]);
    stroke(0);
    strokeWeight(3);
    textSize(30);
    text(this.narrativa[textoActual], 10, 10, width - 20, height - 20);
  }
}
