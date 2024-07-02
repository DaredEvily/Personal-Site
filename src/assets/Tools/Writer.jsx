import React, { useEffect, useRef } from 'react';

const Typewriter = ({ text }) => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = typewriterRef.current;
    if (typewriter) {
      const originalText = typewriter.textContent;
      typewriter.textContent = '';
      let i = 0;

      const typeWriter = () => {
        if (i < originalText.length) {
          typewriter.textContent += originalText.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      };

      typeWriter();
    }
  }, []);

  return <p className="typewriter fade-in-up" ref={typewriterRef}>{text}</p>;
};

export default Typewriter;
