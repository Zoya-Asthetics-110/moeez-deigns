
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Animated Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 neon-border-cyan group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000" 
                alt="Creative Workspace" 
                className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Stat Bubbles */}
              <div className="absolute top-10 -right-5 bg-[#0a0520] border border-cyan-400/30 p-6 rounded-2xl animate-float glow-cyan">
                <div className="text-3xl font-black text-cyan-400">5+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Years Exp</div>
              </div>
              
              <div className="absolute bottom-10 -left-5 bg-[#0a0520] border border-purple-500/30 p-6 rounded-2xl animate-float-delayed neon-border-purple">
                <div className="text-3xl font-black text-purple-400">100+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Projects</div>
              </div>
            </div>
            
            {/* Background Decorative Rings */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-white/5 rounded-[3.5rem] -rotate-3 pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-cyan-400/10 rounded-[3.5rem] rotate-3 pointer-events-none"></div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-400/20 rounded-full">
               <span className="text-cyan-400 text-xs font-black tracking-[0.3em] uppercase">About Moeez</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black font-grotesk text-white leading-tight">
              Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text-cyan">Vision</span>
            </h2>
            
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              I am a visual architect dedicated to pushing the boundaries of digital expression. My work isn't just about pixels; it's about <span className="text-white font-bold italic">impact</span>. 
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl border border-white/10 text-cyan-400">⚡</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Strategic Design</h4>
                  <p className="text-sm text-gray-500">Blending art with business logic to ensure every visual serves a concrete purpose.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl border border-white/10 text-purple-400">🎨</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Bold Aesthetics</h4>
                  <p className="text-sm text-gray-500">Crafting high-contrast, neon-infused identities that demand attention in a crowded digital world.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-8 border-t border-white/5">
              <div>
                <div className="text-sm text-gray-600 uppercase tracking-widest font-black mb-1">Location</div>
                <div className="text-white font-bold">Pakistan / Remote</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 uppercase tracking-widest font-black mb-1">Specialty</div>
                <div className="text-white font-bold">Brand Alchemy</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
