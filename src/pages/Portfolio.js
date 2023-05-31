import React from 'react';
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import portfolio_json from './content/Portfolio.json';

function Portfolio(filter_tags) {
  console.log(portfolio_json);

  const section_tags = Object.keys(portfolio_json).map((key, index) => (
    portfolio_json[key]
      .flatMap((element) => element.tags)
      .join(', ')
  ));

  console.log(section_tags);

  return (
    <div className='portfolio-container'>
      {
        Object.keys(portfolio_json).map((key, index) => (
          <div className="section">
            <div className='section-heading'> 
              {key}
            </div>
            {key === "Projects" ? (
              portfolio_json[key].map((element, index) => (
                <ProjectSection jsonObj={element} />
              ))
            ) : (
              portfolio_json[key].map((element, index) => (
                <PortfolioSection jsonObj={element} />
              ))
            )}
          </div>
        ))
      }
    </div>
  );
}

export default Portfolio;
