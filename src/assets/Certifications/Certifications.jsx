import Card from '../Tools/Cards';
import { useStaggerReveal, useReveal } from '../Tools/useStaggerReveal';
import certificationRaw from '../../../Certifications.json';
import bitsImage from '../bits.jpg';
import techImage from '../tech.jpg';
import mosImage from '../mos.png';
import './Certifications.css';

// Map imported (bundled) images to certification data so they
// resolve correctly after the Vite production build on Vercel.
const assetImages = [bitsImage, techImage, mosImage];

const certificationData = certificationRaw.map((cert, index) => ({
  ...cert,
  image: assetImages[index] || cert.image
}));

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
