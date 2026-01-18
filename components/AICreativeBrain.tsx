
import React, { useState } from 'react';
import { getCreativeInsight } from '../services/geminiService';
import { Message } from '../types';

const AICreativeBrain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hey there! I am Moeez\'s creative brain. Need design tips or want to know about his style?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

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
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[60] w-[350px] max-w-[90vw] h-[500px] bg-black/80 border border-white/10 rounded-3xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-2xl">
          <div className="p-4 border-b border-white/10 bg-purple-600/20 flex justify-between items-center">
            <span className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Moeez Creative AI
            </span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-cyan-500 text-xs italic animate-pulse">Generating creative spark...</div>}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for design advice..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                className="bg-purple-600 p-2 rounded-xl hover:bg-cyan-500 transition-colors"
              >
                ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AICreativeBrain;
