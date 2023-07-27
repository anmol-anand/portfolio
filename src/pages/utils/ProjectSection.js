import React, { useState } from 'react';
import '../css/ProjectSection.css';
import { Code } from "@chakra-ui/react";
import { getTagColor, getTagFS, getSelectedTagBorder } from './Hash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faLocationDot, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
// THUMBS
import THUMB_CODEJUDGE from '../../assets/project-thumb/codejudge.png';
import THUMB_RESNET from '../../assets/project-thumb/resnet.png';
import THUMB_KWAY from '../../assets/project-thumb/kway.png';

const ASSETS_FOLDER = "/assets/";

function ProjectSection({ jsonObj, filter_tags, cute_layout}) {

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
                <div>
                    <span className='title'>{jsonObj.title}</span>
                    {jsonObj.hrefs.length > 0 && (
                        <span className='hrefs-container'>
                            {jsonObj.hrefs.map((href, index) => (
                                <a href={href.url} target="_blank" rel="noreferrer" className='project-href' onClick={handleTagClick}>
                                    {(href.icon == "external") && <FontAwesomeIcon icon={faSquareArrowUpRight} />}
                                    {(href.icon == "git") && <FontAwesomeIcon icon={faGithub} />}
                                </a>
                            ))}
                        </span>
                    )}
                </div>
                {jsonObj.tags.length > 0 && (
                    <div className={`tags-container ${jsonObj.layout === 0 ? 'tags-container-right' : 'tags-container-left'}`}>
                        {jsonObj.tags.map((tag, index) => (
                            <Code m="5px" border={filter_tags.includes(tag.name) ? getSelectedTagBorder(false) : "none"} fontSize={getTagFS} colorScheme={getTagColor(tag.name)} children={tag.name} />
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
            </div>
            {(!cute_layout && jsonObj.layout == 1) && <img src={thumbs[jsonObj.thumbnail]} className='thumbnail' alt='THUMBNAIL' />}
        </div>
    );
}

export default ProjectSection;
