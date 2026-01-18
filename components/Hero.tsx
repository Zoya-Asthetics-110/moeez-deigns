
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#030014]">
      {/* Background Graphic Design Focused Image with Neon Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000')` }}
        />
        {/* Neon Gradient Blobs */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Animated Lines/Sparks */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-[30deg] animate-[ping_3s_linear_infinite]" />
          <div className="absolute bottom-[30%] left-[5%] w-96 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent rotate-[-15deg] animate-[ping_4s_linear_infinite] delay-700" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="text-left space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl md:text-2xl font-semibold text-white">Hi, I'm <span className="text-cyan-400 neon-text-cyan">Moeez</span> 👋</span>
            </div>
            
            <div className="space-y-0">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-grotesk tracking-tighter leading-[0.85] mb-2">
                <span className="block text-white neon-text-white drop-shadow-lg">Creative</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text-cyan py-2">
                  Graphic Designer
                </span>
              </h1>
            </div>
            
            <p className="max-w-lg text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-4 border-cyan-500/50 pl-6 italic mt-6">
              I Design Visuals That Speak, Sell & Stand Out. Elevating brand identities through neon-infused digital art.
            </p>

            <div className="flex flex-wrap gap-6 pt-8">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 transition-all hover:scale-110 active:scale-95 overflow-hidden">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
              <button className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all active:scale-95 backdrop-blur-md glow-cyan">
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Side: Auto Animated Assets */}
          <div className="relative h-[550px] lg:h-[650px] flex items-center justify-center">
            
            {/* Top Right: Brand Card */}
            <div className="absolute top-10 right-4 lg:right-10 z-20 w-72 h-48 bg-[#0a0520]/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-5 animate-float-delayed -rotate-6 neon-border-purple group hover:scale-105 transition-transform">
              <div className="h-full w-full border border-purple-500/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                <div className="text-5xl mb-2">⚡</div>
                <h4 className="text-xl font-black tracking-widest text-white uppercase italic">Falcon</h4>
                <div className="text-[8px] text-purple-400 tracking-[0.5em] font-bold">PREMIUM FITNESS</div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 blur-xl" />
              </div>
            </div>

            {/* Main Center: Social Media Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-80 h-96 bg-[#050112]/90 backdrop-blur-2xl border border-cyan-400/40 rounded-[2rem] p-6 animate-float neon-border-cyan group hover:scale-110 transition-transform cursor-pointer">
              <div className="w-full h-56 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-black/10 opacity-30 mix-blend-overlay"></div>
                 <div className="text-9xl font-black italic text-white/10 select-none">M</div>
                 <div className="absolute flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mb-2 shadow-xl">f</div>
                    <div className="text-white font-bold tracking-widest uppercase text-xs">Modern Art</div>
                 </div>
              </div>
              <h3 className="text-2xl font-black text-center text-white">Social Media</h3>
              <p className="text-sm text-center text-cyan-400 uppercase tracking-widest font-black mt-1">Marketing</p>
              <div className="mt-5 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 w-[85%]"></div>
              </div>
            </div>

            {/* Bottom Left: Visual Profile Card */}
            <div className="absolute bottom-10 left-0 lg:left-10 z-40 w-64 h-80 bg-white/5 backdrop-blur-xl border border-pink-500/30 rounded-3xl overflow-hidden animate-float-reverse rotate-3 neon-border-purple group hover:rotate-0 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" 
                alt="Brand Identity"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent">
                 <div className="h-3 w-16 bg-pink-500 rounded-full mb-2 glow-purple"></div>
                 <h4 className="text-sm font-bold text-white tracking-wide">Brand Ambience</h4>
              </div>
            </div>

            {/* Bottom Right: Business Strategy Card */}
            <div className="absolute bottom-20 right-0 z-10 w-64 h-72 bg-gradient-to-br from-indigo-900/60 to-black border border-white/10 rounded-[2rem] p-8 flex flex-col justify-end animate-float rotate-12 neon-border-cyan group hover:rotate-6 transition-all">
               <div className="absolute top-8 left-8 text-4xl opacity-40">📈</div>
               <h4 className="text-3xl font-black text-white leading-tight mb-3">Boost Your Business!</h4>
               <div className="flex gap-1">
                 <div className="w-full h-1 bg-cyan-400 rounded-full"></div>
                 <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
               </div>
            </div>

            {/* Decorative background light sources */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-indigo-500/10 rounded-full blur-[120px] z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
