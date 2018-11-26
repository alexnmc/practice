import React , {Component} from 'react'
import Name from './Name'



class App extends Component{
    constructor(){
        super()

        this.state = {
            name:'',
            lname:'',
            email: '',
            favfood: '',
            phone: '',
            place: '',
            about: '',
            people:[],
            color: "red"
            
        }
    }
        
    handleChange = event => {
        
        this.setState({[event.target.name]: event.target.value})
    }

    
    handleSubmit = event => {
        event.preventDefault()
       
        const newPeople = {
            name: this.state.name,
            lname: this.state.lname,
            email: this.state.email,
            favfood: this.state.favfoods,
            phone: this.state.phone,
            place: this.state.place,
            about: this.state.about, 
            color: this.state.color 
        }
            
        if(this.state.lname.length > 3 && this.state.name.length && this.state.email.length > 3  && this.state.about.length > 3 && this.state.place.length > 3 && this.state.favfood.length > 3 && this.state.phone.length === 10){
           
        
            this.setState(prevState =>{
            
                return {
                    people : [...prevState.people ,newPeople],
                    name:'',
                    lname:'',
                    email: '',
                    favfood: '',
                    phone: '',
                    place: '',
                    about: '',
                    color: this.state.color === "red" ? "blue" : "red" 
                }
        })
        } else {
            alert('missing info')
    }
} 
  

    render(){
        
        const newPeople = this.state.people.map(item =>{
            return(
                <Name  name = {item.name}
                       lname = {item.lname}
                       email = {item.email} 
                       favfood = {item.favfood}
                       phone = {item.phone}
                       place = {item.place}
                       about = {item.about}
                       color = {item.color}
                 />
            )
        })

            return(
                <div>
                    <form className = 'form'>
                        <input type = 'text' 
                            placeholder = ' Name:' 
                            onChange = {this.handleChange} 
                            value = {this.state.name}
                            name = 'name' /> 
                        <input type = 'text'
                            placeholder = 'Last Name:'
                            onChange = {this.handleChange}
                            value = {this.state.lname}
                            name = 'lname' />
                        <input type = 'email'
                            placeholder = 'Email:'
                            onChange = {this.handleChange}
                            value = {this.state.email}
                            name = 'email' />
                        <input type = 'text'
                            placeholder = 'Favorite food:'
                            onChange = {this.handleChange}
                            value ={this.state.favfood}
                            name = 'favfood' />
                        <input type = 'number'
                            placeholder = 'Phone:'
                            onChange = {this.handleChange}
                            value ={this.state.phone}
                            name = 'phone' />
                        <input type = 'text'
                            placeholder = 'Place of birth:'
                            onChange = {this.handleChange}
                            value ={this.state.place}
                            name = 'place' />
                        <input type = 'text'
                            placeholder = 'Tell us about yourself:'
                            onChange = {this.handleChange}
                            value ={this.state.about}
                            name = 'about' 
                            className = 'inp7'/>
                         <button  onClick = {this.handleSubmit} >Submit</button>
                    
                    </form>
                    {newPeople}
                </div>
            )
    }

}
              export default App


              