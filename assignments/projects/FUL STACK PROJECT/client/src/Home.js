import React, {Component} from 'react'
import { withPlayer } from './Context/PlayerProvider'
import { withGame } from './Context/GameProvider'

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
        this.props.reset()
        this.props.history.push('/body')
    }
   
    
    
render() {
    console.log(this.props)
    return (     
   
        <div className="home">
            
            <p>SHELL GAME</p>
        
            <form className = 'form1' onSubmit={this.handleSubmit}>
                <input type="text" 
                       name="name" 
                       value={ this.state.name} 
                       onChange={ this.handleChange } 
                       placeholder= "Enter Name" />
                
                <button className = 'btn1'>enter</button>
            </form>  
                
        </div>
   )}
}

export default withGame(withPlayer(Home))
