
import React from 'react';
import { CONCEPTS } from '../constants';

const Concepts: React.FC = () => {
  const renderInteractiveText = (text: string, isCreative: boolean = false) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className={`interactive-char ${isCreative ? 'creative-char' : ''} ${char === ' ' ? 'mr-3' : ''}`}
      >
        {char}
      </span>
    ));
  };

  return (
    <section id="concepts" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Ambience: Moving Particles / Laboratory Vibe */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.2)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-block px-5 py-2 mb-8 bg-cyan-400/5 border border-cyan-400/20 rounded-full">
              <span className="text-cyan-400 text-[11px] font-black tracking-[0.5em] uppercase">The Concept Lab</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-[0.9] tracking-tighter mb-10 cursor-default">
              <span className="block mb-4">{renderInteractiveText("Design")}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 italic">
                 {renderInteractiveText("Concepts", true)}
              </span>
            </h2>
            
            <p className="text-xl text-gray-500 font-light italic leading-relaxed">
              "Experimental playgrounds where I break design rules to discover the aesthetics of the next decade."
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end text-right">
             <div className="text-6xl font-black text-white/5 font-grotesk leading-none">V 2.5</div>
             <div className="text-[10px] text-cyan-400/40 font-black uppercase tracking-[0.5em] mt-4">Research & Development</div>
          </div>
        </div>

        {/* --- HIGH LEVEL GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONCEPTS.map((concept, index) => (
            <div 
              key={concept.id}
              className="group relative h-[500px] perspective-1000"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-6">
                
                {/* Main Card Face */}
                <div className="absolute inset-0 bg-[#0a0520] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_30px_60px_rgba(34,211,238,0.1)]">
                  
                  {/* Background Image with Ken Burns Effect */}
                  <img 
                    src={concept.image} 
                    alt={concept.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">Concept #{concept.id}</span>
                      <span className="text-xs font-black text-cyan-400/20 group-hover:text-cyan-400/80 transition-all">{concept.year}</span>
                    </div>

                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {concept.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest group-hover:bg-cyan-400/10 group-hover:text-cyan-400 transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-black text-white tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-500">
                        {concept.title}
                      </h3>
                    </div>
                  </div>

                  {/* Glass Highlight Shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-[-100%] left-[-100%] w-full h-full bg-gradient-to-br from-white/10 to-transparent rotate-45 animate-[shine-sweep_3s_infinite]"></div>
                  </div>
                </div>

                {/* Animated Accent Behind Card */}
                <div className="absolute inset-4 -z-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl rounded-[3rem] group-hover:scale-110 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Interactive Zone */}
        <div className="mt-32 flex flex-col items-center">
           <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent mb-12 animate-pulse"></div>
           <p className="text-gray-600 text-[10px] font-black uppercase tracking-[1em] animate-bounce">Scroll to Explore More</p>
        </div>
      </div>

      <style>{`
        @keyframes shine-sweep {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          50% { transform: translate(100%, 100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
      `}</style>
    </section>
  );
};

export default Concepts;
