import React from 'react'
import { Link } from 'react-router-dom'
import {withUser} from './UserProvider'


const Navbar = (props) => {
    return (
        <div className="navbar">
            
            {props.token ? <Link to = "/">Read</Link> : null}
            {props.token ? <Link to = "/saved">Saved Articles</Link> : null}
           
        </div>
    )
}

export default withUser(Navbar)