
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Core...");
  
  const statusMessages = [
    "Synthesizing UI Elements...",
    "Optimizing Pixel Architecture...",
    "Rendering Neon Ecosystem...",
    "Loading Creative Brain...",
    "Calibrating Visual Precision...",
    "Ready for Experience."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.random() * 15;
        const next = Math.min(prev + step, 100);
        
        // Update status based on progress
        const messageIndex = Math.min(Math.floor((next / 100) * statusMessages.length), statusMessages.length - 1);
        setStatus(statusMessages[messageIndex]);
        
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-[#030014] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Holographic Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      
      {/* Central Assembly Area */}
      <div className="relative mb-12">
        <div className="relative z-10 text-center">
          {/* Animated SVG Logo */}
          <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
             <path 
               d="M 20 80 L 20 20 L 50 50 L 80 20 L 80 80" 
               fill="none" 
               stroke="#22d3ee" 
               strokeWidth="4" 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               strokeDasharray="400" 
               strokeDashoffset="400"
               style={{ animation: 'draw-path 2s ease-out forwards' }}
             />
             <circle cx="50" cy="50" r="45" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="300" strokeDashoffset="300" opacity="0.3" style={{ animation: 'draw-path 3s ease-in infinite 0.5s' }} />
          </svg>

          {/* Name assembly with letter spacing animation */}
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-[1em] uppercase animate-[text-reveal_1s_ease-out_forwards] relative">
            MOEEZ
            <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
          </h1>
        </div>
      </div>

      {/* Progress Section */}
      <div className="w-64 max-w-xs relative space-y-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400/70">{status}</span>
          <span className="text-[12px] font-black text-white font-mono">{Math.floor(progress)}%</span>
        </div>
        
        {/* Sleek Design Progress Bar */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
           <div 
             className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-white transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,1)]"
             style={{ width: `${progress}%` }}
           ></div>
        </div>

        {/* Decorative Decals */}
        <div className="flex justify-between px-1">
          <div className="flex gap-1">
            {[1, 2, 3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${progress > (i * 25) ? 'bg-cyan-400' : 'bg-white/10'}`}></div>)}
          </div>
          <span className="text-[8px] font-bold text-gray-600 tracking-widest uppercase">Visual-Architect v2.5</span>
        </div>
      </div>

      {/* Extreme Pulse Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
    </div>
  );
};

export default Preloader;
