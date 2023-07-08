import React from 'react';
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import portfolio_json from './content/Portfolio.json';
import './css/TagsCloud.css';

function TagsCloud({filter_tags}) {

    const navigate = useNavigate();

    const renderAgain = (updated_filter_tags) => {
      navigate(`/?filter_tags=${updated_filter_tags.join(',')}`);
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

    console.log(all_tags);

    return (
        <div className="tags-cloud">
          <div className="tags-cloud-heading">
            Filter by skills
          </div>
          <div className="tags-cloud-container">
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
    );
}

export default TagsCloud;
