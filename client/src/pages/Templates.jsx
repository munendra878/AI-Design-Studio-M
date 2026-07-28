import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Heart,
  Cake,
  Baby,
  Briefcase,
  Gift,
} from "lucide-react";

import "./Templates.css";

export default function Templates() {
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      title: "Wedding Invitation",
      category: "wedding",
      image: "/templates/wedding.png",
      icon: <Heart size={40} />,
      prompt:
        "Luxury wedding invitation with elegant floral decorations, golden border, premium typography and romantic theme.",
    },
    {
      id: 2,
      title: "Birthday Party",
      category: "birthday",
      image: "/templates/birthday.png",
      icon: <Cake size={40} />,
      prompt:
        "Modern birthday invitation with colorful balloons, confetti, vibrant background and elegant typography.",
    },
    {
      id: 3,
      title: "Baby Shower",
      category: "babyshower",
      image: "/templates/babyshower.png",
      icon: <Baby size={40} />,
      prompt:
        "Cute baby shower invitation with pastel colors, teddy bear, clouds and elegant decorations.",
    },
    {
      id: 4,
      title: "Valentine",
      category: "valentine",
      image: "/templates/valentine.png",
      icon: <Heart size={40} />,
      prompt:
        "Luxury romantic Valentine card with red roses, hearts, glowing background and premium typography.",
    },
    {
      id: 5,
      title: "Business Event",
      category: "business",
      image: "/templates/business.png",
      icon: <Briefcase size={40} />,
      prompt:
        "Professional corporate business invitation with modern layout, blue theme and elegant typography.",
    },
    {
      id: 6,
      title: "Festival",
      category: "festival",
      image: "/templates/festival.png",
      icon: <Gift size={40} />,
      prompt:
        "Traditional festival greeting card with decorative patterns, festive colors and elegant design.",
    },
    {
      id: 7,
      title: "Poster",
      category: "poster",
      image: "/templates/poster.png",
      icon: <Gift size={40} />,
      prompt:
        "Professional AI poster with modern typography, premium layout, eye-catching graphics and vibrant colors.",
    },
  ];

  const handleTemplateSelect = (template) => {
    navigate("/generate", {
      state: {
        category: template.category,
        prompt: template.prompt,
      },
    });
  };

  return (
    <>
      <Navbar />

      <main className="templates-page">
        <section className="templates-header">
          <h1>
            🎨 AI Design Templates
          </h1>

          <p>
            Choose a professional template and start generating your AI design instantly.
          </p>
        </section>

        <section className="template-grid">
          {templates.map((template) => (
            <div
              key={template.id}
              className="template-card"
              onClick={() => handleTemplateSelect(template)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTemplateSelect(template);
                }
              }}
            >
              <div className="template-image">
                <img
                  src={template.image}
                  alt={template.title}
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="template-content">
                <div className="template-icon">
                  {template.icon}
                </div>

                <h2>{template.title}</h2>

                <span>{template.category}</span>

                <button
                  className="use-template-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTemplateSelect(template);
                  }}
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}