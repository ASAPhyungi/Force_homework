let ball;

function setup() {
  createCanvas(400, 400);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0.3, 0);
  let gravity1 = createVector(0.3, 0.3);
  ball.addForce(gravity);
  ball.addForce(gravity1);

  ball.update();
  ball.show();
}
