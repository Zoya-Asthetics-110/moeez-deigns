
import React, { useEffect, useRef, useState } from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, content, avatar, index }) => {
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
      className={`group relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Sleek Rotating Neon Border Container */}
      <div className="relative p-[1.5px] overflow-hidden rounded-[2.5rem] h-full transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-1">
        
        {/* Neon Rotation Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
          <div className="absolute inset-[-250%] bg-[conic-gradient(from_0deg,transparent,#a855f7,#22d3ee,#a855f7,transparent)] animate-[spin_5s_linear_infinite]"></div>
        </div>

        {/* Main Card Content */}
        <div className="relative z-10 h-full bg-[#0a0520]/80 backdrop-blur-3xl p-10 rounded-[2.4rem] border border-white/5 overflow-hidden flex flex-col">
          
          {/* Decorative Background Quote Symbol */}
          <div className="absolute -top-6 -right-4 text-[12rem] font-black text-white/5 group-hover:text-cyan-400/10 transition-colors duration-700 select-none">
            "
          </div>

          {/* Client Avatar Section */}
          <div className="flex items-center gap-5 mb-8 relative z-10">
            <div className="relative">
              {/* Pulsing Outer Ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-full blur-[4px] opacity-40 group-hover:opacity-100 animate-pulse"></div>
              <img 
                src={avatar} 
                alt={name} 
                className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:border-white/40 transition-all duration-500"
              />
            </div>
            <div>
              <h4 className="text-xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">{name}</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{role} @ <span className="text-purple-400">{company}</span></p>
            </div>
          </div>

          {/* Review Text */}
          <div className="flex-1 relative z-10">
            <p className="text-gray-300 text-lg font-light leading-relaxed italic group-hover:text-white transition-colors">
              "{content}"
            </p>
          </div>

          {/* Star Rating & Status */}
          <div className="mt-8 flex justify-between items-center relative z-10">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className="text-cyan-400 text-sm drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">★</span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">Verified Collaboration</span>
            </div>
          </div>

          {/* Bottom Interactive Glow */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const TESTIMONIALS_DATA = [
    {
      name: "Alex Thompson",
      role: "CEO",
      company: "Vanguard Tech",
      avatar: "https://i.pravatar.cc/150?u=alex",
      content: "Moeez transformed our brand identity from generic to iconic. His attention to detail and unique neon aesthetic gave us the edge we needed in a crowded market."
    },
    {
      name: "Sarah Jenkins",
      role: "Creative Director",
      company: "Studio Bloom",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      content: "Working with Moeez was an absolute breeze. He understands design psychology and knows exactly how to make visuals pop. Our social engagement increased by 40%!"
    },
    {
      name: "Marcus Chen",
      role: "Founder",
      company: "Echo Labs",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      content: "The UI/UX Moeez designed for our platform is simply breathtaking. Users keep complimenting the smooth aesthetics and the intuitive flow. A true master of his craft."
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
    <section id="testimonials" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2 mb-8 bg-cyan-400/5 border border-cyan-400/20 rounded-full">
            <span className="text-cyan-400 text-[11px] font-black tracking-[0.5em] uppercase">Client Love</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-[0.9] tracking-tighter mb-10 cursor-default">
            <span className="block mb-4">{renderInteractiveText("Voices")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 italic">
               {renderInteractiveText("Unleashed", true)}
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 font-light italic max-w-2xl mx-auto">
            "Design is a silent ambassador of your brand. Here's what my partners have to say about our creative journey."
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <TestimonialCard key={t.name} {...t} index={index} />
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/2 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;
