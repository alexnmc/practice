
                                     var readln = require("readline-sync")
      console.log('')
   
      var num1 = readln.question("Please eneter your first number :\n")
    console.log('')
      var num2 = readln.question("Please eneter your second number :\n")
    console.log('')
   
   
      var array=['add','sub','mul','div']
    
      var operation = readln.keyInSelect(array, "Please enter the operation to perform: add, sub, mul, div :\n")
      var i = array[operation]
        console.log('')
     
        function myFunction1(n1,n2){
          if(i ==='add'){
            console.log(`Result: ${n1+n2}`)
          }else  if(i==="sub"){
            console.log(`Result: ${n1-n2}`)
          }else  if(i==="mul"){
            console.log( `Result: ${n1*n2}`)
          }else  if(i ==='div'){
            console.log(`Result: ${n1/n2}`)
          }else{ console.log('TRY AGAIN')
          }
        }

         myFunction1(Number(num1),Number(num2))

         console.log('')