
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 pt-20 pb-10 border-t border-white/5 bg-brand-dark/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-brand-dark font-black text-xl shadow-lg shadow-amber-500/20">
                DG
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic text-white">Dwijesh Gontla</span>
            </div>
            <p className="text-brand-medium text-sm leading-relaxed max-w-xs">
              Systems Architect & Strategic Leader bridging the gap between elite engineering and organizational excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Academics', 'Competitions', 'Skills', 'Future'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-brand-medium hover:text-amber-500 transition-colors text-sm font-bold tracking-tight"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Quicklinks</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="mailto:gdwijju@gmail.com"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-medium hover:text-amber-500 hover:border-amber-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/DwijeshG"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-medium hover:text-amber-500 hover:border-amber-500/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.credly.com/users/dwijesh-gontla"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-medium hover:text-amber-500 hover:border-amber-500/30 transition-all"
                aria-label="Credly"
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
            <div className="space-y-2">
              <a href="mailto:gdwijju@gmail.com" className="block text-brand-medium hover:text-amber-500 transition-colors text-xs font-bold tracking-tight">gdwijju@gmail.com</a>
              <a href="tel:+15129568087" className="block text-brand-medium hover:text-amber-500 transition-colors text-xs font-bold tracking-tight">(512) 956-8087</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Technical Focus</h4>
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Systems Architecture</span>
              </div>
              <p className="text-white/60 text-[10px] font-medium leading-relaxed">
                Prioritizing advanced cybersecurity research and enterprise network development.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-brand-medium text-[10px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Dwijesh Gontla. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/resume.pdf" download className="text-brand-medium hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Download Resume</a>
            <a href="mailto:gdwijju@gmail.com" className="text-brand-medium hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Contact Me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
