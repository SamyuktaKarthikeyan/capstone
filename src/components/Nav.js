import React from 'react'
import { useState } from 'react'
import logo from '../assets/Logo.svg'
import hamburger from '../assets/Hamburger.svg'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className={`navbar ${menuOpen ? "open":""}`}>
       <a href='/' className="logo">
        <img src={logo} alt='logo' />
       </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <img src={hamburger} alt='hamburger' />
        </div>

        <ul className={`nav-links ${menuOpen?"visible":""}`}>
          <li><a href='/'>HOME</a></li>
          <li><a href='/'>ABOUT</a></li>
          <li><a href='/'>MENU</a></li>
          <li><a href='/'>RESERVATIONS</a></li>
          <li><a href='/'>ORDER ONLINE</a></li>
          <li><a href='/'>LOGIN</a></li>
        </ul>

    </nav>
  )
}

export default Nav
