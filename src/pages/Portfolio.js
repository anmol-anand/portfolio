import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import portfolio_json from './content/Portfolio.json';
import { render } from '@testing-library/react';

function Portfolio({filter_tags}) {

  const navigate = useNavigate();

  const renderAgain = (updated_filter_tags) => {
    navigate(`/portfolio?filter_tags=${updated_filter_tags.join(',')}`);
  };

  const clearTagsFilter = () => {
    console.log("Clearing tags filter");
    renderAgain([]);
  };
  
  const unselectTag = (tag) => {
    console.log("Need to unselect tag: " + tag);
    const updated_filter_tags = Array.from(filter_tags).filter((t) => t !== tag);
    renderAgain(updated_filter_tags);
  };
  
  const selectTag = (tag) => {
    console.log("Need to select tag: " + tag);
    const updated_filter_tags = Array.from(filter_tags);
    updated_filter_tags.push(tag);
    renderAgain(updated_filter_tags);
  };

  const all_tags = Object.values(portfolio_json)
    .map(section =>
      section.flatMap(entry => entry.tags)
    )
    .reduce((acc, tags) => {
      for (const tag of tags) {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      }
      return acc;
    }, []);

  const filtered_section_keys = filter_tags.length === 0 ? 
    Object.keys(portfolio_json): 
    Object.keys(portfolio_json).filter((key) =>
      portfolio_json[key].some((element) =>
        element.tags.some((tag) => filter_tags.includes(tag))
      )
    );

  return (
    <div className='portfolio-container'>
      <div className="section-heading">
        Filter by skills
      </div>
      <div className="tags-cloud">
        {all_tags.map((tag, index) => {
          if (filter_tags.includes(tag)) {
            return (
              <div className="selected-tag" key={index} onClick={() => unselectTag(tag)}>
                #{tag}
              </div>
            );
          } else {
            return (
              <div className="unselected-tag" key={index} onClick={() => selectTag(tag)}>
                #{tag}
              </div>
            );
          }
        })}
      </div>
      <button className="clear-tags-filter" onClick={clearTagsFilter}>
        clear
      </button>
      {
        filtered_section_keys.map((key, index) => (
          <div className="section" key={index}>
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
