import React, {Component, Fragment} from 'react'
import axios from 'axios'

class Bounty extends Component {
 
    constructor(){

        super()
        this.state = {
            firstName:'' ,
            lastName:'' ,
            living: '',
            bountyAmount: '' ,
            type:'',
            toggle: true
        }
    }

    editToggler = () => {
        this.setState(prevState =>{
            return{
                toggle: !prevState.toggle
            }
        })
    }


    

    handleChange = event => {
        const {name, value} = event.target

         this.setState({
             [name]: value
         })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const updates = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            living : this.state.living,
            bountyAmount : this.state.bountyAmount,
            type : this.state.type
        }

        this.setState({
            firstName: ''
        })
        this.props.handleEdit(this.props._id, updates)
        this.editToggler()
        
    }
   
    
    render(){
        return(
         <Fragment> 
         <div>
                {this.state.toggle ? 
                    <div className = 'div1'>
                        <h1> First Name: {this.props.firstName}</h1>
                        <h1> Last Name: {this.props.lastName}</h1>
                        <h1> Living: {this.props.living}</h1>
                        <h1> Bounty Amount: {this.props.bountyAmount}</h1>
                        <h1> Type:  {this.props.type} </h1>
                        <h1> Id: {this.props._id}</h1>
                        <button onClick={() => this.props.handleDelete(this.props._id)}>Delete</button>
                        <button onClick={this.editToggler}>Edit</button>
                    </div> 
                :
                    <form onSubmit = {this.handleSubmit} className = 'formEdit'>
                        <input
                            type="text" 
                            name="firstName" 
                            value={ this.state.firstName} 
                            onChange={ this.handleChange } 
                            placeholder= "First Name"
                        />
                        <input 
                            type="text" 
                            name="lastName" 
                            value={ this.state.lastName} 
                            onChange={ this.handleChange } 
                            placeholder= "Last Name"
                        />

                        <input 
                            type="text" 
                            name="living" 
                            value={ this.state.living} 
                            onChange={ this.handleChange } 
                            placeholder= "living"
                        />

                        <input 
                            type="number" 
                            name="bountyAmount" 
                            value={ this.state.bountyAmount} 
                            onChange={ this.handleChange } 
                            placeholder= "bounty"
                        />

                        <input 
                            type="text" 
                            name="type" 
                            value={ this.state.type} 
                            onChange={ this.handleChange } 
                            placeholder= "type"
                        />

                        <button>Save</button>
                    </form>
                }
                </div>
         </Fragment>
        )
    }
}



export default Bounty