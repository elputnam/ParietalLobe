//glitter sky
let MIN = 0;
let drips = [];
let MAX_2 = 100;

//bruises
let x;
let y;
let c = 0;
let i1, i2;
let hugh = 270;
let a = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20);
  background(0);
  i1 = width;
  i2 = height;
  x = width/2;
  y = height/2
  for (var j = 0; j < 500; j++) {
		drips[j] = new Drip(random(width), random(height), random(10), random(90), 0);
}
}

function draw() {
  // background(20, 50, 100, 5);
  background(0, 0.5)

   //gold blood
  for (let i = 0; i < drips.length; i++) {
    drips[i].move();
    drips[i].edges();
		drips[i].show();
  }

  push();
  // scale(2);
  // translate(width*.25, height*.25)
  // translate(random(width*.24, width*.26), random(height*.24,height*.26));
  // translate(random(width*.49, width*.51), random(height*.49,height*.51));
  if (frameCount%2==0){
  bruise();
  
  }
  pop();
  //if (i >= 300){
    
  //}
  i1 -= random(5);
  i2 -= random(5);
  hugh -= 1;
  a -= 0.3;

  if (hugh == 60){
    hugh = 270
    i1 = random(width);
    i2 = random(height);
    // x  = random(width);
    // y = random(height);
    a = 100
  }

  // if (a < 5){
  //   a = 5;
  // }
  

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
    fill(this.h, 100, random(100), 50);
    // fill(this.h, this.sat, 70, random(100));
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
    fill(hugh, 100, 50, a);
    noStroke();
    //stroke(180, 100, 100);
    // // x = random(-10,10);
    // // y = random(-10,10);
    // r = random(100, 200);
    // r = i;
    
    // beginShape();
    // vertex(x-r+c, y);
    // bezierVertex(x-r, y-110, x-110, y-r, x, y-r+c);
    // bezierVertex(x+90, y-r, x+r, y-110, x+r-c, y);
    // bezierVertex(x+r, y+90, x+90, y+r, x, y+r-c);
    // bezierVertex(x-110, y+r, x-r, y+90, x-r+c, y);
    // endShape();
    // circle(x, y, r);
    rectMode(CENTER);
    // circle(x, y, r);
    rect(x, y, i1, i2)
    

    
}

