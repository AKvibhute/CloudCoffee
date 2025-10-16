// Contactus.jsx — correct version with all closing tags
import React from 'react';
import './Contactus.css';
import logo from '../components/assets/logo.png';

const Contactus = () => {
  return (
    <div className="contact-page">
    

      <div className="contact-form-right">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Your Email</label>
            <input type="email" placeholder="name@gmail.com" />

            <label>Message</label>
            <textarea placeholder="Write your message..." rows="5" />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="contact-form-left">
        <img src={logo} alt="logo" />
      </div>

      <div className="social-container-custom">
  <h3 className="social-title-custom">Follow Us</h3>
  <div className="social-icons-custom">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
  </div>
</div>


    </div>
  );
};

export default Contactus;
