import React from "react";
import "./TintingSteps.css";
import cleaningImg from './assets/cleaning.jpg';
import measuringImg from './assets/measuring.png';
import wetImg from './assets/wet.png';
import bubblesImg from './assets/bubbles.png';
import cutImg from './assets/cut.png';
import handingImg from './assets/handing.png';

const steps = [
  {
    title: "Clean the Window",
    image: cleaningImg,
    description:
      "We thoroughly clean the window surface to remove any dust, dirt, or oils. A spotless surface ensures a flawless tint application.",
  },
  {
    title: "Measure and Cut Film",
    image: measuringImg,
    description:
      "The tint film is precisely measured and cut to perfectly fit each window, ensuring full coverage without gaps.",
  },
  {
    title: "Wet and Apply Film",
    image: wetImg,
    description:
      "A special solution is sprayed on the window, then the tint film is carefully applied and positioned.",
  },
  {
    title: "Remove Air Bubbles",
    image: bubblesImg,
    description:
      "Using a squeegee, we smooth out the film, removing any air bubbles or wrinkles for a perfect finish.",
  },
  {
    title: "Trim Excess Film",
    image: cutImg,
    description:
      "Excess film is carefully trimmed to match the window edges, creating a seamless look.",
  },
  {
    title: "Hand Over to Customer",
    image: handingImg,
    description:
      "After inspection and final touches, we hand the car back to you, ready with a sleek new tint.",
  },
];

export default function TintingSteps() {
  return (
    <div className="tinting-steps-container">
      {steps.map((step, index) => (
        <div key={index} className="step-box">
          <img src={step.image} alt={step.title} className="step-image" />
          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
