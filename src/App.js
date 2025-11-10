import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lenis from '@studio-freight/lenis';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    
    // Make Lenis available globally for Header component
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle parallax for sections with data-scroll-speed
    const handleScroll = ({ scroll, limit, velocity, direction, progress }) => {
      const sections = document.querySelectorAll('[data-scroll-speed]');
      
      sections.forEach((section) => {
        const speed = parseFloat(section.getAttribute('data-scroll-speed')) || 0.5;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate parallax offset based on scroll position
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
          const offset = scrollProgress * (1 - speed) * 50;
          section.style.transform = `translateY(${offset}px) translateZ(0)`;
        }
      });
    };

    lenis.on('scroll', handleScroll);

    return () => {
      if (window.lenis) {
        delete window.lenis;
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

