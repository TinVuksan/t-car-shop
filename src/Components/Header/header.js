import React from 'react'
import logo from '../../Common/Images/mono_logo.png'
import {motion} from 'framer-motion'
import './header.css';
export default function Header() {
    return(
        <>
        <nav className="header-container">
            
            <img className="header-logo" src= {logo} alt="Mono logo" />
       
        
        </nav>
        </>
    )
}