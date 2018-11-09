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
        var complete1 = document.createElement("h4")
       
        var checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            
    
        var image = document.createElement('img')
            image.setAttribute('src', arr[i].imgUrl)
            image.setAttribute('width', '100px')
            image.setAttribute('height', '100px')
        
        
       
        title.textContent = arr[i].title
        if(arr[i].completed){
            title.classList.add("strikethrough")
        }
        price.textContent = "Price: " + arr[i].price+" $"
        description.textContent = "Description: " + arr[i].description
        complete1.textContent = "Completed: " + arr[i].completed
        button.textContent = "Delete"

        button.todoId = todoId
        
        document.getElementById('list-container').appendChild(todoContainer)
        button.addEventListener("click", function(){
          
        axios.delete(`https://api.vschool.io/alex/todo/${this.todoId}`).then(function(response){})
      
                                        })
        checkbox.todoId = todoId
        
        if(arr[i].completed){checkbox.checked = true}
        checkbox.addEventListener("change", function(){
            var complete = {completed: this.checked}
            
        axios.put(`https://api.vschool.io/alex/todo/${this.todoId}`,complete).then(function(response){
                      console.log(response)
        })
                                           
        }) 
        todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(complete1)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(description)
        todoContainer.appendChild(image)
        todoContainer.appendChild(button)
    
    }
}

    var todoForm = document.TodoForm
    todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    var title = todoForm.title.value
    var price = todoForm.price.value || 0  
    var description = todoForm.description.value
    var image = todoForm.image.value
    
    var newTodo = {}
    
    newTodo.title = title
    newTodo.price = price
    newTodo.description = description
    newTodo.imgUrl = image
    

    axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
        
    })
})

  


   getData()

