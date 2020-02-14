

function sum(a,b){
    return a+b
}
try{ sum(1 ,1)}

catch(err){ console.log(err)}


var user = {username: "sam", password: "123abc"};

function login(usr, passw){
  if(user.username !== usr || user.password !== passw){
     throw new Error ("username must match passw") 
  }else{
    console.log("login succesfull!")
  }
}

try{login("sam", '123abc')}
  catch(err){
    console.log(err)
}
