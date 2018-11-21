import React , {Component} from 'react'
import DiceBox from './DiceBox'
import './Style.css'


class App extends Component{
    constructor(){
        super()

        this.state = {
            number1: 1,
            number2: 1,
            number3: 1,
            number4: 1,
            number5: 1,
        }
    }
    
    randomNum = () => {
        this.setState({
            number1 : Math.floor(Math.random()*6)+1,
            number2 : Math.floor(Math.random()*6)+1,
            number3 : Math.floor(Math.random()*6)+1,
            number4 : Math.floor(Math.random()*6)+1,
            number5 : Math.floor(Math.random()*6)+1
        })
    }
     render(){
    return (
        <DiceBox numbers = {this.state} rand = {this.randomNum}/>
    )

    }
}


export default App