import React, { useState } from 'react';
import '../css/PortfolioSection.css';
import {ReactComponent as PlusIcon} from '../../assets/action-icons/plus.svg';
import {ReactComponent as MinusIcon} from '../../assets/action-icons/minus.svg';

function PortfolionSection({ jsonObj }) {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <div className='portfolio-section'>
            <div className='visible-section'>
                <div className='logo-container'>
                    <img src={jsonObj.logo} alt='IITRLogo' className='logo'/>
                </div>
                <div className='visible-text'>
                    <div className='title-container'>
                        <div className='title-left'>
                            {jsonObj.title_left}
                        </div>
                        {(jsonObj.title_right || jsonObj.content_head || jsonObj.content_items.length > 0) && (
                            <div className='title-right'>
                                {jsonObj.title_right}
                                {(jsonObj.content_head || jsonObj.content_items.length > 0) && (<button className='elaborate' onClick={toggleContent}>
                                    {showContent ? <MinusIcon /> : <PlusIcon />}
                                </button>)}
                            </div>)}
                    </div>
                    {(jsonObj.subtitle_list) && jsonObj.subtitle_list.map((subtitle, index) => (
                        <div className='subtitle-container'>
                            <div className='designation'> {subtitle.designation} </div>
                            <div className='date'> {subtitle.date} </div>
                        </div>))}
                    
                </div>
            </div>
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
                            #{tag}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PortfolionSection;
