import svgPaths from "../../imports/svg-ihhighohew";
import imgMatchaPowder from "../../assets/ac16152adec77c72da31670bdefea202c51a00b2.png";
import imgTeaFields from "../../assets/8465a7e033a67543c161dbe42b026341218d2b8a.png";
import imgCeremony from "../../assets/2d22aad4abc44452af5800cc8bae58ccdf5602de.png";
import imgMatchaLatte from "../../assets/ea88270483848a1bdbf1cc04a7e9158ad73bcada.png";
import imgTools from "../../assets/bf65e15febb8d3a5cfa585bb1f8c93adf1b140d4.png";

export function About() {
  const heritage = [
    {
      title: "Shade Grown",
      description: "Traditional 20-day shading process to maximize chlorophyll and L-theanine.",
      icon: svgPaths.p345427e0,
      viewBox: "0 0 33 25.8"
    },
    {
      title: "First Harvest",
      description: "Only the youngest, most tender leaves from the Spring 'Ichibancha' harvest are selected.",
      icon: svgPaths.p52fcf00,
      viewBox: "0 0 24 30"
    },
    {
      title: "Slow Ground",
      description: "Each granite mill turns slowly, producing only 30 grams of powder per hour to avoid heat.",
      icon: svgPaths.p327fd380,
      viewBox: "0 0 27 27"
    }
  ];

  return (
    <div className="about-page pt-16">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p className="hero-badge animate-fade-up">Est. 2018 — Uji, Kyoto</p>
              <h1 className="about-title animate-fade-up delay-100">
                <span className="font-bold text-primary">Honoring the</span>
                <span className="font-bold text-green">Ancient Green.</span>
              </h1>
              <p className="hero-description max-w-md animate-fade-up delay-200">
                At Midoribi, we believe the path to mindfulness begins with a single, perfectly whisked bowl of matcha.
              </p>
            </div>

            <div className="about-img-container animate-fade-in delay-300">
              <img alt="Premium matcha powder" className="about-img" src={imgMatchaPowder} />
              <div className="stats-badge animate-float">
                <p className="stats-number">100%</p>
                <p className="stats-label">Stone Ground</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="heritage-section">
        <div className="container text-center">
          <h2 className="about-title text-center text-primary mb-4">A Legacy of Centuries</h2>
          <p className="heritage-description mx-auto mb-12 max-w-2xl">
            Our journey begins in the rolling hills of Uji, Japan, where tea cultivation has been an art form for over 800 years. We partner exclusively with fifth-generation family farms who treat each leaf with sacred reverence.
          </p>

          <div className="grid-3 gap-8">
            {heritage.map((item, index) => (
              <div key={item.title} className={`heritage-card reveal-fade-up delay-${index * 100}`}>
                <div className="feature-icon-wrapper mx-auto">
                  <svg width="100%" height="100%" viewBox={item.viewBox} fill="none">
                    <path d={item.icon} fill="#13EC13" />
                  </svg>
                </div>
                <h3 className="feature-title mb-4">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Mosaic Section */}
      <section className="section">
        <div className="container">
          <div className="mosaic-grid">
            <div className="mosaic-item col-span-2-md reveal-fade-up">
              <img alt="Tea fields" src={imgTeaFields} />
            </div>
            <div className="mosaic-item reveal-fade-up delay-100">
              <img alt="Ceremony tools" src={imgCeremony} />
            </div>
            <div className="mosaic-item reveal-fade-up delay-200">
              <img alt="Traditional tools" src={imgTools} />
            </div>
            <div className="mosaic-item col-span-2 reveal-fade-up delay-300">
              <img alt="Matcha latte art" src={imgMatchaLatte} />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container max-w-800">
          <div className="philosophy-card">
            <h2 className="feature-title text-2xl mb-6">The Midoribi Philosophy</h2>
            <div className="quote-block">
              <p className="hero-description text-lg italic">
                "Matcha is not just a drink; it's a moment of pause in a world that never stops."
              </p>
            </div>

            <div className="grid-2 gap-10">
              <div>
                <p className="feature-description text-sm">
                  Founded by tea enthusiasts who traveled through the remote villages of Kyoto, Midoribi was born from a desire to bring the authentic ceremony of Japanese tea culture to the modern urban landscape. We stripped away the pretension and focused on what matters: the quality of the leaf and the clarity of the mind.
                </p>
              </div>
              <div>
                <p className="feature-description text-sm">
                  Today, our cafes serve as sanctuaries. From our signature stone-ground ceremonial matcha to our seasonal infusions, every element is designed to ground you in the present. We believe that slow living is the ultimate luxury, and it starts with the ritual of the pour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-bg" />
        <div className="container max-w-800">
          <div className="newsletter-content max-w-md">
            <h2 className="newsletter-title">Join the Ritual.</h2>
            <p className="newsletter-text">
              Subscribe to receive exclusive insights into our seasonal harvests and meditation techniques.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}