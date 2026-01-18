
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#050112] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-900/5 blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 bg-purple-600/10 border border-purple-500/30 rounded-full">
              <span className="text-purple-400 text-xs font-black tracking-[0.3em] uppercase">Tech Stack</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-grotesk mb-8 text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 neon-text-purple">Arsenal</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg italic border-l-2 border-purple-500/50 pl-6">
              "Design is the silent ambassador of your brand." I use a blend of legacy mastery and futuristic software to ensure excellence.
            </p>
            
            <div className="space-y-10">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="flex items-center gap-4 text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-black font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 animate-[shimmer_3s_infinite] bg-[length:200%_100%] rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-[#0a0520] rounded-[3rem] flex items-center justify-center p-2 border border-white/5 neon-border-purple shadow-2xl">
              <div className="w-full h-full border border-white/10 rounded-[2.8rem] flex flex-col items-center justify-center relative backdrop-blur-3xl overflow-hidden bg-gradient-to-b from-transparent to-[#050112]/50">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                   <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                   <div className="absolute bottom-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="z-10 text-center px-10">
                  <div className="text-7xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">🎨</div>
                  <h4 className="text-3xl font-black font-grotesk text-white mb-4">Visionary Design</h4>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Continuously pushing boundaries between art and technology since 2018.
                  </p>
                  <div className="flex justify-center gap-3">
                     {[1, 2, 3, 4].map(i => (
                       <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === 1 ? 'w-12 bg-cyan-400' : 'w-4 bg-white/10'}`}></div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-10 -right-10 px-8 py-4 bg-black border border-cyan-400/50 rounded-2xl animate-float glow-cyan">
               <span className="text-white font-bold text-xs tracking-widest uppercase">Expert Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
