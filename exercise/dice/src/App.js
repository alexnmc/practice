import React , {Component} from 'react'
import DiceBox from './DiceBox'
import './Style.css'


class App extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            number5: 0,
        }
    }
    

    randomNum = () => {
        this.setState({
            number1 : Math.floor(Math.random()*5)+1,
            number2 : Math.floor(Math.random()*5)+1,
            number2 : Math.floor(Math.random()*5)+1,
            number3 : Math.floor(Math.random()*5)+1,
            number4 : Math.floor(Math.random()*5)+1,
            number5 : Math.floor(Math.random()*5)+1
        })
    }
     render(){
    return (
        <DiceBox numbers = {this.state} rand = {this.randomNum}/>
    )

    }
}


export default App