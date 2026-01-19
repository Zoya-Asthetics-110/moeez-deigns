
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'animating' | 'ready'>('idle');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'Concepts', id: 'concepts' },
    { name: 'Skills', id: 'skills' },
    { name: 'Stats', id: 'stats' },
    { name: 'Press', id: 'press' },
    { name: 'Reviews', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

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
      const headerOffset = 80;
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
    if (downloadStatus !== 'idle') return;

    setDownloadStatus('animating');
    
    // Animation sequence: Loading/Surge -> Ready -> Reset
    setTimeout(() => {
      setDownloadStatus('ready');
      
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-500 ${scrolled ? 'bg-[#030014]/95 backdrop-blur-2xl py-3 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]' : 'bg-[#030014]/10 backdrop-blur-sm py-6'}`}>
      {/* Scroll Progress Indicator Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-1000 z-[100000]"
        style={{ width: `${scrollProgress}%`, boxShadow: '0 0 15px #22d3ee' }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button 
          onClick={(e) => handleScrollTo(e as any, 'home')}
          className="text-2xl font-black tracking-tighter text-white focus:outline-none group"
        >
          MOEEZ<span className="text-cyan-400 group-hover:neon-text-cyan transition-all">.</span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative py-2 ${isActive ? 'text-cyan-400 scale-105' : 'text-gray-400 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-cyan-400 transition-all duration-500 ${isActive ? 'w-full shadow-[0_0_10px_#22d3ee]' : 'w-0'}`}></span>
              </a>
            );
          })}
          
          {/* --- CINEMATIC NEON DOWNLOAD CV BUTTON --- */}
          <button 
            onClick={handleDownloadCV}
            className={`group/cv relative h-[48px] min-w-[170px] rounded-2xl transition-all duration-700 active:scale-90 perspective-1000 ${
              downloadStatus === 'ready' 
              ? 'bg-green-500 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.6)]' 
              : 'bg-black border-transparent shadow-[0_0_15px_rgba(34,211,238,0.1)]'
            }`}
          >
            {/* 1. Neon Aura Background (Hover Only) */}
            <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-[1.4rem] opacity-0 group-hover/cv:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            
            {/* 2. Rotating Conic Neon Border (Hover Only) */}
            <div className="absolute inset-0 p-[2px] rounded-2xl overflow-hidden opacity-0 group-hover/cv:opacity-100 transition-opacity duration-500">
               <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent,#22d3ee,#a855f7,#22d3ee,transparent)] animate-[spin_3s_linear_infinite]"></div>
               <div className="absolute inset-[2px] bg-black rounded-[0.9rem] z-0"></div>
            </div>

            {/* 3. Static Border (When not hovering) */}
            <div className="absolute inset-0 border border-cyan-400/40 rounded-2xl group-hover/cv:border-transparent transition-colors"></div>

            {/* 4. ENERGY SURGE / CLICK BURST ANIMATION LAYER */}
            {downloadStatus === 'animating' && (
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-[cv-burst_1.2s_ease-out_forwards]"></div>
                 <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                 {/* Energy Scanning Lines */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-[cv-scan_0.5s_linear_infinite]"></div>
              </div>
            )}

            {/* Button Body Content */}
            <div className="relative z-30 w-full h-full flex items-center justify-center px-6">
              
              {/* Idle State */}
              <div className={`flex items-center gap-3 transition-all duration-500 ${downloadStatus !== 'idle' ? 'translate-y-[-40px] opacity-0' : 'translate-y-0 opacity-100'}`}>
                <span className="text-white font-black text-xs tracking-[0.15em] uppercase group-hover/cv:text-cyan-400 transition-colors">Download CV</span>
                <svg className="w-4 h-4 text-white transition-all duration-300 group-hover/cv:translate-x-1.5 group-hover/cv:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>

              {/* Ready State */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${downloadStatus === 'ready' ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[40px] opacity-0 scale-50'}`}>
                <span className="text-black font-black text-xs uppercase tracking-[0.4em] animate-pulse">SUCCESS!</span>
              </div>

              {/* Animating/Energy State */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${downloadStatus === 'animating' ? 'opacity-100' : 'opacity-0'}`}>
                 <span className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.5em] animate-[text-flicker_0.1s_infinite]">ENERGY CHARGING</span>
              </div>
            </div>

            {/* Internal Shimmer Sweep */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover/cv:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none"></div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${mobileMenuOpen ? 'text-cyan-400' : 'text-white'}`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#030014]/98 backdrop-blur-2xl transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100 py-16 border-b border-white/5 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-10 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className={`text-xl font-black uppercase tracking-[0.4em] transition-all duration-300 ${activeSection === item.id ? 'text-cyan-400 scale-110' : 'text-gray-400 hover:text-white'}`}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={handleDownloadCV}
            className="mt-4 px-12 py-5 bg-black border border-cyan-400 text-white font-black rounded-2xl text-sm tracking-[0.2em]"
          >
            {downloadStatus === 'idle' ? 'DOWNLOAD CV' : downloadStatus === 'animating' ? 'PROCESSING...' : 'READY!'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cv-burst {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(50); opacity: 0; }
        }
        @keyframes cv-scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(48px); }
        }
        @keyframes text-flicker {
          0%, 100% { opacity: 1; filter: blur(0px); }
          50% { opacity: 0.3; filter: blur(2px); }
        }
      `}</style>
    </nav>
  );
};

export default Header;
