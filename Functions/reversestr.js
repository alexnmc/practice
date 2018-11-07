
function reverseStr(str){

    var string = str.split("");
    var revArr = string.reverse();
    var finalStr = revArr.join("");
   return finalStr
}

console.log(reverseStr("Hello World"))
