import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to = "/bbc">BBC News</Link>
            <Link to = "/saved">Saved Articles</Link>
        </div>
    )
}

export default Navbar