



   var counter1= document.form
counter1.addEventListener('submit', function(event){
    event.preventDefault()
    var subtotal= counter1.number1.value * 5
    var subtotal1=counter1.number2.value * 7
    var subtotal2=counter1.number3.value *11
    
    var total = Number(subtotal)+Number(subtotal1)+Number(subtotal2)
    
document.getElementById('btn').textContent = total
})

/*
var counter2= document.form
counter2.addEventListener('submit', function(event){
    event.preventDefault()
    var subtotal1= counter2.number2.value * 7
    
    var total1 =  Number(subtotal1) 
   
    final+=total1
document.getElementById('btn').textContent = final
})
    


var counter3= document.form
counter3.addEventListener('submit', function(event){
    event.preventDefault()
    var subtotal2= counter3.number3.value * 11
    
    var total2 =  Number(subtotal2) 
    
    final += total2
document.getElementById('btn').textContent = final
}) */




