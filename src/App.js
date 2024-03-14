import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import LoaderComponent from "./components/loader.js";

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simülasyon amaçlı 5 saniye sonra LoaderComponent'i kapat
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Container'ı saklamak için stil nesnesi
  const containerStyle = loading ? { display: 'none' } : {};

  

  return (
    <Router>
      <div>
        {loading && <LoaderComponent />}
        <div className='container' style={containerStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
