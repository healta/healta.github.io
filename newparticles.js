const canvas = document.getElementById("newparticles");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth - 100;
ctx.canvas.height = window.innerHeight - 100;

document.getElementById("button1").onclick = function blah() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;

  var newparticle = new Particles(input1, input2, input3, input4);

  console.log(newparticle);
  console.log(newparticle.color);
};

class Particles {
  constructor(color, number, maxspeed, minspeed) {
    this.color = color;
    this.number = number;
    this.maxspeed = maxspeed;
    this.minspeed = minspeed;
  }
}

document.getElementById("button4").onclick = function animate() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;

  var newparticle = new Particles(input1, input2, input3, input4);
  requestAnimationFrame(animate);
  // adding tails through a layer of diffusion
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();
  ctx.fillStyle = newparticle.color;
  ctx.beginPath();
  ctx.arc(111, 111, 3, 0, Math.PI * 2);
  ctx.fill();
};

document.getElementById("button5").onclick = function print() {
  console.log(newparticle);
};
