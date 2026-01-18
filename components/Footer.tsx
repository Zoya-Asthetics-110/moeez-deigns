
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      
      setTimeout(() => {
        const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:moeezi396@gmail.com?subject=${subject}&body=${body}`;
        
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);
    }, 2000);
  };

  const handleBehanceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    
    // Play the cinematic transition for 2.5 seconds
    setTimeout(() => {
      window.open('https://www.behance.net/moeezimran2', '_blank');
      // Briefly keep overlay to hide the jump back
      setTimeout(() => setIsRedirecting(false), 500);
    }, 2500); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer id="contact" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* --- CINEMATIC BEHANCE BRAND REVEAL --- */}
      {isRedirecting && (
        <div className="fixed inset-0 z-[1000000] flex items-center justify-center bg-[#030014]">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <div className="absolute inset-0 blueprint-grid scale-110"></div>
          </div>

          {/* Liquid Expanding Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[50px] h-[50px] bg-white rounded-full animate-[portal-reveal_2.2s_cubic-bezier(0.8,0,0.2,1)_forwards]"></div>
          </div>
          
          {/* Logo Content */}
          <div className="relative z-10 flex flex-col items-center">
             {/* Main Logo Text with Glitch/Glimmer */}
             <div className="flex gap-2 mb-8 overflow-hidden">
                {['B','E','H','A','N','C','E'].map((char, i) => (
                  <span 
                    key={i}
                    className="text-7xl md:text-9xl font-black text-[#030014] tracking-tighter opacity-0 animate-[char-fade-in_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}
                  >
                    {char}
                  </span>
                ))}
             </div>

             {/* Animated Underline matches user image style */}
             <div className="w-48 h-[2px] bg-[#030014]/10 relative overflow-hidden rounded-full opacity-0 animate-[fade-in_0.5s_forwards_1.2s]">
                <div className="absolute inset-0 bg-cyan-500 animate-[loading-line_1.5s_ease-in-out_infinite]"></div>
             </div>

             <p className="mt-8 text-[11px] font-black text-[#030014] uppercase tracking-[0.8em] opacity-0 animate-[fade-in_0.5s_forwards_1.5s]">
                Connecting to Portfolio
             </p>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8">
               <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">Contact Me</span>
            </div>

            <div className="relative mb-14 cursor-default group inline-block">
              <h2 className="text-6xl md:text-8xl font-black font-grotesk text-white tracking-tighter relative z-10 premium-text-hover group-hover:scale-105 transition-all duration-700">
                <span className="shimmer-sweep">Start a Project?</span>
                <div className="luminous-underline w-full"></div>
              </h2>
            </div>

            <p className="text-2xl text-gray-400 mb-12 font-light leading-relaxed">
              Available for freelance collaborations and permanent creative roles. Let's make something <span className="text-white font-bold italic">legendary</span>.
            </p>
            
            <div className="space-y-10">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=moeezi396@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-2"
              >
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">Email Me</span>
                <span className="text-3xl lg:text-5xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 break-all">
                  moeezi396@gmail.com
                </span>
              </a>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
                {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map(link => (
                  <a 
                    key={link} 
                    href="#" 
                    onClick={(e) => link === 'Behance' ? handleBehanceClick(e) : null}
                    className="text-gray-400 hover:text-white transition-all uppercase tracking-widest text-[11px] font-black relative group"
                  >
                    {link}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000">
            {/* Form Card Container with persistent hover animation */}
            <div className="bg-[#0a0520] p-12 rounded-[3rem] border border-white/5 relative shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:border-cyan-400/30 group-hover:shadow-[0_40px_100px_rgba(34,211,238,0.15)] group-hover:animate-[hover-breathe_4s_ease-in-out_infinite]">
              
              <div className="absolute top-0 right-10 translate-y-[-50%] bg-[#030014] border border-purple-500/30 px-6 py-2 rounded-full z-20 group-hover:animate-pulse">
                <span className="text-purple-400 text-[10px] font-black tracking-widest uppercase">Quick Response</span>
              </div>
              
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@brand.com" 
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-700 text-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project..." 
                    rows={4} 
                    required
                    className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-400 outline-none transition-all placeholder:text-gray-700 text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full py-5 font-black rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm relative overflow-hidden group/btn ${
                    status === 'success' ? 'bg-green-500' : 'bg-gradient-to-r from-purple-600 to-cyan-500'
                  }`}
                >
                  {/* Persistent Liquid Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-35deg] animate-[btn-shimmer_2s_infinite]"></div>
                  </div>
                  
                  <span className="relative z-10">
                    {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Delivered!'}
                  </span>
                </button>
              </form>

              {/* Decorative corner glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">
          <p>© 2024 MOEEZ. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes portal-reveal {
          0% { transform: scale(0); opacity: 1; border-radius: 50%; }
          35% { transform: scale(1.2); opacity: 1; border-radius: 50%; }
          70% { transform: scale(35); opacity: 1; border-radius: 0%; }
          100% { transform: scale(60); opacity: 1; border-radius: 0%; }
        }
        @keyframes char-fade-in {
          0% { transform: translateY(50px) scale(0.8); opacity: 0; filter: blur(10px); }
          100% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loading-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        /* New Hover Animations */
        @keyframes hover-breathe {
          0%, 100% { transform: translateY(-16px) scale(1); border-color: rgba(34, 211, 238, 0.3); box-shadow: 0 40px 100px rgba(34, 211, 238, 0.15); }
          50% { transform: translateY(-20px) scale(1.02); border-color: rgba(168, 85, 247, 0.5); box-shadow: 0 50px 120px rgba(168, 85, 247, 0.25); }
        }
        @keyframes btn-shimmer {
          0% { transform: translateX(-150%) skewX(-35deg); }
          100% { transform: translateX(150%) skewX(-35deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
