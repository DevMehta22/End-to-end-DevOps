import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <h3>Follow Us</h3>
          <ul className="social-icon-list">
            <li>
              <Link to="#" className="social-icon-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="#" className="social-icon-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="#" className="social-icon-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="#" className="social-icon-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul className="menu-list">
            <li>
              <Link to="#" className="menu-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="menu-link">
                Team
              </Link>
            </li>
            <li>
              <Link to="#" className="menu-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024 Restaurant | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
