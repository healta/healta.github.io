var output;
var maxcharacters;
var characters;
let text;
var reader;

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  reader = new FileReader();
  reader.readAsDataURL(file);
}

var button = document.getElementById("textlength");

var send = document.getElementById("SEND");

send.onclick = function () {
  console.log(reader.result);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://dimitarapi.herokuapp.com/stenography/");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
  };
  xhr.send([reader.result, "hello"]);
};

//https://dimitarapi.herokuapp.com/caesar
