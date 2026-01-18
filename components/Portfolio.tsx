
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filterButtons = ['ALL', 'BRANDING', 'UI/UX', 'PRINT'];

  const filteredProjects = selectedCategory === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(project => {
        const category = project.category.toUpperCase();
        if (selectedCategory === 'UI/UX') return category.includes('UI/UX');
        return category === selectedCategory;
      });

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
    <section id="work" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black font-grotesk mb-6 text-white leading-tight cursor-default">
              <span className="block mb-2">
                {renderInteractiveText("Selected")}
              </span>
              <span className="text-cyan-400 italic neon-text-cyan">
                {renderInteractiveText("Creative", true)}
              </span>
              <span className="block mt-2">
                {renderInteractiveText("Projects")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              A curated showcase of design solutions where bold aesthetics meet tactical brand goals.
            </p>
          </div>
          
          {/* Enhanced Creative Filter Buttons */}
          <div className="mt-10 md:mt-0 flex flex-wrap gap-5">
            {filterButtons.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)}
                  className="relative group px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
                >
                  {/* Rotating Color Flow Border */}
                  <div className={`absolute inset-0 p-[2px] rounded-full transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#22d3ee,#a855f7,#3b82f6,#22d3ee)] animate-[spin_2s_linear_infinite]"></div>
                    <div className="absolute inset-[1.5px] bg-[#030014] rounded-full z-0"></div>
                  </div>

                  {/* Static Border (for inactive/non-hover state) */}
                  {!isActive && (
                    <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-transparent transition-colors duration-300"></div>
                  )}

                  {/* Sweeping Shine Animation Overlay */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                  {/* Liquid Glow Core */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Button Content */}
                  <span className={`relative z-10 text-[12px] font-black tracking-[0.3em] transition-all duration-500 ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-gray-400 group-hover:text-white'}`}>
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 min-h-[600px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0520] cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:border-cyan-400/30"
            >
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
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl font-light italic">No projects found in this category yet.</p>
          </div>
        )}

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
