import { Link } from 'react-router';
import svgPaths from "../../../imports/svg-roz7sjngno";
import imgMatchaOperaCakeWithGoldLeaf from "../../../assets/5b1286096e6ddcadb0d76d42e2cacd50e3a38a3d.png";
import imgHandcraftedMatchaMochi from "../../../assets/5bc4933bcdb04019b70be88ae73f559904d5f534.png";
import imgMatchaWhiskingExperience from "../../../assets/bfa0b4bf87ca44593f20fc3d90ce3d0491c6ea70.png";

export function SignatureDelights() {
  const products = [
    {
      id: 1,
      title: "Matcha Opera Cake",
      description: "Layered almond sponge, matcha ganache, and dark chocolate glaze topped with 24k gold leaf.",
      price: "$12",
      image: imgMatchaOperaCakeWithGoldLeaf,
      alt: "Matcha Opera Cake with gold leaf"
    },
    {
      id: 2,
      title: "Ceremony Mochi",
      description: "Soft glutinous rice cake filled with house-made white chocolate and Uji matcha cream.",
      price: "$8",
      image: imgHandcraftedMatchaMochi,
      alt: "Handcrafted Matcha Mochi"
    },
    {
      id: 3,
      title: "Traditional Whisk Set",
      description: "Our finest ceremonial grade matcha prepared tableside with traditional bamboo whisk.",
      price: "$15",
      image: imgMatchaWhiskingExperience,
      alt: "Matcha Whisking Experience"
    }
  ];

  return (
    <section className="delights-section">
      <div className="container">
        <div className="delights-header reveal-fade-up">
          <div className="delights-title-box">
            <h2 className="delights-title">
              <span className="delights-title-main">Signature </span>
              <span className="delights-title-accent">Delights</span>
            </h2>
            <p className="delights-description">
              Our pastry chefs blend traditional Japanese flavors with contemporary French techniques.
            </p>
          </div>
          <Link to="/menu" className="view-menu-link">
            View Full Menu
            <svg width="12" height="12" viewBox="0 0 9.33333 9.33333" fill="none">
              <path d={svgPaths.pce77c00} fill="#13EC13" />
            </svg>
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card reveal-fade-up delay-${(index + 1) * 100}`}
            >
              <div className="product-img-wrapper">
                <img 
                  alt={product.alt} 
                  src={product.image} 
                  className="product-img"
                />
                <div className="product-price">
                  <p>{product.price}</p>
                </div>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
