
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8">
               <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">Contact Me</span>
            </div>

            {/* Unified Premium Luminous Heading Animation on the ENTIRE text */}
            <div className="relative mb-14 cursor-default group inline-block">
              <h2 className="text-6xl md:text-8xl font-black font-grotesk text-white tracking-tighter relative z-10 premium-text-hover group-hover:scale-105 transition-all duration-700">
                <span className="shimmer-sweep">Start a Project?</span>
                <div className="luminous-underline w-full"></div>
              </h2>
              
              {/* Soft Ethereal Glow Backlight */}
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
                  <a key={link} href="#" className="text-gray-400 hover:text-white transition-all uppercase tracking-widest text-xs font-black relative group">
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
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 group-hover:text-cyan-400 transition-colors">Full Name</label>
                    <input type="text" placeholder="Moeez Design" className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-cyan outline-none transition-all placeholder:text-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 group-hover:text-cyan-400 transition-colors">Email</label>
                    <input type="email" placeholder="moeez@brand.com" className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-cyan outline-none transition-all placeholder:text-gray-700 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 group-hover:text-purple-400 transition-colors">Message</label>
                  <textarea placeholder="Tell me about your vision..." rows={5} className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-purple outline-none transition-all placeholder:text-gray-700 text-white resize-none"></textarea>
                </div>
                <button className="group/btn w-full py-5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-purple-500/20 active:scale-95 uppercase tracking-widest text-sm hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] overflow-hidden relative">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Inquiry
                    <span className="group-hover/btn:translate-x-2 transition-transform">🚀</span>
                  </span>
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
    </footer>
  );
};

export default Footer;
