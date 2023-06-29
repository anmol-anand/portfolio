import React from 'react';
import about_json from './content/About.json';
import './css/About.css';

function About() {
    return (
        <div className="about-container" id="About">
            <div className='about-title'>
                My Expertise
            </div>
            <div className='about-subtitle'>
                {/* SOFTWARE DEVELOPER, MACHINE LEARNING & DATA SCIENTIST */}
            </div>
            <div className='roles-container'>
                <div className='role'>
                    <div className='role-title'>
                        Software Engineering
                    </div>
                    <div className='role-content'>
                        {about_json.roles.swe}
                    </div>
                </div>
                <div className='role'>
                    <div className='role-title'>
                        Machine Learning / Data Science
                    </div>
                    <div className='role-content'>
                        {about_json.roles.ml}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;