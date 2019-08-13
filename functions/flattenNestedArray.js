

let result = [] 
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// or you cand declare the result arr like this: 


function flatten(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result)
    } else {
      result.push(arr[i])
    }
  }
  return result
}