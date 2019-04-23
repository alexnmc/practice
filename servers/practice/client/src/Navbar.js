import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to = "/abc">ABC News</Link>
            <Link to = "/saved">Saved Articles</Link>
        </div>
    )
}

export default Navbar