import { Link } from 'react-router';
import svgPaths from "../../../imports/svg-roz7sjngno";
import imgMapOfTokyo from "../../../assets/942c4a402ae5e75ec775fa887e8c64e02015f27c.png";

export function Sanctuary() {
  return (
    <section className="sanctuary-section">
      <div className="container">
        <div className="sanctuary-grid">
          <div className="reveal-left">
            <h2 className="sanctuary-title">Visit our Sanctuary</h2>
            
            <div className="sanctuary-info-list">
              <div className="sanctuary-info-item">
                <div className="info-icon">
                  <svg width="100%" height="100%" viewBox="0 0 16 24" fill="none">
                    <path d={svgPaths.p23890c00} fill="#13EC13" />
                  </svg>
                </div>
                <div>
                  <h3 className="info-text-title">Tokyo Omotesando</h3>
                  <p className="info-text-content">4 Chome-26-14 Jingumae, Shibuya City</p>
                </div>
              </div>

              <div className="sanctuary-info-item">
                <div className="info-icon">
                  <svg width="100%" height="100%" viewBox="0 0 20 24" fill="none">
                    <path d={svgPaths.p8153600} fill="#13EC13" />
                  </svg>
                </div>
                <div>
                  <h3 className="info-text-title">Operating Hours</h3>
                  <p className="info-text-content">Mon - Sun: 08:00 AM - 09:00 PM</p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="book-btn">
              Book a Table
            </Link>
          </div>

          <div className="map-container reveal-right">
            <div className="map-bg">
              <img 
                alt="Map of Tokyo" 
                src={imgMapOfTokyo} 
                className="map-img"
              />
              <div className="map-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
