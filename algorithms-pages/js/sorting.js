const canvas = document.getElementById("sorting");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth - 100;
ctx.canvas.height = window.innerHeight - 100;

var array = [55,66,44,11,22,33,77]

var height = canvas.height

console.log(height,array.length)

var sorting = document.getElementById("sortingbutton")

function draw(){
    var position_offset = 0
    ctx.fillStyle="white";
    ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fill();      
    for (i=0;i<array.length;i++){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.fillRect(position_offset, height-array[i], 10, array[i]);
        ctx.stroke(); 
        position_offset= position_offset+30
    }
    
}

function issorted(array){
    var counter = 0;
    var ii = array.length-1
    for (let i =0;i<array.length-1;i++){
        if (array[i]<=array[i+1]){
            counter++;
        }
    }

    if (counter==ii){
        return true
    }else{
        return false
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function insertionSort(array){
    console.log(array)
    for(let i = 1;i < array.length;i++){
        let ii = i - 1
        let temp = array[i]
        while (ii >= 0 && array[ii] > temp) {
            array[ii + 1] = array[ii]
          ii--
        }
        array[ii+1] = temp
      }
}

var lowest
var holder

function selectionSort(array){
    var temp = 0
    console.log(array)
    for(let i = 0;i<array.length-1;i++){
        lowest = array[i]
        for (let ii = i+1;ii<array.length;ii++){
            if(array[ii]<lowest){
                lowest = array[ii]
                temp = ii
            }
        }
        holder = array[i]
        array[i]=lowest
        array[temp]=holder
    }
}




sorting.onclick = function animate(){ 
    while(issorted(array)==false){
    selectionSort(array)
}
    draw()
    console.log(array)

}
