import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import TagsCloud from './pages/TagsCloud';
import portfolio_json from './pages/content/Portfolio.json';
import './css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function collapseNavbar() {
  const navbar = document.getElementById('navbar-cute-wrapper');
  if (navbar) {
    navbar.style.display = 'none';
  }
  const expand_button = document.getElementById('expand-navbar-button');
  if (expand_button) {
    expand_button.style.display = 'flex';
  }
}

function showNavbar() {
  const navbar = document.getElementById('navbar-cute-wrapper');
  if (navbar) {
    navbar.style.display = 'block';
  }
  const expand_button = document.getElementById('expand-navbar-button');
  if (expand_button) {
    expand_button.style.display = 'none';
  }
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        collapseNavbar();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function App() {
  const first_breakpoint = 700;
  const second_breakpoint = 1300;
  const is_small_screen = useMediaQuery({ maxWidth: first_breakpoint });
  const is_medium_screen = useMediaQuery({ minWidth: first_breakpoint, maxWidth: second_breakpoint });
  const is_large_screen = useMediaQuery({ minWidth: second_breakpoint });

  const location = useLocation();
  const filter_tags_param = new URLSearchParams(location.search).get('filter_tags');
  const filter_tags = filter_tags_param ? filter_tags_param.split(',') : [];

  const navbarRef = useRef(null);
  useOutsideAlerter(navbarRef);

  const filtered_section_keys = filter_tags.length === 0 ? 
    Object.keys(portfolio_json): 
    Object.keys(portfolio_json).filter((key) =>
      portfolio_json[key].some((element) =>
        element.tags.some((tag) => filter_tags.includes(tag.name))
      )
    );

  console.log(filtered_section_keys);

  return (
    <div className="outer-wrapper">
      {is_small_screen && <div className='small-screen'>
        <button id="expand-navbar-button" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} style={{ height: '25px', width: '25px' }} /> 
        </button>
        <div id='navbar-cute-wrapper' ref={navbarRef}>
          <Navbar is_small_screen={true} filtered_section_keys={filtered_section_keys} />
        </div>
        <div id='tags-cloud-cute-wrapper'>
          <TagsCloud filter_tags={filter_tags} is_small_screen={true}/>
        </div>
        <div className='single-pane'>
          <div className='cute-intro-header'>
            <div className='small-pane-cute'>
              <div className='headshot-container-cute'>
                  <img src={"/assets/headshot/headshot.jpg"} alt='HEADSHOT' className='headshot'/>
                  <div className='name'> Anmol Anand </div>
              </div>
              <Footer is_small_screen={true} />
            </div>
            <About is_small_screen={is_small_screen} />
          </div>
          <Portfolio filter_tags={filter_tags} filtered_section_keys={filtered_section_keys} />
        </div>
      </div>}
      {is_large_screen && <div className='large-screen'>
        <Navbar is_small_screen={false} filtered_section_keys={filtered_section_keys} />
        <div className='double-pane'>
          <div className='small-pane'>
            <div className='headshot-container'>
                <img src={"/assets/headshot/headshot.jpg"} alt='HEADSHOT' className='headshot'/>
                <div className='name'> Anmol Anand </div>
            </div>
            <TagsCloud filter_tags={filter_tags}  is_small_screen={false}/>
            <Footer is_small_screen={false} />
          </div>
          <div className='big-pane'>
            <About is_small_screen={is_small_screen} />
            <Portfolio filter_tags={filter_tags} filtered_section_keys={filtered_section_keys} />
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;
