
import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="process" ref={sectionRef} className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
          <div className="max-w-2xl">
            <div className="inline-block px-5 py-2 mb-8 bg-cyan-400/5 border border-cyan-400/20 rounded-full">
              <span className="text-cyan-400 text-[11px] font-black tracking-[0.5em] uppercase">How I Work</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-[0.9] tracking-tighter mb-10 cursor-default">
              <span className="block mb-4">{renderInteractiveText("The Visual")}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 italic">
                 {renderInteractiveText("Workflow", true)}
              </span>
            </h2>
            
            <p className="text-xl text-gray-500 font-light italic leading-relaxed">
              "A systematic approach to creativity. From the first spark to the final export, every pixel has a purpose."
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end text-right">
             <div className="text-6xl font-black text-white/5 font-grotesk leading-none">SYS.FLOW</div>
             <div className="text-[10px] text-cyan-400/40 font-black uppercase tracking-[0.5em] mt-4">Operational Pipeline v1.0</div>
          </div>
        </div>

        {/* --- INTERACTIVE WORKFLOW TIMELINE --- */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block">
            <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 animate-[flow-pulse_4s_linear_infinite]"></div>
          </div>

          <div className="space-y-24 relative">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] group perspective-1000`}>
                    <div className="relative bg-[#0a0520]/80 backdrop-blur-3xl border border-white/5 p-10 rounded-[3rem] transition-all duration-700 hover:-translate-y-4 hover:border-cyan-400/30 hover:shadow-[0_40px_80px_rgba(34,211,238,0.1)] group overflow-hidden">
                      {/* Blueprint Grid Interior */}
                      <div className="absolute inset-0 blueprint-grid opacity-5 group-hover:opacity-10 transition-opacity"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <span className="text-cyan-400 text-[10px] font-black tracking-widest uppercase py-1 px-3 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
                            PHASE_{step.id}
                          </span>
                          <div className="flex-1 h-[1px] bg-white/5"></div>
                        </div>

                        <h3 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-cyan-400 transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 group-hover:text-gray-200 transition-colors">
                          {step.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {step.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-gray-500 uppercase tracking-widest group-hover:text-cyan-400 group-hover:bg-cyan-400/5 transition-all">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Accent Corner Glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent blur-2xl"></div>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="relative z-20 w-16 h-16 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full border-2 transition-all duration-500 flex items-center justify-center text-xl bg-[#030014] z-10 ${activeStep === index ? 'border-cyan-400 scale-125 shadow-[0_0_20px_#22d3ee]' : 'border-white/20'}`}>
                      {step.icon}
                    </div>
                    {/* Pulsing ring around node */}
                    <div className={`absolute inset-0 rounded-full border border-cyan-400/30 animate-ping ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}></div>
                  </div>

                  {/* Spacer for horizontal layout */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-40 text-center">
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent mx-auto mb-16 animate-pulse"></div>
          <div className="inline-block p-1 bg-white/5 border border-white/10 rounded-full mb-8">
             <div className="px-10 py-4 bg-white/5 rounded-full flex items-center gap-4 group cursor-default">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[11px] font-black text-white uppercase tracking-[0.5em]">System Ready for Deployment</span>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flow-pulse {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
      `}</style>
    </section>
  );
};

export default Process;
