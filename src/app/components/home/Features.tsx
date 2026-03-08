import svgPaths from "../../../imports/svg-roz7sjngno";

export function Features() {
  const features = [
    {
      id: 1,
      title: "Purity First",
      description: "Directly sourced from organic farms in Uji, Japan. No additives, no fillers, just pure leaf.",
      iconPath: svgPaths.p1e45c380,
      viewBox: "0 0 25.4932 25.4885"
    },
    {
      id: 2,
      title: "Stone Ground",
      description: "Slow-milled using traditional granite stones to preserve the vibrant color and complex umami.",
      iconPath: svgPaths.pce603c0,
      viewBox: "0 0 29.25 24",
      card: true
    },
    {
      id: 3,
      title: "Sustainable",
      description: "Supporting small-batch farmers through fair trade and ecological farming practices.",
      iconPath: svgPaths.pd6677c0,
      viewBox: "0 0 33.75 33",
      card: true
    }
  ];

  return (
    <section className="features-section">
      <div className="features-bg" />
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-item ${feature.card ? 'feature-card' : ''} reveal-fade-up delay-${(index + 1) * 100}`}
            >
              <div className="feature-icon-wrapper">
                <svg width="100%" height="100%" viewBox={feature.viewBox} fill="none">
                  <path d={feature.iconPath} fill="#13EC13" />
                </svg>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
