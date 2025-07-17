import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "./assets/topsecret3.png";
import "./Navbar.css";

export default function Navbar({ setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".services-dropdown")) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-left">
        <div className="navbar-logo-container" style={{ cursor: "pointer" }}>
          <img
            src={logo}
            alt="Top Secret Logo"
            className="navbar-logo"
            onClick={() => setPage("home")}
          />
          <span className="navbar-location">
            <FaMapMarkerAlt className="map-icon" />
            Gloucester
          </span>

          <nav className="navbar-links">
            <div
              className="services-dropdown"
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <button className="dropdown-toggle">Services ▾</button>
              {servicesOpen && (
                <div
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    borderRadius: 0,
                    zIndex: 1000,
                    minWidth: "150px",
                  }}
                >
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setPage("tinting");
                      setServicesOpen(false);
                    }}
                  >
                    Tinting
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setPage("wraping");
                      setServicesOpen(false);
                    }}
                  >
                    Wrapping
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setPage("ourwork")}>Our Work</button> 
            <button onClick={() => setPage("about")}>About Us</button>
            <button onClick={() => setPage("contact")}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
