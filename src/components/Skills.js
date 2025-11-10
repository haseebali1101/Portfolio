import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const skillCategories = Object.keys(skills).map(category => {
    const categoryData = skills[category];
    const isObject = typeof categoryData === 'object' && !Array.isArray(categoryData) && categoryData !== null;
    
    return {
      category,
      skills: isObject ? Object.keys(categoryData) : categoryData,
      proficiencies: isObject ? categoryData : null,
      isCertification: Array.isArray(categoryData)
    };
  });


  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.isCertification ? (
                category.skills.map((skill, i) => (
                  <div key={i} className="skill-item certification">
                    <span className="cert-icon">✓</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))
              ) : (
                category.skills.map((skill, i) => {
                  const proficiency = category.proficiencies ? category.proficiencies[skill] : null;
                  return (
                    <div key={i} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill}</span>
                        <span className="skill-percentage">{proficiency}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div 
                          className={`skill-bar ${isVisible ? 'animate' : ''}`}
                          style={{ width: isVisible ? `${proficiency}%` : '0%' }}
                          role="progressbar"
                          aria-valuenow={proficiency}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="skill-bar-fill"></div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

