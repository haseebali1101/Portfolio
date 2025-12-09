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
      // Dynamically get header height for accurate section detection
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 80;
      const scrollPosition = scrollValue + headerHeight + 40; // Add small buffer for better detection

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

    setIsMobileMenuOpen(false);

    // Small delay to ensure mobile menu closes and DOM is stable
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Dynamically calculate header height to account for different screen sizes
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;

        // Get current scroll position - use Lenis scroll if available, otherwise native scroll
        const lenisInstance = window.lenis;
        let currentScroll = 0;
        
        if (lenisInstance && lenisInstance.scroll !== undefined) {
          currentScroll = lenisInstance.scroll;
        } else {
          currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
        }

        // Calculate element's position relative to document top
        // getBoundingClientRect gives viewport-relative position, so add scroll offset
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + currentScroll;
        
        // Calculate target position accounting for header height
        // Add a small buffer (10px) to ensure section title is fully visible below header
        const targetPosition = Math.max(0, elementTop - headerHeight - 10);

        if (lenisInstance) {
          // Scroll to the calculated position using Lenis
          lenisInstance.scrollTo(targetPosition, { 
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          // For native scroll, use the calculated position
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
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

