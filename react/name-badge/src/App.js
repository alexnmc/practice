import React , {Component} from 'react'
import Name from './Name'
import Forms from './Forms'



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
                    lname: '',
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
                <Forms
                 name={this.state.name}
                 lname={this.state.lname}
                 email={this.state.email}
                 favfood = {this.state.favfood}
                 phone = {this.state.phone}
                 place = {this.state.place}
                 about = {this.state.about}
                 color = {this.state.color}
                 handleSubmit={this.handleSubmit}
                 handleChange={this.handleChange}
                
                />
                {newPeople}
                </div>
            )
    }

}
              export default App


              