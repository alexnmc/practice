


function most(arr){
    let count = 0
    let count2 = 0
    let final = []
    for(let i = 0; i<arr.length; i++){
      count = 0 
      for(let j = 0; j<arr.length; j++){
        if(arr[i] === arr[j]){
          count++
          if(count > count2){
            count2 = count
            final = []
            final.push(arr[i])
          }
        }
      }
    }
    

    return final
}

console.log(most([2,2,1,1]))