//glitter sky
let MIN = 0;
let drips = [];
let MAX_2 = 100;

//bruises
let x = 0;
let y = 0;
let r = 400;
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(10);

  for (var j = 0; j < 1000; j++) {
		drips[j] = new Drip(random(width), random(height), random(10), random(90), random(360));
}
}

function draw() {
  background(random(255), 5);

   //glitter rain
   for (let i = 0; i < drips.length; i++) {
    drips[i].move();
    drips[i].edges();
		drips[i].show();
  }

  push();
  //scale(2);
  //translate(random(width*.24, width*.26), random(height*.24,height*.26));
  translate(random(width*.49, width*.51), random(height*.49,height*.51));
  if (frameCount%10==0){
  bruise();
  }
  pop();

}

class Drip {
  constructor(x, y, r, sat, h){
    this.x = x;
    this.y = y;
    this.r = r;
    this.sat = sat;
    this.h = h;
    this.k = 0.5;
  }

  move() {
		// this.x = this.x + random(-0.5, 0.5);
		this.y = this.y + random(10);
	}

  edges(){
    if (this.x < 0){
      this.x = width;
    } else if (this.x > width){
      this.x = 0;
    }

    if (this.y < 0){
      this.y = height;
    } else if (this.y > height){
      this.y = 0;
      
    }

  }

	show() {
		noStroke();
    // stroke(0, 50);
    //fill(this.h, 100, random(100), 70);
    fill(this.h, random(100), random(100), random(100));
    // fill(255, 50);
		ellipse(this.x, this.y, random(this.r));
    this.sat+=this.k;

    if (this.sat <= MIN || this.sat >= MAX_2){
      this.k *= -1;
    }
	}
}

function bruise(){
    //circle star
    //fill(inside);
    fill(random(0, 360), random(100), random(100), random(50));
    noStroke();
    //stroke(180, 100, 100);
    x = random(-10,10);
    y = random(-10,10);
    r = random(150, 250);
  
    beginShape();
    vertex(x-r+c, y);
    bezierVertex(x-r, y-110, x-110, y-r, x, y-r+c);
    bezierVertex(x+90, y-r, x+r, y-110, x+r-c, y);
    bezierVertex(x+r, y+90, x+90, y+r, x, y+r-c);
    bezierVertex(x-110, y+r, x-r, y+90, x-r+c, y);
    endShape();
}

