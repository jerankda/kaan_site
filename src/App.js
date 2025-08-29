import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Quality from './components/Quality';
import Services from './components/Services';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImpressumModal from './components/ImpressumModal';

function App() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Quality />
      <Services />
      <References />
      <Contact />
      <Footer onImpressumClick={() => setIsImpressumOpen(true)} />
      <ImpressumModal 
        isOpen={isImpressumOpen} 
        onClose={() => setIsImpressumOpen(false)} 
      />
    </div>
  );
}

export default App;
