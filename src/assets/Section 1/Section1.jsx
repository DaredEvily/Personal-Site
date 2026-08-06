import { useEffect, useRef } from 'react';
import './Section1.css';
import Typewriter from '../Tools/Writer';
import { scrollToElement, getHeaderOffset, getIsSmoothScrolling } from '../Tools/smoothScroll';
const HeroSection = () => {
  const heroContentRef = useRef(null);
  const animatedBgRef = useRef(null);

  useEffect(() => {
    const animatedBg = animatedBgRef.current;
    if (!animatedBg) return;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 12; i++) {
      const span = document.createElement('span');
      const size = Math.random() * 24 + 8;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.animationDuration = `${18 + Math.random() * 12}s`;
      span.style.animationDelay = `${Math.random() * 8}s`;
      fragment.appendChild(span);
    }
    animatedBg.appendChild(fragment);
  }, []);

  useEffect(() => {
    const heroContent = heroContentRef.current;
    if (!heroContent) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (getIsSmoothScrolling()) {
          ticking = false;
          return;
        }

        const scrolled = window.scrollY;
        const limit = window.innerHeight * 0.8;

        if (scrolled < limit) {
          const progress = scrolled / limit;
          heroContent.style.transform = `translate3d(0, ${scrolled * 0.12}px, 0)`;
          heroContent.style.opacity = String(1 - progress * 0.85);
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById('education');
    scrollToElement(target, getHeaderOffset() + 8);
  };
  return (
    <section id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="animated-bg" ref={animatedBgRef} aria-hidden="true" />
      <div className="hero-content" ref={heroContentRef}>
        <p className="hero-greeting">Hello, I'm</p>
        <h1>Ahmed Gamal</h1>
        <Typewriter text='a MERN Stack Developer' />
        <a
          href="https://drive.google.com/file/d/1Yv3BIarVHNMpbnRHeUKaSjdpsxafGAG2/view?usp=sharing"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Visit CV</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <button className="scroll-down" onClick={scrollToContent} aria-label="Scroll to projects">
        <span className="scroll-down-mouse">
          <span className="scroll-down-wheel" />
        </span>
      </button>
    </section>
  );
};

export default HeroSection;
