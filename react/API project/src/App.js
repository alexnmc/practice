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
                newItem: {}
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
                arr.push(obj2)}
    
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
            
            let  newElement = {}
            const currValue = this.state.inputValue.toUpperCase()
            this.state.currency.forEach(function(item){
                if(item.key === currValue){
                     newElement = item
                }
            })
                currValue.length  === 3 ?
                this.setState( prevState => {
            
                    return {
                    
                    newItem: newElement,
                    inputValue: '',
                    
    
                    }
             })
            :
            alert('Enter 3 letters')
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
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/exchange"  render={props => <ExchangeList {...props} mapCur={mapCur} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} newItem = {this.state.newItem}/>}/>
                </Switch>
                
                <Footer />
                
            </div>
        )
        }
    }


export default App