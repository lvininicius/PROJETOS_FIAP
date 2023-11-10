// Nav.js
import React from 'react';
import '../SCSS/Nav.scss';
import Logo from '../assets/logomenor.png';
import Nomelogo from '../assets/TYBA.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='Nav'>
      <Link to="./">
        <img src={Logo} alt="Logo1" className='Logoimg' />
      </Link>

      <img src={Nomelogo} alt="Nomelogo" className='Nometyba' />
      <nav>
        <ul>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/Contatos">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
