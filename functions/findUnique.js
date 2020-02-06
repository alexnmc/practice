


function findUnique(arr){
    let arr2 = []
    let arr3 = []
   
    for(let i = 0; i<arr.length; i++){
      for(let j = i+1; j<arr.length; j++){ // second loop starts onde index from i so it doesn't check against itself
        if(arr[i] === arr[j] && !arr2.includes(arr[i])){
          arr2.push(arr[i])
            if(!arr2.includes(arr[i])){
                arr3.push(arr[i])
            }
        }
       }
    }

    for(let y = 0; y<arr.length; y++){
        if(!arr2.includes(arr[y])){
            arr3.push(arr[y])
        }
    }
    
     
     
    
    return arr3
  }
  
  console.log(findUnique([1,2,3,3,4,4,5,5,6]))