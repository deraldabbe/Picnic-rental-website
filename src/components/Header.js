// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import AuthButtons from './AuthButtons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/rentals">Rentals</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <AuthButtons />
    </header>
  );
}

export default Header;
