import React from "react"
import './Navbar.css'
import Filter from '../Filter/Filter'
import Sort from "../Sort/Sort"

export default function Navbar() {
    return (
        <>
        <nav className = "navbar">
            <h3 className = "navbar-logo">T Car Shop</h3>
            <div className = "navbar-functions">
            <Sort />
            <Filter />
            </div>
            
        </nav>
        </>
        
    )
}