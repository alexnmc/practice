import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link className = 'link' to="/">Login</Link>
            <Link className = 'link' to="/body">Play</Link>
            <Link className = 'link' to="/about">About</Link>
        
        </div>
    )
}

export default Navbar