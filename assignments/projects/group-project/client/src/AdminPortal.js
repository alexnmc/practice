import React , {Component} from 'react'
import {withAdmin} from './AdminProvider'
import moment from 'moment' // formats the date displayed..

//this is the admins page, we can get here only with a token

class AdminPortal extends Component  {
    
    componentDidMount(){        //(when the page loads the function fires)
        
        
        this.props.showBookings() // method comes from context, it shows all the bookings from the database in an array
    
    }

    
   // the delete function is getting fired on the click of the delete button, which actually calls a function which calls the delete function inside of it
    render(){
        console.log(this.props)
        return (
        
            <div className="adminPortal">
            <h1 className= 'h1'>Bookings:</h1>
            <div >{ this.props.bookings.map( item =>
                <div className = "bookingList" key = {item._id} > 
                    
                    {  `Name: ${item.name.toUpperCase()}, 
                        Date: ${moment(item.date).format("MMM Do YY")}, 
                        Time: ${item.time}, Phone: ${item.phone}, 
                        Email: ${item.email}`}
                    <button className = 'deleteButton' onClick = {() => this.props.handleDelete(item._id)}>Delete</button>  
                
                </div>)}
            </div>
            <button onClick = {this.props.logout}>Log out </button>
            </div>
        )
    }


}

export default  withAdmin(AdminPortal)