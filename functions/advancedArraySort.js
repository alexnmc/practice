

function sort(arr){
  let arr2 = []
  let arr3 = []
  for(let i = 0; i < arr.length; i++){ // pushes all elements in an array once
      if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
        arr3.push([])
      }
    for(let j = 0; j<arr2.length; j++){ // checks if there are any other elements mathching the one in the new arr and pushes all of them in a 3rd array
      if(arr[i] === arr2[j]){
        arr3[j].push(arr[i])
      }
    }
  }
   console.log(arr3)
}

  
  
  sort([4,1,1,2,2,3,3,1,2,3])  // this function takes in an array of numbers and returns a new array with subarrays containing the same values in the same array