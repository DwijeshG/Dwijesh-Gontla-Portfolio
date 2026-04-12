
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative z-10 pt-12 pb-8 md:pt-20 md:pb-10 border-t border-white/5 bg-brand-dark/50 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-brand-dark font-black text-xl shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all"
              >
                DG
              </motion.div>
              <span className="text-xl font-black tracking-tighter uppercase italic text-white group-hover:text-amber-400 transition-colors">Dwijesh Gontla</span>
            </motion.div>
            <motion.p 
              whileHover={{ x: 5 }}
              className="text-brand-medium text-sm leading-relaxed max-w-xs transition-transform"
            >
              Cybersecurity researcher and student scholar focused on Zero-Knowledge Architecture and systems security.
            </motion.p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 md:mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['About Me', 'Academics', 'Skills & Impact', 'Future'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 10 }}
                  className="transition-transform"
                >
                  <a 
                    href={item === 'About Me' ? '/' : `/${item.toLowerCase().split(' ')[0]}`} 
                    className="text-brand-medium hover:text-amber-500 transition-colors text-sm font-bold tracking-tight"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 md:mb-6">Quicklinks</h4>
            <div className="flex gap-4 mb-4 md:mb-6">
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

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 md:mb-6">Research Focus</h4>
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Zero-Knowledge Architecture</span>
              </div>
              <p className="text-white/60 text-[10px] font-medium leading-relaxed">
                Developing secure digital infrastructure through advanced cryptographic principles and systems research.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-10 border-t border-white/5 gap-4 md:gap-6">
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
