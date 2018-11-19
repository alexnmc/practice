


var box = document.getElementById("box")


document.getElementById("go").addEventListener("click", myFunction)


function myFunction(){
     if (box.style.backgroundColor === "green") {
          box.style.backgroundColor = "red";
     } else {
          box.style.backgroundColor = "green";
     }
}


document.getElementById("alex").addEventListener("click",myFunction2)


function myFunction2(){
   for( var i=0;i<=9;i++){
     document.getElementById("alex").innerHTML += " Thank you!"
   }
}
