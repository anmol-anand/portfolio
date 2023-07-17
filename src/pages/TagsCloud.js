import React from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio_json from './content/Portfolio.json';
import skill_categories_json from './content/SkillCategories.json';
import './css/TagsCloud.css';

function TagsCloud({filter_tags, is_small_screen}) {

    const navigate = useNavigate();

    const renderAgain = (updated_filter_tags) => {
      navigate(`/portfolio?filter_tags=${updated_filter_tags.join(',')}`);
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
          for (const category of tag.categories) {
            if (!acc.hasOwnProperty(category)) {
              acc[category] = [];
            }
            if (!acc[category].includes(tag.name)) {
              acc[category].push(tag.name);
            }
          }
        }
        return acc;
      }, {});

    return (
        <div className="tags-cloud">
          <div className={`tags-cloud-heading ${is_small_screen ? 'tags-cloud-cute-margin' : ''}`}>
            Filter by skills
          </div>
          <div className="tags-cloud-container">
            {Object.entries(tags_by_categories).map(([category, all_tags]) => (
              <div className={`skill-category-container ${is_small_screen ? 'tags-cloud-cute-margin' : ''}`}>
                <div className='skill-category-title'>
                  {skill_categories_json[category]}
                </div>
                <div className='skill-category-tags'>
                  {all_tags.map((tag, index) => {
                    if (filter_tags.includes(tag)) {
                      return (
                        <div className={`selected-tag-common ${is_small_screen ? 'selected-tag-cute-color' : 'selected-tag-color'}`} key={index} onClick={() => unselectTag(tag)}>
                          #{tag}
                        </div>
                      );
                    } else {
                      return (
                        <div className={`unselected-tag-common ${is_small_screen ? 'unselected-tag-cute-color' : 'unselected-tag-color'}`} key={index} onClick={() => selectTag(tag)}>
                          #{tag}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default TagsCloud;
