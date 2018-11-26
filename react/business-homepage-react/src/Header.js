import React from 'react'
import myPic from './assets/images/bPic.jpg'



const Header = () => {
    
   return(
    <div className = 'header'>
        <h1>Business Advisory Services</h1>
        <img src={myPic} alt=""/>
    </div>
   )
}

export default Header