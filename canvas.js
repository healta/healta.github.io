const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
 
let y = []
let array = []
let yy = []
let bufferArray=[]
let zz =[]


for (let i = 0; i<80; i++){
    y = Array.from({length:80}, () => Math.round(Math.random()))
    array.push(y)
}



const arrayZero =() =>{
    let arr1 = []
    for (let i = 0; i<80; i++){
        yy = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        arr1.push(yy)
    }
    return arr1
}



function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    
    
    
    for (let i = 0; i<80; i++){
        for (let ii=0;ii<80;ii++){
            try{
                if (array[i][ii] == 1){
                 ctx.fillRect(i*10,ii*10,10,10)
                }
        }catch(e){}
        }
        
        }
    

    bufferArray = arrayZero();
    
    
    for (let i=0; i<80; i++){
        for (let ii=0;ii<80;ii++){
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


    
    
    bufferArray = arrayZero();
    
    
}



let intervalId = window.setInterval(function(){
   animate()
 }, 10);


