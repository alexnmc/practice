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
            console.log(res.data)
        })
        this.setState({
            newNotes:''
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
            hey: 'you'  // I have to re-render context so it can send the new props....
        })
    }


    handleTogglerReset = (e) => {
        e.preventDefault()
        this.state.notes.map(item => item.toggle = true) 
        this.setState({
            hey: 'me'  // I have to re-render context so it can send the new props....
        })
    }
    
    handleEdit = (id, updates) => {
        axios.put(`/bookings/${id}`, updates).then(response => {
            response.data === 'JetSki Not Available' && alert(response.data)
            const updatedBooking = response.data
            this.setState(prevState => {
                return {
                    bookings: response.data === 'JetSki Not Available' ? prevState.bookings : prevState.bookings.map(item => item._id === id ? updatedBooking : item )
                }
            })
        })
    }
    
    handleDelete = (id) => {
        axios.delete(`/bookings/${id}`).then(res => {
                this.setState(prevState=>({//we use prevState so the requested booking gets deleted without refreshing
                    bookings: prevState.bookings.filter(item => item._id !== id)
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
