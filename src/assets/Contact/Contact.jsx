import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin,FaGithub } from 'react-icons/fa';

import './Contact.css';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2 className="fade-in-up">Get in Touch</h2>
      <form className="contact-form fade-in-up" method="GET" action="#">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="con">        
          <button type="submit">Send Message</button>
          <div className="social">
            <a href="https://github.com/DaredEvily" target="_blank"><FaGithub /></a>
            <a href="https://www.youtube.com/@ahmadgamal6802" target="_blank"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/ahmad-gamal-88589a293/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.facebook.com/hackerCBI" target="_blank"><FaFacebook /></a>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
