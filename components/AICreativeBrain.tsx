
import React, { useState, useEffect, useRef } from 'react';
import { getCreativeInsight } from '../services/geminiService';
import { Message } from '../types';

type RobotState = 'idle' | 'thinking' | 'happy' | 'waving';

const RobotAvatar = ({ state = 'idle', mini = false }: { state?: RobotState; mini?: boolean }) => (
  <div className={`relative ${mini ? 'w-12 h-12' : 'w-36 h-36 mb-6'} group cursor-default transition-all duration-700`}>
    {/* DYNAMIC INTENSE NEON GLOW (STABLE - NO FLOAT) */}
    <div className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
      state === 'thinking' ? 'bg-purple-500/50 blur-[60px] animate-pulse' : 
      state === 'happy' ? 'bg-cyan-400/60 blur-[70px] shadow-[0_0_60px_#22d3ee]' : 
      'bg-cyan-400/15 blur-[40px]'
    }`}></div>
    
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
      {/* Robot Head */}
      <rect x="25" y="30" width="50" height="42" rx="14" fill="#030014" stroke={state === 'thinking' ? '#a855f7' : '#22d3ee'} strokeWidth="3" className="transition-all duration-500" />
      
      {/* Eyes Section */}
      <g className="transition-all duration-500">
        {state === 'thinking' ? (
          <g className="animate-[spin_2s_linear_infinite] origin-[50px_51px]">
             <circle cx="40" cy="51" r="4" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 2" />
             <circle cx="60" cy="51" r="4" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 2" />
          </g>
        ) : state === 'happy' ? (
          <g>
            <path d="M 36 54 Q 40 48 44 54" stroke="#22d3ee" fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M 56 54 Q 60 48 64 54" stroke="#22d3ee" fill="none" strokeWidth="3" strokeLinecap="round" />
            {/* Eye Glow */}
            <circle cx="40" cy="54" r="8" fill="#22d3ee" className="opacity-20 blur-sm" />
            <circle cx="60" cy="54" r="8" fill="#22d3ee" className="opacity-20 blur-sm" />
          </g>
        ) : (
          <g className="animate-[eye-blink_5s_infinite]">
            <rect x="37" y="50" width="8" height="3" rx="1.5" fill="#22d3ee" />
            <rect x="55" y="50" width="8" height="3" rx="1.5" fill="#22d3ee" />
          </g>
        )}
      </g>
      
      {!mini && (
        <>
          <path 
            d={state === 'happy' ? "M 40 62 Q 50 70 60 62" : "M 42 63 Q 50 66 58 63"} 
            stroke={state === 'thinking' ? '#a855f7' : '#22d3ee'} 
            fill="none" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <line x1="50" y1="30" x2="50" y2="18" stroke={state === 'thinking' ? '#a855f7' : '#22d3ee'} strokeWidth="2.5" />
          <circle cx="50" cy="16" r="4.5" fill={state === 'thinking' ? '#a855f7' : '#22d3ee'} className={`${state === 'thinking' ? 'animate-ping' : 'animate-pulse'}`} />
          
          <g className={`origin-[72px_55px] transition-opacity duration-500 ${state === 'happy' || state === 'waving' ? 'opacity-100 animate-[robot-wave_2s_infinite]' : 'opacity-0'}`}>
            <path d="M 75 55 L 92 38" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" />
            <circle cx="92" cy="38" r="4" fill="#22d3ee" className="blur-[2px]" />
          </g>
        </>
      )}
      <rect x="21" y="45" width="4" height="12" rx="2" fill={state === 'thinking' ? '#a855f7' : '#22d3ee'} opacity="0.6" />
      <rect x="75" y="45" width="4" height="12" rx="2" fill={state === 'thinking' ? '#a855f7' : '#22d3ee'} opacity="0.6" />
    </svg>

    <style>{`
      @keyframes robot-wave {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-40deg); }
      }
      @keyframes eye-blink {
        0%, 90%, 100% { transform: scaleY(1); }
        95% { transform: scaleY(0.1); }
      }
    `}</style>
  </div>
);

const AICreativeBrain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [robotState, setRobotState] = useState<RobotState>('idle');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Salam! Main Moeez ka AI assistant hoon. Design ya creativity ke baare mein kuch poochna hai? ✨' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setRobotState('waving');
      setTimeout(() => setRobotState('idle'), 2500);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    setRobotState('thinking');
    const response = await getCreativeInsight(userMsg);
    setLoading(false);
    setRobotState('happy');
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setTimeout(() => setRobotState('idle'), 3000);
  };

  return (
    <>
      {/* ABSOLUTELY STABLE NEON FLOATING BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-[1000000] w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group shadow-[0_0_40px_rgba(34,211,238,0.4)] bg-[#030014] border border-cyan-400/20"
      >
        <div className={`absolute inset-0 border-2 rounded-full border-cyan-400/40 animate-[spin_8s_linear_infinite] ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`relative z-10 transition-all duration-500 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
           <RobotAvatar mini />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center text-cyan-400 text-3xl font-black transition-all duration-500 ${isOpen ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}>
          ✕
        </div>
      </button>

      {/* ABSOLUTELY STABLE PREMIUM CHAT WINDOW (NO FLOAT) */}
      <div className={`fixed bottom-32 right-10 z-[999999] w-[420px] max-w-[92vw] h-[650px] bg-[#030014]/98 backdrop-blur-[40px] border border-white/10 rounded-[4rem] shadow-[0_60px_160px_rgba(0,0,0,1)] flex flex-col overflow-hidden transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) origin-bottom-right ${isOpen ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : 'translate-y-40 opacity-0 scale-90 pointer-events-none'}`}>
        
        <div className="pt-14 pb-8 px-10 flex flex-col items-center relative overflow-hidden bg-gradient-to-b from-cyan-400/10 to-transparent">
          <RobotAvatar state={robotState} />
          <div className="relative z-10 space-y-2 text-center">
            <h3 className="text-white text-lg font-black tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Creative Intelligence</h3>
            <div className="flex items-center justify-center gap-2">
              <span className={`w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] ${robotState === 'thinking' ? 'bg-purple-500 animate-pulse shadow-[0_0_12px_#a855f7]' : 'bg-green-400 animate-pulse shadow-[0_0_12px_#4ade80]'}`}></span>
              <span className="text-[10px] font-black uppercase tracking-[0.7em] text-gray-500">
                {robotState === 'thinking' ? 'PROCESSING' : 'READY'}
              </span>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-10 py-6 space-y-8 scrollbar-hide">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[message-pop_0.5s_cubic-bezier(0.19,1,0.22,1)_forwards]`}>
              <div className={`relative max-w-[85%] p-6 rounded-[2.8rem] text-sm font-medium leading-[1.65] ${
                m.role === 'user' 
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-br-none shadow-[0_15px_30px_rgba(34,211,238,0.3)]' 
                  : 'bg-white/5 text-gray-200 border border-white/10 rounded-bl-none backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.3)]'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-5 rounded-[2.5rem] rounded-bl-none border border-white/10 flex items-center gap-2.5">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_8px_#a855f7]"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_8px_#a855f7]"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce shadow-[0_0_8px_#a855f7]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-10 bg-black/50 border-t border-white/10 relative z-20">
          <div className="relative group/input">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Design help chahiye?"
              className="w-full bg-[#05001a] border border-white/10 rounded-[2.5rem] px-8 py-6 pr-20 text-[11px] font-black uppercase tracking-[0.25em] focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_45px_rgba(34,211,238,0.2)] transition-all placeholder:text-gray-700 text-white"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-3 top-3 bottom-3 w-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 shadow-2xl disabled:opacity-10 active:scale-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes message-pop {
          from { opacity: 0; transform: translateY(15px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default AICreativeBrain;
