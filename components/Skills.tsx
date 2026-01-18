
import React, { useEffect, useRef, useState } from 'react';

interface SkillCardProps {
  initials: string;
  title: string;
  description: string;
  level: number;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ initials, title, description, level, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative p-8 rounded-[2.5rem] bg-[#0a0520]/80 border border-white/5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(34,211,238,0.15)] hover:border-cyan-400/30 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Interactive Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-700"></div>
      
      {/* Top Center Badge */}
      <div className="flex justify-center mb-8 relative z-10">
        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/5">
          <span className="text-gray-400 text-sm font-black tracking-widest group-hover:text-cyan-400 transition-colors">{initials}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="text-center space-y-2 mb-10 relative z-10">
        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
          {description}
        </p>
      </div>

      {/* Mastery Progress Section */}
      <div className="relative z-10">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-gray-400 transition-colors">Mastery</span>
          <span className="text-cyan-400 font-black text-sm drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">{level}%</span>
        </div>
        <div className="h-[7px] w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-[1.5s] ease-out shadow-[0_0_10px_rgba(34,211,238,0.3)] relative" 
            style={{ width: isVisible ? `${level}%` : '0%' }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

const Skills: React.FC = () => {
  const SKILLS_LIST = [
    { initials: "BI", title: "Brand Identity", description: "Logo design & brand guides", level: 98 },
    { initials: "UX", title: "UI/UX Design", description: "User-centric web & app interfaces", level: 92 },
    { initials: "SM", title: "Social Media Design", description: "Engaging content for social platforms", level: 95 },
    { initials: "PK", title: "Packaging Design", description: "Product labels & structural design", level: 85 },
    { initials: "PM", title: "Print Media", description: "Brochures, flyers & magazines", level: 90 },
    { initials: "GD", title: "Creative Graphic Design", description: "Strategic visual communication", level: 80 },
    { initials: "VI", title: "Vector Illustration", description: "Custom characters & icon sets", level: 88 },
    { initials: "AD", title: "Ad Campaign Design", description: "Visuals for digital marketing", level: 85 }
  ];

  // Helper to split text into interactive span characters
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
    <section id="skills" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.03)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-5 py-2 mb-6 bg-cyan-400/5 border border-cyan-400/20 rounded-full">
            <span className="text-cyan-400 text-[11px] font-black tracking-[0.4em] uppercase">The Tech Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-tight tracking-tighter mb-8 cursor-default">
            <span className="inline-block mr-4">
               {renderInteractiveText("Visual")}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 italic">
               {renderInteractiveText("Mastery", true)}
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto italic">
            "Merging artistic intuition with technical precision to deliver pixel-perfect digital experiences."
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_LIST.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} index={index} />
          ))}
        </div>

        {/* Bottom Interactive Message */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md group hover:border-purple-500/30 transition-all cursor-default">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-2xl group-hover:scale-125 transition-transform duration-500">⚙️</div>
            <div className="text-left">
              <div className="text-white font-black uppercase text-sm tracking-widest mb-1">Stack Evolution</div>
              <div className="text-gray-500 text-xs">Constantly upgrading tools for 2024 standards.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
