import React, {Component} from 'react'
import {withPharma} from './PharmaProvider'



class PharmaPortal extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
}



render(){
    return(
        <div className = 'pharmaport'>
            <button onClick = {this.props.logout}>Log out </button>
        </div>
    )
}
}

export default  withPharma(PharmaPortal)