import React, { Component } from 'react'
import {withUser} from './UserProvider'




class Home extends Component {
    render(props){
        return (
            <div className = "home">
               <button  className = 'logout' onClick = {this.props.logout}>Log out</button>
            </div>
        )
    }
}

export default  withUser(Home)
