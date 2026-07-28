import { Link } from "react-router-dom";
import {
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">
            <h2>🎨 AI Design Studio</h2>

            <p>
              Create beautiful AI invitation cards,
              posters, greeting cards and social media
              graphics in seconds using Artificial Intelligence.
            </p>
          </div>

       

          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/my-designs">My Designs</Link>

            <Link to="/templates">Templates</Link>
          </div>

        

          <div className="footer-links">
            <h3>Support</h3>

            <Link to="/about">About</Link>

           
            <Link to="/terms">Terms & Conditions</Link>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {year} AI Design Studio • Built with{" "}
            <Heart
              size={14}
              fill="#ec4899"
              color="#ec4899"
            />{" "}
            using React & AI.
          </p>
          <div className="footer-actions">

            <button
              onClick={scrollTop}
              className="back-top"
              aria-label="Back To Top"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}