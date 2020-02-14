


var box = document.getElementById("box")

box.addEventListener("mouseover", myFunction1)
   
    function myFunction1(){

        box.style.backgroundColor = "blue"
  }

box.addEventListener("mousedown", myFunction2)

    function myFunction2(){
      
         box.style.backgroundColor = "red"

    }   

box.addEventListener("mouseup", myFunction3)

     function  myFunction3(){

      box.style.backgroundColor = "yellow"

     }



box.addEventListener("dblclick", myFunction4)

     function myFunction4(){
         box.style.backgroundColor = "green"
  }


  
window.addEventListener("scroll", myFunction5)

      function myFunction5(){

          box.style.backgroundColor = "orange"

      }


document.addEventListener('keydown', myFunction6)


  function myFunction6(event){
    if(event.which === 82){
        box.style.backgroundColor = "red"
    }else if(event.which === 71){
        box.style.backgroundColor = "green"
    }else if(event.which === 80){
        box.style.backgroundColor ="pink"
    }

    
  }