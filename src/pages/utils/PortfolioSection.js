import React, { useState } from 'react';
import '../css/PortfolioSection.css';

const ASSETS_FOLDER = "/assets/";

function PortfolionSection({ jsonObj }) {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const imagePath = ASSETS_FOLDER + jsonObj.logo;

    return (
        <div className={`portfolio-section ${jsonObj.content_head || jsonObj.content_items.length > 0 ? 'hover-pointer' : ''}`}  onClick={toggleContent}>
            <div className='visible-section'>
                <div className='logo-container'>
                    <img src={imagePath} alt='LOGO' className='logo'/>
                </div>
                <div className='visible-text'>
                    <div className='title-container'>
                        <div className='title-left'>
                            {jsonObj.title_left}
                        </div>
                        {(jsonObj.title_right || jsonObj.content_head || jsonObj.content_items.length > 0) && (
                            <div className='title-right'>
                                {jsonObj.title_right}
                                {(jsonObj.content_head || jsonObj.content_items.length > 0) && (
                                    <button className="elaborate">
                                        {showContent ? 
                                        (
                                            <img src="/assets/action-icons/minus.svg" alt="minus" />
                                        ) : (
                                            <img src="/assets/action-icons/plus.svg" alt="plus" />
                                        )}
                                    </button>
                                )}

                            </div>)}
                    </div>
                    {(jsonObj.subtitle_list) && jsonObj.subtitle_list.map((subtitle, index) => (
                        <div className='subtitle-container'>
                            <div className='designation'> {subtitle.designation} </div>
                            {subtitle.period ? (
                                <div className='date'>
                                    {subtitle.period} <span className='period-delimiter'> &#183; </span> {subtitle.date}
                                </div>
                            ) : (
                                <div className='date'>
                                    {subtitle.date}
                                </div>
                            )}
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
