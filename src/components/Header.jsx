import React from 'react'
import logo from '../assets/logo.png'
// import { NavLink } from 'react-router-dom'
import '../components/Header.css'
let Logostyle={
    width: '10rem',
    height: '3rem'
}
let navstyle={
    display:'flex',
    listStyle:'none',
    gap:'3rem'
}


function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt="" style={Logostyle} />
      <ul style={navstyle} className='nav'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='plans'>Plans</a></li>
        <li><a href='why us'>Why Us</a></li>
        <li><a href='contact'>Contact Us</a></li>
        
      </ul>
    </div>
  )
}

export default Header;