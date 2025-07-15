import React from "react";
import "./WrappingTable.css";

export default function WrappingTable() {
  const wrapOptions = [
    {
      type: "Full Vehicle Wrap",
      duration: "3–5 Days",
      price: "From £1200",
    },
    {
      type: "Partial Wrap (Roof, Bonnet, etc.)",
      duration: "1–2 Days",
      price: "From £350",
    },
    {
      type: "Chrome Delete",
      duration: "1 Day",
      price: "From £200",
    },
    {
      type: "Custom Design Wrap",
      duration: "Varies",
      price: "From £1400",
    },
  ];

  return (
    <div className="wrapping-table-container">
      <h3>Wrapping Options & Pricing</h3>
      <table className="wrapping-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Time Required</th>
            <th>Estimated Price</th>
          </tr>
        </thead>
        <tbody>
          {wrapOptions.map((option, index) => (
            <tr key={index}>
              <td>{option.type}</td>
              <td>{option.duration}</td>
              <td>{option.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
