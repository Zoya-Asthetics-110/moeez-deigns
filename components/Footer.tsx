
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

    // Simulate a high-end sending animation
    setTimeout(() => {
      setStatus('success');
      
      // Trigger the email sending after the animation completes
      setTimeout(() => {
        const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:moeezi396@gmail.com?subject=${subject}&body=${body}`;
        
        // Reset after a while
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);
    }, 2000);
  };

  const handleBehanceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    
    // Play transition animation then redirect
    setTimeout(() => {
      window.open('https://www.behance.net/moeezimran2', '_blank');
      setTimeout(() => setIsRedirecting(false), 500);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer id="contact" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Behance Transition Portal Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#030014] animate-[fadeIn_0.5s_ease-out_forwards]"></div>
          <div className="relative z-10 text-center">
            <div className="w-40 h-40 border-t-4 border-r-4 border-cyan-400 rounded-full animate-[spin_0.8s_linear_infinite] shadow-[0_0_50px_rgba(34,211,238,0.5)]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
               <span className="text-white font-black text-2xl tracking-[0.5em] animate-[pulse_0.6s_infinite]">Bē</span>
            </div>
            <p className="mt-8 text-cyan-400 font-black tracking-[0.3em] uppercase text-xs animate-bounce">Opening Portfolio...</p>
          </div>
          {/* Wave Ripple Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-[ripple_1.5s_ease-out_forwards]"></div>
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

            {/* Unified Premium Luminous Heading Animation */}
            <div className="relative mb-14 cursor-default group inline-block">
              <h2 className="text-6xl md:text-8xl font-black font-grotesk text-white tracking-tighter relative z-10 premium-text-hover group-hover:scale-105 transition-all duration-700">
                <span className="shimmer-sweep">Start a Project?</span>
                <div className="luminous-underline w-full"></div>
              </h2>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-32 bg-cyan-500/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
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
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">Email Me</span>
                <span className="text-3xl lg:text-5xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 break-all neon-text-cyan">
                  moeezi396@gmail.com
                </span>
              </a>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
                {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map(link => (
                  <a 
                    key={link} 
                    href="#" 
                    onClick={(e) => link === 'Behance' ? handleBehanceClick(e) : null}
                    className="text-gray-400 hover:text-white transition-all uppercase tracking-widest text-xs font-black relative group"
                  >
                    {link}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Contact Form Card */}
          <div className="relative group perspective-1000">
            {/* Animated Rotating Border Background */}
            <div className="absolute inset-[-2px] rounded-[3.1rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent,#22d3ee,#a855f7,#22d3ee,transparent)] animate-[spin_4s_linear_infinite]"></div>
            </div>

            {/* Inner Form Container */}
            <div className="bg-[#0a0520] p-12 rounded-[3rem] border border-white/5 neon-border-purple relative shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
              <div className="absolute top-0 right-10 translate-y-[-50%] bg-[#030014] border border-purple-500/30 px-6 py-2 rounded-full z-20 group-hover:border-purple-400 transition-colors">
                <span className="text-purple-400 text-[10px] font-black tracking-widest uppercase">Quick Response</span>
              </div>
              
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 group-hover:text-cyan-400 transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Moeez Design" 
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-cyan outline-none transition-all placeholder:text-gray-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 group-hover:text-cyan-400 transition-colors">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="moeez@brand.com" 
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-cyan outline-none transition-all placeholder:text-gray-700 text-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 group-hover:text-purple-400 transition-colors">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your vision..." 
                    rows={5} 
                    required
                    className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-purple outline-none transition-all placeholder:text-gray-700 text-white resize-none"
                  ></textarea>
                </div>

                {/* ANIMATED BUTTON */}
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`group/btn w-full py-5 font-black rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm overflow-hidden relative ${
                    status === 'success' ? 'bg-green-500 shadow-green-500/40' : 'bg-gradient-to-r from-purple-600 to-cyan-500 shadow-purple-500/20'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'idle' && (
                      <>
                        Send Inquiry
                        <span className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500">🚀</span>
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <span className="animate-pulse">Launching...</span>
                        <span className="animate-[rocket-launch_1s_ease-in_infinite]">🚀</span>
                      </>
                    )}
                    {status === 'success' && (
                      <div className="flex items-center gap-2 animate-[bounce_0.5s_ease-out]">
                        <span>Delivered!</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Sending Progress Bar Overlay */}
                  {status === 'sending' && (
                    <div className="absolute inset-0 bg-white/10">
                      <div className="h-full bg-cyan-400/30 animate-[progress-flow_2s_linear_infinite]"></div>
                    </div>
                  )}

                  {/* Shimmer effect inside button */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">
          <p>© 2024 MOEEZ. DESIGNED IN THE NEON VOID.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rocket-launch {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(40px, -40px) scale(1.5); opacity: 0; }
        }
        @keyframes progress-flow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 500vw; height: 500vw; opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
