

// using regex
const parsing = (str) => {
    let arr = str.split('/0+/') // str.split('0').filter(String)
    return {name: arr[0] , last: arr[1] , id: arr[2]}
}



// without regex
const parsing = (str) => {
    let arr = str.split('')
    let obj = {
        name: '',
        last: '',
        id:''
    }
    
    let count = 0
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== '0' && count === 0){
            obj.name += arr[i]
        }else if(arr[i] === '0' &&  arr[i+1] !== '0' && count === 0){
            count = 1
        }else if(arr[i] !== '0' && count === 1){
            obj.last += arr[i]
        }else if(arr[i] === '0' &&  arr[i+1] !== '0' && count === 1){
            count = 2
        }else if(arr[i] !== '0' && count === 2){
            obj.id += arr[i]
        }
    }

    return obj
}


console.log(parsing('Alexander000000000000Nemechek000000099123'))