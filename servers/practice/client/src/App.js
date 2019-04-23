import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import ABC from './ABC'
import Saved from './Saved'

class App extends Component {
    render(){
        return (
            <div className = "div">
                <Navbar />
                <Switch>
                    <Route path= "/abc" component={ABC}/>
                    <Route path= "/saved" component={Saved}/>
                    
                </Switch>
            </div>
        )
    }
}

export default App