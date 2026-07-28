import { Link } from "react-router-dom";
import "./Categories.css";

const cards = [
  {
    icon: "💒",
    title: "Wedding",
    desc: "Elegant AI-generated wedding invitations",
    category: "wedding",
  },
  {
    icon: "🎂",
    title: "Birthday",
    desc: "Creative birthday invitation cards",
    category: "birthday",
  },
  {
    icon: "🎉",
    title: "Anniversary",
    desc: "Celebrate unforgettable memories",
    category: "anniversary",
  },
  {
    icon: "👶",
    title: "Baby Shower",
    desc: "Cute baby shower invitation cards",
    category: "babyshower",
  },
  {
    icon: "🎆",
    title: "Festival",
    desc: "Beautiful festive greeting cards",
    category: "festival",
  },
  {
    icon: "💼",
    title: "Business",
    desc: "Professional business posters & cards",
    category: "business",
  },
{
  icon: "🎨",
  title: "Poster",
  desc: "Generate creative posters for any occasion",
  category: "poster",
},
  {
    icon: "❤️",
    title: "Valentine",
    desc: "Romantic AI-generated greeting cards",
    category: "valentine",
  },
];

export default function Categories() {
  return (
    <section className="categories">

      <div className="section-title">
        <span className="badge">AI Powered</span>

        <h2>Explore Design Categories</h2>

        <p>
          Generate premium invitation cards, greeting cards,
          posters and social media designs with AI in seconds.
        </p>
      </div>

      <div className="category-grid">
        {cards.map((card, index) => (
          <Link
            key={card.category}
            to={`/ai-generator?category=${card.category}`}
            className="category-card"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="glow"></div>

            <div className="category-icon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

            <span className="generate-link">
              Generate →
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}