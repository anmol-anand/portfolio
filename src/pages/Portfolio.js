import React from 'react';
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import portfolio_json from './content/Portfolio.json';

function Portfolio({filter_tags, filtered_section_keys}) {

  return (
    <div className='portfolio-container' id="Portfolio">
      {
        filtered_section_keys.map((key, index) => (
          <div className="section" key={index} id={key}>
            <div className="section-heading">{key}</div>
            {key === "Projects" ? (
              portfolio_json[key].map((element, index) => {
                if (
                  filter_tags.length === 0 ||
                  element.tags.some(tag => filter_tags.includes(tag.name))
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
                  element.tags.some(tag => filter_tags.includes(tag.name))
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
