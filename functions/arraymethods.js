
/*
function byAge(arr){
arr.sort(function(a,b){
  return a.age-b.age;
})
console.log(arr)
}

byAge(arr = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
])


   var newArr = arr.filter(function(item){if(
       item.age > 18) {return item.name}
   })
       console.log(newArr) */

       
       
    var peopleArray = [
        {
            firstName: "Sarah",
            lastName: "Ealin",
            age: 47
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
        },
        {
            firstName: "Morty",
            lastName: "Amith",
            age: 29
        },
        {
            firstName: "Kyle",
            lastName: "Booney",
            age: 27
        },
        {
            firstName: "Pasha",
            lastName: "Datsyuk",
            age: 13
        },
        {
            firstName: "Lev",
            lastName: "Colstoy",
            age: 82
        }
    ]
    

    function myFunction(arr){
          var newArr = arr.filter(function(item){
                if(item.age>18){return item}
                   })
            newArr.sort(function(a,b){
                if(a.lastName > b.lastName){return 1}
                   })
            newArr.forEach(function(item){
                   item =  `<li>  ${item.firstName} ${item.lastName} is ${item.age} </li>`
                   console.log(item)
                   })    
    }  
     console.log(myFunction(peopleArray))