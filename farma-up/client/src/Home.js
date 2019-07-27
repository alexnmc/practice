import React, {Component} from 'react'

const openGeocoder = require('node-open-geocoder');

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
           
            city: JSON.parse(localStorage.getItem("city")) || {},
            county: JSON.parse(localStorage.getItem("county")) || {},
            
        }
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
    
    
    
    componentDidMount(){
       this.getLocation()
       console.log(this.state)
    }
    


        
    
    
    
    
    
        render(){
            return(
                <div></div>
            )
        }
}

       
        export default Home