
import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../constants';

const CountUp: React.FC<{ end: number; suffix: string; duration?: number }> = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Stats: React.FC = () => {
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
    <section id="stats" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2 mb-8 bg-cyan-400/5 border border-cyan-400/20 rounded-full">
            <span className="text-cyan-400 text-[11px] font-black tracking-[0.5em] uppercase">The Metrics of Impact</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-[0.9] tracking-tighter mb-10 cursor-default">
            <span className="block mb-4">{renderInteractiveText("By The")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 italic">
               {renderInteractiveText("Numbers", true)}
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto italic">
            "Design is a numbers game. From pixel-perfect ratios to thousands of creative hours, quality is measurable."
          </p>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div 
              key={stat.id}
              className="group relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-[1.5px] rounded-[3rem] overflow-hidden h-full transition-transform duration-500 hover:-translate-y-4">
                
                {/* Border Glow Animation */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}>
                  <div className={`absolute inset-[-250%] bg-[conic-gradient(from_0deg,transparent,${stat.color === 'cyan' ? '#22d3ee' : '#a855f7'},transparent)] animate-[spin_4s_linear_infinite]`}></div>
                </div>

                {/* Card Body */}
                <div className="relative z-10 h-full bg-[#0a0520]/80 backdrop-blur-3xl p-10 rounded-[2.9rem] border border-white/5 flex flex-col items-center text-center">
                  
                  {/* Floating Icon */}
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                    {stat.icon}
                  </div>

                  <div className={`text-5xl font-black mb-3 tracking-tighter ${stat.color === 'cyan' ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]'}`}>
                    <CountUp end={parseInt(stat.value)} suffix={stat.suffix} />
                  </div>

                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors duration-500">
                    {stat.label}
                  </h3>

                  {/* Internal Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-[2.9rem] bg-gradient-to-br ${stat.color === 'cyan' ? 'from-cyan-400 to-blue-600' : 'from-purple-500 to-purple-800'}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Data Stream Lines */}
        <div className="mt-32 relative h-1 overflow-hidden rounded-full bg-white/5">
          <div className="absolute inset-0 flex">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="h-full w-4 mr-1 bg-cyan-400/20 animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s`, opacity: Math.random() }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 w-[200%] animate-[data-stream_3s_linear_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes data-stream {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
