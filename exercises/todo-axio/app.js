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
        var img = document.createElement('img')
        img.setAttribute('src', arr[i].imgUrl)
        img.setAttribute('width', '100px')
        img.setAttribute('height', '100px')
        
        checkbox.type = "checkbox"
        checkbox.id = "box"
       
        title.textContent = arr[i].title
        price.textContent = "Price: " + arr[i].price+" $"
        description.textContent = "Description: " + arr[i].description
        completed.textContent = "Completed: " + arr[i].completed
        
        todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(completed)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(description)
        todoContainer.appendChild(img)
        todoContainer.appendChild(button)
        button.textContent = "Delete"

        button.todoId = todoId
        
        document.getElementById('list-container').appendChild(todoContainer)

        button.addEventListener("click", function(){
          
        axios.delete(`https://api.vschool.io/alex/todo/${this.todoId}`).then(function(response){})
      
                                        })
        
        
        var complete = arr[i].completed
        document.getElementById("box").addEventListener("click", function(){
        axios.put(`https://api.vschool.io/alex/todo/${todoId}`, {completed: !complete} ).then(function(response){

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
    var img = todoForm.image.value
    var newTodo = {}
    newTodo.title = title
    newTodo.price = price
    newTodo.description = description
    newTodo.completed = completed
    newTodo.imgUrl = img
    axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
        
    })
})

  


   getData()

