import React from 'react';
import './Footer.css'; // Create and style this file as needed

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Contact Us</h2>
          <p>Email: support@coffeeco.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Coffee Lane, Brewtown, India</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 CloudCoffee | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
