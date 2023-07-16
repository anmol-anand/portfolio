import './css/Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// SOCIAL ICON
import SOCIAL_CODEFORCES from './assets/social-icons/codeforces.svg';

function Footer({is_small_screen}) {
  return (
    <div className={is_small_screen ? "footer-cute" : "footer"} id="Contact">
      <div className="footer-email">
        <a href="mailto:aanand@tamu.edu" className="email-text">
          aanand@tamu.edu
        </a>
      </div>
      <div className="footer-content">
          <div class="icon-wrapper">
            <a href="https://www.linkedin.com/in/anmolaanand/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="social-icon" />
              {/* <span className="tooltip">LinkedIn</span> */}
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://github.com/anmol-anand" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" className="social-icon" />
              {/* <span className="tooltip">GitHub</span> */}
            </a>
          </div>
          <div class="icon-wrapper">
            <a href="https://codeforces.com/profile/space-pirate" target="_blank" rel="noopener noreferrer">
              <img src={SOCIAL_CODEFORCES} alt="codeforces" className="social-icon" />
              {/* <span className="tooltip">Codeforces</span> */}
            </a>
          </div>
          {/* <div className="icon-wrapper">
            <a href="mailto:aanand@tamu.edu" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="social-icon" />
              // <span className="tooltip">Email</span>
            </a>
          </div> */}
          <div class="icon-wrapper">
            <a href="https://www.instagram.com/_anmol_anand_/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="social-icon" />
              {/* <span className="tooltip">Instagram</span> */}
            </a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
