import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";
import whatsappIcon from './assets/whatsapp.png';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ezjjerk',
        'template_esqd1es',
        form.current,
        'gANSe7CO7wso-tmlU'
      )
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <>
      <div className="contact-section">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>We’re here to answer any questions or provide a free quote. Just send us a message below!</p>
      </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="user_message" placeholder="Your Message" rows="6" required />
          <button type="submit" className="send-button">Send Message</button>
        </form>

      </div>

      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.84292456615!2d-0.1277585!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bcd1dcb03f1%3A0x2d0c7e46b69a92f!2sCentral%20London!5e0!3m2!1sen!2suk!4v1680954183214"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="reviews-widget">
        <iframe
          title="Google Reviews"
          src="https://widget.reviews.io/r/widget?store=yourstorename&widget=carousel&style=light"
          width="100%"
          height="300"
          style={{ border: "none", overflow: "hidden" }}
        ></iframe>
      </div>

      <a
        href="https://wa.me/447776744739"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>

      <div className="contact-footer">
        <p>We typically respond within 24 hours. Let’s connect!</p>
      </div>
    </>
  );
}
