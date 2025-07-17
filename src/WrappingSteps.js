import React from "react";
import "./WrappingSteps.css";
import step1 from "./assets/wrapping step1.png"
import step2 from "./assets/step2.png"
import step3 from "./assets/step3.png"
import step4 from "./assets/step4.png"

const steps = [
  {
    title: "Surface Preparation",
    image: step1,
    description:
      "We start by thoroughly washing and decontaminating the vehicle to ensure the vinyl adheres properly.",
  },
  {
    title: "Panel Inspection",
    image: step2,
    description:
      "Each panel is inspected for scratches or damage. Imperfections are addressed to guarantee a smooth wrap.",
  },
  {
    title: "Vinyl Cutting & Measuring",
    image: step3,
    description:
      "Our team carefully measures and pre-cuts the vinyl to match your vehicle’s dimensions with precision.",
  },
  {
    title: "Application & Finishing",
    image: step4,
    description:
      "The vinyl is applied using professional tools and heat to ensure clean lines, no bubbles, and a factory-quality finish.",
  },
];

export default function WrappingSteps() {
  return (
    <div className="wrapping-steps-container">
      {steps.map((step, index) => (
        <div className="wrap-step-box" key={index}>
          <img src={step.image} alt={step.title} className="wrap-step-image" />
          <h4 className="wrap-step-title">{step.title}</h4>
          <p className="wrap-step-description">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
