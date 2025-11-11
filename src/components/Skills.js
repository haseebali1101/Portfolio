import React from 'react';
import './Skills.css';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const skillCategories = Object.keys(skills).map((category) => {
    const categoryData = skills[category];
    const items = Array.isArray(categoryData)
      ? categoryData
      : Object.keys(categoryData);

    return {
      category,
      items,
    };
  });

  return (
    <section
      id="skills"
      className="skills"
      data-parallax-speed="0.2"
    >
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.items.map((skill, i) => (
                <span key={i} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

