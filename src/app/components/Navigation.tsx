import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import svgPaths from "../../imports/svg-roz7sjngno";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'MENU', path: '/menu' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="nav-bar animate-fade-in">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p1e45c380} fill="#13EC13" />
            </svg>
          </div>
          <span className="logo-text">MIDORIBI</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              onClick={closeMenu}
              className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}