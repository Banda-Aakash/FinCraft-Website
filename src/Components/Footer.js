import React from "react";
import "./Footer.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
        <Link to="/terms-of-use" className="footer-link">
          Terms of Use
        </Link>
      </div>

      <div className="social-media">
        <Link to="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="FbLogo.png" alt="Facebook" />
        </Link>
        <Link to="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="InstagramLogo.png" alt="Instagram" />
        </Link>
        <Link to="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src="LinkedinLogo.png" alt="LinkedIn" />
        </Link>
        <Link to="https://twitter.com" target="_blank" rel="noreferrer">
          <img src="TwitterLogo.png" alt="Twitter" />
        </Link>
      </div>

      <div className="footer-company">
        <p>© 2024, Fincraft Technology Pvt Ltd.</p>
        <p>
          Address – 4th Floor, Building, 387, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034
        </p>
      </div>
    </footer>
  );
};

export default Footer;
