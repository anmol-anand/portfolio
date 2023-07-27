import React, { useState } from 'react';
import '../css/PortfolioSection.css';
import '../../css/font.css';
import { Code, Icon,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from "@chakra-ui/react";
import { getTagColor, getTagFS, getSelectedTagBorder } from './Hash';
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

function PortfolioSection({ jsonObj, filter_tags, cute_layout }) {

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

    return (
        <div className={`portfolio-section ${jsonObj.content_head || jsonObj.content_items.length > 0 ? 'hover-pointer' : ''}`}>
        <AccordionItem border="none">
            <AccordionButton borderRadius={"10px"} p={0}>
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
                                            <Icon as={AccordionIcon} boxSize={5} p={1}/>
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
            {jsonObj.tags.length > 0 && (
                <div className='tags-container'>
                    {jsonObj.tags.map((tag, index) => (
                        <Code m="5px" border={filter_tags.includes(tag.name) ? getSelectedTagBorder(false) : "none"}  fontSize={getTagFS} colorScheme={getTagColor(tag.name)} children={tag.name} />
                    ))}
                </div>
            )}
        </AccordionItem>
        </div>
    );
}

export default PortfolioSection;
