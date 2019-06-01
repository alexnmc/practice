function find(str){
    let arr = []
    let arr2 = str.split('')
    for(let i = 0; i<arr2.length; i++){
      for(let j = i+1; j<arr2.length; j++){ // second loop starts onde index from i so it doesnt check against itself
        console.log(i,j)
        if(arr2[i] === arr2[j] && !arr.includes(arr2[i])){
          arr.push(arr2[i])
        }
      }
    }
     return arr
  }
  