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
            <ul className='nav-links'>
            <li><NavLink to='producers'>Producers</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
            <li><NavLink to='faq'>FAQ</NavLink></li>
            </ul>
          </div>
          <div className='reg'>
            <button className='log'>
            <NavLink to='login'>Login</NavLink>
            </button>
            <button className='register'>
            <NavLink to='register'>Register</NavLink>
            </button>
          </div>
    </div>
  );
}

export default Navbar;