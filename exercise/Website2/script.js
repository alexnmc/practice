

  document.getElementById('yo').addEventListener("click", myFunction)

 function myFunction(){
document.getElementById('text').innerHTML += "  Hello, welcome to my website! " 
}

  var body = document.getElementById('yo2')

  document.getElementById('btn').addEventListener("click", myFunction2)


  function myFunction2(){

if(  body.style.backgroundColor ==="red"){body.style.backgroundColor="grey"}
else if(body.style.backgroundColor==="grey"){body.style.backgroundColor='blue'}
else{body.style.backgroundColor = "red"}}


 document.getElementById('btn2').addEventListener("click", myFunction3)

 function myFunction3(){
if(document.getElementById('text').style.backgroundColor ==="red"){document.getElementById('text').style.backgroundColor='yellow'}
else{document.getElementById('text').style.backgroundColor = "red"}
  }

document.getElementById('one').addEventListener("click", myFunction4)

  function myFunction4(){

if(document.getElementById('two').style.backgroundColor==="red"){document.getElementById('two').style.backgroundColor='white'}
else{document.getElementById('two').style.backgroundColor='red'}

  }

document.getElementById('two').addEventListener("click", myFunction5)

 function myFunction5(){
for(i=0;i<1000;i++){document.getElementById('two').innerHTML += " JESUS IS LORD " }

     }
