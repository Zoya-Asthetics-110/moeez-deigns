
import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon, index }) => {
  return (
    <div 
      className="group relative p-10 rounded-[2.5rem] bg-[#0a0520]/80 border border-white/5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(34,211,238,0.15)] hover:border-cyan-400/30 overflow-hidden flex flex-col h-full"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
      
      {/* Top Section: Icon & Number */}
      <div className="flex justify-between items-start mb-12 relative z-10">
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/40 shadow-xl">
          {icon}
        </div>
        <span className="text-4xl font-black text-white/5 group-hover:text-cyan-400/20 transition-colors duration-500 font-grotesk tracking-tighter">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10">
        <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>

      {/* Button & Accent */}
      <div className="mt-10 flex items-center justify-between relative z-10">
        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-all">
          View Details
          <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-black transition-all duration-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Bottom Glowing Line (Signature architecture) */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const SERVICES_DATA = [
    {
      number: "01",
      icon: "📐",
      title: "UI/UX Architecture",
      description: "Designing seamless user journeys and high-fidelity wireframes that convert visitors into loyal customers."
    },
    {
      number: "02",
      icon: "🎨",
      title: "Visual Identity",
      description: "Crafting iconic logos, typography, and complete brand systems designed for digital-first companies."
    },
    {
      number: "03",
      icon: "💻",
      title: "Graphic Design",
      description: "Strategic visual communication through high-impact marketing collateral, social media, and digital assets."
    },
    {
      number: "04",
      icon: "👓",
      title: "3D Visualization",
      description: "Bringing products and concepts to life with cinematic 3D renders, realistic textures, and dynamic layouts."
    }
  ];

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
    <section id="services" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Decorative Blur Layers */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-block px-5 py-2 mb-6 bg-purple-500/5 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-[11px] font-black tracking-[0.4em] uppercase">My Expertise</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-tight tracking-tighter cursor-default">
            <span className="block">
              {renderInteractiveText("Design")}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 italic">
              {renderInteractiveText("Ecosystem", true)}
            </span>
          </h2>
        </div>

        {/* 4-Card Grid Layout mirroring the user request */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-cyan-400/20 transition-all">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-black text-white">Need a custom solution?</h4>
            <p className="text-gray-400">Let's discuss how we can scale your brand's visual language.</p>
          </div>
          <button className="px-12 py-5 bg-cyan-400 text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm shadow-[0_20px_40px_rgba(34,211,238,0.2)]">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
