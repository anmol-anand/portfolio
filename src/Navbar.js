import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import portfolio_json from './pages/content/Portfolio.json';
import './css/Navbar.css';

function Navbar({is_small_screen, filtered_section_keys}) {
  const offset = is_small_screen ? -10 : -70;
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
    <nav className={is_small_screen ? 'navbar-cute' : 'navbar'}>
      <ul className={is_small_screen ? 'nav-menu-cute' : 'nav-menu'}>
        <li className={is_small_screen ? 'nav-item-font nav-item-cute-dim' : 'nav-item-font nav-item-dim'}>
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
          <li className={is_small_screen ? 'nav-item-font nav-item-cute-dim' : 'nav-item-font nav-item-dim'}>
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
              {is_small_screen && <div className='blank-space' />}
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
