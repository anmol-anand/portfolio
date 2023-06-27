import React from 'react';
import { Link } from 'react-scroll';
import portfolio_json from './pages/content/Portfolio.json';
import './css/Navbar.css';

function Navbar() {
  const offset = -60;
  const duration = 500;
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link
            activeClass="active"
            to="Introduction"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
            className="nav-link"
          >
            0. Home
          </Link>
        </li>
        {Object.keys(portfolio_json).map((key, index) => (
          <li className="nav-item">
            <Link
              activeClass="active"
              to={key}
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
              className="nav-link"
            >
              {index + 1}. {key}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
            className="nav-link"
          >
            {Object.keys(portfolio_json).length + 1}. Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
