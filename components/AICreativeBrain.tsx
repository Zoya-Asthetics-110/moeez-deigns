
import React, { useState, useEffect } from 'react';
import { getCreativeInsight } from '../services/geminiService';
import { Message } from '../types';

const WavingRobot = () => (
  <div className="relative w-24 h-24 mb-2 animate-[bounce_3s_infinite_ease-in-out]">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
      {/* Robot Head */}
      <rect x="25" y="30" width="50" height="40" rx="10" fill="#0a0520" stroke="#22d3ee" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="40" cy="50" r="4" fill="#22d3ee" className="animate-pulse" />
      <circle cx="60" cy="50" r="4" fill="#22d3ee" className="animate-pulse" />
      {/* Mouth */}
      <path d="M 40 60 Q 50 65 60 60" stroke="#22d3ee" fill="none" strokeWidth="2" />
      {/* Antenna */}
      <line x1="50" y1="30" x2="50" y2="20" stroke="#a855f7" strokeWidth="2" />
      <circle cx="50" cy="18" r="3" fill="#a855f7" className="animate-pulse" />
      
      {/* Waving Arm */}
      <g className="origin-[75px_50px] animate-[wave_1.5s_infinite_ease-in-out]">
        <path d="M 75 50 L 90 35" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
        <circle cx="92" cy="33" r="3" fill="#22d3ee" />
      </g>
    </svg>
    <style>{`
      @keyframes wave {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-30deg); }
      }
    `}</style>
  </div>
);

const AICreativeBrain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Moeez here! Quick design help? Just ask.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowRobot(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowRobot(false);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getCreativeInsight(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 hover:scale-110 active:scale-95 transition-all glow-purple"
      >
        <svg className={`w-6 h-6 text-white transition-transform duration-500 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-white transition-transform duration-500 font-black text-xl ${isOpen ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}>✕</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[60] w-[350px] max-w-[90vw] h-[550px] bg-[#030014]/95 border border-white/10 rounded-[2.5rem] flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-3xl animate-[slideIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)]">
          
          {/* Header Area with Waving Robot */}
          <div className="pt-8 px-6 pb-4 border-b border-white/5 bg-gradient-to-b from-cyan-500/10 to-transparent flex flex-col items-center">
            {showRobot && <WavingRobot />}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="font-black text-[10px] uppercase tracking-[0.3em] text-white">Creative Assistant</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeInUp_0.3s_ease-out]`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-tr from-purple-600 to-purple-800 text-white rounded-br-none shadow-lg' 
                    : 'bg-white/5 text-gray-200 border border-white/5 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none border border-white/5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/5 bg-black/20">
            <div className="flex gap-3 items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs font-bold focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600 text-white"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="w-12 h-12 bg-cyan-500 text-black flex items-center justify-center rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(100px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(10) opacity: 0; }
          to { transform: translateY(0) opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default AICreativeBrain;
