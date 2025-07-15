import React, { useState } from "react";
import "./GetQuote.css";
import emailjs from "@emailjs/browser";

const carPrices = {
  hatchback: 100,
  estate: 120,
  saloon: 150,
  suv: 180,
  coupe: 140,
  convertible: 200,
};

export default function GetQuote() {
  const [carType, setCarType] = useState("hatchback");
  const [price, setPrice] = useState(carPrices["hatchback"]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    registration: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      model: formData.model,
      registration: formData.registration,
      phone: formData.phone,
      email: formData.email,
      carType: carType,
      price: price,
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_q03xkqw",
        "template_1qh24xq",
        templateParams,
        "gANSe7CO7wso-tmlU"
      )
      .then(
        (response) => {
          console.log("Email sent:", response.status, response.text);
          alert("Quote request sent successfully!");
        },
        (err) => {
          console.error("Email failed:", err);
          alert("Failed to send quote request. Try again.");
        }
      );
  };

  return (
    <div className="get-quote-container">
      <h2>Show prices</h2>
      <label htmlFor="car-select">Select Car Type:</label>
      <select
        id="car-select"
        value={carType}
        onChange={(e) => {
          const selectedType = e.target.value;
          setCarType(selectedType);
          setPrice(carPrices[selectedType]);
        }}
      >
        {Object.keys(carPrices).map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      <button
        onClick={() => setShowForm(true)}
        className="quote-button"
      >
        Enter details
      </button>

      {price !== null && (
        <div className="quote-result">
          <p>
            Price for <strong>{carType}</strong>: <strong>${price}</strong>
          </p>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="quote-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="model"
            placeholder="Car Model"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="registration"
            placeholder="Car Registration"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <button type="submit" className="quote-button">
            Submit Details
          </button>
        </form>
      )}
    </div>
  );
}
