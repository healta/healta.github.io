window.addEventListener("resize", resizeCanvas, false);
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let coord_array = [];
let centerX;
let centerY;
let radius;

let smallCircleSize = 5;

function resizeCanvas() {
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  find_center();
  draw();
}

function find_center() {
  radius = Math.min(canvas.width, canvas.height) / 2;
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  init_array();
}

let speed;
let speeds = [
  1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5,
  2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6,
];

function init_array() {
  var angleStep = (2 * Math.PI) / 21;
  for (var i = 0; i < 21; i++) {
    var angle = i * angleStep;
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);
    speed = speeds[i];
    console.log(speed);
    coord_array.push({ x: x, y: y, direction: 1, speed: speed });
  }
}

let iters = 1;

function draw() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.globalAlpha = 0.4;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();

  for (var i = 0; i < 21; i++) {
    // stuff for lines
    //  ctx.strokeStyle = "blue";
    // ctx.beginPath();
    var angle = i * ((2 * Math.PI) / 21);
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);
    // ctx.moveTo(centerX, centerY);
    // ctx.lineTo(x, y);
    // ctx.stroke();

    var diagonalStartX = centerX + radius * Math.cos(angle + Math.PI);
    var diagonalStartY = centerY + radius * Math.sin(angle + Math.PI);
    // ctx.moveTo(x, y);
    //ctx.lineTo(diagonalStartX, diagonalStartY);
    //ctx.stroke();

    // stuff for cicles
    var angle = i * ((2 * Math.PI) / 21);
    var circle = coord_array[i];
    // Calculate the new position of the small circle
    circle.x += circle.speed * circle.direction * Math.cos(angle);
    circle.y += circle.speed * circle.direction * Math.sin(angle);

    // Check if the small circle has passed through the center
    var distanceFromCenter = Math.sqrt(
      Math.pow(circle.x - centerX, 2) + Math.pow(circle.y - centerY, 2)
    );
    var threshold = radius + 0.1;
    if (distanceFromCenter > threshold) {
      playReverseSound(i);
      circle.direction *= -1; // Reverse the direction
    }

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, smallCircleSize, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Connect the dots with a green line
  // ctx.strokeStyle = "green";
  //ctx.beginPath();
  //ctx.moveTo(coord_array[0].x, coord_array[0].y);
  // for (var i = 1; i < 21; i++) {
  //   ctx.lineTo(coord_array[i].x, coord_array[i].y);
  //}
  //ctx.stroke();

  if (iters < 55555) {
    iters++;
    requestAnimationFrame(draw);
  }
}
resizeCanvas();

function playReverseSound(index) {
  let path = `/misc/audio/vibraphone-key-${index}.wav`;
  let audio = new Audio(path);
  audio.volume = 0.2;
  audio.play();
}
