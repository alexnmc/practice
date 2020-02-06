


function findDuplicate(str){
    let arr = []
    let input = str.split('')
    input.forEach(function(item,i){
    if(input.indexOf(item) !== i && !arr.includes(item)){      //indexOf(item) is the first index of the item in the array if the item exists under other index then it is a duplicate
       arr.push(item)
     }
  })
     return arr
   }
  
  console.log(findDuplicate('abbcchkk'))