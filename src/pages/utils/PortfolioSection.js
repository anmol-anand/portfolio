import React, { useState } from 'react';
import '../css/PortfolioSection.css';

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
                        {jsonObj.title}
                    </div>
                    <div className='title-right'>
                        {jsonObj.date && (
                            <div className='date'>
                            {jsonObj.date}
                            </div>
                        )}
                        {(jsonObj.content_head || jsonObj.content_items.length > 0) && (
                            <button className='elaborate' onClick={toggleContent}>
                                {showContent ? '-' : '+'}
                            </button>
                        )}
                    </div>
                </div>
                {(jsonObj.subtitle_left || jsonObj.subtitle_right) && (
                    <div className='subtitle-container'>
                    {jsonObj.subtitle_left && (
                        <div className='subtitle-left'>
                        {jsonObj.subtitle_left}
                        </div>
                    )}
                    {jsonObj.subtitle_right && (
                        <div className='subtitle-right'>
                        {jsonObj.subtitle_right}
                        </div>
                    )}
                    </div>
                )}
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
