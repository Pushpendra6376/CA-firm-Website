import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Note: using brand icons
import logo from "../assets/RKA-name-logo.png"; // Assuming you have a white version of the logo would be even better
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section about">
          <img src={logo} alt="CA Rajesh Kandoi Associates" className="footer-logo" />
          <p>
            A trusted Chartered Accountancy firm providing expert financial, taxation, and advisory services to help businesses and individuals achieve their financial goals.
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-heading">Contact Us</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>315, Signature Tower, Tonk Rd, Jaipur, Rajasthan 302015</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <a href="tel:+918690972052">+91 8690972052</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:rajeshkandoionline@gmail.com">rajeshkandoionline@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rajesh Kandoi & Associates. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
