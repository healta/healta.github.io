const canvas = document.getElementById("sorting");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight - 50;

let array = [];

let height = window.innerHeight - 50;

while (array.length < window.innerWidth / 10) {
  array.push(Math.floor(Math.random() * height));
}

console.log(height, array.length);

let sorting = document.getElementById("sortingbutton");

function draw() {
  let position_offset = 0;
  ctx.fillStyle = "white";
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();
  for (i = 0; i < array.length; i++) {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fillRect(position_offset, height - array[i], 5, array[i]);
    ctx.stroke();
    position_offset = position_offset + 10;
  }
}

function issorted(array) {
  let counter = 0;
  let ii = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
      counter++;
    }
  }

  if (counter == ii) {
    return true;
  } else {
    return false;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let ii = i - 1;
    let temp = array[i];
    while (ii >= 0 && array[ii] > temp) {
      array[ii + 1] = array[ii];
      ii--;
    }
    array[ii + 1] = temp;
  }
}

let lowest;
let holder;

function selectionSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length - 1; i++) {
    lowest = array[i];
    for (let ii = i + 1; ii < array.length; ii++) {
      if (array[ii] < lowest) {
        lowest = array[ii];
        temp = ii;
      }
    }
    holder = array[i];
    array[i] = lowest;
    array[temp] = holder;
    setTimeout(function () {
      draw();
    }, 2.0 * 1000);
  }
}

function mergeSort(array) {
  console.log("soon");
}

sorting.onclick = function animate() {
  if (issorted(array) == false) {
    if (document.getElementById("bogosort").checked == true) {
      shuffleArray(array);
    } else if (document.getElementById("insertionsort").checked == true) {
      insertionSort(array);
    } else if (document.getElementById("selectionsort").checked == true) {
      selectionSort(array);
    } else if (document.getElementById("mergesort").checked == true) {
      mergeSort(array);
    }
  }
  console.log(array);
  draw();
};
