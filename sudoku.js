var array = [];

var button = document.getElementById("calculate_sudoku");

button.onclick = function load_array() {
  if (array.length < 1) {
    array1 = [
      document.getElementById("1").value,
      document.getElementById("2").value,
      document.getElementById("3").value,
      document.getElementById("4").value,
      document.getElementById("5").value,
      document.getElementById("6").value,
      document.getElementById("7").value,
      document.getElementById("8").value,
      document.getElementById("9").value,
    ];
    array2 = [
      document.getElementById("10").value,
      document.getElementById("11").value,
      document.getElementById("12").value,
      document.getElementById("13").value,
      document.getElementById("14").value,
      document.getElementById("15").value,
      document.getElementById("16").value,
      document.getElementById("17").value,
      document.getElementById("18").value,
    ];
    array3 = [
      document.getElementById("19").value,
      document.getElementById("20").value,
      document.getElementById("21").value,
      document.getElementById("22").value,
      document.getElementById("23").value,
      document.getElementById("24").value,
      document.getElementById("25").value,
      document.getElementById("26").value,
      document.getElementById("27").value,
    ];
    array4 = [
      document.getElementById("28").value,
      document.getElementById("29").value,
      document.getElementById("30").value,
      document.getElementById("31").value,
      document.getElementById("32").value,
      document.getElementById("33").value,
      document.getElementById("34").value,
      document.getElementById("35").value,
      document.getElementById("36").value,
    ];
    array5 = [
      document.getElementById("37").value,
      document.getElementById("38").value,
      document.getElementById("39").value,
      document.getElementById("40").value,
      document.getElementById("41").value,
      document.getElementById("42").value,
      document.getElementById("43").value,
      document.getElementById("44").value,
      document.getElementById("45").value,
    ];
    array6 = [
      document.getElementById("46").value,
      document.getElementById("47").value,
      document.getElementById("48").value,
      document.getElementById("49").value,
      document.getElementById("50").value,
      document.getElementById("51").value,
      document.getElementById("52").value,
      document.getElementById("53").value,
      document.getElementById("54").value,
    ];
    array7 = [
      document.getElementById("55").value,
      document.getElementById("56").value,
      document.getElementById("57").value,
      document.getElementById("58").value,
      document.getElementById("59").value,
      document.getElementById("60").value,
      document.getElementById("61").value,
      document.getElementById("62").value,
      document.getElementById("63").value,
    ];
    array8 = [
      document.getElementById("64").value,
      document.getElementById("65").value,
      document.getElementById("66").value,
      document.getElementById("67").value,
      document.getElementById("68").value,
      document.getElementById("69").value,
      document.getElementById("70").value,
      document.getElementById("71").value,
      document.getElementById("72").value,
    ];
    array9 = [
      document.getElementById("73").value,
      document.getElementById("74").value,
      document.getElementById("75").value,
      document.getElementById("76").value,
      document.getElementById("77").value,
      document.getElementById("78").value,
      document.getElementById("79").value,
      document.getElementById("80").value,
      document.getElementById("81").value,
    ];

    array = [
      array1,
      array2,
      array3,
      array4,
      array5,
      array6,
      array7,
      array8,
      array9,
    ];
    console.log(array);
    console.log(checkcollums, isfull, checkrows);
  }
};

function isfull(array) {
  for (let i = 0; i < 9; i++) {
    for (let ii = 0; ii < 9; ii++) {
      if (ii == 0 || ii == "") {
        return false;
      }
    }
  }
  return true;
}

function checkrows(array) {
  for (let i = 0; i < 9; i++) {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;
    var count8 = 0;
    var count9 = 0;
    for (let ii = 0; ii < 9; ii++) {
      if (ii == 1) {
        count1++;
      }
      if (ii == 2) {
        count2++;
      }
      if (ii == 3) {
        count3++;
      }
      if (ii == 4) {
        count4++;
      }
      if (ii == 5) {
        count5++;
      }
      if (ii == 6) {
        count6++;
      }
      if (ii == 7) {
        count7++;
      }
      if (ii == 8) {
        count8++;
      }
      if (ii == 9) {
        count9++;
      }
    }
    if (
      count1 > 1 ||
      count2 > 1 ||
      count3 > 1 ||
      count4 > 1 ||
      count5 > 1 ||
      count6 > 1 ||
      count7 > 1 ||
      count8 > 1 ||
      count9 > 1
    ) {
      return false;
    }
  }
  return true;
}

function checkcollums(array) {}
