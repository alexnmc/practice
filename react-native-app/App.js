import React from 'react'
import Home from './Home'

import ButtonProvider from './ButtonProvider'


const App = (props) => {
    return (
        <ButtonProvider>
          <Home/>
        </ButtonProvider>
    )
}
               

 export default  App