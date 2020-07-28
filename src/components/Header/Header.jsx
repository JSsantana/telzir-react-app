import React from 'react'
import logo from '../../assets/logo.png'; // Tell webpack this JS file uses this image
import './Header.css'
const Header = ()=>(
    <header className='header'>
        <img src={logo} alt="Logo"/>
        <div className='contact-info'>
        <span>Contato: 0800 000 0000</span>
        </div>
    </header>
)

export default Header;