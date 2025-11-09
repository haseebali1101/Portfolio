import React from 'react';
import './About.css';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;
  
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="name">{personal.name}</h1>
          <h2 className="title">{personal.title}</h2>
          <p className="description">
            {personal.description}
          </p>
          <div className="social-links">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${personal.email}`}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

