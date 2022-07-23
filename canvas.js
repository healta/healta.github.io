const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let widthCanvas = 1000;
let heightCanvas = 1000;

let y = []
let array = []
let yy = []
let bufferArray=[]
var pause_state = 1;

for (let i = 0; i<100; i++){
    y = Array.from({length:100}, () => Math.round(Math.random()))
    array.push(y)
}

let reset = document.getElementById("reset");

reset.onclick = function reset(){
    array = []
    for (let i = 0; i<100; i++){
        y = Array.from({length:100}, () => Math.round(Math.random()))
        array.push(y)
    }
};







console.log("Hello there!")

const arrayZero =() =>{
    let arr1 = []
    for (let i = 0; i<100; i++){
        yy = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        arr1.push(yy)
    }
    return arr1
}

static = arrayZero()


 let cameraOffset = { x: window.innerWidth/1000, y: window.innerHeight/1000 }
 let cameraZoom = 1
 let MAX_ZOOM = 5
 let MIN_ZOOM = 0.1
 let SCROLL_SENSITIVITY = 0.0005
 
 function draw(controlArray){
     canvas.width = 1000
     canvas.height = 1000
     
     // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
     ctx.translate( window.innerWidth / 2, window.innerHeight / 2 )
     ctx.scale(cameraZoom, cameraZoom)
     ctx.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y )


     ctx.clearRect(0,0,widthCanvas, heightCanvas);
     ctx.fillStyle = "grey";
     ctx.fillRect(0, 0, widthCanvas, heightCanvas);
     ctx.fillStyle = "yellow";
     
     
     
     for (let i = 0; i<100; i++){
         for (let ii=0;ii<100;ii++)    
             if (array[i][ii] == 1){
              ctx.fillRect(i*10,ii*10,10,10)
             }

         }
    

         
    for (let i=0;i<1000;i= i+10){

    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 1000);
    ctx.stroke();
    ctx.moveTo(0,i)
    ctx.lineTo(1000,i)
    ctx.stroke()
    }
    
 
     bufferArray = arrayZero();
     
     
     for (let i=0; i<100; i++){
         for (let ii=0;ii<100;ii++){
             let neighbour=0;
             try{
                 if (array[i+1][ii+1]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i-1][ii-1]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i+1][ii-1]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i-1][ii+1]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i][ii+1]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i][ii-1]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i+1][ii]==1){
                     neighbour ++;
                 }
             }catch (e){}
             try{
                 if (array[i-1][ii]==1){
                     neighbour ++;
                 }
             }catch (e){}
     
     
     
             if (array[i][ii] == 1 && neighbour == 0) {
                 bufferArray[i][ii]=controlArray[9];
             }else if (array[i][ii] == 1 && neighbour == 1){
                 bufferArray[i][ii]=controlArray[10];
             }else if (array[i][ii] == 1 && neighbour == 2){
                 bufferArray[i][ii]=controlArray[11];
             }else if (array[i][ii] == 1 && neighbour == 3){
                 bufferArray[i][ii]=controlArray[12];
             }else if (array[i][ii] == 1 && neighbour ==4){
                 bufferArray[i][ii]=controlArray[13];
             }else if (array[i][ii] == 1 && neighbour == 5){
                 bufferArray[i][ii]=controlArray[14];
             }else if (array[i][ii] == 1 && neighbour ==6){
                 bufferArray[i][ii]=controlArray[15];
             }else if (array[i][ii] == 1 && neighbour ==7){
                 bufferArray[i][ii]=controlArray[16];
             }else if (array[i][ii] == 1 && neighbour ==8){
                 bufferArray[i][ii]=controlArray[17];

             }else if (array[i][ii] == 0 && neighbour ==0){
                 bufferArray[i][ii]=controlArray[0];
             }else if (array[i][ii] == 0 && neighbour ==1){
                 bufferArray[i][ii]=controlArray[1];
             }else if (array[i][ii] == 0 && neighbour ==2){
                 bufferArray[i][ii]=controlArray[2];
             }else if (array[i][ii] == 0 && neighbour ==3){
                 bufferArray[i][ii]=controlArray[3];
             }else if (array[i][ii] == 0 && neighbour ==4){
                 bufferArray[i][ii]=controlArray[4];
             }else if (array[i][ii] == 0 && neighbour ==5){
                 bufferArray[i][ii]=controlArray[5];
             }else if (array[i][ii] == 0 && neighbour ==6){
                 bufferArray[i][ii]=controlArray[6];
             }else if (array[i][ii] == 0 && neighbour ==7){
                 bufferArray[i][ii]=controlArray[7];
             }else if (array[i][ii] == 0 && neighbour ==8){
                 bufferArray[i][ii]=controlArray[8];
             }
         }
     }
         
 
     array = bufferArray
    }

 
 // Gets the relevant location from a mouse or single touch event
 function getEventLocation(e)
 {
     if (e.touches && e.touches.length == 1)
     {
         return { x:e.touches[0].clientX, y: e.touches[0].clientY }
     }
     else if (e.clientX && e.clientY)
     {
         return { x: e.clientX, y: e.clientY }        
     }
 }
 
 
 let isDragging = false
 let dragStart = { x: 0, y: 0 }
 
 function onPointerDown(e)
 {
     isDragging = true
     dragStart.x = getEventLocation(e).x/cameraZoom - cameraOffset.x
     dragStart.y = getEventLocation(e).y/cameraZoom - cameraOffset.y
 }
 
 function onPointerUp(e)
 {
     isDragging = false
     initialPinchDistance = null
     lastZoom = cameraZoom
 }
 
 function onPointerMove(e)
 {
     if (isDragging)
     {
         cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
         cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
     }
 }
 
 function handleTouch(e, singleTouchHandler)
 {
     if ( e.touches.length == 1 )
     {
         singleTouchHandler(e)
     }
     else if (e.type == "touchmove" && e.touches.length == 2)
     {
         isDragging = false
         handlePinch(e)
     }
 }
 
 let initialPinchDistance = null
 let lastZoom = cameraZoom
 
 function handlePinch(e)
 {
     e.preventDefault()
     
     let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
     let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
     
     // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
     let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2
     
     if (initialPinchDistance == null)
     {
         initialPinchDistance = currentDistance
     }
     else
     {
         adjustZoom( null, currentDistance/initialPinchDistance )
     }
 }
 
 function adjustZoom(zoomAmount, zoomFactor)
 {
     if (!isDragging)
     {
         if (zoomAmount)
         {
             cameraZoom += zoomAmount
         }
         else if (zoomFactor)
         {
             console.log(zoomFactor)
             cameraZoom = zoomFactor*lastZoom
         }
         
         cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
         cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
         
         console.log(zoomAmount)
     }
 }
 
 canvas.addEventListener('mousedown', onPointerDown)
 canvas.addEventListener('touchstart', (e) => handleTouch(e, onPointerDown))
 canvas.addEventListener('mouseup', onPointerUp)
 canvas.addEventListener('touchend',  (e) => handleTouch(e, onPointerUp))
 canvas.addEventListener('mousemove', onPointerMove)
 canvas.addEventListener('touchmove', (e) => handleTouch(e, onPointerMove))
 //canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))





setInterval(function(){

var b0 = document.getElementById("b0");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");

var s0 = document.getElementById("s0");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var s6 = document.getElementById("s6");
var s7 = document.getElementById("s7");
var s8 = document.getElementById("s8");

let controlArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

if (b0.checked == true){
    controlArray[0]=1
}else{controlArray[0]=0}
if (b1.checked == true){
    controlArray[1]=1
}else{controlArray[1]=0}
if (b2.checked == true){
   controlArray[2]=1
}else{controlArray[2]=0}
if (b3.checked == true){
    controlArray[3]=1
}else{controlArray[3]=0}
if (b4.checked == true){
    controlArray[4]=1
}else{controlArray[4]=0}
if (b5.checked == true){
    controlArray[5]=1
}else{controlArray[5]=0}
if (b6.checked == true){
    controlArray[6]=1
}else{controlArray[6]=0}
if (b7.checked == true){
    controlArray[7]=1
}else{controlArray[7]=0}
if (b8.checked == true){
    controlArray[8]=1
}else{controlArray[8]=0}

if (s0.checked == true){
    controlArray[9]=1
}else{controlArray[9]=0}
if (s1.checked == true){
    controlArray[10]=1
}else{controlArray[10]=0}
if (s2.checked == true){
    controlArray[11]=1
}else{controlArray[11]=0}
if (s3.checked == true){
    controlArray[12]=1
}else{controlArray[12]=0}
if (s4.checked == true){
    controlArray[13]=1
}else{controlArray[13]=0}
if (s5.checked == true){
    controlArray[14]=1
}else{controlArray[14]=0}
if (s6.checked == true){
    controlArray[15]=1
}else{controlArray[15]=0}
if (s7.checked == true){
    controlArray[16]=1
}else{controlArray[16]=0}
if (s8.checked == true){
    controlArray[17]=1
}else{controlArray[17]=0}


var pause = document.getElementById("pause");

console.log(pause_state)


if (pause.checked == false){
draw(controlArray)
}


}, 1);

