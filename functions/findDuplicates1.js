


function find(str){
   let arr = []
   let input = str.split('')
   input.forEach((item, index) => {
      if(input.indexOf(item) !== index && !arr.includes(item)){ //indexOf(item) is the first index of the item in the array if the item exists under other index then it is a duplicate
         arr.push(item)
      }
   })
     return arr
   }
  
  console.log(find('abbcchkk'))