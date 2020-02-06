
//Create a function that takes two strings 
//and returns true if the first argument ends with the second argument; 
//otherewise return false .

function checkEnding(str1, str2) {
	var end = str1.slice(-str2.length)
	if(end === str2) {
		return true
	} else {
		return false
	}
}