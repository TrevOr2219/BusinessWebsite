import React, { useState } from "react";
import GetQuote from "./GetQuote";
import "./Wrapping.css";
import "./GetQuote.css";
import WrappingTable from "./WrappingTable";
import WrappingSteps from "./WrappingSteps";


export default function Wrapping() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className="wrapping-page">
      <div className="wrapping-header-bg">
        <div className="wrapping-container">
          <h2>Professional Vehicle Wrapping</h2>
          <p>Transform your car with our premium wraps — durable, stylish, and tailored to your taste.</p>

          <div className="wrapping-button">
            {!showQuote ? (
              <>
                <h2>Enter your details for a personalized wrap quote</h2>
                <button className="quote-button" onClick={() => setShowQuote(true)}>
                  Get Quote
                </button>
              </>
            ) : (
              <GetQuote />
            )}
          </div>

          <div className="benefits">
            <h3>Why Choose Our Wrapping Service?</h3>
            <ul className="wrapping-benefits">
              <li>Protects Original Paint</li>
              <li>Wide Range of Finishes</li>
              <li>Completely Removable</li>
              <li>Custom Design Options</li>
            </ul>
          </div>

          <div className="material-logos-section">
            <h3 className="section-title">We Use Trusted Brands</h3>
            <div className="brand-logos">
              <img src={require("./assets/conergies.png")} alt="Conergies Logo" />
            </div>
          </div>

          <WrappingTable />
        </div>
        
      </div>
      <WrappingSteps />
    </div>
  );
}
