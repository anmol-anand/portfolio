import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import portfolio_json from './pages/content/Portfolio.json';
import './css/Navbar.css';

function Navbar({cute_layout, filtered_section_keys}) {
  const offset = cute_layout ? -10 : -70;
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
    <nav className={cute_layout ? 'navbar-cute' : 'navbar'}>
      <ul className={cute_layout ? 'nav-menu-cute' : 'nav-menu'}>
        <li className={cute_layout ? 'nav-item-font nav-item-cute-dim' : 'nav-item-font nav-item-dim'}>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
            className='nav-link-common nav-link'
          >
            <div className='blank-space' />
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        {Object.keys(portfolio_json).map((key, index) => (
          <li className={cute_layout ? 'nav-item-font nav-item-cute-dim' : 'nav-item-font nav-item-dim'}>
            <Link
              activeClass="active"
              to={key}
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
              className={filtered_section_keys.includes(key) ? "nav-link-common nav-link" : "nav-link-common nav-link-dead"}
              onClick={() => handleClick(key)}
            >
              {cute_layout && <div className='blank-space' />}
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
