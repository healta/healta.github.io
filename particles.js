const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth - 100;
ctx.canvas.height = window.innerHeight - 100;
let particleArray;
let particleArrayGreen;
let particleArrayRed;
let particleArrayBlue;

//initializing random array of coordinates
particleArray = [];
particleArrayRed = [];
particleArrayBlue = [];
particleArrayGreen = [];

let numberOfParticles = 100;
for (let i = 0; i < numberOfParticles; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  particleArrayRed.push([x, y, Math.random() * 2 - 1, Math.random() * 2 - 1]);
}

for (let i = 0; i < numberOfParticles; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  particleArrayGreen.push([x, y, Math.random() * 2 - 1, Math.random() * 2 - 1]);
}

for (let i = 0; i < numberOfParticles; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  particleArrayBlue.push([x, y, Math.random() * 2 - 1, Math.random() * 2 - 1]);
}

//draw function
function draw(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

//calculating coordinate changes and calling draw
function movement(array) {
  for (let i = 0; i < numberOfParticles; i++) {
    if (array[i][2] > 3) {
      array[i][2] = 3;
    }
    if (array[i][3] > 3) {
      array[i][3] = 3;
    }
    array[i][0] = array[i][0] + array[i][2];
    if (array[i][0] > 1820) {
      array[i][0] = 0;
    } else if (array[i][0] < 0) {
      array[i][0] = 1820;
    }
    array[i][1] = array[i][1] + array[i][3];
    if (array[i][1] > 907) {
      array[i][1] = 0;
    } else if (array[i][1] < 0) {
      array[i][1] = 907;
    }
    draw(array[i][0], array[i][1]);
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();
  ctx.fillStyle = "Blue";
  movement((array = particleArrayBlue));
  ctx.fillStyle = "green";
  movement((array = particleArrayGreen));
  ctx.fillStyle = "red";
  movement((array = particleArrayRed));
  getDistance();
}

let xDistance;
let yDistance;
let pythagor;
let averagey;
let averagex;

function getDistance() {
  for (let i = 0; i < numberOfParticles; i++) {
    for (let ii = 0; ii < numberOfParticles; ii++) {
      xDistance = particleArrayRed[i][0] - particleArrayBlue[ii][0];
      yDistance = particleArrayRed[i][1] - particleArrayBlue[ii][1];
      pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      if (pythagor < 22) {
        if (particleArrayRed[i][0] > particleArrayBlue[ii][0]) {
          particleArrayRed[i][0]++;
          particleArrayBlue[ii][0]--;
        } else {
          particleArrayBlue[ii][0]++;
          particleArrayRed[i][0]--;
        }
        if (particleArrayRed[i][1] < particleArrayBlue[ii][1]) {
          particleArrayRed[i][1]++;
          particleArrayBlue[ii][1]--;
        } else {
          particleArrayBlue[ii][1]--;
          particleArrayRed[i][1]--;
        }
        xDistance = particleArrayRed[i][0] - particleArrayGreen[ii][0];
        yDistance = particleArrayRed[i][1] - particleArrayGreen[ii][1];
        pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      }
      xDistance = particleArrayRed[i][0] - particleArrayGreen[ii][0];
      yDistance = particleArrayRed[i][1] - particleArrayGreen[ii][1];
      pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      if (pythagor < 22) {
        if (particleArrayRed[i][0] > particleArrayGreen[ii][0]) {
          particleArrayRed[i][0]++;
          particleArrayGreen[ii][0]--;
        } else {
          particleArrayGreen[ii][0]++;
          particleArrayRed[i][0]--;
        }
        if (particleArrayRed[i][1] < particleArrayGreen[ii][1]) {
          particleArrayRed[i][1]++;
          particleArrayGreen[ii][1]--;
        } else {
          particleArrayGreen[ii][1]--;
          particleArrayRed[i][1]--;
        }
      }
      xDistance = particleArrayBlue[i][0] - particleArrayGreen[ii][0];
      yDistance = particleArrayBlue[i][1] - particleArrayGreen[ii][1];
      pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      if (pythagor < 22) {
        if (particleArrayBlue[i][0] > particleArrayGreen[ii][0]) {
          particleArrayBlue[i][0]++;
          particleArrayGreen[ii][0]--;
        } else {
          particleArrayGreen[ii][0]++;
          particleArrayBlue[i][0]--;
        }
        if (particleArrayBlue[i][1] < particleArrayGreen[ii][1]) {
          particleArrayBlue[i][1]++;
          particleArrayGreen[ii][1]--;
        } else {
          particleArrayGreen[ii][1]--;
          particleArrayBlue[i][1]--;
        }
      }
      xDistance = particleArrayBlue[i][0] - particleArrayBlue[ii][0];
      yDistance = particleArrayBlue[i][1] - particleArrayBlue[ii][1];
      pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      if (pythagor < 100 && pythagor > 10) {
        averagex = (particleArrayBlue[i][0] + particleArrayBlue[ii][0]) / 2;
        averagey = (particleArrayBlue[i][1] + particleArrayBlue[ii][1]) / 2;
        if (particleArrayBlue[i][0] > averagex) {
          particleArrayBlue[i][2] = particleArrayBlue[i][2] + Math.random();
          particleArrayBlue[ii][2] = particleArrayBlue[i][2] - Math.random();
        } else {
          particleArrayBlue[i][2] = particleArrayBlue[i][2] - Math.random();
          particleArrayBlue[ii][2] = particleArrayBlue[i][2] + Math.random();
        }
        if (particleArrayBlue[i][1] > averagey) {
          particleArrayBlue[i][3] = particleArrayBlue[i][3] + Math.random();
          particleArrayBlue[ii][3] = particleArrayBlue[i][3] - Math.random();
        } else {
          particleArrayBlue[i][3] = particleArrayBlue[i][3] - Math.random();
          particleArrayBlue[ii][3] = particleArrayBlue[i][3] + Math.random();
        }
      }
      if (pythagor < 10) {
        if (particleArrayBlue[i][0] > particleArrayBlue[ii][0]) {
          particleArrayBlue[i][0]++;
          particleArrayBlue[ii][0]--;
        } else {
          particleArrayBlue[ii][0]++;
          particleArrayBlue[i][0]--;
        }
        if (particleArrayBlue[i][1] < particleArrayBlue[ii][1]) {
          particleArrayBlue[i][1]++;
          particleArrayBlue[ii][1]--;
        } else {
          particleArrayBlue[ii][1]--;
          particleArrayBlue[i][1]--;
        }
      }
      if (particleArrayBlue[i][2] > 5) {
        particleArrayBlue[i][2] = 5;
      }
      if (particleArrayBlue[i][3] > 5) {
        particleArrayBlue[i][3] = 5;
      }
      if (particleArrayBlue[ii][2] > 5) {
        particleArrayBlue[ii][2] = 5;
      }
      if (particleArrayBlue[ii][3] > 5) {
        particleArrayBlue[ii][3] = 5;
      }
      if (particleArrayBlue[i][2] < -5) {
        particleArrayBlue[i][2] = -5;
      }
      if (particleArrayBlue[i][3] < -5) {
        particleArrayBlue[i][3] = -5;
      }
      if (particleArrayBlue[ii][2] < -5) {
        particleArrayBlue[ii][2] = -5;
      }
      if (particleArrayBlue[ii][3] < -5) {
        particleArrayBlue[ii][3] = -5;
      }

      xDistance = particleArrayRed[i][0] - particleArrayRed[ii][0];
      yDistance = particleArrayRed[i][1] - particleArrayRed[ii][1];
      pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      if (pythagor < 100 && pythagor > 10) {
        averagex = (particleArrayRed[i][0] + particleArrayRed[ii][0]) / 2;
        averagey = (particleArrayRed[i][1] + particleArrayRed[ii][1]) / 2;
        if (particleArrayRed[i][0] > averagex) {
          particleArrayRed[i][2] = particleArrayRed[i][2] - Math.random();
          particleArrayRed[ii][2] = particleArrayRed[i][2] + Math.random();
        } else {
          particleArrayRed[i][2] = particleArrayRed[i][2] + Math.random();
          particleArrayRed[ii][2] = particleArrayRed[i][2] - Math.random();
        }
        if (particleArrayRed[i][1] > averagey) {
          particleArrayRed[i][3] = particleArrayRed[i][3] - Math.random();
          particleArrayRed[ii][3] = particleArrayRed[i][3] + Math.random();
        } else {
          particleArrayRed[i][3] = particleArrayRed[i][3] + Math.random();
          particleArrayRed[ii][3] = particleArrayRed[i][3] - Math.random();
        }
      }
      if (pythagor < 10) {
        if (particleArrayRed[i][0] > particleArrayRed[ii][0]) {
          particleArrayRed[i][0]++;
          particleArrayRed[ii][0]--;
        } else {
          particleArrayRed[ii][0]++;
          particleArrayRed[i][0]--;
        }
        if (particleArrayRed[i][1] < particleArrayRed[ii][1]) {
          particleArrayRed[i][1]++;
          particleArrayRed[ii][1]--;
        } else {
          particleArrayRed[ii][1]--;
          particleArrayRed[i][1]--;
        }
      }
      if (particleArrayRed[i][2] > 5) {
        particleArrayRed[i][2] = 5;
      }
      if (particleArrayRed[i][3] > 5) {
        particleArrayRed[i][3] = 5;
      }
      if (particleArrayRed[ii][2] > 5) {
        particleArrayRed[ii][2] = 5;
      }
      if (particleArrayRed[ii][3] > 5) {
        particleArrayRed[ii][3] = 5;
      }
      if (particleArrayRed[i][2] < -5) {
        particleArrayRed[i][2] = -5;
      }
      if (particleArrayRed[i][3] < -5) {
        particleArrayRed[i][3] = -5;
      }
      if (particleArrayRed[ii][2] < -5) {
        particleArrayRed[ii][2] = -5;
      }
      if (particleArrayRed[ii][3] < -5) {
        particleArrayRed[ii][3] = -5;
      }
    }
  }
}

animate();
