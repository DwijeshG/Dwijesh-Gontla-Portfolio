
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Skill } from '../types';
import { Cpu, Shield, Code, Terminal, Layers, Zap, Database, Cloud, Lock, Monitor, Server, Activity, Target, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const ICON_MAP: Record<string, any> = {
  'Technical Core': <Code size={32} />,
  'Infrastructure & Security': <Shield size={32} />,
  'Professional & Business': <Terminal size={32} />,
  'C++': <Cpu size={20} />,
  'Python': <Zap size={20} />,
  'HTML': <Code size={20} />,
  'CSS': <Layers size={20} />,
  'JavaScript': <Activity size={20} />,
  'Git': <Target size={20} />,
  'Cisco Networking': <Server size={20} />,
  'Cloudflare': <Cloud size={20} />,
  'VLAN/OSPF': <Monitor size={20} />,
  'Finance': <Activity size={20} />,
  'Strategic Planning': <Target size={20} />,
  'System Analysis': <Cpu size={20} />
};

const SkillCard: React.FC<{ skill: string | Skill, index: number }> = ({ skill, index }) => {
  const skillName = typeof skill === 'string' ? skill : skill.name;
  const skillLink = typeof skill === 'string' ? undefined : skill.link;

  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
        {ICON_MAP[skillName] || <Zap size={20} />}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-display font-bold text-sm md:text-base text-white/80 group-hover:text-white transition-colors uppercase tracking-widest">
          {skillName}
        </span>
        {skillLink && (
          <ExternalLink size={12} className="text-amber-500/50 group-hover:text-amber-500 transition-colors" />
        )}
      </div>
    </>
  );

  if (skillLink) {
    return (
      <motion.a
        href={skillLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)' }}
        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 transition-all group cursor-pointer"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)' }}
      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 transition-all group cursor-default"
    >
      {content}
    </motion.div>
  );
};

const SkillsShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Flatten all skills into one array
  const allSkills = SKILL_CATEGORIES.flatMap(category => category.skills);

  return (
    <section ref={ref} className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/30">
                  <Layers size={32} />
                </div>
                <span className="font-display text-amber-500 text-xs md:text-sm font-black uppercase tracking-[0.5em]">
                  Technical Arsenal
                </span>
              </motion.div>
              <Reveal>
                <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none uppercase italic">
                  Core <br />
                  <span className="text-gradient">Competencies.</span>
                </h2>
              </Reveal>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-md"
            >
              <p className="text-gray-400 font-display font-medium text-lg leading-relaxed">
                A deliberate progression of technical and strategic capabilities. Rather than simply collecting skills, each competency—from low-level programming to financial strategy—is intentionally cultivated to build a robust foundation for advanced cybersecurity and zero-knowledge architecture.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allSkills.map((skill, skillIdx) => (
              <SkillCard key={skillIdx} skill={skill} index={skillIdx} />
            ))}
          </div>

          {/* Cybersecurity Synthesis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-16 border-t border-white/10"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-amber-500"></div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-white">Cybersecurity Synthesis</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                  <Code size={24} />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-widest">Code & Exploitation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mastering C++, Python, and web technologies (HTML/CSS/JS) allows me to understand software at its core. This foundation is critical for identifying vulnerabilities, reverse-engineering malware, and building secure-by-design applications from the ground up.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                  <Shield size={24} />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-widest">Network Defense</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Expertise in Cisco Networking, VLAN/OSPF, and Cloudflare provides the architectural knowledge needed to design zero-trust networks. Understanding how data flows enables me to secure perimeters, segment traffic, and mitigate advanced DDoS attacks.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                  <Target size={24} />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-widest">Strategic Risk</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Skills in Finance, System Analysis, and Strategic Planning bridge the gap between technical vulnerabilities and business impact. This allows me to assess organizational risk, manage security budgets, and align cyber defense with high-level business goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
