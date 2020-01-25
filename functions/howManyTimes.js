


//this is a function which finds the items in an array which occurs n times


function my(arr, n){
    let arr2 = [...new Set(arr)]
    let arr3 = []
    for(let j = 0; j<arr2.length; j++){
       let count = 0
       for(let x = 0; x<arr.length; x++){
        if(arr2[j] === arr[x]){
           count++
        }
       }
       if(count === n){             
         arr3.push(arr2[j])
       }
    }
       return arr3
   }
   
   my([1,1,1,2,2,2,3,3,3,4,4], 2)
   