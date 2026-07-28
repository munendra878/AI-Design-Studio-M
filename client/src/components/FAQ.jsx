import "./FAQ.css";

const faqs = [
  {
    question: "Is AI Design Studio free?",
    answer:
      "Yes. You can generate AI designs for free with daily usage limits.",
  },
  {
    question: "Can I download my designs?",
    answer:
      "Yes. Download your AI-generated designs in high quality.",
  },
  {
    question: "Can I save my designs?",
    answer:
      "Yes. After signing in, you can save and manage your designs anytime.",
  },
  {
    question: "What types of designs can I create?",
    answer:
      "Wedding invitations, birthday cards, festival greetings, posters, business invitations, and much more.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-section">

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about AI Design Studio.</p>
      </div>

      <div className="faq-list">

        {faqs.map((faq, index) => (

          <details key={index}>

            <summary>
              {faq.question}
            </summary>

            <p>
              {faq.answer}
            </p>

          </details>

        ))}

      </div>

    </section>
  );
}