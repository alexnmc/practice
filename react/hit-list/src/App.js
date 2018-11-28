import React, { Component } from 'react'
import axios from 'axios'
import People from './People'

class App extends Component {
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }
    
    componentDidMount(){
        
        axios.get(`https://s3.amazonaws.com/v-school/data/hitlist.json`).then(response => {
            console.log(response.data)
        
            this.setState({
                characters: response.data
            })
        })
    }


    render(){
        const mapPeople = this.state.characters.map(char => {

            return (
                <People
                    name = {char.name}
                    image = {char.image}
                />
            )
        })
           
            return (
                <div>{mapPeople}</div>
            )
    }
}

export default App