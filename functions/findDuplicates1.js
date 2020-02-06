


function find(str){
<<<<<<< HEAD
    let arr = []
    let input = str.split('')
    input.forEach(function(item,i){
    if(input.indexOf(item) !== i && !arr.includes(item)){//indexOf(item) is the first index of the item in the array if the item exists under other index then it is a duplicate
       arr.push(item)
     }
  })
=======
   let arr = []
   let input = str.split('')
   input.forEach((item, index) => {
      if(input.indexOf(item) !== index && !arr.includes(item)){ //indexOf(item) is the first index of the item in the array if the item exists under other index then it is a duplicate
         arr.push(item)
      }
   })
>>>>>>> 89d57d3f45e3233261c5ab7efe077c56f1795a76
     return arr
   }
  
  console.log(find('abbcchkk'))