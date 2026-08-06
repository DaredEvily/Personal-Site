import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const INTERACTIVE = 'a, button, .card, input, textarea, label, [role="button"], .nav-links a, .cta-button';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const frameRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e) => {
      setHovering(!!e.target.closest(INTERACTIVE));
    };

    const createRipple = (x, y) => {
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    };

    const onClick = (e) => {
      createRipple(e.clientX, e.clientY);
    };

    const onContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);
    window.addEventListener('click', onClick);
    window.addEventListener('contextmenu', onContextMenu);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('click', onClick);
      window.removeEventListener('contextmenu', onContextMenu);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? ' hover' : ''}${clicking ? ' click' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`cursor-dot${clicking ? ' click' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
