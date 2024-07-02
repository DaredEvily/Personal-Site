import React, { useEffect, useRef } from 'react';
import './Section2.css';
import Card from '../Tools/Cards';
import projectData from '../../../Cards.json';

const ProjectsSection = () => {
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectCardsRef.current;
    projectCards.forEach((card) => {
      if (card) {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
      }
    });

    // Clean up the observer on component unmount
    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, [projectData]);

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div
              className="project-card"
              ref={(el) => (projectCardsRef.current[index] = el)}
              key={index}
            >
              <Card 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                link={project.link} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
