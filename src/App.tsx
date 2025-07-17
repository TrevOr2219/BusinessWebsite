import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Tinting from './Tinting.js';
import Wraping from './Wrapping.js';
import "./App.css";
import OurWork from './OurWork.tsx';
import Footer from "./Footer.js";

function App() {
  const [page, setPage] = useState('home');
  

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'tinting' && <Tinting />}
      {page === 'wraping' && <Wraping />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
      {page === 'ourwork' && <OurWork />}
      <Footer setPage={setPage} />
    </div>
  );
}


export default App;

