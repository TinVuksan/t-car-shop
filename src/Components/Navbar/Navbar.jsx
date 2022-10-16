import React from "react"
import './Navbar.css'
import Filter from "../../Common/Filter/Filter"
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        
        <nav className = "navbar">
            <Link style = {{textDecoration:'none', color:'black'}}to = "/"><h3 className = "navbar-logo" >T Car Shop</h3></Link>
            <div className = "navbar-functions">
            <Link style = {{textDecoration:'none', color:'black'}}to = "/Add"><h3 className = "navbar-link" >Add new vehicle</h3></Link>
            <Filter />
            </div>
        </nav>
        
        
    )
}