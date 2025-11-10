import React from 'react';
import './Experience.css';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience: experiences } = portfolioData;

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="job-title">{exp.title}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <h4 className="company">{exp.company}</h4>
            <ul className="job-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

