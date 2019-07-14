

var arr= [1,2,3,4,5,6]

  var array = arr.map(function(item){ return item *2   })

console.log(array)

  var array2 = arr.map(function(item){ return item + ""})
 
console.log(array2)


   var arr2 = [{
   name: "Angelina Jolie",
   age: 80
},
{
   name: "Eric Jones",
   age: 2
},
{
   name: "Paris Hilton",
   age: 5
},
{
   name: "Kayne West",
   age: 16
},
{
   name: "Bob Ziroll",
   age: 100
}
] 

 var array3 = arr2.map(function(item){if(item.age>18){return item.name}else{return item.name + " is under age!"}})
 console.log(array3)
 
 
 var array4 = arr2.filter(function(item){if(item.age<18){ return item.name }})
 console.log(array4)

 
