import { Link } from "react-router-dom";

import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-box">

        <h2>
          Start Creating Amazing AI Designs Today
        </h2>

        <p>
          Generate invitation cards, greeting cards, posters, and social media
          designs in seconds using the power of Artificial Intelligence.
        </p>

        <Link to="/dashboard">

          <button className="cta-btn">
            Generate Now
          </button>

        </Link>

      </div>

    </section>
  );
}