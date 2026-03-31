
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { BIO_SUMMARY, PERSONAL_VALUES, BIO_HIGHLIGHTS } from '../constants';
import { Terminal, GraduationCap, FileText } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.1);
    mouseY.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="relative scroll-mt-32 min-h-[80vh] flex flex-col justify-center">
      {/* Background Decor Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[4rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10"></div>
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-4 mb-10 md:mb-16 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl no-print shadow-2xl shadow-black/50"
        >
          <GraduationCap size={16} className="text-amber-500" />
          <span className="text-white/70 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em]">
            Gateway College Prep • ACC Dual Credit Student
          </span>
        </motion.div>
        
        <div 
          className="mb-16 md:mb-24" 
          ref={containerRef} 
          onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-12">
            {/* Cursor Reactive Background */}
            <motion.div 
              style={{ x, y }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full"></div>
            </motion.div>

            <div className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-[0.8] gradient-gold pb-8 drop-shadow-[0_0_40px_rgba(251,191,36,0.15)]"
              >
                Dwijesh <br />
                <span className="text-white">Gontla</span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0"
            >
              <div className="relative group">
                {/* Outer Glow for clarity and impact */}
                <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full group-hover:bg-amber-500/30 transition-all duration-1000"></div>
                <Logo 
                  size={320} 
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shadow-[0_0_80px_rgba(245,158,11,0.3)] border-[6px] border-amber-500/40 relative z-10 bg-brand-dark/50 backdrop-blur-xl rounded-full" 
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <p className="text-xl md:text-3xl text-white/90 leading-[1.5] font-bold tracking-tight italic">
              {BIO_SUMMARY}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BIO_HIGHLIGHTS.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10 backdrop-blur-sm">
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-black text-white tracking-tighter">{stat.value}</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {PERSONAL_VALUES.map((value, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-500/30 transition-colors group">
                <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-2 group-hover:text-amber-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-8 no-print"
          >
            <Link 
              to="/skills"
              className="group relative w-full sm:w-auto px-16 py-7 bg-amber-500 rounded-2xl font-black uppercase text-[12px] tracking-[0.5em] text-black hover:bg-amber-400 transition-all active:scale-95 shadow-2xl shadow-amber-500/20 cursor-pointer overflow-hidden flex items-center justify-center gap-4"
              aria-label="View Technical Skill Set"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Terminal size={18} strokeWidth={3} />
              Technical Skill Set
            </Link>

            <a 
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-16 py-7 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-[12px] tracking-[0.5em] text-white hover:bg-white/10 transition-all active:scale-95 shadow-2xl shadow-black/50 cursor-pointer overflow-hidden flex items-center justify-center gap-4"
              aria-label="Download Resume"
            >
              <div className="absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <FileText size={18} strokeWidth={3} className="text-amber-500" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
