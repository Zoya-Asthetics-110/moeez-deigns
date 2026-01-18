
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black font-grotesk mb-6 text-white leading-tight">
              Selected <span className="text-cyan-400 italic neon-text-cyan">Creative</span> Projects
            </h2>
            <p className="text-gray-400 text-lg">
              A curated showcase of design solutions where bold aesthetics meet tactical brand goals.
            </p>
          </div>
          <div className="mt-10 md:mt-0 flex flex-wrap gap-4">
            {['All', 'Branding', 'UI/UX', 'Print'].map(cat => (
              <button 
                key={cat} 
                className="px-6 py-2.5 rounded-full border border-white/10 hover:border-cyan-400 text-sm font-bold tracking-widest uppercase transition-all hover:bg-cyan-400/5 hover:neon-border-cyan"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0520] cursor-pointer border border-white/5 shadow-2xl hover:neon-border-purple transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <h3 className="text-4xl font-black text-white mb-3 tracking-tighter">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-cyan-400 font-black text-xs uppercase tracking-[0.2em] group-hover:opacity-100 opacity-0 transition-opacity">
                  View Case Study
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <button className="px-12 py-5 bg-transparent border-2 border-cyan-400/30 text-cyan-400 rounded-2xl hover:bg-cyan-400 hover:text-[#030014] transition-all font-black text-lg tracking-widest uppercase glow-cyan">
            Explore All Creations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
