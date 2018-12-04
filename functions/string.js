/*

 function getIndex(str){
 return str.indexOf('l');
 }
   console.log(getIndex("hello"))

function myString(str1,str2){
  console.log( str1.concat(str2).toLowerCase())
}

      myString("Hello", " World")
      
  

    function newString(str){

     var arr = str.split("")
     console.log(arr)
    }
    newString("hello how are you")

    function myFunction(str){
      var str2 = str.slice(0, 3)
       console.log(str2)
    }

     myFunction("hello world")  */

       var str = "Hello my name is Ali"
     function myString(str){ 
   
      var newStr = str.split(" ")
       newStr.splice(newStr.length-1, 1, "Alex")
       return newStr.join(" ")
        }
   
     console.log(myString(str))
   
