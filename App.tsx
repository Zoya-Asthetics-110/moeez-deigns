
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AICreativeBrain from './components/AICreativeBrain';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Services />
        <Testimonials />
        <Footer />
      </main>
      <AICreativeBrain />
    </div>
  );
};

export default App;
