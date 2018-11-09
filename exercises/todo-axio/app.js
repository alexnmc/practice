function getData(){
    axios.get('https://api.vschool.io/alex/todo').then(function(response){
        listTodos(response.data)
    })
}

function listTodos(arr){
    for(let i = 0; i < arr.length; i++){
        
         let todoId = arr[i]._id
         let todoContainer = document.createElement('div')
        
             todoContainer.classList.add('todo')
        
         let title = document.createElement('h3')
             title.textContent = arr[i].title
             if(arr[i].completed){
                title.classList.add("strikethrough")
             }
         
         let button = document.createElement('button')
             button.textContent = "Delete"
             button.todoId = todoId
         
         let price = document.createElement('h3')
             price.textContent = "Price: " + arr[i].price+" $"
         
         let description = document.createElement('h4')
             description.textContent = "Description: " + arr[i].description
         
         let complete1 = document.createElement("h4")
             complete1.textContent = "Completed: " + arr[i].completed
       
         let checkbox = document.createElement("input")
             checkbox.type = "checkbox"
             checkbox.todoId = todoId
            
    
         let image = document.createElement('img')
             image.setAttribute('src', arr[i].imgUrl)
             image.setAttribute('width', '100px')
             image.setAttribute('height', '100px')
        
         let editButton = document.createElement('button')
             editButton.textContent = "Edit"
             editButton.todoId = todoId  
            
    
        
        document.getElementById('list-container').appendChild(todoContainer)
        button.addEventListener("click", function(){
        axios.delete(`https://api.vschool.io/alex/todo/${this.todoId}`).then(function(response){})
      
                                        })
        
        
        if(arr[i].completed){checkbox.checked = true}
        checkbox.addEventListener("change", function(){
            let complete = {completed: this.checked}
        axios.put(`https://api.vschool.io/alex/todo/${this.todoId}`,complete).then(function(response){
                      console.log(response)
        })
                                           
        }) 


        editButton.addEventListener("click", function(){
            if (editButton.textContent === "Edit"){
                editButton.textContent = "Submit"
                } else {
                editButton.textContent ="Edit"
                }
    
           })
        
           todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(complete1)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(description)
        todoContainer.appendChild(image)
        todoContainer.appendChild(button)
        todoContainer.appendChild(editButton)
    
    }
}
    

      

    let todoForm = document.TodoForm
    todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    let title = todoForm.title.value
    let price = todoForm.price.value || 0  
    let description = todoForm.description.value
    let image = todoForm.image.value
    
    let newTodo = {}
    
    newTodo.title = title
    newTodo.price = price
    newTodo.description = description 
    newTodo.imgUrl = image
    

    axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
        
    })
})

  


   getData()

