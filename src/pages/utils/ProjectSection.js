import React, { useState } from 'react';
import '../css/ProjectSection.css';
import { json } from 'react-router-dom';
// THUMBS
import THUMB_CODEJUDGE from '../../assets/project-thumb/codejudge.png';
import THUMB_RESNET from '../../assets/project-thumb/resnet.png';
import THUMB_KWAY from '../../assets/project-thumb/kway.png';

const ASSETS_FOLDER = "/assets/";

function ProjectSection({ jsonObj, cute_layout}) {

    const thumbs = {
        "codejudge": THUMB_CODEJUDGE,
        "resnet": THUMB_RESNET,
        "kway": THUMB_KWAY
    }

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleTagClick = (event) => {
        event.stopPropagation();
    };
    
    const imagePath = ASSETS_FOLDER + jsonObj.thumbnail;

    return (
        <div className={`${cute_layout ? 'project-section-cute' : 'project-section'} 
            ${jsonObj.content_head || jsonObj.content_items.length > 0 ? 'hover-pointer' : ''}`}
            onClick={toggleContent}>
            {(cute_layout || jsonObj.layout == 0) && <img src={thumbs[jsonObj.thumbnail]} 
            className={`${cute_layout ? 'thumbnail-cute' : 'thumbnail'}`} alt='THUMBNAIL' />}
            <div className={`${cute_layout ? 'project-text-cute' : 'project-text'}`}>
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
            {(!cute_layout && jsonObj.layout == 1) && <img src={thumbs[jsonObj.thumbnail]} className='thumbnail' alt='THUMBNAIL' />}
        </div>
    );
}

export default ProjectSection;
