// Nav.js
import React from 'react';
import '../SCSS/Nav.scss';
import Logo from '../assets/logomenor.png';
import Nomelogo from '../assets/TYBA.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='Nav'>
    <img src={Logo} alt="Logo1" className='Logoimg' />
    <img src={Nomelogo} alt="Nomelogo" className='Nometyba'/>
    <nav>
      <ul>
        <li><a><Link to="/Login">Login</Link></a></li>
        <li><a><Link to="/">About</Link></a></li>
        <li><a><Link to="/">Contact</Link></a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Nav;
