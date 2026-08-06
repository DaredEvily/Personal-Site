import { useEffect, useRef } from 'react';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function useStaggerReveal(itemCount, staggerMs = 90) {
  const refs = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    refs.current.forEach((el, index) => {
      if (!el) return;

      if (prefersReduced) {
        el.classList.add('revealed');
        return;
      }

      el.classList.add('reveal-item');
      el.style.transitionDelay = `${index * staggerMs}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [itemCount, staggerMs]);

  return (index) => (el) => {
    refs.current[index] = el;
  };
}

export function useReveal(staggerMs = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('revealed');
      return;
    }

    el.classList.add('reveal-item');
    if (staggerMs) el.style.transitionDelay = `${staggerMs}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}

export { EASE };
