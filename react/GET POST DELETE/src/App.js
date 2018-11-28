import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'
import TodoForm from './TodoForm'

class App extends Component {
    constructor(){
        super()
        this.state = {
             todos: [],
             title: '',
             description: ''
        }
    }
    
    componentDidMount(){
        
        axios.get(`https://api.vschool.io/bob/todo`).then(response => {
            this.setState({
                todos: response.data
            })
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
          const {name, value} = event.target

           this.setState({
               [name]: value
           })

    }

    handleSubmit = event => {
        event.preventDefault()
        const newTodo = {
            title: this.state.title
        }
        axios.post(`https://api.vschool.io/bob/todo`, newTodo).then(response => {
             this.setState(prevstate => {
                 return{
                 todos : [...prevstate.todos, response.data],
                 title: ''
                 }
             })
        })

    }

    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/bob/todo/${id}`).then(response => {
              this.setState(prevState => {
                   return{
                       todos: prevState.todos.filter(item => item._id !== id)
                   }
              })
        })
    }
    

    render(){
        const mapTodo = this.state.todos.map(item =>{
        
        return (
            <Todo
                title = {item.title}
                handleDelete = {this.handleDelete}
                id = {item._id}
                key = {item._id}
             />
        )
        })


        return(
            <div>
                <TodoForm
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    title = {this.state.title}
                />
                {mapTodo}
            </div>
        )
    }
}

export default App