var array = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

var visited= []

function isavailable(position){
    var a = position[0]
    var b = position[1]

    visited.push([a,b])

    var available = []

    array[a][b]=1

    if (a == 0 && b == 0){
        if (array[a+1][b]==0){
            available.push([a+1,b])
        }
        if (array[a][b+1]==0){
            available.push([a,b+1])
        }
        return available
    }

    if(a==array.length-1 && b == array.length-1){
        if (array[a-1][b]==0){
            available.push([a-1,b])
        }
        if (array[a][b-1]==0){
            available.push([a,b-1])
        }
        return available
    }

    if (a==0 &&b>0&&b<array.length-1){
        if(array[a][b-1]==0){
            available.push([a,b-1])
        }
        if (array[a][b+1]==0){
            available.push([a,b+1])
        }
        if(array[a+1][b]==0){
            available.push([a+1,b])
        }
        return available
    }

    if(a>0 && a < array.length-1 && b ==0){
        if(array[a-1][b]==0){
            available.push([a-1,b])
        }
        if (array[a+1][b]==0){
            available.push([a+1,b])
        }
        if(array[a][b+1]==0){
            available.push([a,b+1])
        }
        return available
    }

    if(a==array.length-1 && b > 0 && b<array.length-1){
        if(array[a-1][b]==0){
            available.push([a-1,b])
        }
        if(array[a][b-1]==0){
            available.push([a,b-1])
        }
        if(array[a][b+1]==0){
            available.push([a,b+1])
        }
        return available
    }

    if(a>0 && a < array.length-1 && b==array.length-1){
        if(array[a-1][b-1]==0){
            available.push([a,b-1])
        }
        if(array[a-1][b]==0){
            available.push([a-1,b])
        }
        if(array[a+1][b]==0){
            available.push([a+1,b])
        }
        return available
    }

    if (a==0&&b==array.length-1){
        if (array[a+1][b]==0){
            available.push([a+1,b])
        }
        if (array[a][b-1]==0){
            available.push([a,b-1])
        }
        return available
    }

    if(a==array.length-1 &&b==0){
        if(array[a-1][b]==0){
            available.push([a-1,b])
        }
        if(array[a][b+1]==0){
            available.push([a,b+1])
        }
        return available
    }

    if(a>0&& a<array.length-1&&b>0 &&b < array.length-1){
        if(array[a+1][b]==0){
            available.push([a+1,b])
        }
        if(array[a-1][b]==0){
            available.push([a-1,b])
        }
        if(array[a][b+1]==0){
            available.push([a,b+1])
        }
        if(array[a][b-1]==0){
            available.push([a,b-1])
        }
        return available
    }

    return false

}







button = document.getElementById("sortingbutton")

var path = [[0,0]]

var options = isavailable(path[path.length - 1])

var pick = 0


button.onclick = function(){
    while (path.length != 0){

        if (options!= false){
            pick = Math.floor(Math.random() * (options.length))
            console.log(pick,options)
            path.push(options[pick])
            options = isavailable(path[path.length-1])

        }else{
            path.pop()
            if (path.length!=0){
                options = isavailable(path[path.length-1])
            }
        }

    }
console.log(array)
}