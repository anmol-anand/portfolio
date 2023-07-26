import React, { useState } from 'react';
import '../css/PortfolioSection.css';
import '../../css/font.css';
import { Code } from "@chakra-ui/react";
import { getTagColor, getTagFS } from './Hash';
// ACTION ICONS
import ACTION_PLUS from '../../assets/action-icons/plus.svg';
import ACTION_MINUS from '../../assets/action-icons/minus.svg';
// LOGOS
import LOGO_AWS from '../../assets/logos/aws.png';
import LOGO_DIVE from '../../assets/logos/dive.png';
import LOGO_GS from '../../assets/logos/gs.png';
import LOGO_ICPC from '../../assets/logos/icpc.png';
import LOGO_IITR from '../../assets/logos/iitr.png';
import LOGO_KUBERNETES from '../../assets/logos/kubernetes.png';
import LOGO_MAGNA from '../../assets/logos/magna.png';
import LOGO_PAG from '../../assets/logos/pag.png';
import LOGO_TAMU from '../../assets/logos/tamu.png';

const ASSETS_FOLDER = "/assets/";

function PortfolioSection({ jsonObj, cute_layout }) {

    const tagsFS = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

    const logos = {
        "aws": LOGO_AWS,
        "dive": LOGO_DIVE,
        "gs": LOGO_GS,
        "icpc": LOGO_ICPC,
        "iitr": LOGO_IITR,
        "kubernetes": LOGO_KUBERNETES,
        "magna": LOGO_MAGNA,
        "pag": LOGO_PAG,
        "tamu": LOGO_TAMU
    };

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <div className={`portfolio-section ${jsonObj.content_head || jsonObj.content_items.length > 0 ? 'hover-pointer' : ''}`}  onClick={toggleContent}>
            <div className='visible-section'>
                <div className='logo-container'>
                    <img src={logos[jsonObj.logo]} alt='LOGO' className='logo'/>
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
                                            <img src={ACTION_MINUS} alt="minus" />
                                        ) : (
                                            <img src={ACTION_PLUS} alt="plus" />
                                        )}
                                    </button>
                                )}

                            </div>)}
                    </div>
                    {(jsonObj.subtitle_list) && jsonObj.subtitle_list.map((subtitle, index) => (
                        <div className={`${cute_layout ? 'subtitle-container-cute' : 'subtitle-container'}`}>
                            <div className='designation'> 
                                {subtitle.designation}
                            </div>
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
                        // <div className='tag' key={index}>
                        //     #{tag.name}
                        // </div>
                        <Code m="5px" fontSize={getTagFS} colorScheme={getTagColor(tag.name)} children={tag.name} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default PortfolioSection;
