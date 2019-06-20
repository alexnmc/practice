import React, {Component} from 'react'
import axios from 'axios'



const Context = React.createContext()


class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            notes:[]
        }
    }

    
    getNotes(){
        
    }
    
    
    render() {
        return (
            <Context.Provider
                value={{
                   
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default UserProvider


export const withData= C => props => (
    <Context.Consumer>
        {value => <C {...props} {...value}/> }
    </Context.Consumer>
)
