import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <Link className="navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}/media/ferrari-logo.png`} alt="Logo" height="85" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/compare">Compare</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/super_trump">Super Trump</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
