


/*
 function fibonacci(n) {
       var nums =[0,1];
       var total = 0;
       for(var i = 0; i <= n; i++) {
           if(i >= 2) {
               nums.push(nums[i - 2] + nums[i - 1])
       }
       total += nums[i]}
       console.log(total)
 }
     fibonacci(5)
    

 
    function countChar(str){
        var mf = 1;
        var m = 0;
        var item;
        for (var i = 0; i < str.length; i++){
           for (var j = i; j < str.length; j++){    
            if(str[i] == str[j]){
            m++};
                if (mf < m){
                mf = m;              // I'm not sure how it works ... 
            item = str[i];
            }
           }
                m=0;
        }
    Console.log( mf);
    }
    countChar("hello")       



function reverseStr(str){

             var string = str.split("");
             var revArr = string.reverse();
             var finalStr = revArr.join("");
            return finalStr
}

    console.log(reverseStr("Hello World"))

   
   
    function checkForNumberInString(arr){
        var newArr= []
        for(let i=0;i<arr.length;i++){
         for(let j=0;j<arr[i].length;j++){
            if(Number(arr[i][j])==arr[i][j]){
                j=arr[i].length;
                newArr.push(arr[i])
            }
          }
        }
         return newArr
    }
                                        


        function randomPassword(length) {
            var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
            var pass = "";
            for (var i = 0; i < length; i++) {
            var y = Math.floor(Math.random()*chars.length)
                pass += chars[y];
            }
                return pass;
        }

                console.log(randomPassword(10)) 

        
        function countCode(string) {           // this function checks if the word "code" or "co e" is in the string in the argument
                    string.toUpperCase()
                    var splitStr = string.split('')
                    let count = 0;
                    var newArr = [];
                    for(let i = 0; i < splitStr.length-3; i++){
                    if(splitStr[i] === "c" && splitStr[i+1] === "o" && splitStr[i+3] === "e"){
                        count ++;
                      }
                    }
                    return count;
                  }    */
                  
        function isPalindrome(str){
            var newStr = str.match(/[a-z]/gi).join('').toLowerCase()
            return newStr === newStr.split('').reverse().join('')
        }
                            
            console.log(isPalindrome('Star Rats!'))