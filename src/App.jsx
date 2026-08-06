import { useEffect } from 'react'
import './app.css'
import './assets/Tools/CustomCursor.css'
import Header from './assets/Header/Header'
import Section1 from './assets/Section 1/Section1'
import Section2 from './assets/Section 2/Section2'
import Certifications from './assets/Certifications/Certifications'
import Education from './assets/Education/Education'
import Footer from './assets/Footer/Footer'
import Contact from './assets/Contact/Contact'
import CustomCursor from './assets/Tools/CustomCursor'
import { scrollToElement, getHeaderOffset } from './assets/Tools/smoothScroll'

export default function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      scrollToElement(target, getHeaderOffset() + 8);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb--1" />
        <div className="ambient-orb ambient-orb--2" />
        <div className="ambient-orb ambient-orb--3" />
      </div>
      <Header />
      <main>
        <Section1 />
        <Education />
        <Certifications />
        <Section2 />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
