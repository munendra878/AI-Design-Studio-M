import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Terms.css";
export default function Terms() {
  
  return (
  <>
        <Navbar />

    <div className="terms-page">

      <div className="terms-container">

        <h1>Terms & Conditions</h1>

        <p className="updated">
          Last Updated: July 25, 2026
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>

          <p>
            By accessing or using AI Invitation Generator, you agree to
            these Terms and Conditions. If you do not agree, please do
            not use our platform.
          </p>
        </section>

        <section>
          <h2>2. User Accounts</h2>

          <p>
            You are responsible for maintaining the security of your
            account and all activities that occur under it.
          </p>
        </section>

        <section>
          <h2>3. AI Generated Content</h2>

          <p>
            Our platform uses artificial intelligence to generate
            invitation designs based on the information and prompts
            provided by users.
          </p>

          <ul>
            <li>Generated designs may vary.</li>
            <li>Results are not guaranteed to be unique.</li>
            <li>Users should review all generated content before use.</li>
          </ul>
        </section>

        <section>
          <h2>4. User Content</h2>

          <p>
            You retain ownership of the content you submit, including
            prompts, event details, and text. By using the platform, you
            grant us permission to process your content solely to provide
            our services.
          </p>
        </section>

        <section>
          <h2>5. Acceptable Use</h2>

          <ul>
            <li>No illegal activities.</li>
            <li>No hate speech or abusive content.</li>
            <li>No copyright infringement.</li>
            <li>No malware or malicious code.</li>
            <li>No attempts to access other users' accounts.</li>
          </ul>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>

          <p>
            The website, source code, logos, graphics, and branding
            belong to AI Invitation Generator. Generated invitations
            remain the responsibility of the user.
          </p>
        </section>

        <section>
          <h2>7. Privacy</h2>

          <p>
            Your use of this platform is also governed by our Privacy
            Policy. We only collect information necessary to provide the
            service.
          </p>
        </section>

        <section>
          <h2>8. Service Availability</h2>

          <p>
            We strive to keep the platform available at all times, but we
            cannot guarantee uninterrupted access due to maintenance,
            updates, or technical issues.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>

          <p>
            AI Invitation Generator is provided "AS IS" without
            warranties. We are not responsible for any losses resulting
            from the use of our platform or AI-generated content.
          </p>
        </section>

        <section>
          <h2>10. Termination</h2>

          <p>
            We reserve the right to suspend or terminate accounts that
            violate these Terms or misuse the platform.
          </p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>

          <p>
            We may update these Terms at any time. Changes become
            effective immediately after publication on this page.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>

          <p>Email: support@aiinvitation.com</p>

          <p>Website: https://yourwebsite.com</p>
        </section>

      </div>

    </div>

     <Footer />
        </>
  );
}