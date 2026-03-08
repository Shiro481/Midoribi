import { Outlet } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackgroundTexture } from './components/BackgroundTexture';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export function Root() {
  const location = useLocation();
  
  // Re-initialize intersection observers when the route changes
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealedElements = document.querySelectorAll(
      '.reveal, .reveal-fade-up, .reveal-scale, .reveal-left, .reveal-right'
    );
    revealedElements.forEach((el) => observer.observe(el));

    return () => {
      revealedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [location.pathname]);

  return (
    <div className="root-layout">
      <BackgroundTexture />
      <div className="main-content">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}