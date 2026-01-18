
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Concepts from './components/Concepts';
import Skills from './components/Skills';
import Stats from './components/Stats';
import PressKit from './components/PressKit';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AICreativeBrain from './components/AICreativeBrain';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Let the preloader run for at least 3 seconds for full impact
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {/* CustomCursor placed at the very top level for maximum reliability */}
      <CustomCursor />
      
      {/* Header placed outside the main animation wrapper for absolute scroll persistence */}
      <Header />
      
      <div className="relative animate-[fadeIn_1s_ease-out_forwards]">
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Concepts />
          <Skills />
          <Stats />
          <PressKit />
          <Services />
          <Testimonials />
          <Footer />
        </main>
        <AICreativeBrain />

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; filter: brightness(2); }
            to { opacity: 1; filter: brightness(1); }
          }
        `}</style>
      </div>
    </>
  );
};

export default App;
