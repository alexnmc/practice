import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'


class App extends Component {
    constructor() {
        super()
   
        this.state = {
         navbarP2 : { color :  'rgba(179, 238, 16, 0.808)'}
         }
    }
    

   
    changeColor = () => {
        if(this.state.navbarP2.color ===  'rgba(179, 238, 16, 0.808)') {
            this.setState(
                { 
                navbarP2: { color: 'rgb(255, 115, 21)'}
                }
            )
        } else {
            this.setState(
                { 
                navbarP2: { color: 'rgba(179, 238, 16, 0.808)'}
                }
            )
        }
        
   }
   
   render(){
        return (
            <div>
                <Navbar />
                
                <Switch>
                    <Route exact path="/" render = {props => <Home {...props}
                                                                changeColor = {this.changeColor}
                                                                style = {this.state}
                                                              />}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path = "/Projects" component = {Projects}/>
                </Switch>
            </div>
        )
    }
}

export default App