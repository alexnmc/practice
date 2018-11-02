




     var counter1= document.form
     counter1.addEventListener('submit', function(event){
     event.preventDefault()
    
        var goombatotal=counter1.number1.value * 5
        var bobombtotal=counter1.number2.value * 7
        var cheepcheeptotal=counter1.number3.value *11
    
        var total = Number(goombatotal)+Number(bobombtotal)+Number(cheepcheeptotal)
    
    document.getElementById('btn').textContent = total
                                         })
    
    
    var reset = document.getElementById('reset')
    reset.addEventListener('click', function function1(){ 
    counter1.number1.value = "enter"
    counter1.number2.value = "enter"
    counter1.number3.value = "enter"
    document.getElementById('btn').textContent = 0
                                    })
         












