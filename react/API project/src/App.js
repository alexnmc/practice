import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Home from './Home'
import About from  './About'
import Exchange from './Exchange'
import Footer from './Footer'
import ExchangeList from './ExchangeList'


class App extends Component {
        constructor(){
            super()
            this.state = {
                currency: [],
                inputValue: '',
                inputValue2: '',
                conversion: null,
                input1: '',
                input2: ''
    
            }
        }
        
        
    componentDidMount(){
                
        axios.get(`http://data.fixer.io/api/latest?access_key=4d7a09c2820310947ad3da41736dc6e7`).then(response => {
            var obj = response.data.rates
            var arr = []
                for(let i in obj){
                    const obj2 = {
                        key: i,
                        value: obj[i]
                    }
                
                        arr.push(obj2)
                }
    
                this.setState({
                    currency: arr
                    
                })
            })
        }
    
    
        handleChange = event => {
        
            this.setState({[event.target.name]: event.target.value})
        }
    
    
        handleSubmit = event => {
            event.preventDefault()
            let num1 = 0
            let num2 = 0
            let name1 = ''
            let name2 = ''
            let currValue = this.state.inputValue.toUpperCase()
            let currValue2 = this.state.inputValue2.toUpperCase()
            
            this.state.currency.forEach(function(item){
                if(item.key === currValue){
                     num1 = item.value
                     name1 = item.key
                
                } 
                if(item.key === currValue2){
                     num2 = item.value
                     name2 = item.key
                }
                
            })
               
            let result = num2/num1
         
             
            
            name1 && name2  ?
                this.setState( prevState => {
            
                    return {
                        conversion: result,
                        inputValue: '',
                        inputValue2: '',
                        input1: prevState.inputValue,
                        input2: prevState.inputValue2
                       
                    }
                })
            

            :
                
                alert('CURRENCY NOT FOUND\n\nCURRENCY NAME SHOULD BE 3 LETTERS ONLY\n\n Example: for $ enter usd')
            }


               
        
    render(){
        const mapCur = this.state.currency.map(item =>{
            return(
                <Exchange  
                    cur = {item.key}
                    val = {item.value}
                />
            )
        })
    
        return(
           
            <div>
                
                <Navbar />
                
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/exchange"  render = {props => <ExchangeList {...props} mapCur={mapCur} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}  conversion = {this.state.conversion} inputValue = {this.state.inputValue}  inputValue2= {this.state.inputValue2} input1 = {this.state.input1} input2 = {this.state.input2}/>}/>
                </Switch>
                
                <Footer />
                
            </div>
        )
    }
}


export default App