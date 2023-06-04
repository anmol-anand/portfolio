import './css/Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
          <div class="icon-wrapper">
            <a href="https://www.linkedin.com/in/anmolaanand/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/social-icons/linkedin.png" alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://github.com/anmol-anand" target="_blank" rel="noopener noreferrer">
              <img src={"/assets/social-icons/github.png"} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://codeforces.com/profile/space-pirate" target="_blank" rel="noopener noreferrer">
              <img src={"/assets/social-icons/cf.png"} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="mailto:aanand@tamu.edu">
              <img src={"/assets/social-icons/gmail.png"} alt="PNG Icon" className="social-icon" />
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={"/assets/social-icons/discord.png"} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://www.instagram.com/_anmol_anand_/" target="_blank" rel="noopener noreferrer">
              <img src={"/assets/social-icons/instagram.png"} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
