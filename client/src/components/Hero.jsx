import { Link } from "react-router-dom";
import "./Hero.css";

const templates = [
  {
    title: "Wedding",
    image: "/templates/wedding.png",
  },
  {
    title: "Birthday",
    image: "/templates/birthday.png",
  },
  {
    title: "Baby Shower",
    image: "/templates/babyshower.png",
  },
  {
    title: "Corporate",
    image: "/templates/business.png",
  },
  {
    title: "Festival",
    image: "/templates/festival.png",
  },
  {
    title: "Valentine",
    image: "/templates/valentine.png",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">
          ✨ AI Powered Invitation Generator
        </span>

        <h1>
          Create Stunning
          <span> AI Invitation Cards </span>
          in Seconds
        </h1>

        <p>
          Create personalized invitations, posters and social media designs instantly using AI. No design skills required.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="primary-btn">
              🚀 Get Started
            </button>
          </Link>

          <Link to="/templates">
            <button className="secondary-btn">
              🎨 Browse Templates
            </button>
          </Link>
        </div>

        {/* Template Slider */}

        <div className="template-slider">
          <div className="slider-track">
            {[...templates, ...templates].map((item, index) => (
              <div className="template-card" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}