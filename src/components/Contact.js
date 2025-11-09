import React from 'react';
import './Contact.css';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <p className="contact-description">
          I'm always open to discussing new opportunities and interesting projects.
          Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href={`mailto:${personal.email}`} className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">{personal.email}</span>
          </a>
          {personal.phone && (
            <a href={`tel:${personal.phone}`} className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">{personal.phone}</span>
            </a>
          )}
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">{personal.linkedin.replace('https://www.', '').replace('https://', '')}</span>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">{personal.github.replace('https://', '')}</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;

