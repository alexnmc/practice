



function countCode(string) {           // this function checks if the word "code" or "co e" is in the string in the argument
        string.toUpperCase()
        var splitStr = string.split('')
        let count = 0;
        for(let i = 0; i < splitStr.length-3; i++){
                if(splitStr[i] === "c" && splitStr[i+1] === "o" && splitStr[i+3] === "e"){
                count ++
                }
            }
                return count;
}    