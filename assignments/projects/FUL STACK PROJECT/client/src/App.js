import React, {Component} from 'react'
import Body from './Body'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from  './About'
import Navbar from './Navbar'




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        } 
    }
    
    render(){
        return(
            <div> 
                
                <Navbar/>
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/body"  component = {Body}/>
                </Switch>

            </div>
        )
    }
}

export default App