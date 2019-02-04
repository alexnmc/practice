import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            
            
            <Link to = "/bbc">BBC News</Link>
            <Link to = "/">Wall Street Journal</Link>
            <Link to = "/axios">AXIOS</Link>
            <Link to = "/cbs">CBS News</Link>
            <Link to = "/contact">Apple News</Link>
            <Link to = "/business">Business News</Link>
            <Link to = "/techcrunch">TechCrunch</Link>
            <Link to = "/abc">ABC News</Link>
            
            
            
        </div>
    )
}

export default Navbar