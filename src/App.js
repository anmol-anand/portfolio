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
// HEADSHOT
import HEADSHOT from './assets/headshot/headshot.JPG';

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
  const first_breakpoint = 570;
  const second_breakpoint = 800;
  const third_breakpoint = 1300;
  const first_screen_size = useMediaQuery({ maxWidth: first_breakpoint - 1 });
  const second_screen_size = useMediaQuery({ minWidth: first_breakpoint, maxWidth: second_breakpoint - 1});
  const third_screen_size = useMediaQuery({ minWidth: second_breakpoint, maxWidth: third_breakpoint - 1 });
  const fourth_screen_size = useMediaQuery({ minWidth: third_breakpoint });

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

  return (
    <div className="outer-wrapper">
      {(first_screen_size || second_screen_size || third_screen_size) && <div className='small-screen'>
        {third_screen_size ? (
          <Navbar cute_layout={false} filtered_section_keys={filtered_section_keys} picture_on_the_side={false}/>
        ) : (
          <>
            <button className="expand-button" id="expand-navbar-button" onClick={showNavbar}>
              <FontAwesomeIcon icon={faBars} style={{ height: '25px', width: '25px' }} /> 
            </button>
            <div id='navbar-cute-wrapper' ref={navbarRef}>
              <Navbar cute_layout={true} filtered_section_keys={filtered_section_keys} picture_on_the_side={false}/>
            </div>
          </>
        )}
        <button className={`expand-button ${third_screen_size ? 'add-margin-due-to-navbar' : ''}`} id="expand-tags-cloud-button" onClick={showTagsCloud}>
          <FontAwesomeIcon icon={faSlidersH} style={{ height: '25px', width: '25px' }} /> 
        </button>
        <div id='tags-cloud-cute-wrapper' className={`${third_screen_size ? 'add-margin-due-to-navbar' : ''}`} ref={tagsCloudRef}>
          <TagsCloud filter_tags={filter_tags} cute_layout={true}/>
        </div>
        <div className={`single-pane ${third_screen_size ? 'add-margin-due-to-navbar single-pane-restricted-width' : ''}`}>
          <div id='top-panel-1' className='small-pane-cute small-pane-cute-header'>
            <div className='headshot-container-cute'>
                <img src={HEADSHOT} alt='HEADSHOT' className='headshot'/>
                <div className='name'> Anmol Anand </div>
            </div>
          </div>
          <About cute_layout={first_screen_size} />
          <Portfolio filter_tags={filter_tags} filtered_section_keys={filtered_section_keys} cute_layout={first_screen_size} navbar_at_top={third_screen_size}/>
          <div className='small-pane-cute small-pane-cute-footer'>
            <Footer cute_layout={true} />
          </div>
        </div>
      </div>}
      {fourth_screen_size && <div className='large-screen'>
        <Navbar cute_layout={false} filtered_section_keys={filtered_section_keys} picture_on_the_side={true}/>
        <div className='double-pane'>
          <div className='small-pane'>
            <div className='headshot-container'>
                <img src={HEADSHOT} alt='HEADSHOT' className='headshot'/>
                <div className='name'> Anmol Anand </div>
            </div>
            <TagsCloud filter_tags={filter_tags}  cute_layout={false}/>
            <Footer cute_layout={false} />
          </div>
          <div className='big-pane'>
            <About cute_layout={false} />
            <Portfolio filter_tags={filter_tags} filtered_section_keys={filtered_section_keys} cute_layout={false} navbar_at_top={true}/>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;
