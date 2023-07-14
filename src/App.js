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
import { faBars, faSlidersH } from '@fortawesome/free-solid-svg-icons';

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

function collapseTagsCloud() {
  const tags_cloud = document.getElementById('tags-cloud-cute-wrapper');
  if (tags_cloud) {
    tags_cloud.style.display = 'none';
  }
  const expand_button = document.getElementById('expand-tags-cloud-button');
  if (expand_button) {
    expand_button.style.display = 'flex';
  }
}

function showTagsCloud() {
  const tags_cloud = document.getElementById('tags-cloud-cute-wrapper');
  if (tags_cloud) {
    tags_cloud.style.display = 'block';
  }
  const expand_button = document.getElementById('expand-tags-cloud-button');
  if (expand_button) {
    expand_button.style.display = 'none';
  }
}

function useOutsideNavbar(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        collapseNavbar();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function useOutsideTagsCloud(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        collapseTagsCloud();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function App() {
  const first_breakpoint = 800;
  const second_breakpoint = 1300;
  const is_small_screen = useMediaQuery({ maxWidth: first_breakpoint - 1 });
  const is_medium_screen = useMediaQuery({ minWidth: first_breakpoint, maxWidth: second_breakpoint });
  const is_large_screen = useMediaQuery({ minWidth: second_breakpoint + 1 });

  const location = useLocation();
  const filter_tags_param = new URLSearchParams(location.search).get('filter_tags');
  const filter_tags = filter_tags_param ? filter_tags_param.split(',') : [];

  const navbarRef = useRef(null);
  useOutsideNavbar(navbarRef);

  const tagsCloudRef = useRef(null);
  useOutsideTagsCloud(tagsCloudRef);

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
        <button className="expand-button" id="expand-navbar-button" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} style={{ height: '25px', width: '25px' }} /> 
        </button>
        <div id='navbar-cute-wrapper' ref={navbarRef}>
          <Navbar is_small_screen={true} filtered_section_keys={filtered_section_keys} />
        </div>
        <button className="expand-button" id="expand-tags-cloud-button" onClick={showTagsCloud}>
          <FontAwesomeIcon icon={faSlidersH} style={{ height: '25px', width: '25px' }} /> 
        </button>
        <div id='tags-cloud-cute-wrapper' ref={tagsCloudRef}>
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
      {is_medium_screen && <div className='medium-screen'>
        <button className="expand-button expand-button-with-navbar" id="expand-tags-cloud-button" onClick={showTagsCloud}>
          <FontAwesomeIcon icon={faSlidersH} style={{ height: '25px', width: '25px' }} /> 
        </button>
        <div id='tags-cloud-cute-wrapper' className='tags-cloud-with-navbar' ref={tagsCloudRef}>
          <TagsCloud filter_tags={filter_tags} is_small_screen={true}/>
        </div>
        <Navbar is_small_screen={false} filtered_section_keys={filtered_section_keys} />
        <div className='single-pane single-pane-with-navbar'>
          <div className='cute-intro-header'>
            <div className='small-pane-cute'>
              <div className='headshot-container-cute'>
                  <img src={"/assets/headshot/headshot.jpg"} alt='HEADSHOT' className='headshot'/>
                  <div className='name'> Anmol Anand </div>
              </div>
              <Footer is_small_screen={true} />
            </div>
            <About is_small_screen={true} />
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
