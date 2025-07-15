import React from "react";
import "./OurWork.css";
import ReactCompareImage from "react-compare-image";

import step1 from "./assets/wrapping step1.png"
import step2 from "./assets/step2.png"
import step3 from "./assets/step3.png"


const wraps = [
  {
    type: "beforeAfter",
    before: step1,
    after: step2,
    title: "Gloss Black Roof Wrap",
    description: "Clean roof transformation on this BMW 3 Series.",
  },
  {
    image: step2,
    title: "Full Satin Grey Wrap",
    description: "A full-body satin wrap for a bold, stealthy look.",
  },
  {
    image: step3,
    title: "Chrome Delete Wrap",
    description: "Subtle blacked-out trim for a sleek finish.",
  },
];

const tints = [
  {
    type: "beforeAfter",
    before: step1,
    after: step2,
    title: "Rear Window Tinting",
    description: "Dark legal rear tints for better privacy.",
  },
  {
    image: step2,
    title: "Full Car Tinting",
    description: "Professional tinting on all side and rear windows.",
  },
  {
    image: step3,
    title: "Front Window Legal Tint",
    description: "Light tint within legal limits for a refined look.",
  },
];


export default function OurWork() {
  return (
    <div className="ourwork-page">
      <div className="ourwork-header">
        <h2>Our Work</h2>
        <p>See the difference quality makes.</p>
      </div>

      <div className="work-section">
        <h3 className="section-title">Wrap Projects</h3>
        <div className="ourwork-gallery">
          {wraps.map((item, index) => (
            <div className="work-card" key={index}>
              {item.type === "beforeAfter" ? (
                <div className="compare-container">
                  <ReactCompareImage
                    leftImage={item.before}
                    rightImage={item.after}
                    sliderPositionPercentage={0.5}
                    alt={item.title}
                  />
                </div>
              ) : (
                <img src={item.image} alt={item.title} />
              )}
              <div className="work-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="work-section">
        <h3 className="section-title">Tint Projects</h3>
        <div className="ourwork-gallery">
          {tints.map((item, index) => (
            <div className="work-card" key={index}>
              {item.type === "beforeAfter" ? (
                <div className="compare-container">
                  <ReactCompareImage
                    leftImage={item.before}
                    rightImage={item.after}
                    sliderPositionPercentage={0.5}
                    alt={item.title}
                  />
                </div>
              ) : (
                <img src={item.image} alt={item.title} />
              )}
              <div className="work-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
