/*
Iterate over each value in arr, invoke cb with each value, then place the result of that invocation into a new array.

Return the new array.

Example:

const mappedArray = map([1, 2, 3], (n) => {
  return n * 2;
});

// mappedArray === [2, 4, 6] */

function map(arr, cb) {
    arr2=[];
    for(let i=0;i<arr.length;i++){arr2.push(cb(arr[i]))} 
    return arr2;
    }
    
         