import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Logo" src="./logo.svg" alt="Logo" />
      </Link>
      <Link to="#top">
        <span className="Header-Nav">Setting</span>
      </Link>
      <Link to="#top">
        <span className="Header-Nav">Contacts</span>
      </Link>
    </nav>
  );
}

export default Header;
