import React from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio_json from './content/Portfolio.json';
import skill_categories_json from './content/SkillCategories.json';
import './css/TagsCloud.css';
import { Code } from "@chakra-ui/react";
import { getTagColor, getTagFS, getSelectedTagBorder, tagFilteringOn } from './utils/Hash';
import PORTFOLIO_ROUTE from '../PortfolioRoute';

function TagsCloud({filter_tags, cute_layout}) {

    const navigate = useNavigate();

    const renderAgain = (updated_filter_tags) => {
      if (tagFilteringOn()) {
        navigate(`${PORTFOLIO_ROUTE}?filter_tags=${updated_filter_tags.join(',')}`);
      }
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

    const tags_by_categories = Object.values(portfolio_json)
      .map(section =>
        section.flatMap(entry => entry.tags)
      )
      .reduce((acc, tags) => {
        for (const tag of tags) {
          for (const category_key of tag.categories) {
            if (!acc.hasOwnProperty(category_key)) {
              if (!skill_categories_json.hasOwnProperty(category_key)) {
                throw new Error(`Undefined skill category: '${category_key}'`);
              }
              acc[category_key] = [];
            }
            if (!acc[category_key].includes(tag.name)) {
              acc[category_key].push(tag.name);
            }
          }
        }
        return acc;
      }, {});

    return (
        <div className="tags-cloud">
          <div className={`tags-cloud-heading ${cute_layout ? 'tags-cloud-cute-margin' : ''}`}>
            {tagFilteringOn() ? "Filter by Skills" : "Skills"}
          </div>
          <div className="tags-cloud-container">
            {Object.entries(skill_categories_json).map(([key, category]) => {
              const all_tags = tags_by_categories[key];
              return (
                <div className={`skill-category-container ${cute_layout ? 'tags-cloud-cute-margin' : ''}`}>

                  <div className='skill-category-title'>
                    {category}
                  </div>

                  <div className='skill-category-tags'>
                    {all_tags.map((tag, index) => {
                      if (filter_tags.includes(tag)) {
                        // Selected tags
                        return (
                          <div className='clickable' onClick={() => unselectTag(tag)}>
                            <Code m="5px" border={getSelectedTagBorder(cute_layout)} fontSize={getTagFS} colorScheme={getTagColor(tag)} children={tag}/>
                          </div>
                        );
                      } else {
                        // Not selected tags
                        return (
                          <div className='clickable' onClick={() => selectTag(tag)} style={tagFilteringOn() ? { cursor: 'pointer' } : {cursor: 'auto'}}>
                            <Code m="5px" fontSize={getTagFS} colorScheme={getTagColor(tag)} children={tag}/>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    );
}

export default TagsCloud;
