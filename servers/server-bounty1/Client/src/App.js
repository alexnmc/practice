import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import Bounty from './Bounty'


class App extends Component {
    constructor(){
        super()
        this.state = {
            bounties : [],
            firstName:'' ,
            lastName:'' ,
            living: '',
            bountyAmount: '' ,
            type:'',
            toggle: true
        }
    }

    componentDidMount(){
        axios.get('/bounties' ).then(response => {
            console.log(response.data)
            this.setState({bounties: response.data})
        })
        
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleDelete = (id) => {
        axios.delete(`/bounties/${id}`)
            .then(response => {

                this.setState(prevState => {
                    return {
                        bounties: prevState.bounties.filter(item => item._id !== id)
                    }
            })
        })        
    }
 
   
    handleEdit = (id, updates) => {
        axios.put(`/bounties/${id}`, updates).then(response => {
            console.log(response.data)
            const updatedBounty = response.data
            this.setState(prevState => {
                return {
                    bounties: prevState.bounties.map(item => item._id === id ? updatedBounty : item )
                }
            })
            
        })
    }
    

    handleSubmit = e => {
        e.preventDefault()
        
        const newBounty = {
              firstName: this.state.firstName ,
              lastName: this.state.lastName ,
              living: this.state.living ,
              bountyAmount: this.state.bountyAmount ,
              type: this.state.type  
        }
        
        axios.post('/bounties', newBounty)
            .then(response => {
                console.log(response.data)
                this.setState(prevState => {
                    return {
                        bounties: [...prevState.bounties, response.data],
                        firstName:'' ,
                        lastName:'' ,
                        living: '',
                        bountyAmount: '' ,
                        type:''
                        
                    }
                })
            })
    }

    
    render(){
      
        let mapBounties = this.state.bounties.map(item => 
        
                    <Bounty
                        firstName = {item.firstName}
                        lastName = {item.lastName}
                        living = {item.living}
                        bountyAmount = {item.bountyAmount}
                        type =  {item.type} 
                        _id = {item._id}
                        handleDelete = {this.handleDelete}  
                        handleEdit = {this.handleEdit}
                        bounties =  {this.state.bounties}
                    />)
        

        return(
            <div >
                <form  onSubmit= {this.handleSubmit} >
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

            <button>Add Bounty</button>

        </form>
        
                {mapBounties}
            </div>
        )
    }
}

export default App