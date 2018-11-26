

/*Iterate over arr and pass its values to cb one by one.

Hint: you will be invoking cb multiple times (once for each value in the array).

Do not use the built-in forEach method for this.  Use a regular for loop.
*/


function forEach(arr, cb) {

    for(let i=0;i<arr.length;i++){cb(arr[i])}
      
    }
     
     