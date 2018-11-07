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
        var completed = document.createElement("h4")
       
        var checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.id = "box"
    
        var image = document.createElement('img')
            image.setAttribute('src', arr[i].image)
            image.setAttribute('width', '100px')
            image.setAttribute('height', '100px')
        
        
       
        title.textContent = arr[i].title
        price.textContent = "Price: " + arr[i].price+" $"
        description.textContent = "Description: " + arr[i].description
        completed.textContent = "Completed: " + arr[i].completed
        button.textContent = "Delete"

        todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(completed)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(description)
        todoContainer.appendChild(image)
        todoContainer.appendChild(button)
        

        button.todoId = todoId
        
        document.getElementById('list-container').appendChild(todoContainer)

        button.addEventListener("click", function(){
          
        axios.delete(`https://api.vschool.io/alex/todo/${this.todoId}`).then(function(response){})
      
                                        })
        checkbox.todoId = todoId
        
        var complete = arr[i].completed
        document.getElementById("box").addEventListener("click", function(){
        axios.put(`https://api.vschool.io/alex/todo/${this.todoId}`, {completed: !complete} ).then(function(response){

        })
                                           
        }) 
    
    }
}




var todoForm = document.addTodoForm
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
    newTodo.image = image
    

    axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
        
    })
})

  


   getData()

