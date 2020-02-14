let arr = [
    {city: "Dallas" , state: 'TX'},
    {city: "Miami" , state: 'FL'},
    {city: "Tampa" , state: 'FL'},
    {city: "Houston" , state: 'TX'},
]

const format = (array) => {
    const result = {}
    for(let i = 0; i <array.length; i++){
        !result[array[i].state] ? result[array[i].state] = [array[i].city] : result[array[i].state].push(array[i].city)
    }
    console.log(result)
}


    format(arr)
