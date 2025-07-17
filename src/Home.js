import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const qaData = [
  {
    question: "How long does window tinting last?",
    answer: "With proper care, window tinting can last 5 to 10 years or more.",
  },
  {
    question: "Will tinting reduce visibility at night?",
    answer: "Quality tint films are designed to maintain visibility while reducing glare.",
  },
  {
    question: "Is car wrapping reversible?",
    answer: "Yes, vinyl wraps can be removed without damaging the original paint.",
  },
  {
    question: "How long does a car wrap last?",
    answer: "Car wraps typically last 4 to 7 years depending on care and environment.",
  },
];

export default function Home({ setPage }) {
  const [dropIn, setDropIn] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const consultationFormRef = useRef();

  useEffect(() => {
    setDropIn(true);
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ezjjerk",
        "template_esqd1es",
        consultationFormRef.current,
        "gANSe7CO7wso-tmlU"
      )
      .then(
        () => {
          alert("Consultation request sent!");
        },
        (error) => {
          console.error("Failed to send consultation request:", error);
          alert("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="page-wrapper">
      <div className={`home-container ${dropIn ? "drop-in" : ""}`}>
        <>
          <h2 className="topslogan">Car Wraping And Tinting In Gloucester</h2>
          <p>Top Secret - Your Car, Your Secret Weapon.</p>

          

          <div className="highlight-box">
            <ul className="garage-facts">
              <li>✅ Expert Craftsmanship Guaranteed</li>
              <li>✅ Premium Quality Wraps & Tints</li>
              <li>✅ Fast & Professional Service</li>
              <li>✅ 100% Customer Satisfaction</li>
            </ul>
          </div>

          <div className="service-boxes">
            <div
              className="service-box"
              onClick={() => setPage("tinting")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={require("./assets/tinting2.jpg")}
                alt="Tinting"
                className="service-image"
              />
              <div className="service-info">
                <h3 className="service-title">Tinting</h3>
                <p className="service-desc">
                  Enhance privacy and protect your interior from harmful UV rays.
                </p>
              </div>
            </div>

            <div
              className="service-box"
              onClick={() => setPage("wraping")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={require("./assets/wraping.jpg")}
                alt="Wraping"
                className="service-image"
              />
              <div className="service-info">
                <h3 className="service-title">Wraping</h3>
                <p className="service-desc">
                  Give your car a fresh, unique look with high-quality vinyl wraps.
                </p>
              </div>
            </div>
          </div>
        </>
      </div>


      <div className="consultation-section">
        <h2>Get a Free Consultation</h2>
        <form
          ref={consultationFormRef}
          onSubmit={handleConsultationSubmit}
          className="consultation-form"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="user_message"
            placeholder="Let us know what you're looking for..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Get Consultation</button>
        </form>
      </div>




      <div className="qa-section">
        <h2>Frequently Asked Questions</h2>
        <div className="qa-list">
          {qaData.map((item, index) => (
            <div
              key={index}
              className={`qa-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="qa-question">{item.question}</div>
              <div className="qa-answer">
                {activeIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
