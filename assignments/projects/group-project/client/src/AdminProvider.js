import React, { Component } from 'react'
import axios from 'axios'

const AdminContext = React.createContext()

class AdminProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            bookings:[] // we store all the bookings  from the database here
        }
    }

    logout = () => {
        this.setState({
            user:'',   // we logout by removing the token from state and local storage
            token: ''

        })
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    
    
    showBookings = () => {
        axios.get('/bookings').then(res => {  // get request to the database to display all the bookings on the AdminPortal page
            console.log(res.data)
        
            this.setState({
                bookings: res.data
            })

        })
    }
    
    
    handleDelete = (id) => {
        axios.delete(`/bookings/${id}`).then(res => {
                
            this.setState(prevState=>({//we use prevState so the  the requested booking gets deleted without refreshing
                    bookings: prevState.bookings.filter(item => item._id !== id)
    // filters the bookings array in state, updates state with a new array with all the items in the array which does NOT have the item._id ....
            }))
        })
    }
    
    
    
    signup = userInfo => {
        axios.post('/auth/signup', userInfo).then(res => {
            const { token, admin } = res.data
            localStorage.setItem("user", JSON.stringify(admin))//stores the token and the user  in local storage in case of page refresh...
            localStorage.setItem("token", token)
            this.setState({ user: admin, token })
            console.log(res.data)
        })
        .catch(err => alert(err.response.data.errMsg))
    }

    
    
    login = userInfo => {
        axios.post('/auth/login', userInfo).then(res => {
            
            const { token, admin } = res.data // when the token and user comes back from the database we store it in local storage
            localStorage.setItem("user", JSON.stringify(admin))
            localStorage.setItem("token", token)
            this.setState({ user: admin, token })
            console.log(res.data)
            
        })
        .catch(err => alert(err.response.data.errMsg))
    }

    render() {
        return (
            <AdminContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,    // sending all this with context
                    login: this.login,
                    logout: this.logout,
                    showBookings: this.showBookings,
                    handleDelete: this.handleDelete

                }}>
                {this.props.children}
            </AdminContext.Provider>
        )
    }
}

export default AdminProvider


export const withAdmin = C => props => (
    <AdminContext.Consumer>
        {value => <C {...props} {...value}/> }
    </AdminContext.Consumer>
)