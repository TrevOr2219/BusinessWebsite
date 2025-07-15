import TintTable from "./TintTable";
import TintSteps from "./TintingSteps";
import "./Tinting.css";
import GetQuote from "./GetQuote.js";
import React, { useState } from "react";
import './GetQuote.css';


export default function Tinting() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className="tinting-page">
      <div className="tinting-header-bg">
        <div className="tinting-container">
          <h2>Professional Window Tinting</h2>
          <p class = 'first'>We provide high-quality tints for all vehicle types with a flawless finish.</p>

          <div className="tinting-button">
            {!showQuote ? (
              <>
                <h2>Enter your details to see the prices, and we will get back to you soon!</h2>
                <button className="quote-button" onClick={() => setShowQuote(true)}>
                  Get Quote
                </button>
              </>
            ) : (
              <GetQuote />
            )}
          </div>

          <div>
            <h3>Why Choose Our Tinting Service?</h3>
            <ul className="tinting-benefits">
              <li>UV Protection</li>
              <li>Increased Privacy</li>
              <li>Temperature Control</li>
              <li>Improved Aesthetics</li>
            </ul>
          </div>

          <TintTable />
          <p className="tint-warning">
              🚨 We ensure full compliance with UK/EU tinting laws. Front-side windows must allow at least <strong>70%</strong> light through.
          </p>
        </div>
      </div>
      <TintSteps />
    </div>
  );
}


