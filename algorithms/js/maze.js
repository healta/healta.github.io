const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");
ctx.canvas.width = innerWidth;
ctx.canvas.height = innerHeight;

let array = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let visited = [];

function isavailable(position) {
  let a = position[0];
  let b = position[1];

  visited.push([a, b]);

  let available = [];

  array[a][b] = 1;

  if (a == 0 && b == 0) {
    if (array[a + 1][b] == 0) {
      available.push([a + 1, b]);
    }
    if (array[a][b + 1] == 0) {
      available.push([a, b + 1]);
    }
    return available;
  }

  if (a == array.length - 1 && b == array.length - 1) {
    if (array[a - 1][b] == 0) {
      available.push([a - 1, b]);
    }
    if (array[a][b - 1] == 0) {
      available.push([a, b - 1]);
    }
    return available;
  }

  if (a == 0 && b > 0 && b < array.length - 1) {
    if (array[a][b - 1] == 0) {
      available.push([a, b - 1]);
    }
    if (array[a][b + 1] == 0) {
      available.push([a, b + 1]);
    }
    if (array[a + 1][b] == 0) {
      available.push([a + 1, b]);
    }
    return available;
  }

  if (a > 0 && a < array.length - 1 && b == 0) {
    if (array[a - 1][b] == 0) {
      available.push([a - 1, b]);
    }
    if (array[a + 1][b] == 0) {
      available.push([a + 1, b]);
    }
    if (array[a][b + 1] == 0) {
      available.push([a, b + 1]);
    }
    return available;
  }

  if (a == array.length - 1 && b > 0 && b < array.length - 1) {
    if (array[a - 1][b] == 0) {
      available.push([a - 1, b]);
    }
    if (array[a][b - 1] == 0) {
      available.push([a, b - 1]);
    }
    if (array[a][b + 1] == 0) {
      available.push([a, b + 1]);
    }
    return available;
  }

  if (a > 0 && a < array.length - 1 && b == array.length - 1) {
    if (array[a - 1][b - 1] == 0) {
      available.push([a, b - 1]);
    }
    if (array[a - 1][b] == 0) {
      available.push([a - 1, b]);
    }
    if (array[a + 1][b] == 0) {
      available.push([a + 1, b]);
    }
    return available;
  }

  if (a == 0 && b == array.length - 1) {
    if (array[a + 1][b] == 0) {
      available.push([a + 1, b]);
    }
    if (array[a][b - 1] == 0) {
      available.push([a, b - 1]);
    }
    return available;
  }

  if (a == array.length - 1 && b == 0) {
    if (array[a - 1][b] == 0) {
      available.push([a - 1, b]);
    }
    if (array[a][b + 1] == 0) {
      available.push([a, b + 1]);
    }
    return available;
  }

  if (a > 0 && a < array.length - 1 && b > 0 && b < array.length - 1) {
    if (array[a + 1][b] == 0) {
      available.push([a + 1, b]);
    }
    if (array[a - 1][b] == 0) {
      available.push([a - 1, b]);
    }
    if (array[a][b + 1] == 0) {
      available.push([a, b + 1]);
    }
    if (array[a][b - 1] == 0) {
      available.push([a, b - 1]);
    }
    return available;
  }

  return false;
}

function draw() {
  pass;
}

button = document.getElementById("sortingbutton");

let path = [[0, 0]];

let options = isavailable(path[path.length - 1]);

let pick = 0;

button.onclick = function () {
  while (path.length != 0) {
    if (options != false) {
      pick = Math.floor(Math.random() * options.length);
      console.log(pick, options);
      path.push(options[pick]);
      options = isavailable(path[path.length - 1]);
    } else {
      path.pop();
      if (path.length != 0) {
        options = isavailable(path[path.length - 1]);
      }
    }
  }
  console.log(array);
};
