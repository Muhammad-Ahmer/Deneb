import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
function Header() {
  return (

    <header className="header">
      <div className="logo-container">
      <NavLink to="/" exact>
          <img src={require('../logo.png')} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
          <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
        </ul>
        <NavLink to="/contact" activeClassName="active">
          <button className="hire-btn">HIRE US</button>
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
