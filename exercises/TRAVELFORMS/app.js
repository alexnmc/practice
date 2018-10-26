
var names = document.Form1

names.addEventListener('submit', function(event){
    event.preventDefault()
    var firstname = names.name1.value 
    var lastname = names.name2.value 
    var age = names.age.value 
    var gender = names.male1.value
    var location = names.loc.value
    
    var arr=[]
    var diet =document.querySelectorAll("input[name=diet1]:checked");
    
    for(let i = 0;i<diet.length;i++){
       arr.push(diet[i].value)
     }
    
    
    alert(`${firstname}  ${lastname}`+" " +Number(age)+" "+`${gender}`+' '+`${location}`+'  '+`${arr}`)
})

