function getData(){
    axios.get('https://api.vschool.io/alex/todo').then(function(response){
        listTodos(response.data)
    })
}

function listTodos(arr){
    for(let i = 0; i < arr.length; i++){

    
        var todoContainer = document.createElement('div')
        
        todoContainer.classList.add('todo')
        var title = document.createElement('h3')
        var button = document.createElement('button')
        var price = document.createElement('h3')
        
        title.textContent = arr[i].title
        price.textContent = "Price: " + arr[i].price+" $"
        
        
        todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(button)
        button.textContent = "Delete"

        document.getElementById('list-container').appendChild(todoContainer)

        
        }
    }




var todoForm = document.addTodoForm
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
     
    var title = todoForm.title.value
    var price = todoForm.price.value || 0  
    
    var newTodo = {}
    newTodo.title = title
    newTodo.price = price
    axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
        
    })
})


   
    
    


getData()

