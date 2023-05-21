import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Anmol Anand
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://anmol-anand.github.io/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
              Resume
            </a>
          </li>
          <li className="nav-external">
            <a href="https://anmol-anand.github.io/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
              <i className="fas fa-external-link-alt icon-small" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
