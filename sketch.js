var hr;
var min;
var sec;
var secAngle;
var minAngle;
var hrAngle;

function setup() {
  createCanvas(1000,600);
}

function draw() {
  background("black");  

  translate(400,300);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(secAngle); 
  stroke(rgb(100,252,1));;
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(rgb(45,255,236));
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(rgb(146,146,254));
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(rgb(100,252,1));
  arc(0,0,300,300,0,secAngle);

  stroke(rgb(45,255,236));
  arc(0,0,280,280,0,minAngle);

  stroke(rgb(146,146,254));
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}