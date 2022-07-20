const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let widthCanvas = 1000;
let heightCanvas = 1000;

let y = []
let array = []
let yy = []
let bufferArray=[]

for (let i = 0; i<100; i++){
    y = Array.from({length:100}, () => Math.round(Math.random()))
    array.push(y)
}



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
 
 function draw()
 {
     canvas.width = 1000;
     canvas.height = 1000
     console.log(window.innerHeight)
     
     // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
     ctx.translate( window.innerWidth / 2, window.innerHeight / 2 )
     ctx.scale(cameraZoom, cameraZoom)
     ctx.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y )


     ctx.clearRect(0,0,widthCanvas, heightCanvas);
     ctx.fillStyle = "black";
     ctx.fillRect(0, 0, widthCanvas, heightCanvas);
     ctx.fillStyle = "white";
     
     
     
     for (let i = 0; i<100; i++){
         for (let ii=0;ii<100;ii++)    
             if (array[i][ii] == 1){
              ctx.fillRect(i*10,ii*10,10,10)
             }

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
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 1 && neighbour == 1){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 1 && neighbour == 2){
                 bufferArray[i][ii]=1;
             }else if (array[i][ii] == 1 && neighbour == 3){
                 bufferArray[i][ii]=1;
             }else if (array[i][ii] == 1 && neighbour ==4){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 1 && neighbour == 5){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 1 && neighbour ==6){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 1 && neighbour ==7){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 1 && neighbour ==8){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==0){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==1){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==2){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==3){
                 bufferArray[i][ii]=1;
             }else if (array[i][ii] == 0 && neighbour ==4){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==5){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==6){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==7){
                 bufferArray[i][ii]=0;
             }else if (array[i][ii] == 0 && neighbour ==8){
                 bufferArray[i][ii]=0;
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
 canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))
 
 let intervalId = window.setInterval(function(){
    draw()
    }, 100);