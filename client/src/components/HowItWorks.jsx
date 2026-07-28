import {
  Sparkles,
  PencilLine,
  Image,
  Download,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    icon: <PencilLine size={42} />,
    title: "Enter Your Prompt",
    description:
      "Describe your invitation, poster, or greeting card with simple text.",
  },
  {
    icon: <Sparkles size={42} />,
    title: "Generate with AI",
    description:
      "Our AI transforms your prompt into a beautiful professional design within seconds.",
  },
  {
    icon: <Image size={42} />,
    title: "Customize",
    description:
      "Preview your design and make changes until it looks perfect.",
  },
  {
    icon: <Download size={42} />,
    title: "Save & Download",
    description:
      "Save your design to your account or download it in high quality.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">

      <div className="section-title">
        <h2>How It Works</h2>
        <p>Create stunning AI designs in just four simple steps.</p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}