import { useEffect } from 'react';

/**
 * useScrollReveal hook for adding "reveal" animations as user scrolls.
 * Searches for elements with a "reveal" base class.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% is visible
    });

    const revealedElements = document.querySelectorAll(
      '.reveal, .reveal-fade-up, .reveal-scale'
    );

    revealedElements.forEach((el) => observer.observe(el));

    return () => {
      revealedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
