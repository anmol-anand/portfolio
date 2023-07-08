import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import TagsCloud from './pages/TagsCloud';
import portfolio_json from './pages/content/Portfolio.json';
import './css/App.css';

function App() {
  const location = useLocation();
  const filter_tags_param = new URLSearchParams(location.search).get('filter_tags');
  const filter_tags = filter_tags_param ? filter_tags_param.split(',') : [];

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
      <Navbar filtered_section_keys={filtered_section_keys} />
      <div className="content-section">
        <div className='double-pane'>
          <div className='small-pane'>
            <div className='headshot-container'>
                <img src={"/assets/headshot/headshot.jpg"} alt='HEADSHOT' className='headshot'/>
                <div className='name'> Anmol Anand </div>
            </div>
            <TagsCloud filter_tags={filter_tags} />
            <Footer />
          </div>
          <div className='big-pane'>
            <About />
            <Portfolio filter_tags={filter_tags} filtered_section_keys={filtered_section_keys} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
