import React from 'react';
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import content from './content/Portfolio.json';

function Portfolio(filter_tags) {
  console.log(content);
  return (
    <div className='portfolio-container'>
      <div className='section-heading'> 
        Education
      </div>
      {content["Education"].map((element) => (
        <PortfolioSection jsonObj={element} />
      ))}
      <div className='section-heading'>
        Professional Experience
      </div>
      {content["Professional Experience"].map((element) => (
        <PortfolioSection jsonObj={element} />
      ))}
      <div className='section-heading'>
        Academic Experience
      </div>
      {content["Academic Experience"].map((element) => (
        <PortfolioSection jsonObj={element} />
      ))}
      <div className='section-heading'>
        Licenses & Certifications
      </div>
      {content["Licenses & Certifications"].map((element) => (
        <PortfolioSection jsonObj={element} />
      ))}
      <div className='section-heading'>
        Honors & Awards
      </div>
      {content["Honors & Awards"].map((element) => (
        <PortfolioSection jsonObj={element} />
      ))}
      <div className='section-heading'> 
        Projects
      </div>
      {content["Projects"].map((element) => (
        <ProjectSection jsonObj={element} />
      ))}
    </div>
  );
}

export default Portfolio;
