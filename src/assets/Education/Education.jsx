import Card from '../Tools/Cards';
import { useStaggerReveal, useReveal } from '../Tools/useStaggerReveal';
import educationData from '../../../Education.json';
import './Education.css';

const EducationSection = () => {
  const setCardRef = useStaggerReveal(educationData.length, 80);
  const titleRef = useReveal();
  const subtitleRef = useReveal(100);

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Master Education</h2>
        <p className="section-subtitle" ref={subtitleRef}>
          Academic background and postgraduate studies
        </p>
        <div className="education-grid">
          {educationData.map((item, index) => (
            <div className="education-card" ref={setCardRef(index)} key={index}>
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
