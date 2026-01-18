
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
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
  };

  const tagline = "I Design Visuals That Speak, Sell & Stand Out. Elevating brand identities through neon-infused digital art.";
  const words = tagline.split(' ');

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#030014]">
      {/* --- LEVEL-UP CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Base Texture: Dark Wavy 3D Mesh */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2000')` }}
        />
        
        {/* The "Milad" Signature Glowing Orb at the Bottom */}
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full pointer-events-none z-0">
          {/* Main Core Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,rgba(34,211,238,0.2)_30%,transparent_70%)] blur-[100px] animate-[pulse_4s_infinite]"></div>
          
          {/* Internal Structure Lines (CSS-only Grid approximation for the lattice look) */}
          <div className="absolute inset-0 opacity-20 border-[0.5px] border-white/20 rounded-full rotate-[15deg] scale-95"></div>
          <div className="absolute inset-0 opacity-10 border-[0.5px] border-white/10 rounded-full -rotate-[15deg] scale-90"></div>
          
          {/* Intense Bottom Rim Light */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full h-[20%] bg-gradient-to-t from-cyan-400/30 to-transparent blur-3xl"></div>
        </div>
        
        {/* Floating Particle Starfield */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.15] pointer-events-none"></div>

        {/* Ambient Top Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-transparent opacity-100"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="text-left space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl md:text-2xl font-semibold text-white">Hi, I'm <span className="text-cyan-400 neon-text-cyan">Moeez</span> 👋</span>
            </div>
            
            <div className="space-y-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-grotesk tracking-tighter leading-[0.9] mb-2">
                <span className="block text-white neon-text-white drop-shadow-lg transition-transform hover:translate-x-2 duration-500 cursor-default">Creative</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text-cyan py-1 transition-transform hover:translate-x-2 duration-700 cursor-default">
                  Graphic Designer
                </span>
              </h1>
            </div>
            
            {/* Animated Tagline Text */}
            <div className="max-w-lg text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-4 border-cyan-500/50 pl-6 italic mt-6 flex flex-wrap gap-x-[0.3em] gap-y-1">
              {words.map((word, index) => (
                <span 
                  key={index} 
                  className="animate-word-highlight"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              <button 
                onClick={(e) => handleScrollTo(e, 'work')}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 transition-all hover:scale-110 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
              <button 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all active:scale-95 backdrop-blur-md glow-cyan"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Side: Enhanced Interactive Asset */}
          <div className="relative h-[550px] lg:h-[650px] flex items-center justify-center pt-10 perspective-1000">
            
            {/* Main Center Container for Card + Floating Tool Logos */}
            <div className="relative z-30 w-full max-w-sm h-80 animate-float preserve-3d group">
              
              {/* Moeez Art Card with 3D Tilt and Shine */}
              <div className="card-tilt w-full h-full bg-white/5 backdrop-blur-3xl border border-cyan-400/20 rounded-[2.5rem] p-6 neon-border-cyan cursor-pointer overflow-hidden relative hover-shine shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden border border-white/5 transition-all duration-700 group-hover:bg-opacity-40">
                  <div className="absolute inset-0 bg-black/40 opacity-30 mix-blend-overlay"></div>
                  
                  {/* Central Content Area Re-designed to match requested "Fahad Malik" style */}
                  <div className="relative z-10 flex flex-col items-center justify-center -mt-4">
                    {/* The initials 'MI.' */}
                    <div className="relative flex items-end">
                      <div className="text-[10rem] font-black text-white select-none drop-shadow-2xl transition-all duration-1000 group-hover:scale-110 group-hover:text-cyan-100 leading-[0.8]">
                        MI
                      </div>
                      {/* The Dot */}
                      <div className="w-10 h-10 bg-cyan-400 rounded-full mb-3 ml-2 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse"></div>
                    </div>

                    {/* Horizontal Divider Line */}
                    <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent my-6"></div>

                    {/* Full Name: MOEEZ IMRAN */}
                    <div className="text-2xl font-black tracking-[0.6em] text-cyan-400 group-hover:neon-text-cyan transition-all duration-700 uppercase whitespace-nowrap">
                      MOEEZ IMRAN
                    </div>
                  </div>
                  
                  {/* Glowing Core Effect */}
                  <div className="absolute w-40 h-40 bg-cyan-400/10 blur-[80px] rounded-full animate-pulse group-hover:bg-cyan-400/30 group-hover:scale-150 transition-all duration-1000" />
                  
                  {/* Design Particles on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                     <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                     <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300" />
                  </div>
                </div>
              </div>

              {/* Tool Logos on Borders with Re-added Floating Animations */}
              <div className="absolute left-0 top-1/2 -translate-x-[70%] -translate-y-1/2 w-16 h-16 bg-[#1E1E1E] rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 p-3 z-[100] transition-all duration-300 hover:shadow-[0_0_30px_rgba(26,188,254,0.6)] animate-tool-figma cursor-pointer">
                <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M19 28.5C19 23.2533 14.7467 19 9.5 19C4.2533 19 0 23.2533 0 28.5C0 33.7467 4.2533 38 9.5 38C14.7467 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.2533 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.2533 19 9.5 19H19V0H9.5C4.2533 0 0 4.2533 0 9.5Z" fill="#F24E1E"/>
                  <path d="M19 19V38H28.5C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19H19Z" fill="#A259FF"/>
                </svg>
              </div>

              <div className="absolute -right-6 top-4 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-[#001E36] rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-[#31A8FF]/30 z-[100] transition-all duration-300 hover:shadow-[0_0_30px_rgba(49,168,255,0.6)] animate-tool-ps cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#001E36] to-[#31A8FF]/20"></div>
                <span className="relative z-10 text-[#31A8FF] font-black text-2xl tracking-tighter">Ps</span>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#31A8FF]"></div>
              </div>

              <div className="absolute -right-6 bottom-4 translate-y-1/2 translate-x-1/2 w-16 h-16 bg-[#330000] rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-[#FF9A00]/30 z-[100] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,154,0,0.6)] animate-tool-ai cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#330000] to-[#FF9A00]/20"></div>
                <span className="relative z-10 text-[#FF9A00] font-black text-2xl tracking-tighter">Ai</span>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF9A00]"></div>
              </div>

            </div>

            {/* Decorative background light sources */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-indigo-500/5 rounded-full blur-[150px] z-0 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
