
import React from 'react';

const FloatingAssets: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      {/* Moving Pen Tool Path */}
      <svg className="absolute top-20 left-10 w-64 h-64 animate-[pulse_8s_infinite]" viewBox="0 0 200 200">
        <path d="M 10,100 C 10,10 190,10 190,100 S 10,190 10,100" fill="none" stroke="url(#gradient1)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-20 w-32 h-32 border border-indigo-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-purple-500/20 rotate-45 animate-[bounce_15s_infinite]" />
      
      {/* Decorative Circles */}
      <div className="absolute top-10 right-1/3 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
      <div className="absolute bottom-1/2 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-700" />
      <div className="absolute top-2/3 left-10 w-1 h-1 bg-white rounded-full animate-ping delay-1000" />
      
      {/* Floating Text Nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 text-[20vw] font-black pointer-events-none select-none">
        DESIGN
      </div>
    </div>
  );
};

export default FloatingAssets;
