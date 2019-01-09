import React, {Component, Fragment}from 'react'
import {withAdmin} from './AdminProvider'

class Admin extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            toggle: true
           
            
        }
    }
    
    editToggler = () => {
        this.setState(prevState =>{
            return{
                toggle: !prevState.toggle  //toggle from login to signin
            }
        })
    }
    
    
    handleLogin = (e) => {     // login method, we send the username and password entered in the input fields to the database 
        e.preventDefault()
        const newAdmin = {
            username: this.state.username,
            password: this.state.password
        }
        
        this.props.login(newAdmin) // we are receiving this function from the context and we call it here 

        this.setState({
            username: '',
            password: ''
            
        })
        
    }

    
    
    handleSignup = (e) => {
        e.preventDefault()

        const newAdmin = {
            username: this.state.username,
            password: this.state.password
        }
        
        this.props.signup(newAdmin) 
        
        this.setState({
            username: '',
            password: ''
            
        })
        
        this.editToggler()
    }

    
    
    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    
   render(){
 
        return(
        <Fragment>
        <div className="admin">
            {this.state.toggle ? 
                <div>
                <form onSubmit={this.handleLogin} className = 'logIn'>
                    <h4>Admin only:</h4>
                        <input 
                            type='text' 
                            name='username'
                            placeholder='username'
                            value={this.state.username} 
                            onChange={this.handleChange}
                            />
                        
                        <input 
                            type='text'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                        
                        <button>Login</button>
                </form>
                        <button  className = 'signupButton' onClick={this.editToggler}>Sign up</button>
                </div>
            :
                 
                    <form onSubmit = {this.handleSignup} className = 'signUp'>
                        <input 
                            type='text' 
                            name='username'
                            placeholder='enter a username'
                            value={this.state.username} 
                            onChange={this.handleChange}
                            />
                        
                        <input 
                            type='text'
                            name='password'
                            placeholder='choose your password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                        <button>Submit</button>
                    </form>
                        
            }
           
        </div>
        </Fragment>
    )
    }
}

export default withAdmin(Admin)