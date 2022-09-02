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
      if (array[i][ii] == 0 || array[i][ii] == "") {
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
      if (array[i][ii] == 1) {
        count1++;
      }
      if (array[i][ii]  == 2) {
        count2++;
      }
      if (array[i][ii]  == 3) {
        count3++;
      }
      if (array[i][ii]  == 4) {
        count4++;
      }
      if (array[i][ii]  == 5) {
        count5++;
      }
      if (array[i][ii]  == 6) {
        count6++;
      }
      if (array[i][ii]  == 7) {
        count7++;
      }
      if (array[i][ii]  == 8) {
        count8++;
      }
      if (array[i][ii]  == 9) {
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

function checkcollums(array) {
  for (let i = 0; i < array.length;i++){
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;
    var count8 = 0;
    var count9 = 0;
    for (let ii = 0; ii<array.length;ii++){
      if (array[ii][i]==1){
        count1++
      }
      if (array[ii][i]==2){
        count2++
      }
      if (array[ii][i]==3){
        count3++
      }
      if (array[ii][i]==4){
        count4++
      }
      if (array[ii][i]==5){
        count5++
      }
      if (array[ii][i]==6){
        count6++
      }
      if (array[ii][i]==7){
        count7++
      }
      if (array[ii][i]==8){
        count8++
      }
      if (array[ii][i]==9){
        count9++
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

var checks = [0,3,6]

function checkgrid1(array){
    for (let iii = 0;iii<3;iii++){
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;
    var count8 = 0;
    var count9 = 0;
    for(let ii = 0; ii<3;ii++){
      for (let i = 0;i<3;i++){
        if (array[ii+checks[iii]][i]==1){
          count1++
        }
        if (array[ii+checks[iii]][i]==2){
          count2++
        }
        if (array[ii+checks[iii]][i]==3){
          count3++
        }
        if (array[ii+checks[iii]][i]==4){
          count4++
        }
        if (array[ii+checks[iii]][i]==5){
          count5++
        }
        if (array[ii+checks[iii]][i]==6){
          count6++
        }
        if (array[ii+checks[iii]][i]==7){
          count7++
        }
        if (array[ii+checks[iii]][i]==8){
          count8++
        }
        if (array[ii+checks[iii]][i]==9){
          count9++
        }
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

function checkgrid2(array){
  for (let iii = 0;iii<3;iii++){
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;
  var count7 = 0;
  var count8 = 0;
  var count9 = 0;
  for(let ii = 0; ii<3;ii++){
    for (let i = 3;i<6;i++){
      if (array[ii+checks[iii]][i]==1){
        count1++
      }
      if (array[ii+checks[iii]][i]==2){
        count2++
      }
      if (array[ii+checks[iii]][i]==3){
        count3++
      }
      if (array[ii+checks[iii]][i]==4){
        count4++
      }
      if (array[ii+checks[iii]][i]==5){
        count5++
      }
      if (array[ii+checks[iii]][i]==6){
        count6++
      }
      if (array[ii+checks[iii]][i]==7){
        count7++
      }
      if (array[ii+checks[iii]][i]==8){
        count8++
      }
      if (array[ii+checks[iii]][i]==9){
        count9++
      }
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

function checkgrid3(array){
  for (let iii = 0;iii<3;iii++){
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;
  var count7 = 0;
  var count8 = 0;
  var count9 = 0;
  for(let ii = 0; ii<3;ii++){
    for (let i = 6;i<7;i++){
      if (array[ii+checks[iii]][i]==1){
        count1++
      }
      if (array[ii+checks[iii]][i]==2){
        count2++
      }
      if (array[ii+checks[iii]][i]==3){
        count3++
      }
      if (array[ii+checks[iii]][i]==4){
        count4++
      }
      if (array[ii+checks[iii]][i]==5){
        count5++
      }
      if (array[ii+checks[iii]][i]==6){
        count6++
      }
      if (array[ii+checks[iii]][i]==7){
        count7++
      }
      if (array[ii+checks[iii]][i]==8){
        count8++
      }
      if (array[ii+checks[iii]][i]==9){
        count9++
      }
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


function checkgrid(array){
  if (checkgrid1(array)==true && checkgrid2(array)==true && checkgrid3(array)==true){
    return true
  }else{
    return false
  }
}

var listempty= []

function searchempty(array){
  for (let i=0;i<array.length;i++){
    for (let ii=0;ii<array.length;ii++){
      if (array[i][ii]==0){
        listempty.push([i,ii])
      }
    }
  }
  return listempty
}

function isitsolved(array){
  if (checkgrid(array)==true && checkcollums(array)==true && checkrows(array)==true){
    return true
  }else{
    return false
  }
}

function changevalue(array, listempty){
  var counter = 0
  while (isfull(array) == false || checkcollums(array)==false || checkrows(array)==false || checkgrid(array)==false){
    while (counter < listempty.length){
      if (counter <0){
        counter = 0
      }
      var a = listempty[counter][0]
      var b = listempty[counter][1]
      array[a][b]++
      if(checkcollums(array)==false || checkrows(array)==false || checkgrid(array)==false){
        array[a][b]++
      }

      if (array[a][b]>9){
        array[a][b]=0
        counter = counter -1
      }else if(checkrows(array)==true && checkcollums(array)==true && checkgrid(array)==true){
        counter++
      }
    }
  }
  return array
}

var solve = document.getElementById("solve")

solve.onclick = function solve(){
   searchempty(array)
   changevalue(array= array, listempty= listempty)
  document.getElementById("1").value = array[0][0]
  document.getElementById("2").value = array[0][1]
  document.getElementById("3").value = array[0][2]
  document.getElementById("4").value = array[0][3]
  document.getElementById("5").value = array[0][4]
  document.getElementById("6").value = array[0][5]
  document.getElementById("7").value = array[0][6]
  document.getElementById("8").value = array[0][7]
  document.getElementById("9").value = array[0][8]
  document.getElementById("10").value = array[1][0]
  document.getElementById("11").value = array[1][1]
  document.getElementById("12").value = array[1][2]
  document.getElementById("13").value = array[1][3]
  document.getElementById("14").value = array[1][4]
  document.getElementById("15").value = array[1][5]
  document.getElementById("16").value = array[1][6]
  document.getElementById("17").value = array[1][7]
  document.getElementById("18").value = array[1][8]
  document.getElementById("19").value = array[2][0]
  document.getElementById("20").value = array[2][1]
  document.getElementById("21").value = array[2][2]
  document.getElementById("22").value = array[2][3]
  document.getElementById("23").value = array[2][4]
  document.getElementById("24").value = array[2][5]
  document.getElementById("25").value = array[2][6]
  document.getElementById("26").value = array[2][7]
  document.getElementById("27").value = array[2][8]
  document.getElementById("28").value = array[3][0]
  document.getElementById("29").value = array[3][1]
  document.getElementById("30").value = array[3][2]
  document.getElementById("31").value = array[3][3]
  document.getElementById("32").value = array[3][4]
  document.getElementById("33").value = array[3][5]
  document.getElementById("34").value = array[3][6]
  document.getElementById("35").value = array[3][7]
  document.getElementById("36").value = array[3][8]
  document.getElementById("37").value = array[4][0]
  document.getElementById("38").value = array[4][1]
  document.getElementById("39").value = array[4][2]
  document.getElementById("40").value = array[4][3]
  document.getElementById("41").value = array[4][4]
  document.getElementById("42").value = array[4][5]
  document.getElementById("43").value = array[4][6]
  document.getElementById("44").value = array[4][7]
  document.getElementById("45").value = array[4][8]
  document.getElementById("46").value = array[5][0]
  document.getElementById("47").value = array[5][1]
  document.getElementById("48").value = array[5][2]
  document.getElementById("49").value = array[5][3]
  document.getElementById("50").value = array[5][4]
  document.getElementById("51").value = array[5][5]
  document.getElementById("52").value = array[5][6]
  document.getElementById("53").value = array[5][7]
  document.getElementById("54").value = array[5][8]
  document.getElementById("55").value = array[6][0]
  document.getElementById("56").value = array[6][1]
  document.getElementById("57").value = array[6][2]
  document.getElementById("58").value = array[6][3]
  document.getElementById("59").value = array[6][4]
  document.getElementById("60").value = array[6][5]
  document.getElementById("61").value = array[6][6]
  document.getElementById("62").value = array[6][7]
  document.getElementById("63").value = array[6][8]
  document.getElementById("64").value = array[7][0]
  document.getElementById("65").value = array[7][1]
  document.getElementById("66").value = array[7][2]
  document.getElementById("67").value = array[7][3]
  document.getElementById("68").value = array[7][4]
  document.getElementById("69").value = array[7][5]
  document.getElementById("70").value = array[7][6]
  document.getElementById("71").value = array[7][7]
  document.getElementById("72").value = array[7][8]
  document.getElementById("73").value = array[8][0]
  document.getElementById("74").value = array[8][1]
  document.getElementById("75").value = array[8][2]
  document.getElementById("76").value = array[8][3]
  document.getElementById("77").value = array[8][4]
  document.getElementById("78").value = array[8][5]
  document.getElementById("79").value = array[8][6]
  document.getElementById("80").value = array[8][7]
  document.getElementById("81").value = array[8][8]

  console.log(array)
  let image = document.getElementById("image");
  image.src = "https://media.gettyimages.com/photos/venomous-snake-picture-id157479804"
}