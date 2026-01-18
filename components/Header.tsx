
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    // The visual active state is handled by CSS, logic can go here.
    console.log("Downloading CV...");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#030014]/90 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl shadow-cyan-900/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button 
          onClick={(e) => handleScrollTo(e as any, 'home')}
          className="text-3xl font-black tracking-tighter group cursor-pointer text-white focus:outline-none"
        >
          MOEEZ<span className={`transition-all duration-300 ${activeSection === 'home' ? 'text-cyan-400 neon-text-cyan' : 'text-cyan-400 group-hover:neon-text-cyan'}`}>.</span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative group py-2 ${isActive ? 'text-cyan-400 scale-110 neon-text-cyan' : 'text-gray-400 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-cyan-400 transition-all duration-500 ${isActive ? 'w-full shadow-[0_0_15px_#22d3ee,0_0_5px_#22d3ee]' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          
          {/* Enhanced Download CV Button */}
          <div className="cv-btn-container group ml-4 rounded-xl">
            <div className="cv-btn-border"></div>
            <button 
              onClick={handleDownloadCV}
              className="relative flex items-center gap-3 px-7 py-3 bg-[#0a0520] text-white rounded-[11px] text-[10px] font-black uppercase tracking-widest transition-all overflow-hidden z-10 group-active:scale-95"
            >
              <div className="liquid-layer group-active:top-[-50%] group-active:animate-[liquid-wave_3s_linear_infinite]"></div>
              
              <span className="relative z-20 group-active:text-white transition-colors">Download CV</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4 relative z-20 group-hover:translate-y-0.5 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-3 rounded-xl border transition-all ${mobileMenuOpen ? 'bg-cyan-400 text-black border-cyan-400' : 'text-white bg-white/5 border-white/10'}`}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px] opacity-100 border-b border-white/5 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#030014]/98 backdrop-blur-3xl px-6 py-12 flex flex-col gap-8 items-center border-t border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-lg font-black uppercase tracking-[0.4em] transition-all duration-300 ${isActive ? 'text-cyan-400 scale-125 neon-text-cyan' : 'text-gray-400 hover:text-cyan-400'}`}
              >
                {item.name}
              </a>
            );
          })}
          
          <div className="cv-btn-container group w-full max-w-[250px] rounded-2xl">
            <div className="cv-btn-border"></div>
            <button 
              onClick={handleDownloadCV}
              className="relative w-full flex items-center justify-center gap-4 px-8 py-5 bg-[#0a0520] text-white rounded-[15px] text-[12px] font-black uppercase tracking-widest transition-all overflow-hidden z-10 group-active:scale-95"
            >
              <div className="liquid-layer group-active:top-[-50%] group-active:animate-[liquid-wave_3s_linear_infinite]"></div>
              <span className="relative z-20">Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
