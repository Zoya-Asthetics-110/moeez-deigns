
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
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Force background visibility on scroll
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
    
    // Animation sequence: Loading -> Ready -> Reset
    setTimeout(() => {
      setDownloadStatus('ready');
      
      // Simulate download initiation
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 2000);
    }, 1000);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-500 ${scrolled ? 'bg-[#030014]/95 backdrop-blur-2xl py-3 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]' : 'bg-[#030014]/10 backdrop-blur-sm py-6'}`}>
      {/* Scroll Progress Indicator Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-100 z-[100000]"
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
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative py-2 ${isActive ? 'text-cyan-400 scale-105' : 'text-gray-400 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-cyan-400 transition-all duration-500 ${isActive ? 'w-full shadow-[0_0_10px_#22d3ee]' : 'w-0'}`}></span>
              </a>
            );
          })}
          
          {/* --- RE-DESIGNED DOWNLOAD CV BUTTON --- */}
          <button 
            onClick={handleDownloadCV}
            className={`group/cv relative h-[52px] min-w-[190px] rounded-2xl transition-all duration-500 overflow-hidden active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.15)] border ${downloadStatus === 'ready' ? 'bg-cyan-400 border-cyan-400' : 'bg-black border-cyan-400/60 hover:border-cyan-400'}`}
          >
            {/* Liquid wave background effect for Ready state */}
            <div className={`absolute inset-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${downloadStatus === 'ready' ? 'translate-y-0' : 'translate-y-full'}`}></div>

            <div className="relative z-10 w-full h-full px-6 flex items-center justify-between">
              
              {/* Idle Content */}
              <div className={`flex items-center gap-3 transition-all duration-500 ${downloadStatus !== 'idle' ? 'translate-y-[-40px] opacity-0' : 'translate-y-0 opacity-100'}`}>
                <span className="text-white font-bold text-sm tracking-tight">Download CV</span>
                <svg className="w-5 h-5 text-white transition-transform group-hover/cv:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>

              {/* Ready Content */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${downloadStatus === 'ready' ? 'translate-y-0 opacity-100' : 'translate-y-[40px] opacity-0'}`}>
                <span className="text-black font-black text-xs uppercase tracking-[0.4em]">READY!</span>
              </div>

              {/* Loading Content */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${downloadStatus === 'animating' ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                 </div>
              </div>
            </div>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover/cv:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-[-25deg] group-hover/cv:animate-[shine-sweep_1.5s_infinite]"></div>
            </div>
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
        @keyframes shine-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </nav>
  );
};

export default Header;
