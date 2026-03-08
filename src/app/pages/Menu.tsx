import svgPaths from "../../imports/svg-dgbld17eb4";
import imgMatchaCrepeCake from "../../assets/b3e82a1667cb44595b157e92c4ca1bbc6dbc7bf3.png";
import imgHandcraftedMochi from "../../assets/dbde0f2670d2dc99772c383053efe4ea29b8d75e.png";
import imgMatchaLavaCake from "../../assets/41c4c1fec4fd44e1e1c2c016052457cb29ca210b.png";
import imgPremiumMatchaPowderArt from "../../assets/e29dacf997a13dad088126c7b8b978082e084756.png";

export function Menu() {
  const classics = [
    { title: "Ceremonial Usucha", price: "$7.50", desc: "Thin, frothy whisked tea with a smooth, umami finish." },
    { title: "Koicha Espresso", price: "$9.00", desc: "Thick, syrupy concentrate for the true connoisseur." },
    { title: "Iced Mizu Clear", price: "$6.50", desc: "Pure matcha over crystal ice for ultimate refreshment." },
    { title: "Genmaicha Blend", price: "$6.00", desc: "Matcha dusted over toasted brown rice green tea." }
  ];

  const lattes = [
    { title: "Lavender Cloud", price: "$8.50", tag: "Popular", desc: "Ceremonial matcha, organic oat milk, and house-made lavender honey." },
    { title: "Black Sesame Latte", price: "$8.75", tag: "Signature", desc: "Earthy black sesame paste swirled with creamy matcha and almond milk." },
    { title: "Sea Salt Rose", price: "$8.50", tag: "Floral", desc: "Delicate rose-infused milk topped with matcha and a pinch of Okinawa sea salt." },
    { title: "White Chocolate Matcha", price: "$9.25", tag: "Sweet", desc: "Melted artisan white chocolate integrated with ceremonial matcha." }
  ];

  const desserts = [
    { title: "MATCHA MILLE CREPE", price: "$12.00", desc: "20 layers of paper-thin crepes with matcha pastry cream", img: imgMatchaCrepeCake },
    { title: "ARTISAN MOCHI SET", price: "$10.00", desc: "Trio of handcrafted Matcha, black sesame, and yuzu", img: imgHandcraftedMochi },
    { title: "UJI LAVA CAKE", price: "$14.00", desc: "Warm molten matcha cake with vanilla ice cream", img: imgMatchaLavaCake }
  ];

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-bg">
          <img alt="Premium matcha powder" className="menu-hero-img" src={imgPremiumMatchaPowderArt} />
        </div>
        <div className="menu-hero-content">
          <p className="menu-hero-badge animate-fade-up">Est. 2018</p>
          <h1 className="menu-hero-title animate-fade-up delay-100">
            <span className="font-light">The </span>
            <span className="italic">Curated</span>
            <span className="font-light"> Menu</span>
          </h1>
          <p className="hero-description mx-auto animate-fade-up delay-200">
            Premium drinks designed to elevate every sip. Modern blends crafted with tradition.
          </p>
        </div>
      </section>

      {/* Classic Matcha Section */}
      <section className="menu-section">
        <div className="menu-section-bg" />
        <div className="container">
          <div className="menu-layout">
            <div className="menu-category-card reveal-left">
              <h2 className="menu-category-title">
                <span className="font-light">Classic </span>
                <span className="italic text-green">Matcha</span>
              </h2>
              <p className="menu-item-description mb-4">
                Sourced from the hills of Uji, our ceremonial grade matcha is whisked to perfection using traditional methods.
              </p>
              <div className="bg-green h-px w-12" />
            </div>

            <div className="menu-items-grid reveal-right">
              {classics.map((item, index) => (
                <div key={item.title} className={`menu-item reveal-fade-up delay-${index * 100}`}>
                  <div className="menu-item-header">
                    <h3 className="menu-item-title">{item.title}</h3>
                    <p className="menu-item-price">{item.price}</p>
                  </div>
                  <p className="menu-item-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Lattes Section */}
      <section className="menu-section bg-light-green">
        <div className="container">
          <div className="menu-layout">
            <div className="menu-items-grid">
              {lattes.map(latte => (
                <div key={latte.title} className="latte-card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="menu-item-title text-xl">{latte.title}</h3>
                    <span className="badge">{latte.tag}</span>
                  </div>
                  <p className="menu-item-description mb-4">{latte.desc}</p>
                  <div className="flex justify-between items-center">
                    <p className="menu-item-price">{latte.price}</p>
                    <button className="add-text-btn">
                      ADD
                      <svg width="12" height="12" viewBox="0 0 11.6667 11.6667" fill="none">
                        <path d={svgPaths.p957df70} fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-category-card order-first-md text-right reveal-right">
              <h2 className="menu-category-title">
                <span className="italic text-green">Specialty</span>
                <span className="font-light"> Lattes</span>
              </h2>
              <p className="menu-item-description mb-4">
                Artfully crafted botanical blends designed to elevate your palate and nourish your soul.
              </p>
              <div className="bg-green h-px w-12 ml-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Artisanal Desserts Section */}
      <section className="menu-section">
        <div className="container">
          <h2 className="text-center delights-title mb-4">
            <span className="font-light">Artisanal </span>
            <span className="italic text-green">Desserts</span>
          </h2>
          <p className="text-center menu-item-description mb-12 mx-auto max-w-md">
            Crafted daily from rare ingredients using seasonal matcha from Japan.
          </p>

          <div className="dessert-grid">
            {desserts.map((dessert, index) => (
              <div key={dessert.title} className={`dessert-card reveal-fade-up delay-${index * 100}`}>
                <div className="dessert-img-wrapper">
                  <img alt={dessert.title} src={dessert.img} className="w-full h-full object-cover" />
                </div>
                <div className="mb-2">
                  <h3 className="menu-item-title uppercase mb-1">{dessert.title}</h3>
                  <p className="menu-item-description">{dessert.desc}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="menu-item-price text-lg">{dessert.price}</p>
                  <button className="add-btn-circle">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}