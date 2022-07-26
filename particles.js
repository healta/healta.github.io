const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth - 100;
ctx.canvas.height = window.innerHeight - 100;
let particleArray;

//initializing random array of coordinates
particleArray = [];
let numberOfParticles = 500;
for (let i = 0; i < numberOfParticles; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  particleArray.push([x, y]);
}

//draw function
function draw(x, y) {
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

//calculating coordinate changes and calling draw
function movement() {
  for (let i = 0; i < numberOfParticles; i++) {
    particleArray[i][0] = particleArray[i][0] + Math.random() * 4 - 2;
    if (particleArray[i][0] > 1820) {
      particleArray[i][0] = 0;
    } else if (particleArray[i][0] < 0) {
      particleArray[i][0] = 1820;
    }
    particleArray[i][1] = particleArray[i][1] + Math.random() * 4 - 2;
    if (particleArray[i][1] > 907) {
      particleArray[i][1] = 0;
    } else if (particleArray[i][1] < 0) {
      particleArray[i][1] = 907;
    }
    draw(particleArray[i][0], particleArray[i][1]);
  }
}

redx = 444;
redy = 444;

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();
  movement();
  ctx.fillStyle = "red";
  ctx.arc(redx, redy, 15, 0, Math.PI * 2);
  ctx.fill();
  getDistance();
}

function getDistance() {
  for (let i = 0; i < numberOfParticles; i++) {
    let xDistance = redx - particleArray[i][0];
    let yDistance = redy - particleArray[i][1];
    let pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    if (pythagor < 20) {
      if (redx > particleArray[1][0]) {
        redx++;
      } else {
        redx--;
      }
      if (redy > particleArray[1][1]) {
        redy++;
      } else {
        redy--;
      }
    }
  }
}

animate();
