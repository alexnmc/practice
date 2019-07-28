import React from 'react'
import { Link } from 'react-router-dom'
import {withPharma} from './PharmaProvider'


const Navbar = (props) => {
    return (
        <div className="navbar">
            <Link to="/">Utilizator</Link>
            <Link to="/contact">Contact</Link>
            {!props.token ? <Link to = "/pharma">Farmacie</Link> : <p className = 'link' onClick = {props.logout} >Iesire</p>}
        </div>
    )
}

export default  withPharma(Navbar)