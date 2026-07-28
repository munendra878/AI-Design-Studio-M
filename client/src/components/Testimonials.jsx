import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Event Planner",
    review:
      "This AI Design Studio saved me hours of work. The invitation designs are beautiful and professional.",
      
  },
  {
    name: "Rahul Patel",
    role: "Business Owner",
    review:
      "Generating posters for promotions has never been easier. Highly recommended!",
  },
  {
    name: "Anjali Verma",
    role: "Student",
    review:
      "The interface is simple and the AI creates amazing invitation cards in seconds.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">

      <div className="section-title">
        <h2>What Our Users Say</h2>
        <p>Thousands of people love creating designs with AI Design Studio.</p>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <p className="review">
              "{item.review}"
            </p>

            <h4>{item.name}</h4>

            <span>{item.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
}