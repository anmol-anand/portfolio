import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Code, Accordion, Heading} from '@chakra-ui/react'
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import portfolio_json from './content/Portfolio.json';
import {getTagFS, getTagColor} from './utils/Hash';

function Portfolio({filter_tags, filtered_section_keys, cute_layout, navbar_at_top}) {

  const navigate = useNavigate();
  
  const clearSkillsFilter = () => {
    console.log("Clearing skills filter");
    navigate(`/portfolio`);
  };

  useEffect(() => {
    if (filter_tags.length > 0) {
      const element = document.getElementById('top-panel-tags');
      const offset = 50; // in px
      const navbar_height = 50; // in px
      if (element) {
        const rect = element.getBoundingClientRect();
        if(navbar_at_top) {
          window.scrollBy(0, rect.top - offset - navbar_height);
        } else {
          window.scrollBy(0, rect.top - offset);
        }
      }
    }
  }, [filter_tags]);

  return (
    <div className='portfolio-container' id="Portfolio">
    <Accordion allowToggle>
      {filter_tags.length > 0 && (
        <div className='filtering-by-skills' id='top-panel-tags'>
          <div>
            Filter by skills
          </div>
          <div>
            {filter_tags.map((tag, index) => (
              <Code m="5px" fontSize={getTagFS} colorScheme={getTagColor(tag)} children={tag} />
            ))}
          </div>
          <div className='clear-skills-filter' onClick={clearSkillsFilter}>
            clear skills filter
          </div>
        </div>
      )}
      {
        filtered_section_keys.map((key, index) => (
          <div className="section" key={index} id={key}>
            <Heading size="lg" p="20px" justifyContent="center" width={"100%"} display="flex">{key}</Heading>
            {key === "Projects" ? (
              portfolio_json[key].map((element, index) => {
                if (
                  filter_tags.length === 0 ||
                  element.tags.some(tag => filter_tags.includes(tag.name))
                ) {
                  return <ProjectSection jsonObj={element} filter_tags={filter_tags} cute_layout={cute_layout} key={index} />;
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
                  return <PortfolioSection jsonObj={element} filter_tags={filter_tags} cute_layout={cute_layout} key={index} />;
                } else {
                  return null;
                }
              })
            )}
          </div>
        ))
      }
    </Accordion>
    </div>
  );
}

export default Portfolio;
