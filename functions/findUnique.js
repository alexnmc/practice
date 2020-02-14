

function findUnique(arr){
    let arr2 = []
    let arr3 = []
    arr.forEach((item,i) => {
        if(arr.indexOf(item) !== i && !arr2.includes(item)){           //indexOf(item) is the first index of the item in the array if the item exists under other index then it is a duplicate
            arr2.push(item)
        }
    })
    
    arr.forEach(item => {
        if(!arr2.includes(item)){
            arr3.push(item)
        }
    })
     
       return arr3
  }
  
  console.log(findUnique([1,2,3,3,4,4,5,5,6]))