
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  Anchor, 
  Users, 
  Trophy, 
  Activity, 
  Zap, 
  Target,
  ChevronRight,
  Sparkles,
  Globe
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import Reveal from './Reveal';

const RADAR_DATA = [
  { subject: 'Logic', A: 120, fullMark: 150 },
  { subject: 'Research', A: 110, fullMark: 150 },
  { subject: 'Leadership', A: 130, fullMark: 150 },
  { subject: 'Technical', A: 140, fullMark: 150 },
  { subject: 'Strategy', A: 125, fullMark: 150 },
  { subject: 'Ethics', A: 115, fullMark: 150 },
];

const NumberTicker = ({ value, decimal = 0 }: { value: number, decimal?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue.toFixed(decimal)}</span>;
};

const UniversityCard = ({ name, color, label, delay }: { name: string, color: string, label: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -15, scale: 1.05 }}
      className="relative aspect-square rounded-[3rem] flex flex-col items-center justify-center gap-4 overflow-hidden group shadow-2xl cursor-pointer"
      style={{ backgroundColor: color }}
    >
      {/* Holographic Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-linear-to-tr from-white/20 via-transparent to-white/20 -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000 ease-in-out"></div>
      
      <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-white/10 opacity-60"></div>
      
      <motion.span 
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="text-6xl md:text-8xl font-serif font-bold text-white relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {name}
      </motion.span>
      
      <div className="absolute bottom-8 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
          {label}
        </span>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
        <Sparkles size={20} className="text-white" />
      </div>
    </motion.div>
  );
};

const Academics: React.FC = () => {
  return (
    <section className="space-y-32 md:space-y-64 pb-32" aria-labelledby="academics-heading">
      {/* THE COMMAND CENTER - HERO METRICS */}
      <div className="relative">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-linear-to-r from-transparent via-amber-500/30 to-transparent"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Display */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 royal-card p-10 md:p-20 rounded-[4rem] border-amber-500/20 relative overflow-hidden group bg-black/40 backdrop-blur-3xl"
          >
            {/* HUD Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-amber-500/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-amber-500/20 rounded-br-3xl"></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/5 to-transparent"></div>
              <div className="absolute left-1/2 top-0 w-px h-full bg-linear-to-b from-transparent via-amber-500/5 to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-16">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
                  <h2 className="text-amber-500 text-xs font-black uppercase tracking-[0.6em]">Academic Excellence</h2>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
                <div className="space-y-4 shrink-0">
                  <div className="text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-none flex items-baseline whitespace-nowrap">
                    3.94
                    <span className="text-xl md:text-3xl text-amber-500 ml-2 opacity-80">/ 4.0</span>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <div className="h-px w-12 bg-amber-500"></div>
                    <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm">Unweighted GPA</p>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap gap-12 md:gap-16 lg:gap-20 pt-8 lg:pt-0">
                  <div className="space-y-2">
                    <div className="text-6xl md:text-8xl font-black gradient-gold tracking-tighter leading-none">
                      <NumberTicker value={5.18} decimal={2} />
                    </div>
                    <p className="text-brand-medium font-black uppercase tracking-widest text-xs ml-1">Weighted Merit</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none flex items-baseline">
                      <span className="text-amber-500 text-3xl md:text-5xl mr-2 md:mr-3">#</span>
                      <NumberTicker value={6} />
                    </div>
                    <p className="text-amber-500 font-black uppercase tracking-widest text-xs ml-1">Class Rank</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Academic Trajectory</p>
                    <p className="text-white text-lg font-bold tracking-tight italic">"Consistent A Honor Roll Excellence"</p>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-500 text-2xl font-black tracking-tighter">100%</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Consistency</p>
                  </div>
                </div>
                <div className="h-5 w-full bg-white/5 rounded-2xl p-1.5 border border-white/10 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-200 rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.5)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strategic Focus */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 royal-card p-10 rounded-[4rem] border-white/10 flex flex-col justify-between group bg-white/[0.02] backdrop-blur-3xl"
          >
            <div className="space-y-2">
              <h3 className="text-white font-black text-2xl tracking-tighter uppercase italic">Strategic Focus</h3>
              <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Research & Development</p>
            </div>

            <div className="h-[300px] w-full mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                  { subject: 'Systems', A: 145, fullMark: 150 },
                  { subject: 'AI/ML', A: 120, fullMark: 150 },
                  { subject: 'Security', A: 135, fullMark: 150 },
                  { subject: 'Logic', A: 140, fullMark: 150 },
                  { subject: 'Strategy', A: 130, fullMark: 150 },
                  { subject: 'Ethics', A: 125, fullMark: 150 },
                ]}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 900 }} />
                  <Radar
                    name="Dwijesh"
                    dataKey="A"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Top Percentile</span>
                <span className="text-amber-500 font-black tracking-tighter">&gt;99%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">National Ranking</span>
                <span className="text-amber-500 font-black tracking-tighter">Tier 1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* STRATEGIC INTELLIGENCE - BENTO GRID */}
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-4">
          <div className="space-y-4">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic gradient-gold">Academic Foundations</h3>
            <div className="flex items-center gap-4">
              <div className="h-1.5 w-48 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
              <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">Educational Progress</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* ACC Associate's Degree */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 royal-card p-10 md:p-16 rounded-[4rem] border-white/5 bg-white/[0.01] backdrop-blur-3xl group relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] group-hover:bg-amber-500/10 transition-all duration-1000"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                <GraduationCap size={48} />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">Computer Science Degree in Science</h4>
                  <p className="text-amber-500 text-[10px] md:text-xs font-black uppercase tracking-widest">Austin Community College • In Progress</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {['Programming Fundamentals I', 'Programming Fundamentals II', 'Programming Fundamentals III'].map((course) => (
                    <div key={course} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-white/80 text-[10px] md:text-xs font-black uppercase tracking-widest hover:border-amber-500/30 hover:bg-amber-500/5 transition-all">
                      {course}
                    </div>
                  ))}
                </div>
                <p className="text-brand-medium text-sm md:text-base font-medium opacity-60 italic">
                  "Accelerated computer science curriculum focused on advanced algorithmic logic and software engineering principles."
                </p>
              </div>
            </div>
          </motion.div>

          {/* AP Mastery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 royal-card p-12 rounded-[4rem] border-white/5 bg-white/[0.01] backdrop-blur-3xl group relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] group-hover:bg-amber-500/10 transition-all duration-1000"></div>
            
            <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 shadow-2xl border border-amber-500/20">
                  <ShieldCheck size={40} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-4xl font-black text-white uppercase tracking-tighter italic">AP Mastery</h4>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">College Board Validation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Human Geography", score: "5", sub: "Perfect Score", icon: <Globe size={20} /> },
                  { label: "Computer Science", score: "5", sub: "Perfect Score", icon: <Zap size={20} /> }
                ].map((item) => (
                  <div key={item.label} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 transition-all group/item relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-amber-500/20 group-hover/item:text-amber-500/40 transition-colors">
                      {item.icon}
                    </div>
                    <div className="text-6xl font-black text-amber-500 mb-2">{item.score}</div>
                    <p className="text-white font-black text-xs uppercase tracking-widest leading-tight">{item.label}</p>
                    <p className="text-brand-medium text-[9px] uppercase font-black tracking-tighter mt-3 opacity-60">{item.sub}</p>
                  </div>
                ))}
              </div>

              <p className="text-brand-medium text-lg font-medium leading-relaxed italic border-l-4 border-amber-500/30 pl-8 py-2 group-hover:border-amber-500 transition-all duration-500">
                "Demonstrating elite-level proficiency in spatial analysis and computational logic through the nation's most rigorous standard."
              </p>
            </div>
          </motion.div>

          {/* PSAT & Class Standing */}
          <div className="md:col-span-5 grid grid-cols-1 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="royal-card p-10 rounded-[3.5rem] border-white/10 flex flex-col justify-between group bg-linear-to-br from-white/[0.03] to-transparent"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Award size={28} />
                </div>
                <div className="text-right">
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Composite</p>
                  <p className="text-white font-black text-4xl tracking-tighter">1300</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <h5 className="text-white font-black text-xl uppercase tracking-tighter italic">PSAT Performance</h5>
                <div className="h-1 w-16 bg-amber-500/30 rounded-full"></div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Top 1% Global Tier <br />
                  National Merit Candidate
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="royal-card p-10 rounded-[3.5rem] border-white/10 flex flex-col justify-between group bg-linear-to-br from-white/[0.03] to-transparent"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Star size={28} />
                </div>
                <div className="text-right">
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Standing</p>
                  <p className="text-white font-black text-4xl tracking-tighter">#6</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <h5 className="text-white font-black text-xl uppercase tracking-tighter italic">Class Ranking</h5>
                <div className="h-1 w-16 bg-amber-500/30 rounded-full"></div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Gateway College Prep <br />
                  Elite Academic Cohort
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* NATIONWIDE RECRUITMENT - THE GOLDEN TICKET */}
      <div className="space-y-24">
        <div className="text-center space-y-6">
          <Reveal>
            <h3 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase italic">
              Nationwide <br />
              <span className="gradient-gold">Recruitment</span>
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-brand-medium text-lg md:text-2xl font-bold tracking-tight max-w-3xl mx-auto italic">
              Direct invitations from the nation's most prestigious institutions to join their elite summer cohorts.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <UniversityCard name="UT" color="#BF5700" label="UT Austin" delay={0.1} />
          <UniversityCard name="S" color="#8C1515" label="Stanford" delay={0.2} />
          <UniversityCard name="C" color="#800000" label="UChicago" delay={0.3} />
          <UniversityCard name="B" color="#154734" label="Baylor" delay={0.4} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="royal-card p-12 md:p-20 rounded-[4rem] border-white/5 bg-white/[0.01] backdrop-blur-3xl text-center space-y-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-b from-amber-500/5 to-transparent"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto shadow-2xl border border-amber-500/20">
              <Target size={40} />
            </div>
            <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Strategic Selection</h4>
            <p className="text-brand-light text-xl md:text-3xl font-bold leading-tight tracking-tight italic">
              "While these institutions reached out with direct invitations, I maintained a strategic focus on <span className="text-amber-500">independent research</span> and <span className="text-amber-500">advanced systems development</span>."
            </p>
            <div className="pt-8">
              <div className="h-px w-24 bg-amber-500/30 mx-auto"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* INSTITUTIONAL VALIDATION - HONORS */}
      <div className="space-y-16">
        <div className="flex items-center gap-6 px-4">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-white">Institutional Validation</h3>
          <div className="h-px grow bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "NSLS", full: "Leadership Society", icon: <Users size={32} />, desc: "Inducted for academic excellence and leadership potential." },
            { title: "PTK", full: "Phi Theta Kappa", icon: <Award size={32} />, desc: "Recognized for outstanding achievement at Austin Community College." },
            { title: "SCLA", full: "Collegiate Society", icon: <Trophy size={32} />, desc: "Honored for exceptional performance and professional development." }
          ].map((honor, idx) => (
            <motion.div
              key={honor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(245, 158, 11, 0.4)' }}
              className="royal-card p-12 rounded-[3rem] border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                {honor.icon}
              </div>
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 shadow-xl">
                {honor.icon}
              </div>
              <div className="mt-10 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-4xl font-black text-white tracking-tighter italic group-hover:text-amber-400 transition-colors">{honor.title}</h4>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">{honor.full}</p>
                </div>
                <p className="text-brand-medium text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                  {honor.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
