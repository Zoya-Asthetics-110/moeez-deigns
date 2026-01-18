
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import AICreativeBrain from './components/AICreativeBrain';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Footer />
      </main>
      <AICreativeBrain />
    </div>
  );
};

export default App;
