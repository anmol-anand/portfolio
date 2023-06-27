import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Portfolio.css';
import PortfolioSection from './utils/PortfolioSection';
import ProjectSection from './utils/ProjectSection';
import portfolio_json from './content/Portfolio.json';
import about_json from './content/About.json';
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
      <div className="section">
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
