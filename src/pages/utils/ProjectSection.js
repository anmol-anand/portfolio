import React from 'react';
import '../css/ProjectSection.css';
import { json } from 'react-router-dom';

const ASSETS_FOLDER = "/assets/";

function ProjectSection({ jsonObj }) {
    
    const imagePath = ASSETS_FOLDER + jsonObj.thumbnail;

    return (
        <div className='project-section'>
            <img src={imagePath} className='thumbnail' alt='THUMBNAIL' />
            <div className='title'>{jsonObj.title}</div>
            {jsonObj.hrefs.length > 0 && (
                <div className='hrefs-container'>
                    {jsonObj.hrefs.map((href, index) => (
                        <a href={href.url} target="_blank" rel="noopener noreferrer" className='project-href'> {href.text} </a>
                    ))}
                </div>
            )}
            {jsonObj.tags.length > 0 && (
                <div className='tags-container'>
                    {jsonObj.tags.map((tag, index) => (
                        <div className='tag' key={index}>
                            #{tag}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectSection;
