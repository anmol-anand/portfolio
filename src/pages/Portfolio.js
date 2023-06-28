import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import portfolio_json from './content/Portfolio.json';
import about_json from './content/About.json';
import { render } from '@testing-library/react';

function Portfolio({filter_tags, filtered_section_keys}) {

  return (
    <div className='portfolio-container' id="Portfolio">
      <div className='section' id="Introduction">
        <div className='introduction'>
            <div className='headshot-container'>
                <img src={"/assets/headshot/headshot.jpg"} alt='HEADSHOT' className='headshot'/>
            </div>
            <div className='about-container'>
                {about_json.intro.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
      </div>
      <div className='section'>
        <div className='roles-container'>
          <div className='role'>
              <div className='role-title'>
                  Software Engineering
              </div>
              <div className='role-content'>
                  {about_json.roles.swe}
              </div>
          </div>
          <div className='role'>
              <div className='role-title'>
                  Machine Learning / Data Science
              </div>
              <div className='role-content'>
                  {about_json.roles.ml}
              </div>
          </div>
        </div>
      </div>
      {
        filtered_section_keys.map((key, index) => (
          <div className="section" key={index} id={key}>
            <div className="section-heading">{key}</div>
            {key === "Projects" ? (
              portfolio_json[key].map((element, index) => {
                if (
                  filter_tags.length === 0 ||
                  element.tags.some(tag => filter_tags.includes(tag))
                ) {
                  return <ProjectSection jsonObj={element} key={index} />;
                } else {
                  return null;
                }
              })
            ) : (
              portfolio_json[key].map((element, index) => {
                if (
                  filter_tags.length === 0 ||
                  element.tags.some(tag => filter_tags.includes(tag))
                ) {
                  return <PortfolioSection jsonObj={element} key={index} />;
                } else {
                  return null;
                }
              })
            )}
          </div>
        ))
      }
    </div>
  );
}

export default Portfolio;
