import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Tinting from './Tinting';
import Wraping from './Wrapping.js';
import "./App.css";
import OurWork from './OurWork.js';
import Footer from "./Footer";

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

