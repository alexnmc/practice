import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import BBC from './BBC'
import Saved from './Saved'

class App extends Component {
    render(){
        return (
            <div className = "div">
                <Navbar />
                <Switch>
                    <Route path= "/bbc" component={BBC}/>
                    <Route path= "/saved" component={Saved}/>
                    
                </Switch>
            </div>
        )
    }
}

export default App