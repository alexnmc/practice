
var names = document.form1

names.addEventListener('submit', function(event){
    event.preventDefault()
    var firstname = names.name1.value +''
    var lastname = names.name2.value +''
    var age = names.age.value + ''
    alert(firstname)
})

