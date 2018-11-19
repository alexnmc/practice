

var count = localStorage.getItem("div");

document.getElementById("body").addEventListener("click", myFunction)

function myFunction(){
    count ++;
    localStorage.setItem("div", count)
    document.getElementById('div').textContent = count
}


