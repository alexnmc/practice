

//Create a function that takes two strings as arguments 
//and returns the number of times the first string is found in the second string.



function charCount(myChar, str) {
	let count = 0;
	for(let i = 0; i<str.length; i++){
		if(str[i] === myChar){
			count++;
		}
	}
	return count;
}