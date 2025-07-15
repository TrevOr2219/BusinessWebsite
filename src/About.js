import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Driven by passion. Powered by precision.</p>
      </div>

      <div className="about-section">
        <h3 className="section-title">Who We Are</h3>
        <p>
          We’re a dedicated team of automotive enthusiasts with over a decade of experience in professional vehicle wrapping and window tinting. Based locally, we specialize in high-quality, fully customized vinyl wraps and tints that enhance both style and protection.
        </p>
      </div>

      <div className="about-section">
        <h3 className="section-title">What We Stand For</h3>
        <ul className="about-values">
          <li><strong>Quality:</strong> We use only premium materials like 3M, Avery Dennison, and Oracal to ensure a flawless, long-lasting finish.</li>
          <li><strong>Craftsmanship:</strong> Every car is treated with precision and care as if it were our own.</li>
          <li><strong>Transparency:</strong> Honest pricing, clear timelines, and no shortcuts — ever.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3 className="section-title">Why Customers Trust Us</h3>
        <p>
          Whether it's a simple tint job or a full-body color change, we make sure every project meets the highest standard. Our goal is simple: deliver results that exceed expectations and make our clients fall in love with their cars all over again.
        </p>
      </div>

      <div className="about-footer">
        <p>Let’s give your car the finish it deserves.</p>
      </div>
    </div>
  );
}
