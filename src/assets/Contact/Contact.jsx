import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useReveal } from '../Tools/useStaggerReveal';
import './Contact.css';

const Contact = () => {
  const titleRef = useReveal();
  const subtitleRef = useReveal(80);
  const formRef = useReveal(160);

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Get in Touch</h2>
        <p className="section-subtitle" ref={subtitleRef}>
          Have a question or want to work together? Send me a message.
        </p>
        <form className="contact-form" ref={formRef} method="GET" action="#">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="con">
            <button type="submit">Send Message</button>
            <div className="social">
              <a href="https://github.com/DaredEvily" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.youtube.com/@ahmadgamal6802" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/ahmad-gamal-88589a293/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com/hackerCBI" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
