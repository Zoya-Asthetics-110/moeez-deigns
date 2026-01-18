
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
            <h2 className="text-6xl md:text-8xl font-black font-grotesk mb-10 text-white tracking-tighter">
              Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 underline decoration-purple-500/30">Project</span>?
            </h2>
            <p className="text-2xl text-gray-400 mb-12 font-light leading-relaxed">
              Available for freelance collaborations and permanent creative roles. Let's make something <span className="text-white font-bold italic">legendary</span>.
            </p>
            
            <div className="space-y-10">
              <a href="mailto:hello@moeez.works" className="group flex flex-col items-start gap-2">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">Email Me</span>
                <span className="text-3xl lg:text-5xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300 break-all neon-text-cyan">
                  hello@moeez.works
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

          <div className="bg-[#0a0520] p-12 rounded-[3rem] border border-white/5 neon-border-purple relative shadow-2xl">
            <div className="absolute top-0 right-10 translate-y-[-50%] bg-[#030014] border border-purple-500/30 px-6 py-2 rounded-full">
               <span className="text-purple-400 text-[10px] font-black tracking-widest uppercase">Quick Response</span>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                  <input type="text" placeholder="Moeez Design" className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-cyan outline-none transition-all placeholder:text-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email</label>
                  <input type="email" placeholder="moeez@brand.com" className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-cyan outline-none transition-all placeholder:text-gray-700 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Message</label>
                <textarea placeholder="Tell me about your vision..." rows={5} className="w-full bg-[#030014] border border-white/10 rounded-2xl px-6 py-4 focus:neon-border-purple outline-none transition-all placeholder:text-gray-700 text-white resize-none"></textarea>
              </div>
              <button className="group w-full py-5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-purple-500/20 active:scale-95 uppercase tracking-widest text-sm hover:glow-cyan">
                <span className="flex items-center justify-center gap-3">
                  Send Inquiry
                  <span className="group-hover:translate-x-2 transition-transform">🚀</span>
                </span>
              </button>
            </form>
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
