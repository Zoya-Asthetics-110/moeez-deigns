
import React, { useState } from 'react';
import { PRESS_ASSETS } from '../constants';

const PressKit: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Neon Cyan', hex: '#22d3ee' },
    { name: 'Deep Purple', hex: '#a855f7' },
    { name: 'Void Black', hex: '#030014' },
    { name: 'Electric Blue', hex: '#3b82f6' }
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

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
    <section id="press" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-block px-5 py-2 mb-8 bg-purple-500/5 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-[11px] font-black tracking-[0.4em] uppercase">Media Resources</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black font-grotesk text-white leading-[0.9] tracking-tighter mb-10 cursor-default">
            <span className="block mb-4">{renderInteractiveText("Press")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 italic">
               {renderInteractiveText("Kit", true)}
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            Everything you need to showcase the Moeez brand identity. High-resolution assets, logos, and official photography.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Brand Bio */}
          <div className="lg:col-span-1 space-y-12">
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-cyan-400"></span>
                Official Bio
              </h3>
              <p className="text-gray-400 leading-relaxed font-light italic">
                Moeez is a visionary Graphic Designer based in the digital realm, specializing in neon-infused visual identities and high-fidelity UI ecosystems. With over 2 years of professional exploration, Moeez blends cyberpunk aesthetics with functional brand strategy to elevate modern startups into iconic legends.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8">Brand Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                {colors.map(color => (
                  <button 
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="relative group p-4 rounded-2xl bg-black/40 border border-white/5 transition-all hover:border-white/20 active:scale-95"
                  >
                    <div 
                      className="w-full h-12 rounded-xl mb-3 shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="text-[10px] font-black text-white tracking-widest uppercase mb-1">{color.name}</div>
                    <div className="text-[10px] font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">
                      {copiedColor === color.hex ? 'COPIED!' : color.hex}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns: Asset Downloads */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PRESS_ASSETS.map((asset) => (
                <div 
                  key={asset.id}
                  className="group relative h-80 rounded-[2.5rem] overflow-hidden bg-[#0a0520] border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_30px_60px_rgba(34,211,238,0.1)]"
                >
                  <img 
                    src={asset.preview} 
                    alt={asset.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest">
                        {asset.type}
                      </span>
                      <span className="text-[10px] font-black text-cyan-400/40">{asset.size}</span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-black text-white tracking-tighter">{asset.name}</h4>
                      <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.3em] backdrop-blur-md transition-all group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400">
                        Download Asset
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bulk Download Section */}
            <div className="mt-8 p-12 rounded-[2.5rem] bg-gradient-to-r from-purple-600/10 to-cyan-400/10 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-2xl font-black text-white mb-2">Complete Press Bundle</h4>
                <p className="text-gray-400 text-sm">Download all logos, headshots, and brand guidelines in one ZIP.</p>
              </div>
              <button className="relative z-10 px-10 py-5 bg-white text-black font-black rounded-2xl text-[11px] tracking-[0.3em] uppercase transition-all hover:scale-110 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                Download Everything (58MB)
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PressKit;
