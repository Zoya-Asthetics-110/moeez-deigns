
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-on-scroll').forEach((el) => {
              (el as HTMLElement).style.opacity = '1';
              (el as HTMLElement).classList.add('reveal-anim');
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Immersive Background: Moving Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none z-0"></div>
      
      {/* Radial Fade for the Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_80%)] z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Creative Layered Image Animation */}
          <div className="relative order-2 lg:order-1 perspective-1000 reveal-on-scroll opacity-0">
            <div className="relative w-full h-[550px] group transition-transform duration-700 preserve-3d cursor-default">
              
              {/* Back Glow Layer */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-[3rem] transition-all duration-700 group-hover:scale-125 opacity-30"></div>
              
              {/* Stacked Layer Effect (Design Concept) */}
              <div className="absolute inset-0 border border-cyan-400/20 rounded-[3.5rem] rotate-2 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-105 group-hover:border-cyan-400/50 z-0"></div>
              <div className="absolute inset-0 border border-purple-500/20 rounded-[3.5rem] -rotate-2 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105 group-hover:border-purple-500/50 z-0"></div>

              {/* Main Image Container */}
              <div className="relative z-10 h-full w-full rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:-translate-y-6 group-hover:shadow-[0_40px_80px_rgba(34,211,238,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200" 
                  alt="Moeez Studio" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Image Overlay: Gradient & Scanline */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-30"></div>
                
                {/* Visual Reveal: Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] -translate-y-10 group-hover:animate-[scan_3s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
                
                {/* Hover UI Decals */}
                <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex flex-col gap-1">
                    <div className="w-12 h-1 bg-cyan-400"></div>
                    <div className="w-8 h-1 bg-white/40"></div>
                    <div className="text-[10px] text-white font-black tracking-widest uppercase mt-2">Active Layer: Profile_01</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Bubbles */}
              <div className="absolute -top-6 -right-8 bg-[#0a0520]/90 backdrop-blur-xl border border-cyan-400/30 p-8 rounded-3xl animate-float shadow-2xl z-20 transition-transform duration-500 group-hover:translate-y-[-10px] group-hover:translate-x-[10px]">
                <div className="text-4xl font-black text-white neon-text-cyan flex items-baseline gap-1">
                  2<span className="text-cyan-400 text-lg">+</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mt-1">Design Years</div>
              </div>
              
              <div className="absolute -bottom-6 -left-8 bg-[#0a0520]/90 backdrop-blur-xl border border-purple-500/30 p-8 rounded-3xl animate-float-delayed shadow-2xl z-20 transition-transform duration-500 group-hover:translate-y-[10px] group-hover:translate-x-[-10px]" style={{ animationDelay: '1.5s' }}>
                <div className="text-4xl font-black text-white flex items-baseline gap-1">
                  100<span className="text-purple-400 text-lg">+</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black mt-1">Epic Deliveries</div>
              </div>
            </div>
          </div>

          {/* Right Side: Creative Narrative */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="reveal-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                  <span className="text-cyan-400 text-[11px] font-black tracking-[0.4em] uppercase">Creative Visionary</span>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-[0.9] tracking-tighter reveal-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
                About <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 italic drop-shadow-[0_10px_10px_rgba(34,211,238,0.2)]">Moeez</span>
              </h2>
              
              <p className="text-xl text-gray-400 font-light leading-relaxed reveal-on-scroll opacity-0 max-w-xl" style={{ animationDelay: '0.5s' }}>
                I don't just create graphics; I build <span className="text-white font-medium">Visual Ecosystems</span>. Every curve, anchor point, and hue is calculated to disrupt the mundane and elevate your brand's digital presence.
              </p>
            </div>
            
            {/* Feature List with Interactive Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll opacity-0" style={{ animationDelay: '0.7s' }}>
              <div className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-cyan-400/5 hover:border-cyan-400/30 transition-all duration-500">
                <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">📐</div>
                <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Precision Branding</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Developing identities that survive trends and define industries.</p>
              </div>
              
              <div className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-purple-400/5 hover:border-purple-400/30 transition-all duration-500">
                <div className="w-14 h-14 bg-purple-400/10 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-6">✨</div>
                <h4 className="text-xl font-bold text-white mb-2 tracking-tight">Creative Alchemy</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Turning raw concepts into neon-infused digital gold.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
