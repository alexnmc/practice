



/*Given a list of non-negative integers and a target sum, 
 find a pair of numbers that sums to the target sum.

example : 

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]  */


function findPairForSum(array, number){
    arr2=[];
   
    for(let i=0;i<array.length;i++){
        for(let y=i;y<array.length;y++){
            if(array[i]+array[y]===number){
       
            arr2.push(array[i],array[y])
            }                        
        }  
    }
        return arr2;
}
  