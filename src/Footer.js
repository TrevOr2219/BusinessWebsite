import React from "react";
import "./Footer.css";
import { ImInstagram } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";


export default function Footer({ setPage }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: +44 7776 744739</p>
          <p>Email: info@yourcompany.com</p>
          <p>Location: London, UK</p>
        </div>

        <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
            <li><button onClick={() => setPage('home')}>Home</button></li>
            <li><button onClick={() => setPage('tinting')}>Tinting</button></li>
            <li><button onClick={() => setPage('wraping')}>Wrapping</button></li>
            <li><button onClick={() => setPage('ourwork')}>Our Work</button></li>
            <li><button onClick={() => setPage('contact')}>Contact</button></li>
        </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <ImInstagram className="social-icon" />
                    </a>
                    <a
                        href="https://wa.me/447776744739"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="social-icon" />
                    </a>
                    <a 
                        href="https://www.tiktok.com/@yourhandle" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <SiTiktok className="social-icon"/>
                    </a>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TopSecret. All rights reserved.</p>
      </div>
    </footer>
  );
}
