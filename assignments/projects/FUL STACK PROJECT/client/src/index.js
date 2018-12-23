import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style.css'
import PlayerProvider from './PlayerProvider'





ReactDOM.render (

<BrowserRouter>
<PlayerProvider >
<App/>
</PlayerProvider>
</BrowserRouter>,


document.getElementById('root'))