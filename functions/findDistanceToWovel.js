

/*Write a function that takes in a string and for each character, 
returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]
distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]
distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]
distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]*/

function find(str){
    let arr = str.split('')
    let vow = 'aeiou'
    let arr2 = []
    let arr3 = []
    for(let i = 0; i < arr.length; i++){
        if(!vow.includes(arr[i])){
            for(let j = 0; j < arr.length; j++){
                if(vow.includes(arr[j])){
                    arr2.push(Math.abs(i-j)) // I put all the distances in an array
                    arr3[i] = Math.min(...arr2)  // find the smallest distance in that array
                }   
            }
            arr2 = [] // using this array to get the minimum distance
        }else{
            arr3[i] = 0
      }
    }
    return arr3
  }

     find('bbabb')
