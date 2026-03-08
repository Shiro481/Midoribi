import { Link } from "react-router";
import imgHeroMatcha from "../../../assets/51abeceb901c3a60e67e07de73666811e44ea9b9.png";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background animate-fade-in">
        <img
          alt="Steaming matcha latte with traditional bamboo whisk"
          src={imgHeroMatcha}
          className="hero-background-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <p className="hero-badge animate-fade-up">Uji Origin • Ceremonial Grade</p>
          <h1 className="hero-title animate-fade-up delay-100">
            <span className="hero-title-main">The Art of</span>
            <span className="hero-title-accent">Modern Tea</span>
          </h1>
          <p className="hero-description animate-fade-up delay-200">
            Experience the purest ceremonial grade matcha, stone-ground and
            whisked to perfection for a moment of absolute serenity.
          </p>
          <div className="hero-actions animate-fade-up delay-300">
            <Link to="/menu" className="btn btn-primary">
              Explore Menu
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
