import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link className = 'link' to="/">home</Link>
            <Link className = 'link' to="/about">about</Link>
            <Link className = 'link' to="/projects">projects</Link>
            <Link className = 'link' to="/contact">contact</Link>
        </div>
    )
}

export default Navbar