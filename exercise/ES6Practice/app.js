function collectAnimals(...animals) {  
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 






function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

             



const vacation = {  
                location: "Burly Idaho",
                duration: "2 weeks"
}
    const {location, duration} = vacation
             



    function parseSentence(){
        console.log(`We're going to have a good time in ${location} for ${duration}`)
    }             

     parseSentence()


    function returnFirst(items){
        const [firstItem] = items

        return firstItem
    }

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

    
    
    
    function returnFavorites(arr){
        
        let [firstFav, secondFav, thirdFav] = arr
        return `My top three favorite activities are,  ${firstFav} ,   ${secondFav} , and   ${thirdFav}`;
    }
    
     console.log(returnFavorites(favoriteActivities))
      
     
     
     
     
     function combineAnimals(...arr){  
         let x =[]
        arr.forEach((arr)=>{
            x = [...x, ...arr]
         })
             return x
    }
    
    const realAnimals = ["dog", "cat", "mouse"];
    const magicalAnimals = ["jackolope"];
    const mysteriousAnimals = ["platypus"];
    
    console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))
    




    const product = (...numbers) => numbers.reduce((acc, number) =>  acc * number, 1 )
    console.log(product(1,2,3,4,5))


    const unshift = (array, ...array2) =>[...array,...array2]
    console.log(unshift([1,2,3,4], 2,3,4,5,6))


   
    function populatePeople(names){
        return names.map(function(name){
            name = name.split(" ");
       var[firstName,lastName]=name
            
       var obj = {
                firstName, 
                lastName, 
            }
                 console.log(obj)

          })
          
    
    }
      
           

    

   populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])