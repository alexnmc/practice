

                              var readln = require("readline-sync")
  
  console.log(' ')
var name = readln.question("May I have your name?\n\n")

console.log(' ')
var age = readln.question("How old are you?\n\n")
 console.log(' ')

 var color = readln.question("What is your favorie color?\n\n")
 console.log('')
   

var msg = name.toUpperCase()+ " is " + age + " years old and his favorite color is " + color +". "
console.log(msg)
var long = msg.length  
console.log(" This  string is " + long + " characters long.")
console.log(" ")

 var number = readln.question('Enter a number below please:\n\n')

 var newstring = msg.slice(number)
console.log("")
 console.log(newstring)