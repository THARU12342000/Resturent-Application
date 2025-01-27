//import React from "react";
import { FaLocationArrow, FaClock, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./../Styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-banner">
          <div className="footer-left">
            <h2>ZEESHU</h2>
          </div>
          <div className="footer-right">
            <p><FaLocationArrow /> Z6 Gulshan-e-Maymar, Karachi</p>
            <p><FaClock /> Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>

        <div className="footer-banner">
          <div className="footer-left">
            <p>Developed By <span className="highlight">CODEWITHZEESHU</span></p>
          </div>
          <div className="footer-right">
            <p>All Rights Reserved By CodeWithZeeshu.</p>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
