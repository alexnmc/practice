import React , {Component} from 'react'



class App extends Component{
    constructor(){
        super()

        this.state = {
            fName:'',
            lName:'',
            age: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value}) // this is for all the inputs ...name = 'fName' , name = 'age etc
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`A name was submitted: ${this.state.fName} ${this.state.lName} and the age is ${this.state.age}`)
    }

    render(){
        return(
        <form onSubmit = {this.handleSubmit}>
              
             <input type = 'text' 
                    placeholder = 'First Name' 
                    onChange = {this.handleChange} 
                    value = {this.state.fName}
                    name = 'fName' /> 

             <input type = 'text'
                    placeholder = 'Last Name'
                    onChange = {this.handleChange}
                    value = {this.state.fName}
                    name = 'lName' />
            
             <input type = 'number'
                    placeholder = 'Age'
                    onChange = {this.handleChange}
                    value = {this.state.age}
                    name = 'age' />

             
              <button>Submit</button>
            
            
        </form>
        )}
    }

