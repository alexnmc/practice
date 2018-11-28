import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'


export const {Provider, Consumer} = React.createContext()
i

ReactDOM.render(

<Provider value = {{theme: "dark"}}>
<App />
</Provider>



document.getElementById('root'))