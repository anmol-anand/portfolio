import React, { useState } from 'react';
import '../css/ProjectSection.css';
import { json } from 'react-router-dom';

const ASSETS_FOLDER = "/assets/";

function ProjectSection({ jsonObj }) {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleTagClick = (event) => {
        event.stopPropagation();
    };
    
    const imagePath = ASSETS_FOLDER + jsonObj.thumbnail;

    return (
        <div className={`project-section ${jsonObj.content_head || jsonObj.content_items.length > 0 ? 'hover-pointer' : ''}`}  onClick={toggleContent}>
            <img src={imagePath} className='thumbnail' alt='THUMBNAIL' />
            <div className='title'>{jsonObj.title}</div>
            {jsonObj.hrefs.length > 0 && (
                <div className='hrefs-container'>
                    {jsonObj.hrefs.map((href, index) => (
                        <a href={href.url} target="_blank" rel="noopener noreferrer" className='project-href' onClick={handleTagClick}>{href.text}</a>
                    ))}
                </div>
            )}
            {showContent && (jsonObj.content_head || jsonObj.content_items.length > 0) && (
                <div className='content-container'>
                    {jsonObj.content_head && (
                        <div className='content-head'>
                            {jsonObj.content_head}
                        </div>
                    )}
                    <ul className='content-list'>
                        {jsonObj.content_items.map((content_item, index) => (
                            <li className='content-item' key={index}>
                                {content_item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {jsonObj.tags.length > 0 && (
                <div className='tags-container'>
                    {jsonObj.tags.map((tag, index) => (
                        <div className='tag' key={index}>
                            #{tag.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectSection;
