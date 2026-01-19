
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isEmailRedirecting, setIsEmailRedirecting] = useState(false);
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
    setTimeout(() => {
      window.open('https://www.behance.net/moeezimran2', '_blank');
      setTimeout(() => setIsRedirecting(false), 500);
    }, 2800); 
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailRedirecting(true);
    setTimeout(() => {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=moeezi396@gmail.com', '_blank');
      setTimeout(() => setIsEmailRedirecting(false), 500);
    }, 2000); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer id="contact" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Cinematic Transition Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 z-[1000000] flex items-center justify-center bg-[#0057ff]">
          <div className="absolute inset-0 blueprint-grid opacity-10 scale-150 animate-[spin_60s_linear_infinite]"></div>
          <div className="relative z-10 flex gap-2 overflow-hidden">
            {['B','E','H','A','N','C','E'].map((char, i) => (
              <span key={i} className="text-7xl md:text-9xl font-black text-white tracking-tighter opacity-0 animate-[char-fade-in_0.6s_ease-out_forwards]" style={{ animationDelay: `${0.5 + (i * 0.1)}s` }}>{char}</span>
            ))}
          </div>
        </div>
      )}

      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8">
               <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">Contact Me</span>
            </div>
            <div className="relative mb-14 cursor-default group inline-block">
              <h2 className="text-6xl md:text-8xl font-black font-grotesk text-white tracking-tighter relative z-10 premium-text-hover transition-all duration-700">
                <span className="shimmer-sweep">Start a Project?</span>
                <div className="luminous-underline w-full"></div>
              </h2>
            </div>
            <p className="text-2xl text-gray-400 mb-12 font-light leading-relaxed">
              Available for freelance collaborations. Let's make something <span className="text-white font-bold italic">legendary</span>.
            </p>
            <div className="space-y-10">
              <a href="#" onClick={handleEmailClick} className="group flex flex-col items-start gap-2 cursor-pointer">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Email Me</span>
                <span className="text-3xl lg:text-5xl font-black text-white transition-all duration-300 break-all neon-email-text">moeezi396@gmail.com</span>
              </a>
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
                {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map(link => (
                  <a key={link} href="#" onClick={(e) => link === 'Behance' ? handleBehanceClick(e) : null} className="text-gray-400 hover:text-white transition-all uppercase tracking-widest text-[11px] font-black relative group">
                    {link}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- AMAZING NEON LOOP CONTACT CARD --- */}
          <div className="relative group perspective-1000">
            {/* INTENSE BACKGROUND NEON AURA (STABLE) */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-purple-600/0 to-cyan-400/0 group-hover:from-cyan-400/40 group-hover:via-purple-600/20 group-hover:to-cyan-400/40 blur-[150px] rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-100 pointer-events-none -z-10"></div>

            <div className="relative">
              {/* --- THE NEON LOOP BORDER (SPINNING ENERGY) --- */}
              <div className="absolute inset-[-4px] p-[3px] rounded-[4rem] overflow-hidden pointer-events-none z-0">
                 {/* Rotating High-Intensity Beam */}
                 <div className="absolute inset-[-300%] bg-[conic-gradient(from_0deg,transparent_0%,#a855f7_20%,#22d3ee_40%,transparent_60%,transparent_100%)] animate-[spin_3s_linear_infinite]"></div>
                 {/* Secondary Counter-Rotating Beam (on hover) */}
                 <div className="absolute inset-[-300%] bg-[conic-gradient(from_180deg,transparent_0%,#3b82f6_20%,#a855f7_40%,transparent_60%,transparent_100%)] animate-[spin_5s_linear_infinite_reverse] opacity-0 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* QUICK RESPONSE BADGE (STABLE NEON HALO) */}
              <div className="absolute top-0 right-10 translate-y-[-50%] z-20 transition-all duration-500">
                <div className="absolute inset-0 bg-purple-600/60 blur-[20px] rounded-full animate-[neon-flicker_4s_infinite]"></div>
                <div className="relative bg-[#030014] border-2 border-purple-500/50 px-10 py-3.5 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_50px_rgba(168,85,247,1)] group-hover:border-purple-400 transition-all">
                  <span className="text-purple-300 text-[11px] font-black tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">QUICK RESPONSE</span>
                </div>
              </div>

              {/* MAIN FORM BOX (STABLE - NO Y-MOVEMENT) */}
              <div className="bg-[#0a0520] p-12 rounded-[3.8rem] border border-white/10 relative shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-transparent z-10">
                
                {/* Boarder Se Nikalti Roshni (Corner Neon Flashes) */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-400/10 blur-[50px] rounded-full group-hover:bg-cyan-400/25 transition-all animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/25 transition-all animate-pulse"></div>
                
                <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3 group/input">
                      <label className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 ml-4 group-hover/input:text-cyan-400 transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        required
                        className="w-full bg-[#030014] border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-400/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.3)] outline-none transition-all placeholder:text-gray-800 text-white text-sm font-bold" 
                      />
                    </div>
                    <div className="space-y-3 group/input">
                      <label className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 ml-4 group-hover/input:text-cyan-400 transition-colors">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="hello@brand.com" 
                        required
                        className="w-full bg-[#030014] border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-400/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.3)] outline-none transition-all placeholder:text-gray-800 text-white text-sm font-bold" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3 group/input">
                    <label className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 ml-4 group-hover/input:text-purple-400 transition-colors">Project Details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your vision..." 
                      rows={5} 
                      required
                      className="w-full bg-[#030014] border border-white/5 rounded-2xl px-6 py-5 focus:border-purple-400/50 focus:shadow-[0_0_30px_rgba(168,85,247,0.3)] outline-none transition-all placeholder:text-gray-800 text-white text-sm font-bold resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status !== 'idle'}
                    className={`w-full py-7 font-black rounded-2xl transition-all shadow-[0_25px_50px_rgba(0,0,0,0.6)] active:scale-[0.97] uppercase tracking-[0.7em] text-[10px] relative overflow-hidden group/btn ${
                      status === 'success' ? 'bg-green-500' : 'bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400'
                    }`}
                  >
                    <span className="relative z-10 drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                      {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Transmitting...' : 'Link Established!'}
                    </span>
                    <div className="absolute inset-0 bg-white/25 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; filter: brightness(1); }
          20%, 22%, 24%, 55% { opacity: 0.4; filter: brightness(0.6); }
        }
        @keyframes char-fade-in {
          0% { transform: translateY(50px); opacity: 0; filter: blur(10px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
