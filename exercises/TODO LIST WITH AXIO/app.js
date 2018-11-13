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
             checkbox.id = "checkbox"
            
         let image = document.createElement('img')
             image.setAttribute('src', arr[i].imgUrl)
             image.setAttribute('width', '100px')
             image.setAttribute('height', '100px')
    
             '…lkbv'
         let editTitle = document.createElement('input')
             editTitle.id = "id"
             editTitle.placeholder = "title: " + arr[i].title
            
         let editPrice = document.createElement("input")
             editPrice.id = "id2"
             editPrice.placeholder = "price: " + arr[i].price

         let editDescription = document.createElement("input")
             editDescription.id = "id3"
             editDescription.placeholder = "description: " + arr[i].description
             
         let editImage = document.createElement("input")
             editImage.id = "id4"
             editImage.placeholder = "add new  url:"
             editImage.setAttribute('src', arr[i].imgUrl)
             editImage.setAttribute('width', '100px')
             editImage.setAttribute('height', '100px')
        
         let editButton = document.createElement('button')
             editButton.textContent = "Edit"
             editButton.todoId = todoId  
         
             editButton.addEventListener("click", function(){
                if(editButton.textContent === "Edit"){
                    todoContainer.removeChild(title)
                    todoContainer.removeChild(price)
                    todoContainer.removeChild(description)
                    todoContainer.removeChild(checkbox)
                    todoContainer.removeChild(complete1)
                    todoContainer.removeChild(image)
                    
                    todoContainer.appendChild(editTitle) 
                    todoContainer.appendChild(editPrice) 
                    todoContainer.appendChild(editDescription) 
                    todoContainer.appendChild(editImage)
                    editButton.textContent = "Save"
                }else {
                   let editTodo = {}  
                       editTodo.title = editTitle.value
                       editTodo.description = editDescription.value
                       editTodo.price = Number(editPrice.value)
                       editTodo.imgUrl = editImage.value
                 axios.put(`https://api.vschool.io/alex/todo/${todoId}`, editTodo).then(function(response){
                    console.log(response.data)
                })  
                   todoContainer.removeChild(editTitle)
                   todoContainer.removeChild(editPrice)
                   todoContainer.removeChild(editDescription)
                   todoContainer.removeChild(editImage)
                   
                   todoContainer.appendChild(title)
                   todoContainer.appendChild(price)
                   todoContainer.appendChild(description)
                   todoContainer.appendChild(complete1)
                   todoContainer.appendChild(checkbox)
                   todoContainer.appendChild(image)
                   editButton.textContent = "Edit" 
               }  
            })
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
        todoContainer.appendChild(title)
        todoContainer.appendChild(price)
        todoContainer.appendChild(description)
        todoContainer.appendChild(complete1)
        todoContainer.appendChild(checkbox)
        todoContainer.appendChild(image)
        todoContainer.appendChild(button)
        todoContainer.appendChild(editButton)
    }
}
        let todoForm = document.TodoForm
            todoForm.addEventListener("submit", function(event){
                 event.preventDefault()
        let newTodo = {}
                newTodo.title = todoForm.title.value
                newTodo.price = todoForm.price.value || 0
                newTodo.description = todoForm.description.value
                newTodo.imgUrl = todoForm.image.value
        axios.post('https://api.vschool.io/alex/todo', newTodo).then(function(response){
        console.log(response.data) 
    })
})
         getData()

