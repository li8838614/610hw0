function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  
  background(220);
  line(60,200,80,200);
  line(60,200,60,170);
  line(90,200,110,200);
  line(90,170,110,170);
  line(100,200,100,170);
  line(120,170,140,170);
  line(120,200,140,200);
  line(120,170,120,200);
  line(170,170,170,200);
  line(150,170,150,200);
  line(150,185,170,185);
  line(180,185,200,185);
  line(180,200,200,200);
  line(180,170,200,170);
  line(180,200,180,170);
  line(210,200,210,170);
  line(230,200,230,170);
  line(210,170,230,200);
  line(240,170,260,200);
  line(240,200,260,170);
  line(270,200,270,170);
  line(290,200,290,170);
  line(270,200,290,200);
  line(310,170,300,200);
  line(310,170,320,200);
  line(305,185,315,185);
  line(330,200,330,170);
  line(350,200,350,170);
  line(350,200,330,170);
}

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  triangle(60,300,80,300);
  triangle(60,300,60,270);
  triangle(90,300,110,300);
  triangle(90,270,110,270);
  triangle(100,300,100,270);
  triangle(120,270,140,270);
  triangle(120,300,140,300);
  triangle(120,270,120,300);
  triangle(170,270,170,300);
  triangle(150,270,150,300);
  triangle(150,285,170,285);
  triangle(180,285,200,285);
  triangle(180,300,200,300);
  triangle(180,270,200,270);
  triangle(180,300,180,270);
  triangle(210,300,210,270);
  triangle(230,300,230,270);
  triangle(210,270,230,300);
  triangle(240,270,260,300);
  triangle(240,300,260,270);
  triangle(270,300,270,270);
  triangle(290,300,290,270);
  triangle(270,300,290,300);
  triangle(310,270,300,300);
  triangle(310,270,320,300);
  triangle(305,285,315,285);
  triangle(330,300,330,270);
  triangle(350,300,350,270);
  triangle(350,300,330,270);
}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}