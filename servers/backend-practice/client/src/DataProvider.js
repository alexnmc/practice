import React, {Component} from 'react'
import axios from 'axios'



const Context = React.createContext()


class NotesProvider extends Component {
    constructor(){
        super()
        this.state = {
            notes:[],
            newNotes: ''
        }
    }

    
    handleSubmit = (e) => {
       e.preventDefault()
       
    }


    
    saveNotes = (id) => {
        axios.post(`/notes`, {notes: this.state.newNotes,  userID: id}).then(res => {
            console.log(res)
        })
    }
    
    
    
    handleChange2 = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    
    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    saveNotes: this.saveNotes,
                    handleChange2: this.handleChange2
                   
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default NotesProvider


export const withData= C => props => (
    <Context.Consumer>
        {value => <C {...props} {...value}/> }
    </Context.Consumer>
)
