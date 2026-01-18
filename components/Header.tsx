
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Work', 'Skills', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#030014]/80 backdrop-blur-2xl border-b border-white/5 py-5' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="text-3xl font-black tracking-tighter group cursor-pointer text-white">
          MOEEZ<span className="text-cyan-400 group-hover:neon-text-cyan transition-all">.</span>
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="px-8 py-3 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all glow-cyan active:scale-95">
            Let's Talk
          </button>
        </div>

        <button className="md:hidden text-white bg-white/5 p-3 rounded-xl border border-white/10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
