import React from 'react';
import PortfolioSection from './utils/PortfolioSection';
import './css/Portfolio.css'
import IITRLogo from '../assets/logos/iitr.png';
import TAMULogo from '../assets/logos/tamu.png';
import GSLogo from '../assets/logos/gs.png';
import ICPCLogo from '../assets/logos/icpc.png';

function Portfolio() {
  return (
    <div class='portfolio-container'>
      <PortfolioSection
        jsonObj={{
          title: 'Texas A&M University',
          date: 'August 2022',
          subtitle_left: 'Master of Science in Computer Science',
          subtitle_right: 'GPA: 4/4',
          content_head: 'Coursework',
          content_items: ['Deep Learning', 'Advanced Graph Algorithms', 'Software Engineering'],
          tags: ['grad', 'school', 'fun'],
          logo: TAMULogo
        }} />  
      <PortfolioSection
        jsonObj={{
          title: 'IIT Roorkee',
          date: 'July 2015',
          subtitle_left: 'Bachelors in Computer Science',
          subtitle_right: 'GPA: 8.45/10',
          content_head: 'Coursework',
          content_items: ['Network Programming', 'Discrete'],
          tags: ['bachelor', 'school', 'fun'],
          logo: IITRLogo
        }} />
    </div>
  );
}

export default Portfolio;
