import { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let cancelled = false;
    setDisplayed('');
    setDone(false);

    const tick = () => {
      if (cancelled) return;
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index += 1;
        setTimeout(tick, 100 + Math.random() * 25);
      } else {
        setDone(true);
      }
    };

    const startDelay = setTimeout(tick, 900);
    return () => {
      cancelled = true;
      clearTimeout(startDelay);
    };
  }, [text]);

  return (
    <p className="typewriter">
      <span className="typewriter-text">{displayed}</span>
      <span className={`typewriter-cursor ${done ? 'done' : ''}`} aria-hidden="true" />
    </p>
  );
};

export default Typewriter;
