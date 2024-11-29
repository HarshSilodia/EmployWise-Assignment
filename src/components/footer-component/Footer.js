import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© Harsh Silodia</p>
        <div className="footer-icons">
          <a href="tel:+918319480061" className="footer-link">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" /> +91 8319480061
          </a>
          <a href="mailto:harshsilodia@gmail.com" className="footer-link">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" /> harshsilodia@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/harshsilodia" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" /> www.linkedin.com/in/harshsilodia
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
