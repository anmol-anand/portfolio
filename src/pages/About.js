import React from 'react';
import about_json from './content/About.json';
import './css/About.css';
// ROLE ICONS
import ROLE_SWE from '../assets/role-icons/react.svg';
import ROLE_ML from '../assets/role-icons/pytorch.svg';

function About({cute_layout}) {
    return (
        <div className={cute_layout ? 'about-container-cute' : 'about-container'} id="top-panel-2">
            <div className='about-title'>
                MY EXPERTISE
            </div>
            <div className='about-subtitle'>
                {/* SOFTWARE DEVELOPER, MACHINE LEARNING & DATA SCIENTIST */}
            </div>
            <div className={cute_layout ? 'roles-container-vertical' : 'roles-container'}>
                <div className={cute_layout ? 'role-full' : 'role'}>
                    <div className='header'>
                        <div className='role-icon-container'>
                            <img src={ROLE_SWE} alt="react" className="role-icon" />
                        </div>
                        <div className='role-title' id='swe-role'>
                            Software Engineering
                        </div>
                    </div>
                    <div className='role-content'>
                        {about_json.roles.swe}
                    </div>
                </div>
                <div className={cute_layout ? 'role-full' : 'role'}>
                    <div className='header'>
                        <div className='role-icon-container'>
                            <img src={ROLE_ML} alt="pytorch" className="role-icon" />
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