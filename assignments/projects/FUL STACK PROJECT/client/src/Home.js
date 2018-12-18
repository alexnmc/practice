import React, {Component} from 'react'
import { withPlayer } from './PlayerProvider'

class Home extends Component {
    
    constructor(){
        super()
         this.state = {
         name: '',
         


        }
    }
   
   
    handleChange = event => {
        const {name, value} = event.target

         this.setState({
             [name]: value
         })
    }

    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addPlayer(this.state)
        
    }
   
    
    
render() {
   
    return(     
   
        <div className="home">
            
            <p>SHELL GAME</p>
        
            <form className = 'form1' onSubmit={this.handleSubmit}>
                <input type="text" 
                       name="name" 
                       value={ this.state.name} 
                       onChange={ this.handleChange } 
                       placeholder= "Enter Name" />
                
                <button className = 'btn1' onClick = {this.handleSubmit}>enter</button>
            </form>  
                
        </div>
   )}
}

export default withPlayer(Home)