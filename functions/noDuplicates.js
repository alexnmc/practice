
//Create a function which removes all duplicate letters from a string.



function noDuplicates(str) {
    let empty = []
    let arr = str.split('')
    for(let i = 0; i<arr.length; i++) {
     if(!empty.includes(arr[i])){
       empt.push(arr[i])
     }
      }
    
    return empt.join('')
  }
  
  noDuplicates('stringgggg')