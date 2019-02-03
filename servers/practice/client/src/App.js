import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'
import Wash from  './Wash'
import Apple from './Apple'
import Business from './Business'
import TechCrunch from './TechCrunch'

class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={News}/>
                    <Route path="/about" component={Wash}/>
                    <Route path="/contact" component={Apple}/>
                    <Route path="/business" component = {Business}/>
                    <Route path = "/techcrunch" component = {TechCrunch}/>
                </Switch>
            </div>
        )
    }
}

export default App