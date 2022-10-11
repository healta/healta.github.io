var output;
var maxcharacters;
var characters;
var reader;
var filename;

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  reader = new FileReader();
  reader.readAsDataURL(file);
  filename = file.name;
}

var button = document.getElementById("textlength");

var send = document.getElementById("SEND");

var json;

var image_text = document.getElementById("text").value;

var buffer;

var blob;

var image;

var url;

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
