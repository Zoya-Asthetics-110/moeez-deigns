
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isClicked, setIsClicked] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'testimonials' },
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
    setIsClicked(true);
    console.log("Downloading CV...");
    // Reset click animation after 1 second
    setTimeout(() => setIsClicked(false), 1000);
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
          
          {/* Enhanced Download CV Button with Neon Border and Liquid Click Animation */}
          <div className="group ml-4 relative p-[1.5px] overflow-hidden rounded-[13px] transition-transform hover:scale-105 active:scale-95">
            {/* The Rotating Neon Border (Hover State) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
              <div className="absolute inset-[-250%] bg-[conic-gradient(from_0deg,transparent,#22d3ee,#a855f7,#22d3ee,transparent)] animate-[spin_3s_linear_infinite]"></div>
            </div>

            <button 
              onClick={handleDownloadCV}
              className="relative flex items-center gap-3 px-7 py-3 bg-[#0a0520] text-white rounded-[12px] text-[10px] font-black uppercase tracking-widest transition-all overflow-hidden z-10"
            >
              {/* Liquid Wave Effect on Click */}
              <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-1000 pointer-events-none ${isClicked ? 'top-[-50%] opacity-100' : 'top-[110%] opacity-0'}`}>
                <div className="w-40 h-40 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-[40%] animate-[spin_3s_linear_infinite] opacity-40 blur-sm"></div>
              </div>
              
              <span className="relative z-20 transition-colors group-hover:text-cyan-400">Download CV</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`w-4 h-4 relative z-20 transition-all duration-300 ${isClicked ? 'translate-y-2 opacity-0' : 'group-hover:translate-y-0.5'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>

              {/* Success checkmark that appears after click */}
              <div className={`absolute inset-0 flex items-center justify-center bg-[#0a0520] transition-all duration-500 z-30 ${isClicked ? 'translate-y-0' : 'translate-y-full'}`}>
                 <span className="text-cyan-400 font-black tracking-widest text-[10px]">READY!</span>
              </div>
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
          
          <div className="group relative p-[2px] overflow-hidden rounded-[18px] w-full max-w-[250px]">
            <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
               <div className="absolute inset-[-250%] bg-[conic-gradient(from_0deg,transparent,#22d3ee,#a855f7,#22d3ee,transparent)] animate-[spin_4s_linear_infinite]"></div>
            </div>
            <button 
              onClick={handleDownloadCV}
              className="relative w-full flex items-center justify-center gap-4 px-8 py-5 bg-[#0a0520] text-white rounded-[16px] text-[12px] font-black uppercase tracking-widest transition-all overflow-hidden z-10"
            >
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
