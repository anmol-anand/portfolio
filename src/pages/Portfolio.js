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
import AWSLogo from '../assets/logos/aws.png';
import KubernetesLogo from '../assets/logos/kubernetes.png';

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
            {designation: 'Master of Science in Computer Science', period: '2 yrs', date: 'Aug 2022 - May 2024'}
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
            {designation: 'Bachelor\'s in Computer Science', period: '4 yrs', date: 'Jul 2015 - May 2019'}
          ],
          content_head: 'Coursework:',
          content_items: ['Machine Learning', 'Data Structures', 'Software Engineering', 'Database Management Systems', 'Network Programming'],
          tags: [],
          logo: IITRLogo}}
      />
      <div className='section-heading'>
        Professional Experience
      </div>
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
          title_left: 'Goldman Sachs',
          subtitle_list: [
            {designation: 'Software Engineer II', period: '6 mos', date: 'Jan 2022 - Jun 2022'}, 
            {designation: 'Software Engineer I', period: '2 yrs 7 mos', date: 'Jun 2019 - Dec 2021'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: GSLogo}} 
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
      <div className='section-heading'>
        Academic Experience
      </div>
      <PortfolioSection
        jsonObj={{
          title_left: 'Texas A&M University',
          subtitle_list: [
            {designation: 'Teaching Assistant: Machine Learning', date: 'Fall 2023'}
          ],
          content_items: [],
          tags: ['TBD'],
          logo: TAMULogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'Data Integration, Visualization, and Exploration Lab',
          subtitle_list: [
            {designation: 'Researcher & Open Source Contributor', date: 'Spring 2023'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: DIVELogo}}
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
          title_left: 'Programming and Algorithms Group',
          subtitle_list: [
            {designation: 'Core member', period: '2 yrs', date: 'Jul 2016 - May 2018'}
          ],
          content_head: 'TBD: ',
          content_items: ['TBD'],
          tags: ['TBD'],
          logo: PAGLogo}}
      />
      <div className='section-heading'>
        Licenses & Certifications
      </div>
      <PortfolioSection
        jsonObj={{
          title_left: 'Amazon Web Services',
          title_right: '',
          subtitle_list: [
            {designation: 'AWS Certified Developer - Associate', date: 'TBD'}
          ],
          content_head: 'TODO: add link',
          content_items: [],
          tags: ['AWS', 'certification'],
          logo: AWSLogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'The Linux Foundation',
          title_right: '',
          subtitle_list: [
            {designation: 'Certified Kubernetes Application Developer (CKAD)', date: 'TBD'}
          ],
          content_head: 'TODO: add link',
          content_items: [],
          tags: ['kubernetes', 'certification'],
          logo: KubernetesLogo}}
      />
      <div className='section-heading'>
        Honors & Awards
      </div>
      <PortfolioSection
        jsonObj={{
          title_left: 'Texas A&M University',
          subtitle_list: [
            {designation: 'International Graduate Student Scholarship', date: '2022 - 2023'}
          ],
          content_items: [],
          tags: [],
          logo: TAMULogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'International Collegiate Programming Contest',
          subtitle_list: [
            {designation: 'Represented IIT @ ACM-ICPC India on-site regionals', date: 'Dec 2016'}
          ],
          content_items: [],
          tags: [],
          logo: ICPCLogo}}
      />
      <PortfolioSection
        jsonObj={{
          title_left: 'IIT Joint Entrance Exam',
          subtitle_list: [
            {designation: 'All India Rank 502 out of 1.2 million candidates', date: 'May 2015'}
          ],
          content_items: [],
          tags: [],
          logo: IITRLogo}}
      />
    </div>
  );
}

export default Portfolio;
