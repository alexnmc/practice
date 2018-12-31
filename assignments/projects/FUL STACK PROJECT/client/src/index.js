import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style.css'
import PlayerProvider from './Context/PlayerProvider'
import Game from './Context/GameProvider'





ReactDOM.render (

<BrowserRouter>
<PlayerProvider>
<Game>
<App/>
</Game>
</PlayerProvider>
</BrowserRouter>,

document.getElementById('root'))