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
  particleArrayRed.push([x, y, Math.random() * 2 - 1, Math.random() * 4 - 2]);
}

for (let i = 0; i < numberOfParticles; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  particleArrayGreen.push([x, y, Math.random() * 2 - 1, Math.random() * 4 - 2]);
}

for (let i = 0; i < numberOfParticles; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  particleArrayBlue.push([x, y, Math.random() * 2 - 1, Math.random() * 4 - 2]);
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

function getDistance() {
  for (let i = 0; i < numberOfParticles; i++) {
    for (let ii = 0; ii < numberOfParticles; ii++) {
      let xDistance = particleArrayRed[i][0] - particleArrayBlue[ii][0];
      let yDistance = particleArrayRed[i][1] - particleArrayBlue[ii][1];
      let pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
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
        let xDistance = particleArrayRed[i][0] - particleArrayGreen[ii][0];
        let yDistance = particleArrayRed[i][1] - particleArrayGreen[ii][1];
        let pythagor = Math.sqrt(
          Math.pow(xDistance, 2) + Math.pow(yDistance, 2)
        );
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
    }
  }
}

animate();
