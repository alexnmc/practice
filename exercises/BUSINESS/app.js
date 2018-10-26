

var tag= document.getElementById("a1")
var tag2= document.getElementById("a2")


  tag.addEventListener('mouseover',myFunction1)

  function myFunction1(){
     tag.style.backgroundColor = "lightsteelblue"

   }

   tag.addEventListener('mouseout',myFunction2)

  function myFunction2(){
     tag.style.backgroundColor = "aliceblue"
    
  }

    tag2.addEventListener('mouseover',myFunction3)

  function myFunction3(){
     tag2.style.backgroundColor = "lightsteelblue"

   }

   tag2.addEventListener('mouseout',myFunction4)

  function myFunction4(){
     tag2.style.backgroundColor = "aliceblue"

  }
 
 
  

  
