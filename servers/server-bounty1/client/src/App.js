import React, { Component } from 'react'
import axios from 'axios'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            bounties : []
        }
    }

    componentDidMount(){
        axios.get('/bounties' ).then(response => {
            console.log(response.data)
            this.setState({bounties: response.data})
        })
        
    }

   

   
    render(){

        let mapBounties = this.state.bounties.map(function(item){
            
        
        return(
            <div className = 'div1'>
              <h1> First Name: {item.firstName}</h1>
              <h1> Last Name: {item.lastName}</h1>
              <h1> Living: {item.living}</h1>
              <h1> Bounty: {item.bountyAmount}</h1>
              <h1> Type:  {item.type} </h1>
              <h1> Id: {item._id}</h1>
            </div>
       
       )

        })

        return(
            <div>
                {mapBounties}
            </div>
        )

           
    }

}

export default App