PImage engrampadora;

void setup(){
 size (800,400);
 background(255,255,255);
 engrampadora=loadImage ("engrampadora.png");
}
void draw(){
  image (engrampadora,430,20);
fill (#BCBCBC);
circle (230,275,20);
fill (#BCBCBC);
circle (420,290,10);
fill (#BCBCBC);
circle (450,330,10);
fill (#343131);
rect (100,175,77,200);
fill (#F2881D);
rect (175,275,285,100);
fill (#F2881D);
triangle (175,175,175,275,275,275);
fill (#D3D1D1);
quad (100,175,175,175,175,240,140,240);
fill (#BCBCBC);
circle (160,330,20);
fill (#BCBCBC);
circle (160,210,20);
fill (#FFFCFC);
ellipse (320,330,180,45);
fill (#BCBCBC);
circle (430,340,20);
textSize (20);
fill (0);
text ("STAPLE GUN",270,370);
fill (0);
line (270,372,375,372);
textSize (20);
fill (0);
text ("INGCO",300,300);
fill (#BCBCBC);
circle (230,275,20);
fill (#BCBCBC);
circle (420,290,10);
fill (#BCBCBC);
circle (450,330,10);
fill (#D3D1D1);
rect (130,155,20,20);
fill (#D3D1D1);
rect (115,140,50,20);
fill (#D3D1D1);
quad (175,175,200,200,380,90,380,60);
fill (#D3D1D1);
rect (450,350,20,20);
fill (#F2881D);
curve (200,300,420,275,460,300,350,500);

}
