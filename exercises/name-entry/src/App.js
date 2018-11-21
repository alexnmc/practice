import React , {Component} from 'react'



class App extends Component{
    constructor(){
        super()

        this.state = {
            name:'',
            people: []
        
            
        }
    }
        
    handleChange = event => {
        
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleSubmit = event => {
        event.preventDefault()
        const newPeople = this.state.name
            
        this.setState(prevState => {
            return {
                people : [...prevState.people, newPeople]
                
            }
        })
    }
    
    resetFunction = event => {
        event.preventDefault()
    this.setState(prevState => {
        return {
                people: prevState.people.splice(1)
            }
        
    })
    } 

    
    
    render(){
          
        const mapNewPeople = this.state.people.map((item) => {
            return(
                <li>{item}</li>
            )
        })

            return(
                <form>
                  
                    <input type = 'text' 
                        placeholder = ' Name' 
                        onChange = {this.handleChange} 
                        value = {this.state.name}
                        name = 'name' /> 
                     <button  onClick = {this.handleSubmit}  >Submit</button>
                     <button onClick = {this.resetFunction}>Delete</button>
                     <h1>{this.state.name}</h1>
                     <ul>{mapNewPeople}</ul>
                     
                </form>
                     
            )
        
        
    }

}
              export default App