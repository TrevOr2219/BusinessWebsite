# 🚗 TopSecret - Vehicle Wrapping & Tinting Website

This is a modern, responsive React website for **TopSecret**, a vehicle customization service specializing in **car wrapping** and **window tinting**. It showcases the company’s work, services, and allows users to contact or request consultations easily.

---

## 🛠 Features

- ✅ Home, About Us, Services, Our Work, and Contact pages  
- ✅ Responsive layout for desktop and mobile  
- ✅ Image comparison slider for wrap/tint before-after showcase  
- ✅ WhatsApp floating action button  
- ✅ Contact and Consultation forms with email integration  
- ✅ Footer with quick links and social media icons  
- ✅ Modular and reusable React components  
- ✅ Styled using custom CSS for a sleek, dark-themed design  
- ✅ **Sanity CMS** integration for dynamic content management of gallery images (admin panel included)

---

## 🧠 Headless CMS (Sanity)

Sanity is used to manage the wrap project gallery through a user-friendly admin interface. This allows easy addition of new projects without touching the code.

**How to use the Sanity studio:**

1. Run the CMS backend:
   ```bash
   cd sanity
   npm run dev

📁 Project Structure

src/
├── assets/               # Static images & icons
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Home.js
│   ├── About.js
│   ├── Tinting.js
│   ├── Wrapping.js
│   ├── OurWork.js
│   ├── Contact.js
│   └── ConsultationForm.js
├── WrapGallery.tsx       # Pulls dynamic wraps from Sanity CMS
├── sanity.ts             # Sanity client setup
├── App.js
├── App.css
└── index.js

📦 Dependencies

React

react-dom

react-compare-image – For before/after sliders

emailjs-com – For sending contact/consultation forms

react-icons – Social media icons

@sanity/client – To connect React to Sanity

@portabletext/react (optional) – For rendering rich content from Sanity

Install all dependencies:

npm install

Some of the elements currently used will be changed once the business starts operating (e.g. gallery pictures, location, and email).

Built by Robert Vizitiu.
📧 Contact: chaplin2199@gmail.com
