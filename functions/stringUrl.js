
function stringifyUrl(url, query) {
    let newUrl = url +'?'
    for(let i in query){
      newUrl += `${i}=${query[i]}&`
    }
       newUrl.length-1
       return newUrl
  }
  
  
  const url = "http://localhost:8080/monkeys"
  const query = {
      color: "black",
      species: "howler"
  }
  
  stringifyUrl(url, query)