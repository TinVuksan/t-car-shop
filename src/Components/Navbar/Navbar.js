import React from "react"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <nav className = "navbar">
            <h3 className = "navbar-logo">T Car Shop</h3>
            <div className = "navbar-routing">
            </div>
            
            
        </nav>
        <hr className="hr-element"/>
        </>
        
    )
}