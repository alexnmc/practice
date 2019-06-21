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

    
    
    
    saveNotes = (id) => {
        
        axios.post(`/notes`, {notes: this.state.newNotes,  userID: id}).then(res => {
            console.log(res)
        })
        this.setState({
            newNotes:''
        })
        console.log('state', this.state.notes)
    }

   
    getNotes = (id) => {
            axios.get(`/notes/${id}`).then(res => { // careful with the endpoint
            console.log('res.data',res.data)
            this.setState(prevState => {
                return {
                    notes: res.data
                }
            })
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
                    handleChange2: this.handleChange2,
                    getNotes: this.getNotes
                   
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
