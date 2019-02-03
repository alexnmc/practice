import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to = "/">Wall Street Journal</Link>
            <Link to = "/about">Bitcoin News</Link>
            <Link to = "/contact">Apple News</Link>
            <Link to = "/business">Business News</Link>
            <Link to = "/techcrunch">TechCrunch</Link>
        </div>
    )
}

export default Navbar