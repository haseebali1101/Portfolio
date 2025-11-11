import React from 'react';
import './Education.css';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="education"
      data-parallax-speed="0.18"
    >
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{edu.degree}</h3>
            <h4 className="university">{edu.university}</h4>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

