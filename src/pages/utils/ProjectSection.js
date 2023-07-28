import React, { useState } from 'react';
import '../css/ProjectSection.css';
import { Code,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from "@chakra-ui/react";
import { getTagColor, getTagFS, getSelectedTagBorder } from './Hash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
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

    const handleTagClick = (event) => {
        event.stopPropagation();
    };
    
    const imagePath = ASSETS_FOLDER + jsonObj.thumbnail;

    return (
    <div className={`${'project-section-wrapper'} 
        ${jsonObj.content_head || jsonObj.content_items.length > 0 ? 'hover-pointer' : ''}`}>
    <AccordionItem border="none">
        <AccordionButton borderRadius={"10px"}>
            <div className={`${cute_layout ? 'project-section-cute' : 'project-section'}`}>
                {(cute_layout || jsonObj.layout == 0) && <img src={thumbs[jsonObj.thumbnail]} 
                className={`${cute_layout ? 'thumbnail-cute' : 'thumbnail'}`} alt='THUMBNAIL' />}
                <div className={`${cute_layout ? 'project-text-cute' : 'project-text'}`}>
                    <div>
                        <span className='title'>{jsonObj.title}</span>
                        {jsonObj.hrefs.length > 0 && (
                            <span className='hrefs-container'>
                                {jsonObj.hrefs.map((href, index) => {
                                    const hrefURL = href.url === '' ? '/coming-soon' : href.url;
                                    return(
                                        <a href={hrefURL} target="_blank" rel="noreferrer" className='project-href' onClick={handleTagClick}>
                                            {(href.icon == "external") && <FontAwesomeIcon icon={faSquareArrowUpRight} />}
                                            {(href.icon == "git") && <FontAwesomeIcon icon={faGithub} />}
                                        </a>
                                    );
                                })}
                            </span>
                        )}
                    </div>
                    {jsonObj.tags.length > 0 && (
                        <div className={`tags-container ${(cute_layout || jsonObj.layout === 0) ? 'tags-container-right' : 'tags-container-left'}`}>
                            {jsonObj.tags.map((tag, index) => (
                                <Code m="5px" border={filter_tags.includes(tag.name) ? getSelectedTagBorder(false) : "none"} fontSize={getTagFS} colorScheme={getTagColor(tag.name)} children={tag.name} />
                            ))}
                        </div>
                    )}
                </div>
                {(!cute_layout && jsonObj.layout == 1) && <img src={thumbs[jsonObj.thumbnail]} className='thumbnail' alt='THUMBNAIL' />}
            </div>
        </AccordionButton>
        {(jsonObj.content_head || jsonObj.content_items.length > 0) && (
            <AccordionPanel p={2}>
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

            </AccordionPanel>
        )}
    </AccordionItem>
    </div>
    );
}

export default ProjectSection;
