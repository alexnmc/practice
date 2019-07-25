import React from 'react'
import Home from './Home'
import Button1 from './Button1'
import ButtonProvider from './ButtonProvider'


const App = (props) => {
    return (
        <ButtonProvider>
          <Home/>
          <Button1/>
        </ButtonProvider>
        )
}
               

export default  App