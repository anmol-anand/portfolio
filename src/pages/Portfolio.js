import React from 'react';
import PortfolioSection from './utils/PortfolioSection';
import './css/Portfolio.css'
import IITRLogo from '../assets/logos/iitr.png';
import TAMULogo from '../assets/logos/tamu.png';
import GSLogo from '../assets/logos/gs.png';
import ICPCLogo from '../assets/logos/icpc.png';
import MagnaLogo from '../assets/logos/magna.png';
import PAGLogo from '../assets/logos/pag.png';
import DIVELogo from '../assets/logos/dive.png';

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <div className='section-heading'> 
        Education
      </div>
      <PortfolioSection
        jsonObj={{
          title_left: 'Texas A&M University',
          title_right: 'GPA: 4.00',
          subtitle_list: [
            {designation: 'Master of Science in Computer Science', date: '2 years | Aug 2022 - May 2024'}
          ],
          content_head: 'Coursework: ',
          content_items: ['Deep Learning', 
            'Software Engineering',
            'Advanced Graph Algorithms', 
            'Analysis of Algorithms',
            'Quantum Algorithms'],
          tags: [],
          logo: TAMULogo}}
      />  
      <PortfolioSection
        jsonObj={{
          title_left: 'Indian Institute of Technology',
          title_right: 'GPA: 3.38',
          subtitle_list: [
            {designation: 'Bachelor\'s in Computer Science', date: '4 years | Jul 2015 - May 2019'}
          ],
          content_head: 'Coursework:',
          content_items: ['Machine Learning', 'Data Structures', 'Software Engineering', 'Database Management Systems', 'Network Programming'],
          tags: [],
          logo: IITRLogo}}
      />
      <div className='section-heading'>
        Experience
      </div>
      <PortfolioSection
        jsonObj={{
          title_left: 'Texas A&M University',
          subtitle_list: [
            {designation: 'Teaching Assistant: Machine Learning', date: 'Fall 2023'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: TAMULogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Magna International',
          subtitle_list: [
            {designation: 'Data Scientist Intern', date: 'Summer 2023'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: MagnaLogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Data Integration, Visualization, and Exploration Lab',
          subtitle_list: [
            {designation: 'Researcher', date: 'Spring 2023'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: DIVELogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Goldman Sachs',
          subtitle_list: [
            {designation: 'Software Engineer II', date: '6 months | Jan 2022 - Jun 2022'}, 
            {designation: 'Software Engineer I', date: '2 years 7 months | Jun 2019 - Dec 2021'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: GSLogo}} 
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Indian Institute of Technology',
          subtitle_list: [
            {designation: 'Teaching Assistant: Discrete Structures', date: 'Spring 2019'}
          ],
          content_items: [],
          tags: [],
          logo: IITRLogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Goldman Sachs',
          subtitle_list: [
            {designation: 'Big Data Intern', date: 'Summer 2018'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: GSLogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Programming and Algorithms Group',
          subtitle_list: [
            {designation: 'Core member', date: '2 years | Jul 2016 - May 2018'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: PAGLogo}}
      />
    </div>
  );
}

export default Portfolio;
