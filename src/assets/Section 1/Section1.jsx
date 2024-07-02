import React, { useEffect, useRef } from 'react';
import './Section1.css';
import Typewriter from '../Tools/Writer';

const HeroSection = () => {
  const fadeElemsRef = useRef([]);
  const animatedBgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElemsRef.current.forEach((elem) => {
      observer.observe(elem);
    });

    // Clean up observer on unmount
    return () => {
      fadeElemsRef.current.forEach((elem) => observer.unobserve(elem));
    };
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Clean up event listeners on unmount
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    const animatedBg = animatedBgRef.current;
    if (animatedBg) {
      for (let i = 0; i < 15; i++) {
        const span = document.createElement('span');
        span.style.width = `${Math.random() * 30 + 10}px`;
        span.style.height = span.style.width;
        span.style.left = `${Math.random() * 100}%`;
        span.style.animationDelay = `${Math.random() * 7}s`;
        animatedBg.appendChild(span);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 500;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up scroll listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    const targetElement = document.getElementById('projects'); // Adjust the target section ID
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div className="animated-bg" ref={animatedBgRef}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="hero-content">
        <h1 className="fade-in-up" ref={(el) => (fadeElemsRef.current[0] = el)}>Ahmed.G</h1>
        <Typewriter text="Full-stack Developer" />
        <a href="https://daredevily.github.io/CV/" className="cta-button fade-in-up" ref={(el) => (fadeElemsRef.current[1] = el)}>Visit CV</a>
      </div>
      <div className="scroll-down" onClick={scrollToContent}>↓</div>
    </section>
  );
};

export default HeroSection;
