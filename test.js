//$(".btn").click(function () {
//  $.get("https://dimitarapi.herokuapp.com/", function (data) {
//    console.log(data); //check data coming properly or not
//
//    //do rest of the coding accordingly
//  });
//});

var plaintext = document.getElementById("plaintext");
var encryptedtext = document.getElementById("encryptedtext");
var button = document.getElementById("button1");

button.onclick = async function () {
  console.log("click");
  const food = "please stop";

  const response = await fetch("https://dimitarapi.herokuapp.com/caesar", {
    method: "POST",
    body: food,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${reponse.status}`);
  }
  console.log("Request successful!");
};
