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
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;
    window.dispatchEvent(new CustomEvent('lenisReady', { detail: lenis }));

    const sections = document.querySelectorAll('[data-parallax-speed]');

    const applyParallax = () => {
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const speed = parseFloat(section.getAttribute('data-parallax-speed')) || 0.2;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = sectionCenter - viewportCenter;
        const offset = -(distance * speed);
        section.style.transform = `translateY(${offset}px)`;
      });
    };

    lenis.on('scroll', applyParallax);
    window.addEventListener('resize', applyParallax);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    applyParallax();

    return () => {
      window.removeEventListener('resize', applyParallax);
      if (window.lenis) {
        window.lenis.off('scroll', applyParallax);
        delete window.lenis;
      }
      lenis.destroy();
      window.dispatchEvent(new CustomEvent('lenisDestroyed'));
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

