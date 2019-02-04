import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'
import Axios from  './Axios'
import Apple from './Apple'
import Business from './Business'
import TechCrunch from './TechCrunch'
import BBC from './BBC'
import ABC from './ABC'
import cbs from './CBS'

class App extends Component {
    render(){
        return (
            <div className = "div">
                <Navbar />
                <Switch>
                    <Route path= "/abc" component={ABC}/>
                    <Route exact path="/" component={News}/>
                    <Route path="/axios" component={Axios}/>
                    <Route path="/contact" component={Apple}/>
                    <Route path="/business" component = {Business}/>
                    <Route path = "/techcrunch" component = {TechCrunch}/>
                    <Route path = "/bbc" component = {BBC}/>
                    <Route path = "/cbs" component = {cbs}/>
                </Switch>
            </div>
        )
    }
}

export default App