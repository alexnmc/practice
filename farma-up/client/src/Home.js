import React, {Component} from 'react'
import axios from 'axios'


const openGeocoder = require('node-open-geocoder');

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
           
            city: JSON.parse(localStorage.getItem("city")) || {},
            county: JSON.parse(localStorage.getItem("county")) || {},
            name: '',
            email: '',
            phone: '',
            date: new Date(),
            time:'',
            medication: ''
            
        }
    }


    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    
    getLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            openGeocoder().reverse(position.coords.longitude, position.coords.latitude)
                .end((err, res) => {       
                        if(err){
                            alert('Locatie necunuscuta')
                        }  
                        if(res){
                            localStorage.setItem("city", JSON.stringify(res.address.city))
                            localStorage.setItem("county", JSON.stringify(res.address.county))
                        }
                             
                })
            }
        )
    }

    
    handleSubmit = (e) => {  // on submit we are sending a new booking object to the database
        e.preventDefault()
        const {date, name, email, phone, medication, city, county} = this.state
        axios.post('/message', {date, name, email, phone, medication, city, county}).then(res => {
            alert(res.data +' Nume: '+ name +'  medicament: '+ medication)
        })
        
        this.setState({
            city: '',
            county: '',
            name: '',
            email: '',
            phone: '',
            date:'',
            medication: ''
        })
       
    }
    
    
    
    
    
    componentDidMount(){
       this.getLocation()
    }
    
        render(){
            return(
                <div>
                    <div className='bookingContainer'>
                        <form className = 'bookingForm' onSubmit={this.handleSubmit}  >
                            <input 
                                type='text'
                                name='name'
                                placeholder='Nume'
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                            <input 
                                type='email'
                                name='email'
                                placeholder='Adresa e-mail'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            <input 
                                type='number'
                                name='phone'
                                placeholder=' Telefon'
                                value={this.state.phone}
                                onChange={this.handleChange}
                                required
                            />

                            <input 
                                type='text'
                                name='medication'
                                placeholder='Medicament'
                                value={this.state.medication}
                                onChange={this.handleChange}
                                required
                            />
                            <button className = "button1">Trimite</button>
                        </form>
                    </div>
                 </div>              
            )
        }
}

       
        export default Home