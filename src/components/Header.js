import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const lenisRef = useRef(null);

  useEffect(() => {
    const sections = ['about', 'education', 'experience', 'skills', 'projects', 'contact'];

    const updateActiveSection = (scrollValue) => {
      const scrollPosition = scrollValue + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    const handleScroll = () => {
      const currentScroll = lenisRef.current ? lenisRef.current.scroll : window.scrollY;
      setIsScrolled(currentScroll > 50);
      updateActiveSection(currentScroll);
    };

    const onNativeScroll = () => {
      if (!lenisRef.current) {
        handleScroll();
      }
    };

    const attachLenis = (lenisInstance) => {
      if (!lenisInstance) return;
      if (lenisRef.current === lenisInstance) return;
      if (lenisRef.current) {
        lenisRef.current.off('scroll', handleScroll);
      }
      lenisRef.current = lenisInstance;
      lenisRef.current.on('scroll', handleScroll);
      handleScroll();
    };

    if (window.lenis) {
      attachLenis(window.lenis);
    }

    const handleLenisReady = (event) => {
      attachLenis(event.detail);
    };

    window.addEventListener('scroll', onNativeScroll);
    window.addEventListener('lenisReady', handleLenisReady);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onNativeScroll);
      window.removeEventListener('lenisReady', handleLenisReady);
      if (lenisRef.current) {
        lenisRef.current.off('scroll', handleScroll);
        lenisRef.current = null;
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const lenisInstance = window.lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(element, { offset: -80, duration: 1.1 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo" onClick={() => scrollToSection('about')}>
          <span className="logo-text">HA</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;

