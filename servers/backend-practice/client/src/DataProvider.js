import React, {Component} from 'react'
import axios from 'axios'



const Context = React.createContext()


class NotesProvider extends Component {
    constructor(){
        super()
        this.state = {
            notes:[],
            newNotes: '',
            edit:''
        }
    }

    
    
    
    saveNotes = (id) => {
        axios.post(`/notes`, {notes: this.state.newNotes,  userID: id, date: new Date()}).then(res => {
            console.log(res.data)
        })
        this.setState({
            newNotes:'',
           
        })
    }

   
    getNotes = (id) => {
            axios.get(`/notes/${id}`).then(res => { // careful with the endpoint...
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

   
    handleToggler = (id) => {
        this.state.notes.map(item => item._id === id ? item.toggle = false : item.toggle = true) 
        this.setState({
            edit: ''  // I have to re-render context so it can send the new props....
        })
    }


    handleTogglerReset = (e) => {
        e.preventDefault()
        this.state.notes.map(item => item.toggle = true) 
        this.setState({
            hey: 'me'  // I have to re-render context so it can send the new props....
        })
    }
    
    
    handleEdit = (id) => {
        const updates = {
            notes: this.state.edit,
            date: new Date()
        }
        this.handleEditSubmit(id, updates)
    }
    
    
    
    handleEditSubmit = (id, updates) => {
       
        axios.put(`/notes/${id}`, updates).then(response => {
            const updatedNotes = response.data
            this.setState(prevState => {
                return {
                    notes: prevState.notes.map(item => item._id === id ? updatedNotes : item )
                }
            })
        })
       
    }
    
    
    handleDelete = (id) => {
        axios.delete(`/notes/${id}`).then(res => {
                this.setState(prevState=>({//we use prevState so the requested booking gets deleted without refreshing
                    notes: prevState.notes.filter(item => item._id !== id)
    // filters the bookings array in state, updates state with a new array with all the items in the array which does NOT have the item._id ....
            }))
        })
    }
    
    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    saveNotes: this.saveNotes,
                    handleChange2: this.handleChange2,
                    getNotes: this.getNotes,
                    handleToggler: this.handleToggler,
                    handleEdit: this.handleEdit,
                    handleDelete: this.handleDelete,
                    handleTogglerReset: this.handleTogglerReset
                   
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
