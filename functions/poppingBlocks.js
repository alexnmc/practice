
/*

When two blocks of the same "type" are adjacent to each other, the entire contiguous block disappears (pops off). If this occurs, this can allow previously separated blocks to be in contact with each other, setting off a chain reaction. This will continue until each block is surrounded by a different block.

Here's a demonstration:

["A", "B", "C", "C", "B", "D", "A"]
 The two adjacent Cs pop off

["A", "B", "B", "D", "A"]
 Two adjacent Bs pop off

["A", "D", "A"]
 No more blocks can be popped off


*/

function finalResult(arr) {
  let count = 0
	for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
      for(let j = i; j<arr.length; j++){
        count++
        if(arr[j] !== arr[j+1]){
            arr.splice(i, count)
            i -= count
            count = 0
            break
        }
     }
    }
  }
    return arr
}


/* another option..not that great

function finalResult(arr) {
	for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[i+1] && arr[i] === arr[i+2] && arr[i] !== arr[i+3]){
      arr.splice(i,3)
      if(arr.length > 0){
        i -= 3
      }
  }
    else if(arr[i] === arr[i+1] && arr[i]){
      arr.splice(i,2)
        if(arr.length > 0){
        i -= 2
      }
    }
  }
  return arr
}
*/











