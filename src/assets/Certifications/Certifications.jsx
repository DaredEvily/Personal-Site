import Card from '../Tools/Cards';
import { useStaggerReveal, useReveal } from '../Tools/useStaggerReveal';
import certificationData from '../../../Certifications.json';
import './Certifications.css';

const CertificationsSection = () => {
  const setCardRef = useStaggerReveal(certificationData.length, 80);
  const titleRef = useReveal();
  const subtitleRef = useReveal(100);

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Certifications</h2>
        <p className="section-subtitle" ref={subtitleRef}>Credentials and achievements in software development</p>
        <div className="certifications-grid">
          {certificationData.map((cert, index) => (
            <div className="certification-card" ref={setCardRef(index)} key={index}>
              <Card
                title={cert.title}
                description={cert.description}
                image={cert.image}
                link={cert.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
