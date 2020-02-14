



function isPalindrome(str){
    var newStr = str.match(/[a-z]/gi).join('').toLowerCase()
    return newStr === newStr.split('').reverse().join('')
}
                    
    console.log(isPalindrome('Star Rats!'))