const canvas = document.getElementById("newparticles");
const ctx = canvas.getContext("2d");
ctx.canvas.width = 1820;
ctx.canvas.height = 980;

var arrayValues;

var particleOne;
var particleTwo;
var particleThree;
var particleFour;
var particleFive;
var particleSix;
var particleSeven;
var particleEight;
var particleNine;
var particleTen;
var particleEleven;
var particleTwelve;

//colors
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");
var color6 = document.getElementById("color6");
var color7 = document.getElementById("color7");
var color8 = document.getElementById("color8");
var color9 = document.getElementById("color9");
var color10 = document.getElementById("color10");
var color11 = document.getElementById("color11");
var color12 = document.getElementById("color12");

//nubmers
var input11 = document.getElementById("input11");
input11.value = Math.floor(Math.random() * 25);
var input21 = document.getElementById("input21");
input21.value = Math.floor(Math.random() * 25);
var input31 = document.getElementById("input31");
input31.value = Math.floor(Math.random() * 25);
var input41 = document.getElementById("input41");
input41.value = Math.floor(Math.random() * 25);
var input51 = document.getElementById("input51");
input51.value = Math.floor(Math.random() * 25);
var input61 = document.getElementById("input61");
input61.value = Math.floor(Math.random() * 25);
var input71 = document.getElementById("input71");
input71.value = Math.floor(Math.random() * 25);
var input81 = document.getElementById("input81");
input81.value = Math.floor(Math.random() * 25);
var input91 = document.getElementById("input91");
input91.value = Math.floor(Math.random() * 25);
var input101 = document.getElementById("input101");
input101.value = Math.floor(Math.random() * 25);
var input111 = document.getElementById("input111");
input111.value = Math.floor(Math.random() * 25);
var input121 = document.getElementById("input121");
input121.value = Math.floor(Math.random() * 25);

//maxspeed
var input12 = document.getElementById("input12");
input12.value = Math.floor(Math.random() * 7);
var input22 = document.getElementById("input22");
input22.value = Math.floor(Math.random() * 7);
var input32 = document.getElementById("input32");
input32.value = Math.floor(Math.random() * 7);
var input42 = document.getElementById("input42");
input42.value = Math.floor(Math.random() * 7);
var input52 = document.getElementById("input52");
input52.value = Math.floor(Math.random() * 7);
var input62 = document.getElementById("input62");
input62.value = Math.floor(Math.random() * 7);
var input72 = document.getElementById("input72");
input72.value = Math.floor(Math.random() * 7);
var input82 = document.getElementById("input82");
input82.value = Math.floor(Math.random() * 7);
var input92 = document.getElementById("input92");
input92.value = Math.floor(Math.random() * 7);
var input102 = document.getElementById("input102");
input102.value = Math.floor(Math.random() * 7);
var input112 = document.getElementById("input112");
input112.value = Math.floor(Math.random() * 7);
var input122 = document.getElementById("input122");
input122.value = Math.floor(Math.random() * 7);

//interraction distance
var input13 = document.getElementById("input13");
input13.value = Math.floor(Math.random() * 200 + 20);
var input23 = document.getElementById("input23");
input23.value = Math.floor(Math.random() * 200 + 20);
var input33 = document.getElementById("input33");
input33.value = Math.floor(Math.random() * 200 + 20);
var input43 = document.getElementById("input43");
input43.value = Math.floor(Math.random() * 200 + 20);
var input53 = document.getElementById("input53");
input53.value = Math.floor(Math.random() * 200 + 20);
var input63 = document.getElementById("input63");
input63.value = Math.floor(Math.random() * 200 + 20);
var input73 = document.getElementById("input73");
input73.value = Math.floor(Math.random() * 200 + 20);
var input83 = document.getElementById("input83");
input83.value = Math.floor(Math.random() * 200 + 20);
var input93 = document.getElementById("input93");
input93.value = Math.floor(Math.random() * 200 + 20);
var input103 = document.getElementById("input103");
input103.value = Math.floor(Math.random() * 200 + 20);
var input113 = document.getElementById("input113");
input113.value = Math.floor(Math.random() * 200 + 20);
var input123 = document.getElementById("input123");
input123.value = Math.floor(Math.random() * 200 + 20);

var particle = [];

function initializeFunction() {
  var input1behaviour = [];
  input1behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input2behaviour = [];
  input2behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input3behaviour = [];
  input3behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input4behaviour = [];
  input4behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input5behaviour = [];
  input5behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input6behaviour = [];
  input6behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input7behaviour = [];
  input7behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input8behaviour = [];
  input8behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input9behaviour = [];
  input9behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input10behaviour = [];
  input10behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input11behaviour = [];
  input11behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  var input12behaviour = [];
  input12behaviour.push([
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
    Math.floor(Math.random() * 2 + 1),
  ]);
  for (let i = 0; i < input11.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color1.value,
      input1behaviour,
      input12.value,
      input13.value,
    ]);
  }
  for (let i = 0; i < input21.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color2.value,
      input2behaviour,
      input22.value,
      input23.value,
    ]);
  }
  for (let i = 0; i < input31.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color3.value,
      input3behaviour,
      input32.value,
      input33.value,
    ]);
  }
  for (let i = 0; i < input41.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color4.value,
      input4behaviour,
      input42.value,
      input43.value,
    ]);
  }
  for (let i = 0; i < input51.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color5.value,
      input5behaviour,
      input52.value,
      input53.value,
    ]);
  }
  for (let i = 0; i < input61.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color6.value,
      input6behaviour,
      input62.value,
      input63.value,
    ]);
  }
  for (let i = 0; i < input71.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color7.value,
      input7behaviour,
      input72.value,
      input73.value,
    ]);
  }
  for (let i = 0; i < input81.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color8.value,
      input8behaviour,
      input82.value,
      input83.value,
    ]);
  }
  for (let i = 0; i < input91.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color9.value,
      input9behaviour,
      input92.value,
      input93.value,
    ]);
  }
  for (let i = 0; i < input101.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color10.value,
      input10behaviour,
      input102.value,
      input103.value,
    ]);
  }
  for (let i = 0; i < input111.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color11.value,
      input11behaviour,
      input112.value,
      input113.value,
    ]);
  }
  for (let i = 0; i < input121.value; i++) {
    particle.push([
      Math.random() * 1820,
      Math.random() * 980,
      Math.random() * 15 - 10,
      Math.random() * 15 - 10,
      color12.value,
      input12behaviour,
      input122.value,
      input123.value,
    ]);
  }

  console.log(particle);
}

var totalparticles =
  parseInt(input11.value) +
  parseInt(input21.value) +
  parseInt(input31.value) +
  parseInt(input41.value) +
  parseInt(input51.value) +
  parseInt(input61.value) +
  parseInt(input71.value) +
  parseInt(input81.value) +
  parseInt(input91.value) +
  parseInt(input101.value) +
  parseInt(input121.value) +
  parseInt(input121.value);

console.log(totalparticles);
function draw() {
  // adding tails through a layer of diffusion
  ctx.fillStyle = "white";
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();
  for (i = 0; i < totalparticles; i++) {
    ctx.beginPath();
    ctx.fillStyle = particle[i][4];
    ctx.arc(particle[i][0], particle[i][1], 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

function changePosition() {
  for (i = 0; i < totalparticles; i++) {
    particle[i][0] = particle[i][0] + particle[i][2];
    particle[i][1] = particle[i][1] + particle[i][3];
    if (particle[i][0] > 1820) {
      particle[i][0] = 0;
    }
    if (particle[i][0] < 0) {
      particle[i][0] = 1820;
    }
    if (particle[i][1] > 980) {
      particle[i][1] = 0;
    }
    if (particle[i][1] < 0) {
      particle[i][1] = 980;
    }
  }
}

let averagex;
let averagey;

function getDistance() {
  for (let i = 0; i < totalparticles; i++) {
    for (let ii = 0; ii < totalparticles; ii++) {
      xDistance = particle[i][0] - particle[ii][0];
      yDistance = particle[i][1] - particle[ii][1];
      pythagor = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
      averagex = (particle[i][0] + particle[ii][0]) / 2;
      averagey = (particle[i][1] + particle[ii][1]) / 2;
      if (pythagor < 11) {
        if (particle[i][0] > particle[ii][0]) {
          particle[i][0]++;
        } else {
          particle[i][0]--;
        }
        if (particle[i][1] > particle[ii][1]) {
          particle[i][1]++;
        } else {
          particle[i][1]--;
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color1.value) {
          if (particle[i][5][0][0] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color1.value) {
          if (particle[i][5][0][0] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color2.value) {
          if (particle[i][5][0][1] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color2.value) {
          if (particle[i][5][0][1] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color3.value) {
          if (particle[i][5][0][2] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color3.value) {
          if (particle[i][5][0][2] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color4.value) {
          if (particle[i][5][0][3] == 4) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color4.value) {
          if (particle[i][5][0][3] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color5.value) {
          if (particle[i][5][0][4] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color5.value) {
          if (particle[i][5][0][4] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color6.value) {
          if (particle[i][5][0][5] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color6.value) {
          if (particle[i][5][0][5] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color7.value) {
          if (particle[i][5][0][6] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color7.value) {
          if (particle[i][5][0][6] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color8.value) {
          if (particle[i][5][0][7] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color8.value) {
          if (particle[i][5][0][7] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color9.value) {
          if (particle[i][5][0][8] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color9.value) {
          if (particle[i][5][0][8] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color10.value) {
          if (particle[i][5][0][9] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color10.value) {
          if (particle[i][5][0][9] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color11.value) {
          if (particle[i][5][0][10] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color11.value) {
          if (particle[i][5][0][10] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (pythagor < particle[i][7]) {
        if (particle[ii][4] == color12.value) {
          if (particle[i][5][0][11] == 1) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] - Math.random();
            } else {
              particle[i][2] = particle[i][2] + Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] - Math.random();
            } else {
              particle[i][3] = particle[i][3] + Math.random();
            }
          }
        }
        if (particle[ii][4] == color12.value) {
          if (particle[i][5][0][11] == 2) {
            if (particle[i][0] > averagex) {
              particle[i][2] = particle[i][2] + Math.random();
            } else {
              particle[i][2] = particle[i][2] - Math.random();
            }
            if (particle[i][1] > averagey) {
              particle[i][3] = particle[i][3] + Math.random();
            } else {
              particle[i][3] = particle[i][3] - Math.random();
            }
          }
        }
      }
      if (particle[i][2] > particle[i][6]) {
        particle[i][2] = particle[i][6];
      }
      if (particle[i][3] > particle[i][6]) {
        particle[i][3] = particle[i][6];
      }
      if (particle[i][2] < -7) {
        particle[i][2] = -7;
      }
      if (particle[i][3] < -7) {
        particle[i][3] = -7;
      }
    }
  }
}

initializeFunction();

function animate() {
  requestAnimationFrame(animate);
  changePosition();
  getDistance();
  draw();
}

setTimeout(() => {
  animate();
}, "1500");
