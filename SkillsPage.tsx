
import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import { MASTERY_ITEMS } from '../constants';
import { Briefcase, ExternalLink } from 'lucide-react';

interface SkillsPageProps {
  onSelectProject: (project: any) => void;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ onSelectProject }) => {
  return (
    <div className="space-y-32 md:space-y-48">
      {/* Page Header */}
      <section className="relative pt-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic gradient-gold"
            >
              Technical <span className="text-white">Skill Set</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-medium text-lg md:text-2xl font-bold tracking-tight max-w-3xl mx-auto italic"
            >
              A comprehensive breakdown of cybersecurity expertise, network architectures, and technical mastery.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Coding Languages Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="royal-card p-10 md:p-16 rounded-[3rem] border-amber-500/20"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Coding Languages</h2>
              <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
            </div>
            <p className="text-brand-medium text-lg font-bold leading-relaxed italic">
              "I am currently learning cybersecurity and data management too."
            </p>
            <div className="pt-4">
              <a 
                href="https://www.credly.com/users/dwijesh-gontla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10 group"
              >
                View Credly Profile
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">C++</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">C++</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">Competitive Programming & Algorithms</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">PY</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">Python</h4>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-tighter">Automation, AI/ML & Peer Instruction</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">JS</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">Javascript</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter mb-1">Full-Stack Logic & Web Apps</p>
                  <a href="https://coursera.org/share/68da5cfa89be5ff9cf1bc10a5c5c9f43" target="_blank" rel="noopener noreferrer" className="text-amber-500/60 text-[10px] font-bold uppercase tracking-tighter hover:text-amber-500 transition-colors flex items-center gap-1">
                    Certification <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">SEC</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">Cybersecurity</h4>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-tighter">Network Security & Ethical Hacking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">H5</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">HTML 5</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter mb-1">Semantic Web & Accessibility</p>
                  <a href="https://coursera.org/share/5f1fe0883d09ba267dfd25feac301448" target="_blank" rel="noopener noreferrer" className="text-amber-500/60 text-[10px] font-bold uppercase tracking-tighter hover:text-amber-500 transition-colors flex items-center gap-1">
                    Certification <ExternalLink size={10} />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">C3</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">CSS3</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter mb-1">Modern Styling & Responsive UI</p>
                  <a href="https://coursera.org/share/c241c78ad3b690f2d96fd229fa8b2545" target="_blank" rel="noopener noreferrer" className="text-amber-500/60 text-[10px] font-bold uppercase tracking-tighter hover:text-amber-500 transition-colors flex items-center gap-1">
                    Certification <ExternalLink size={10} />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 font-black text-xs">GH</div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">GitHub</h4>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-tighter mb-1">Version Control & Collaborative Dev</p>
                  <a href="https://github.com/DwijeshG" target="_blank" rel="noopener noreferrer" className="text-amber-500/60 text-[10px] font-bold uppercase tracking-tighter hover:text-amber-500 transition-colors flex items-center gap-1">
                    View Profile <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 gap-16 lg:gap-24">
        <div className="w-full">
          <Projects onSelectProject={onSelectProject} />
        </div>
      </div>
      
      {/* MASTERY SECTION */}
      <div id="mastery" className="scroll-mt-32 md:scroll-mt-56 space-y-12 md:space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Distinguished Mastery</h2>
          <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {MASTERY_ITEMS.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="royal-card group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 hover:border-amber-500/40 transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(245,158,11,0.25)] hover:-translate-y-2 bg-brand-dark/40 backdrop-blur-xl p-10"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-amber-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Micro-grid pattern */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              </div>

              <div className="relative z-10 space-y-8 h-full flex flex-col">
                {/* Icon Header */}
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-amber-500/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-4xl border border-amber-500/20 shadow-inner group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-700">
                    {item.icon}
                  </div>
                  <div className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <p className="text-[10px] text-amber-500 font-black uppercase tracking-[0.3em] leading-none">{item.tag}</p>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="space-y-4 flex-grow">
                  <h4 className="font-black text-white text-2xl md:text-3xl tracking-tighter group-hover:text-amber-400 transition-colors duration-700 leading-none">
                    {item.title}
                  </h4>
                  <p className="text-brand-medium text-sm md:text-base leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Accent Line */}
                <div className="h-[1px] w-full bg-white/5 overflow-hidden rounded-full mt-4">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ delay: 0.5 + idx * 0.05, duration: 1.5, ease: "circOut" }}
                    className="h-full w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
