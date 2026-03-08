import { Link } from 'react-router';

export function Footer() {
  const sections = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Menu', path: '/menu' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Journal', path: '#' },
        { label: 'Press', path: '#' },
        { label: 'Wholesale', path: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Instagram', path: '#' },
        { label: 'Pinterest', path: '#' },
        { label: 'Twitter', path: '#' }
      ]
    }
  ];

  return (
    <footer className="footer reveal">
      <div className="container reveal-fade-up">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-title">MIDORIBI</h3>
            <p className="footer-description">
              Experience the art of ceremonial matcha in a modern sanctuary.
            </p>
          </div>

          {/* Columns */}
          {sections.map((section) => (
            <div key={section.title} className="footer-column">
              <h4 className="column-title">{section.title}</h4>
              <nav className="footer-column-links">
                {section.links.map((link) => (
                  <Link 
                    key={link.label}
                    to={link.path} 
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© MIDORIBI 2024</p>
          <p>Handcrafted for Tranquility</p>
        </div>
      </div>
    </footer>
  );
}