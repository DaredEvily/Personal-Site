import Card from '../Tools/Cards';
import { useStaggerReveal, useReveal } from '../Tools/useStaggerReveal';
import projectData from '../../../Cards.json';
import './Section2.css';

const ProjectsSection = () => {
  const setCardRef = useStaggerReveal(projectData.length, 80);
  const titleRef = useReveal();
  const subtitleRef = useReveal(100);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Featured Projects</h2>
        <p className="section-subtitle" ref={subtitleRef}>A selection of projects I've built and contributed to</p>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" ref={setCardRef(index)} key={index}>
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
