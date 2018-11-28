import React from 'react'
import { Consumer } from './index'


const Header = props => {
    return (
     <Consumer>
     { value =>
        
        <div className = {`${value.theme}-header`}>
      <h1> My context</h1>
        </div>
     }
    </Consumer>
    )
}

export default Header