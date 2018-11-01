
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        myFunctionDoSomethingWithData(data)
    }
};

xhr.open("GET", "https://vschool-cors.herokuapp.com?url=http://api.vschool.io/pokemon", true);
xhr.send()

  function  myFunctionDoSomethingWithData(data){
    
    var pokemon = data.objects[0].pokemon
    console.log(pokemon[0])
    document.getElementById("box").innerHTML = pokemon

  }


