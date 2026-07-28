import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="about-container">

          <h1>About AI Invitation Generator</h1>

          <p className="about-subtitle">
            Create beautiful, personalized invitation cards in seconds using the
            power of Artificial Intelligence.
          </p>

          <section>
            <h2>Who We Are</h2>

            <p>
              AI Invitation Generator is an innovative web application designed
              to simplify invitation card creation. Whether you're planning a
              wedding, birthday, baby shower, anniversary, festival, business
              event, or any special occasion, our platform helps you create
              professional-quality invitations effortlessly.
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>

            <p>
              Our mission is to make invitation design fast, creative, and
              accessible to everyone. By combining modern AI technology with an
              intuitive interface, we enable users to generate unique invitation
              cards without requiring any graphic design experience.
            </p>
          </section>

          <section>
            <h2>What We Offer</h2>

            <ul>
              <li>🎨 AI-generated invitation card designs</li>
              <li>💍 Wedding invitation templates</li>
              <li>🎂 Birthday invitation cards</li>
              <li>👶 Baby shower invitations</li>
              <li>🎉 Festival and celebration cards</li>
              <li>🏢 Business event invitations</li>
              <li>☁️ Cloud-based design storage</li>
              <li>📥 Download high-quality invitation images</li>
            </ul>
          </section>

          <section>
            <h2>Why Choose Us?</h2>

            <ul>
              <li>⚡ Fast AI-powered image generation</li>
              <li>🖥️ Easy-to-use and responsive interface</li>
              <li>🔒 Secure user authentication</li>
              <li>📱 Mobile, tablet, and desktop friendly</li>
              <li>🎯 High-quality invitation designs</li>
              <li>💾 Save and manage your designs anytime</li>
            </ul>
          </section>

          <section>
            <h2>Our Technology</h2>

            <p>
              AI Invitation Generator is built using React.js, Node.js,
              Express.js, MongoDB, Clerk Authentication, Cloudinary, and AI
              image generation services to deliver a fast, secure, and reliable
              experience.
            </p>
          </section>

          <section>
            <h2>Our Vision</h2>

            <p>
              We envision a future where anyone can create beautiful
              invitations with just a few clicks. Our goal is to continuously
              improve our AI capabilities, introduce new templates, and deliver
              an exceptional design experience.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>

            <p>We'd love to hear your feedback, suggestions, or questions.</p>

            <p>📧 Email: support@aiinvitation.com</p>

            <p>🌐 Website: https://yourwebsite.com</p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}