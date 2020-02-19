


// function which returns the most frequent element from an array
function mostFrequent(arr){
    let count = 0
    let count2 = 0
    let item 
    for(let i = 0; i<arr.length; i++){
      count = 0 
      for(let j = 0; j<arr.length; j++){
        if(arr[i] === arr[j]){
          count++
          if(count > count2){
            count2 = count
            item = arr[i]
          }
        }
      }
    }
    return item
}

console.log(mostFrequent([2,2,1,1]))



// this function returns all the highest occuring elements in a new array
function mostFrequent2(arr){
    let arr2 = []
    let arr3 = []
    let arr4 = []
    let final = []
    
    for(let i = 0; i < arr.length; i++){ // pushes all elements in an array once
        if(!arr2.includes(arr[i])){
          arr2.push(arr[i])
          arr3.push([])
        }
      for(let j = 0; j<arr2.length; j++){ // checks if there are any other elements mathching the one in the new arr and pushes all of them in a 3rd array
        if(arr[i] === arr2[j]){
          arr3[j].push(arr[i])
        }
        arr4.push(arr3[j].length)
      }
      
    }
      arr3.forEach(item => item.length === Math.max(...arr4) ? final.push(item[0]) : null)
      return final
  }