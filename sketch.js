let ball;
let ball2;

function setup() {
  createCanvas(400, 400);

  ball = new Particle();
  ball2 = new Particle();
//   ball2.pos = createVector(300, height/2); 
}


function draw() {
  background(220);

  let gravity = createVector(0.3, 0);
  ball.addForce(gravity);

  let leftForce = createVector(-0.3, 0);
  ball2.addForce(leftForce);
 

  ball.update();
  ball.show();

  ball2.update();
  ball2.show();
}
