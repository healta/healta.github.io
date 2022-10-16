const canvas = document.getElementById("cities");
const ctx = canvas.getContext("2d");
ctx.canvas.width = innerWidth / 2;
ctx.canvas.height = innerHeight / 2.2;

const canvas1 = document.getElementById("cities1");
const ctx1 = canvas1.getContext("2d");
ctx1.canvas.width = innerWidth / 2;
ctx1.canvas.height = innerHeight / 2.2;

const canvas2 = document.getElementById("cities2");
const ctx2 = canvas2.getContext("2d");
ctx2.canvas.width = innerWidth / 2;
ctx2.canvas.height = innerHeight / 2.2;

const canvas3 = document.getElementById("cities3");
const ctx3 = canvas3.getContext("2d");
ctx3.canvas.width = innerWidth / 2;
ctx3.canvas.height = innerHeight / 2.2;

var start = document.getElementById("calculate_cities");
startvalue = false;
var array = [];
var pointer = 1;
var array1 = [];
var array2 = [];
var array3 = [];
var two_swap = [];

var guessX = 0;
var guessY = 0;

//stores user's click on canvas
function storeGuess(event) {
  if (startvalue == false) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;

    array.push([guessX, guessY, pointer, false]);
    array1.push([guessX, guessY, pointer, false]);
    array2.push([guessX, guessY, pointer, false]);
    array3.push([guessX, guessY, pointer, false]);

    ctx.fillStyle = "Black";
    ctx.beginPath();
    ctx.arc(guessX, guessY, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx1.beginPath();
    ctx1.arc(guessX, guessY, 3, 0, Math.PI * 2);
    ctx1.fill();
    ctx2.beginPath();
    ctx2.arc(guessX, guessY, 3, 0, Math.PI * 2);
    ctx2.fill();
    ctx3.beginPath();
    ctx3.arc(guessX, guessY, 3, 0, Math.PI * 2);
    ctx3.fill();
    pointer++;
  }
}

start.onclick = function () {
  if (startvalue == false) {
    array[array.length - 1][2] = 0;
    array1[array1.length - 1][2] = 0;
    array2[array2.length - 1][2] = 0;
    array3[array3.length - 1][2] = 0;
  }
  startvalue = true;
  draw();
  for (let i = 0; i < array.length; i++) {
    two_swap.push(array[i][2]);
  }
};

var node_pointer = 1;
var node_pointer1 = 1;
var node_pointer2 = 1;
var node_pointer3 = 1;

var last_pointed = 0;
var last_pointed1 = 0;
var last_pointed2 = 0;
var last_pointed3 = 0;

var targetkeeper = 0;
var targetkeeper1 = 0;
var targetkeeper2 = 0;
var targetkeeper3 = 0;

var targetmemory = 0;
var targetmemory1 = 0;
var targetmemory2 = 0;
var targetmemory3 = 0;

var tourlenght = 0;
var tourlenght1 = 0;
var tourlenght2 = 0;
var tourlenght3 = 0;

function draw() {
  tourlenght = 0;
  tourlenght1 = 0;
  tourlenght2 = 0;
  tourlenght3 = 0;

  ctx.fillStyle = "white";
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();

  ctx1.fillStyle = "white";
  ctx1.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx1.fill();

  ctx2.fillStyle = "white";
  ctx2.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx2.fill();

  ctx3.fillStyle = "white";
  ctx3.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx3.fill();

  for (let i = 0; i < array.length; i++) {
    ctx.fillStyle = "Black";
    ctx.beginPath();
    ctx.arc(array[i][0], array[i][1], 3, 0, Math.PI * 2);
    ctx.fill();

    ctx1.fillStyle = "Black";
    ctx1.beginPath();
    ctx1.arc(array[i][0], array[i][1], 3, 0, Math.PI * 2);
    ctx1.fill();

    ctx2.fillStyle = "Black";
    ctx2.beginPath();
    ctx2.arc(array[i][0], array[i][1], 3, 0, Math.PI * 2);
    ctx2.fill();

    ctx3.fillStyle = "Black";
    ctx3.beginPath();
    ctx3.arc(array[i][0], array[i][1], 3, 0, Math.PI * 2);
    ctx3.fill();
  }

  last_pointed = 0;
  last_pointed1 = 0;
  last_pointed2 = 0;
  last_pointed3 = 0;

  for (let i = 0; i < array.length; i++) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(array[last_pointed][0], array[last_pointed][1]);

    node_pointer = array[i][2];
    last_pointed = node_pointer;
    ctx.lineTo(array[node_pointer][0], array[node_pointer][1]);
    ctx.stroke();

    ctx1.strokeStyle = "green";
    ctx1.beginPath();
    ctx1.moveTo(array1[last_pointed1][0], array1[last_pointed1][1]);

    node_pointer1 = array1[i][2];
    last_pointed1 = node_pointer1;
    ctx1.lineTo(array1[node_pointer1][0], array1[node_pointer1][1]);
    ctx1.stroke();

    ctx2.strokeStyle = "green";
    ctx2.beginPath();
    ctx2.moveTo(array2[last_pointed2][0], array2[last_pointed2][1]);

    node_pointer2 = array2[i][2];
    last_pointed2 = node_pointer2;
    ctx2.lineTo(array1[node_pointer2][0], array1[node_pointer2][1]);
    ctx2.stroke();

    ctx3.strokeStyle = "green";
    ctx3.beginPath();
    ctx3.moveTo(array3[last_pointed3][0], array3[last_pointed3][1]);

    node_pointer3 = array3[i][2];
    last_pointed3 = node_pointer3;
    ctx3.lineTo(array3[node_pointer3][0], array3[node_pointer3][1]);
    ctx3.stroke();

    tourlenght =
      tourlenght +
      Math.sqrt(
        Math.pow(array[node_pointer][1] - array[i][1], 2) +
          Math.pow(array[i][0] - array[node_pointer][0], 2)
      );

    tourlenght1 =
      tourlenght1 +
      Math.sqrt(
        Math.pow(array1[node_pointer1][1] - array1[i][1], 2) +
          Math.pow(array1[i][0] - array1[node_pointer1][0], 2)
      );

    tourlenght2 =
      tourlenght2 +
      Math.sqrt(
        Math.pow(array2[node_pointer2][1] - array2[i][1], 2) +
          Math.pow(array2[i][0] - array2[node_pointer2][0], 2)
      );

    tourlenght3 =
      tourlenght3 +
      Math.sqrt(
        Math.pow(array3[node_pointer3][1] - array3[i][1], 2) +
          Math.pow(array3[i][0] - array3[node_pointer3][0], 2)
      );
  }
}

var swap = document.getElementById("swap");

swap.onclick = function random_swap() {
  var x = 0;
  var y = 0;
  var buffer = 0;

  x = Math.floor(Math.random() * array.length - 1);
  y = Math.floor(Math.random() * array.length - 1);

  buffer = array[x][2];
  array[x][2] = array[y][2];
  array[y][2] = buffer;

  x = Math.floor(Math.random() * array.length - 1);
  y = Math.floor(Math.random() * array.length - 1);

  buffer = array1[x][2];
  array1[x][2] = array1[y][2];
  array1[y][2] = buffer;

  draw();
  draw1();
};
