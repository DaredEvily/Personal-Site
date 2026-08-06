const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let scrollAnimationId = null;
let smoothScrolling = false;

export function getIsSmoothScrolling() {
  return smoothScrolling;
}

function getScrollDuration(distance) {
  return Math.min(Math.max(Math.abs(distance) * 0.45, 550), 1100);
}

export function smoothScrollTo(targetY, duration) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
    return;
  }

  if (scrollAnimationId) {
    cancelAnimationFrame(scrollAnimationId);
  }

  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 1) return;

  const scrollDuration = duration ?? getScrollDuration(distance);
  let startTime = null;

  smoothScrolling = true;
  document.documentElement.classList.add('is-scrolling');

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo({ top: startY + distance * eased, left: 0, behavior: 'instant' });

    if (progress < 1) {
      scrollAnimationId = requestAnimationFrame(step);
    } else {
      scrollAnimationId = null;
      smoothScrolling = false;
      document.documentElement.classList.remove('is-scrolling');
    }
  };

  scrollAnimationId = requestAnimationFrame(step);
}

export function scrollToElement(element, offset = 0, duration) {
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(top, duration);
}

export function getHeaderOffset() {
  return (
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
      10
    ) || 70
  );
}
