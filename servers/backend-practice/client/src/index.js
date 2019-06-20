import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserProvider from './UserProvider'
import './style.css'


ReactDOM.render(
        
    <UserProvider>  
     <App/>
    </UserProvider>,    
    
document.getElementById('root'))
