import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='logo'> 
        <img src='src/assets/greenspoon-logo.svg' alt='logo'></img>
      </div>
      <div>
        <li className='navlinks'>
          <ul><NavLink to='producers'>Producers</NavLink></ul>
          <ul><NavLink to='contact'>Contact</NavLink></ul>
          <ul><NavLink to='faq'>FAQ</NavLink></ul>
          <ul><NavLink to='register'>Register</NavLink></ul>
        </li>
      </div>
    </div>
  );
}

export default Navbar;