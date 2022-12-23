let output;
let maxcharacters;
let characters;
let reader;
let filename;

function encodeImageFileAsURL(element) {
  let file = element.files[0];
  reader = new FileReader();
  reader.readAsDataURL(file);
  filename = file.name;
}

let button = document.getElementById("textlength");

let send = document.getElementById("SEND");

let json;

let image_text = document.getElementById("text").value;

let buffer;

let blob;

let image;

let url;

send.onclick = function () {
  const endpoint = "http://localhost:8000/steganography/";

  json = JSON.stringify({
    image: reader.result,
    text: document.getElementById("text").value,
    filename: filename,
  });
  fetch(endpoint, {
    method: "post",
    body: json,
  }).catch(console.error);

  new Promise((r) => setTimeout(r, 2000));

  const getendpoint = "http://localhost:8000/encrypted_steganography/";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "encrypteddoge.png");

  fetch(getendpoint, {
    method: "get",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then(function (data) {
      blob = new Blob([data], { type: "image/png" });
      console.log(data);
    });
};

button.onclick = function () {
  url = URL.createObjectURL(blob);

  image = new Image();

  image.src = url;

  //document.getElementById("dynImg").src = url;

  document.body.appendChild(image);

  console.log(blob, url, image);
};
