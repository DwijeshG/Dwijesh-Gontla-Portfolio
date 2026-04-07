import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  Shield, 
  Terminal, 
  Layers, 
  ExternalLink, 
  ChevronDown, 
  Globe, 
  Zap, 
  Database, 
  Cloud, 
  Lock,
  Monitor,
  Server,
  Activity,
  Target,
  Trophy,
  Award
} from 'lucide-react';
import Projects from '../components/Projects';
import ExploreMore from '../components/ExploreMore';
import SkillsShowcase from '../components/SkillsShowcase';

interface SkillsPageProps {
  onSelectProject: (project: any) => void;
}

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <section id={id} className={`relative flex flex-col items-center justify-center px-6 py-16 md:py-24 overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block text-brand-medium font-display text-sm md:text-base font-black tracking-[0.6em] uppercase mb-10 border border-brand-medium/30 px-8 py-3 rounded-full bg-brand-medium/5 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.1)]"
        >
          Technical Expertise
        </motion.div>
        <h1 className="font-display text-8xl md:text-[12rem] lg:text-[15rem] font-bold tracking-tighter leading-[0.8] mb-14 text-white">
          Skills <br /> 
          <span className="text-gradient">& Tech.</span>
        </h1>
        <p className="font-display text-xl md:text-4xl font-medium tracking-tight text-gray-400 max-w-4xl mx-auto leading-tight opacity-80 mb-12">
          A showcase of technical proficiency, engineering foundations, and creative problem-solving.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://github.com/gdwijju"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-amber-500/50 transition-all group"
          >
            <Globe className="w-5 h-5 text-amber-500" />
            <span className="font-display font-bold text-white tracking-widest uppercase text-sm">GitHub Profile</span>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-amber-500 transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.credly.com/users/dwijesh-gontla"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-amber-500/50 transition-all group"
          >
            <Award className="w-5 h-5 text-amber-500" />
            <span className="font-display font-bold text-white tracking-widest uppercase text-sm">Credly Badges</span>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-amber-500 transition-colors" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-16 flex flex-col items-center gap-6"
      >
        <span className="text-gray-600 text-[11px] font-black tracking-[0.5em] uppercase">Initialize Exploration</span>
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-brand-medium opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProjectsShowcase = ({ onSelectProject }: { onSelectProject: (project: any) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="bg-black relative flex flex-col items-center justify-center px-6 pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden">
      <div ref={ref} className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="p-5 bg-amber-500/20 rounded-3xl border border-amber-500/30">
                <Monitor className="w-10 h-10 text-amber-500" />
              </div>
              <span className="font-display text-2xl font-bold text-amber-500 tracking-[0.3em] uppercase">Applied Knowledge</span>
            </div>
            <h2 className="font-display text-8xl md:text-[11rem] font-bold tracking-tighter mb-12 text-white leading-[0.8]">
              Project <br /> <span className="text-gradient">Showcase.</span>
            </h2>
          </motion.div>
        </div>
        
        <Projects onSelectProject={onSelectProject} />
      </div>
    </section>
  );
};

const SkillsPage: React.FC<SkillsPageProps> = ({ onSelectProject }) => {
  return (
    <main className="bg-black text-white selection:bg-amber-500 selection:text-black">
      <div className="noise-overlay" />
      <Hero />
      
      <div className="relative z-10">
        <SkillsShowcase />
        <ProjectsShowcase onSelectProject={onSelectProject} />
        
        <div className="py-32 bg-black">
          <ExploreMore />
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
