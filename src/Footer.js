import './Footer.css';
import React from 'react';
import LinkedInIcon from './assets/icons/linkedin.png';
import GitHubIcon from './assets/icons/github.png';
import CodeforcesIcon from './assets/icons/cf.png';
import GmailIcon from './assets/icons/gmail.png';
import DiscordIcon from './assets/icons/discord.png';
import InstagramIcon from './assets/icons/instagram.png';

function Footer() {
  return (
    <footer>
      <div class="footer-content">
          <div class="icon-wrapper">
            <a href="https://www.linkedin.com/in/anmolaanand/">
              <img src={LinkedInIcon} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://github.com/anmol-anand">
              <img src={GitHubIcon} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://codeforces.com/profile/space-pirate">
              <img src={CodeforcesIcon} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="mailto:aanand@tamu.edu">
              <img src={GmailIcon} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="">
              <img src={DiscordIcon} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://www.instagram.com/_anmol_anand_/">
              <img src={InstagramIcon} alt="PNG Icon" className="social-icon"/>
            </a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
