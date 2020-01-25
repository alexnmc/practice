


function reverse(str) {
	let j = 0
  let str2 = ''
  let arr = str.split(' ')
	for(i = 0; i < arr.length; i++){
	   if(arr[i].length >= 5){
       j = i
     arr2 = arr[i].split('')
     arr2.reverse()
     str2 =  arr2.join('')
    arr.splice( j , 1, str2)}}
    return arr.join(' ')


}


reverse('the dogggggggg is big')