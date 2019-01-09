import React from 'react'
import Scrollchor from 'react-scrollchor'


const Navbar = () => {
    return (
        <div className="navbar">
            
            <Scrollchor className = 'link' to="#1">home</Scrollchor>  
            <Scrollchor className = 'link' to="#2">about</Scrollchor>
            <Scrollchor className = 'link' to="#3">projects</Scrollchor>
            <Scrollchor className = 'link' to="#4">contact</Scrollchor>
        </div>
    )
}

export default Navbar