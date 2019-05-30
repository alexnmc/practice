
var calculator1 = document.myForm

calculator1.addEventListener('submit', function(event){
    event.preventDefault()
    var firstnumber = calculator1.number1.value
    var secondnumber = calculator1.number2.value
    var total = Number(firstnumber) + Number(secondnumber)
document.getElementById('res1').textContent = total
})


var calculator2 = document.myForm2

calculator2.addEventListener('submit', function(event){
    event.preventDefault()
    var firstnumber1 = calculator2.number3.value
    var secondnumber1 = calculator2.number4.value
    var total = Number(firstnumber1) - Number(secondnumber1)
document.getElementById('res2').textContent = total
})

var calculator3 = document.myForm3

calculator3.addEventListener('submit', function(event){
    event.preventDefault()
    var firstnumber2 = calculator3.number5.value
    var secondnumber2 = calculator3.number6.value
    var total = Number(firstnumber2) * Number(secondnumber2)
document.getElementById('res3').textContent = total
})

