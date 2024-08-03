const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const countParagraph = document.createElement('p');
document.body.appendChild(countParagraph);
let ballCount = 0;


const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function updateBallCount() {
  countParagraph.textContent = `Number of balls: ${ballCount}`;
}

function addBall() {
  ballCount++;
  updateBallCount();
}

function removeBall() {
  if (ballCount > 0) {
    ballCount--;
    updateBallCount();
  }
}

class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, size, color) {
    super(x, y, velX, velY);
    this.size = size;
    this.color = color;
    this.exists = true;  }

  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }
    
    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }
    
    this.x += this.velX;
    this.y += this.velY;
  }

  draw() {
    if (!this.exists) return; 
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  collisionDetect() {
    if (!this.exists) return; 
    for (const ball of balls) {
      if (this !== ball && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + ball.size) {
          const newColor = randomRGB();
          ball.color = newColor;
          this.color = newColor;
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    size,
    randomRGB()
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
