import React , {Component, Fragment} from 'react'
import {withAdmin} from './AdminProvider'
import data from './time.json'
import moment from 'moment' // formats the date displayed..

//this is the admins page, we can get here only with a token

class AdminPortal extends Component  {
    
    constructor(){
        super()
        this.state = {
            
            date: '',
            time: '',      //we store all the data from the inputs here and after that we send it to the database
            name: '',
            email: '',
            phone: '',
            toggle: true,
            currentId: ''
            
        }
    }
    
    
    
    componentDidMount(){        //(when the page loads the function fires)
        
        this.props.showBookings() // method comes from context, it shows all the bookings from the database in an array
    }

    
    
    editToggler = (id) => {
        this.setState(prevState =>{
            return{
                toggle: !prevState.toggle,
                currentId: id
            }
        })
    }
    
    
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    
    handleSubmit = (e, id) => {  // on submit we are sending a new booking object to the database
         e.preventDefault()
    
        const updates = {
                date: this.state.date,
                time: this.state.time,  
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
        }
        if(!updates.date.length){
            delete updates.date
        }
        if(!updates.time.length){
            delete updates.time
        }
        if(!updates.name.length){
            delete updates.name
        }
        if(!updates.email.length){
            delete updates.email
        }
        if(!updates.phone.length){
            delete updates.phone
        }
        console.log("updates object =",updates)
        
        this.props.handleEdit(this.state.currentId, updates)
        this.editToggler(null)
}
   
   
   
   render(){
        
        return (
        <Fragment>
            <div>
            
            {this.state.toggle ? 
                <div className="adminPortal">
                <h1 className= 'h1'>Bookings:</h1>
                <div >
                { this.props.bookings.map( item =>
                    <div className = "bookingList" key = {item._id} > 
                        
                        {  `Name: ${item.name.toUpperCase()}, 
                            Date: ${moment(item.date).format("MMM Do YY")}, 
                            Time: ${item.time}, Phone: ${item.phone}, 
                            Email: ${item.email}`}
                        <button className = 'deleteButton' onClick = {() => this.props.handleDelete(item._id)}>Delete</button>  
                        <button className = 'deleteButton' onClick={() => this.editToggler(item._id)}>Edit</button>
                    </div>)}
                </div>
                <button onClick = {this.props.logout}>Log out </button>
                </div>

            :

                <div className='editContainer'>
                <form onSubmit={this.handleSubmit} className = 'bookingForm'>
                    <p>Edit here:</p>
                    <input className = "date"
                        type='date' 
                        name='date'
                        value={this.state.date} 
                        onChange={this.handleChange}
                        />
                    <select 
                        name='time'
                        value={this.state.time}
                        onChange={this.handleChange}>
                        <option value = ''>Choose a Time</option>
                        {data.time.map((time, index) => <option key={time} value={time} className = {index}>{time}</option>)}
                    </select>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <input 
                        type='email'
                        name='email'
                        placeholder=' Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    <input 
                        type='number'
                        name='phone'
                        placeholder='Phone Number'
                        value={this.state.phone}
                        onChange={this.handleChange}
                        />
                    <button>Save</button>
                </form>
            
            </div>
    }
    </div>
    </Fragment>
    )
    }


}

export default  withAdmin(AdminPortal)