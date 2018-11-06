function getData(){
    axios.get('https://api.vschool.io/alex/todo').then(function(response){
        listTodos(response.data)
    })
}

function listTodos(arr){
    for(let i = 0; i < arr.length; i++){

        var todoId = arr[i]._id
        var todoContainer = document.createElement('div')
        
        todoContainer.classList.add('todo')
        var title = document.createElement('h3')
        var button = document.createElement('button')
        var price = document.createElement('h3')
        var description = document.createElement('h4')
        title.textContent = arr[i].title
        price.textContent = "Price: " + arr[i].price+" $"
        description.textContent = "Description: " + arr[i].description
        
        todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(description)
        todoContainer.appendChild(button)
        button.textContent = "Delete"

        button.todoId = todoId
        
        document.getElementById('list-container').appendChild(todoContainer)

        button.addEventListener("click", function(){
          
        axios.delete(`https://api.vschool.io/alex/todo/${this.todoId}` )
      
                                        })
    
    }
}




var todoForm = document.addTodoForm
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
     
    var title = todoForm.title.value
    var price = todoForm.price.value || 0  
    var description = todoForm.description.value
    var newTodo = {}
    newTodo.title = title
    newTodo.price = price
    newTodo.description = description
    axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
        
    })
})





   
    
    


getData()

