import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <p className = 'navbarP2'>Alexander Nemechek</p>
            <Link className = 'link' to="/">home</Link>
            <Link className = 'link' to="/about">about me</Link>
            <Link className = 'link' to="/projects">projects</Link>
            <Link className = 'link' to="/contact">contact</Link>
        </div>
    )
}

export default Navbar