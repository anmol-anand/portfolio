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
                    <div className='header'>
                        <div className='role-icon-container'>
                            <img src="/assets/role-icons/react.svg" alt="react" className="role-icon" />
                        </div>
                        <div className='role-title' id='swe-role'>
                            Software Engineering
                        </div>
                    </div>
                    <div className='role-content'>
                        {about_json.roles.swe}
                    </div>
                </div>
                <div className='role'>
                    <div className='header'>
                        <div className='role-icon-container'>
                            <img src="/assets/role-icons/pytorch.svg" alt="pytorch" className="role-icon" />
                        </div>
                        <div className='role-title' id='ml-role'>
                            Machine Learning
                        </div>
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