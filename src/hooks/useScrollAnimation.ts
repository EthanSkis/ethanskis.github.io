import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animatedElements = Array.from(element.querySelectorAll<HTMLElement>('.fade-in-up'));
    if (animatedElements.length === 0) return;

    // Immediately reveal any elements already in the viewport (synchronous fallback).
    // requestAnimationFrame lets the browser paint opacity:0 first so the transition plays.
    const rafId = requestAnimationFrame(() => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
          el.classList.add('visible');
        }
      });
    });

    // IntersectionObserver handles elements that scroll into view later.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return ref;
}
