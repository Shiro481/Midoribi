import svgPaths from "../../imports/svg-y1momkwszr";
import imgHeroSection from "../../assets/131f5988176d9731d0078e3ff93e6f67871d44c6.png";
import imgMap from "../../assets/6c79bfdc171c0fa044075654e810f5bf891d85b1.png";

export function Contact() {
  const contactInfo = [
    {
      label: "Location",
      title: "124 Tranquility Lane, Kyoto District",
      desc: "Portland, OR 97204",
      icon: svgPaths.p75b60c0,
      viewBox: "0 0 40 44"
    },
    {
      label: "Email",
      title: "hello@midoribi-matcha.com",
      icon: svgPaths.p12dd820,
      viewBox: "0 0 44 40"
    },
    {
      label: "Phone",
      title: "+1 503 555 0123",
      icon: svgPaths.p1898d700,
      viewBox: "0 0 42 42"
    }
  ];

  return (
    <div className="contact-page pt-16">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="contact-hero-card">
            <img alt="Interior sanctuary" className="contact-hero-img" src={imgHeroSection} />
            <div className="contact-hero-overlay" />
            <div className="relative z-10 p-8">
              <p className="hero-badge">Connect with us</p>
              <h1 className="contact-section-title">Find Your Center</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Contact Details */}
            <div className="contact-info-col">
              <div>
                <h2 className="contact-section-title text-primary text-3xl mb-4">Visit Our Sanctuary</h2>
                <p className="hero-description">
                  Step into a world of tranquility. Our space is designed to slow time and awaken your senses through the art of fine matcha.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                {contactInfo.map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="contact-item-icon">
                      <svg width="20" height="20" viewBox={item.viewBox} fill="none">
                        <path d={item.icon} fill="#13EC13" />
                      </svg>
                    </div>
                    <div>
                      <p className="hero-badge mb-1">{item.label}</p>
                      <h3 className="menu-item-title">{item.title}</h3>
                      {item.desc && <p className="menu-item-description">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="hours-card">
                <div className="flex items-center gap-2 mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p256e1340} fill="#13EC13" />
                  </svg>
                  <h3 className="menu-item-title text-xl">Opening Hours</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-2 border-b border-muted">
                    <p className="menu-item-description">Monday - Friday</p>
                    <p className="menu-item-title text-base font-normal">08:00 — 18:00</p>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-muted">
                    <p className="menu-item-description">Saturday</p>
                    <p className="menu-item-title text-base font-normal">09:00 — 19:00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="menu-item-description">Sunday</p>
                    <p className="text-green font-bold">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="contact-form-col">
              <div className="form-card">
                <form className="flex flex-col gap-6">
                  <div className="grid-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" placeholder="Your first name" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" placeholder="Your last name" className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" placeholder="email@example.com" className="form-input" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <div className="select-wrapper">
                      <select className="form-select">
                        <option>General Inquiry</option>
                        <option>Reservation</option>
                        <option>Catering</option>
                        <option>Wholesale</option>
                      </select>
                      <div className="select-arrow">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path d="M7.2 9.6L12 14.4L16.8 9.6" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea placeholder="How can we help you?" rows={5} className="form-textarea" />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path d={svgPaths.pb36e280} fill="#0A0A0A" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <div className="map-container">
            <div className="map-bg">
              <img alt="Map" className="map-img" src={imgMap} />
              <div className="map-overlay" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}