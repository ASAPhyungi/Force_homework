class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(0);
    this.w = 50;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
    this.checkEdge();
  }


  checkEdge() {
    if ((this.pos.x+this.w/2) > width) {
      this.pos.x = height-this.w/2;
      this.vel.x = this.vel.x * -1;
    }
    
    else if ((this.pos.x-this.w/2) < width) {
      this.pos.x = height+this.w/2;
      this.vel.x = this.vel.x * -1;
    }

    
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }


  show() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.w);
  }
}
