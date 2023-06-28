import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import portfolio_json from './pages/content/Portfolio.json';
import './css/Navbar.css';

function Navbar({filtered_section_keys}) {
  const offset = -70;
  const duration = 500;

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.classList.add('highlight'); // Apply the "highlight" class to the element
  
      setTimeout(() => {
        element.classList.remove('highlight'); // Remove the "highlight" class after 1 second
      }, 1.1 * duration);
    }
  }; 

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
            className="nav-link"
            // onClick={() => handleClick('Portfolio')}
          >
            <FontAwesomeIcon icon={faHome} />
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
              className={filtered_section_keys.includes(key) ? "nav-link" : "nav-link-dead"}
              onClick={() => handleClick(key)}
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
            onClick={() => handleClick('Contact')}
          >
            {Object.keys(portfolio_json).length + 1}. Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
