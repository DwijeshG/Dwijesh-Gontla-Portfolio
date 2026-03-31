
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, TrendingUp, Star, ShieldCheck, Anchor } from 'lucide-react';
import { NATIONAL_OUTREACH } from '../constants';

const Academics: React.FC = () => {
  return (
    <section className="space-y-20 md:space-y-40" aria-labelledby="academics-heading">
      {/* Institutional Metrics - Moved to Top */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="royal-card p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border-amber-500/20"
      >
        <div className="flex items-center gap-4 mb-12">
          <TrendingUp className="text-amber-500" size={20} />
          <h2 id="academics-heading" className="text-amber-500 text-xs md:text-sm font-black uppercase tracking-[0.5em]">Institutional Metrics</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">3.94</div>
                <p className="text-brand-medium text-xs font-black uppercase tracking-widest mt-4">Unweighted GPA</p>
              </div>
              <div className="text-right">
                <div className="text-5xl md:text-7xl font-black text-amber-500 tracking-tighter">5.18</div>
                <p className="text-brand-medium text-xs font-black uppercase tracking-widest mt-4">Weighted Merit</p>
              </div>
            </div>
            
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]" 
              />
            </div>

            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic border-l-4 border-amber-500 pl-8 py-2">
              "Recognized with prestigious invitations to the National Society of Leadership and Success (NSLS), Phi Theta Kappa (PTK), and the SCLA."
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                <Award size={28} />
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">1300</div>
                <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mt-2">PSAT Composite</p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">&gt;99% Global Percentile</p>
              </div>
            </div>

            <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">#6</div>
                <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mt-2">Class Standing</p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">Gateway College Prep Top Tier</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Institutional Recognition</h3>
        <div className="h-1.5 w-32 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
      </motion.div>

      {/* Elite Summer Recruitment Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand-dark border border-white/10 p-10 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[4rem] shadow-3xl group transition-all duration-1000 hover:border-amber-500/40 hover:shadow-[0_40px_100px_-20px_rgba(245,158,11,0.2)]"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 blur-[200px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none opacity-30"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-block px-8 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-xl shadow-xl">
              <span className="text-amber-400 text-[11px] md:text-[12px] font-black uppercase tracking-[0.6em] flex items-center gap-4">
                <Star size={14} fill="currentColor" className="animate-pulse" />
                Summer Selection
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter drop-shadow-2xl">
              <span className="text-white">Elite</span> <br /> <span className="gradient-gold">Recruitment</span>
            </h3>
            <div className="space-y-8">
              <p className="text-brand-light text-lg md:text-2xl font-bold leading-relaxed tracking-tight">
                Actively contacted via official mail and priority email by <strong className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">Columbia University</strong>, <strong className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">The University of Texas at Austin</strong>, <strong className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">Brown University</strong>, and <strong className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">Baylor University</strong>, inviting me to join their exclusive summer cohorts.
              </p>
              <div className="bg-white/[0.03] p-8 md:p-10 rounded-[2rem] border-l-8 border-amber-500 italic backdrop-blur-sm shadow-inner">
                <p className="text-brand-medium text-base md:text-xl font-medium leading-relaxed">
                  "While these institutions reached out with direct invitations for me to choose their programs, I have maintained a strategic focus on independent research and advanced technical development."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6 md:gap-8">
            {/* Columbia Card */}
            <div className="flex flex-col items-center gap-4 group/card">
              <div className="w-full aspect-square bg-[#75AADB] rounded-[2.5rem] flex items-center justify-center text-5xl md:text-7xl shadow-2xl border border-white/10 group-hover/card:scale-[1.08] group-hover/card:-rotate-2 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                <span className="font-serif text-[#0033A0] font-bold select-none relative z-10 drop-shadow-2xl">C</span>
              </div>
              <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] opacity-50 group-hover/card:opacity-100 transition-opacity text-center">Columbia</p>
            </div>

            {/* UT Austin Card */}
            <div className="flex flex-col items-center gap-4 group/card">
              <div className="w-full aspect-square bg-[#BF5700] rounded-[2.5rem] flex items-center justify-center text-5xl md:text-7xl shadow-2xl border border-white/10 group-hover/card:scale-[1.08] group-hover/card:rotate-2 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                <span className="font-serif text-white font-bold select-none relative z-10 drop-shadow-2xl">UT</span>
              </div>
              <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] opacity-50 group-hover/card:opacity-100 transition-opacity text-center">UT Austin</p>
            </div>

            {/* Brown Card */}
            <div className="flex flex-col items-center gap-4 group/card">
              <div className="w-full aspect-square bg-[#4E3629] rounded-[2.5rem] flex items-center justify-center text-5xl md:text-7xl shadow-2xl border border-white/10 group-hover/card:scale-[1.08] group-hover/card:rotate-2 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                <span className="font-serif text-white font-bold select-none relative z-10 drop-shadow-2xl">B</span>
              </div>
              <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] opacity-50 group-hover/card:opacity-100 transition-opacity text-center">Brown</p>
            </div>

            {/* Baylor Card */}
            <div className="flex flex-col items-center gap-4 group/card">
              <div className="w-full aspect-square bg-[#154734] rounded-[2.5rem] flex items-center justify-center text-5xl md:text-7xl shadow-2xl border border-white/10 group-hover/card:scale-[1.08] group-hover/card:-rotate-2 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                <span className="font-serif text-[#FFB81C] font-bold select-none relative z-10 drop-shadow-2xl">B</span>
              </div>
              <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] opacity-50 group-hover/card:opacity-100 transition-opacity text-center">Baylor</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* National Recruitment Portfolio Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-brand-dark border border-white/10 p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-3xl group transition-all duration-700 hover:border-amber-500/30"
      >
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none opacity-50"></div>
        
        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-md">
                <span className="text-amber-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
                  <Award size={12} />
                  National Portfolio
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter">
                <span className="text-white">National</span> <br /> <span className="gradient-gold">Outreach</span>
              </h3>
              <p className="text-brand-light text-base md:text-xl font-bold leading-relaxed">
                Receiving a consistent stream of recruitment mail and personalized invitations from <strong className="text-amber-400">Vanderbilt University</strong>, <strong className="text-amber-400">Texas A&M</strong>, and over <strong className="text-amber-400">25+ top-tier universities</strong> nationwide.
              </p>
            </div>
            <div className="shrink-0">
              <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">25+</div>
              <p className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-widest mt-2">Total Invitations</p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Featured Special Cards - 2x3 Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {NATIONAL_OUTREACH.filter(item => item.featured).map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group/card relative"
                >
                  <div 
                    style={{ backgroundColor: item.color }}
                    className="w-full aspect-[4/3] rounded-3xl flex flex-col items-center justify-center p-6 shadow-xl border border-amber-500/60 shadow-[0_20px_50px_-10px_rgba(245,158,11,0.3)] ring-2 ring-amber-500/20 transition-all duration-500 relative overflow-hidden group-hover/card:scale-[1.02] group-hover/card:-translate-y-2 group-hover/card:border-amber-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent opacity-60 transition-opacity"></div>
                    
                    <div className="absolute top-4 right-4">
                      <Star size={16} fill="currentColor" className="text-amber-500 animate-pulse" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <span 
                        style={{ color: item.textColor }}
                        className="font-serif font-black select-none drop-shadow-2xl text-4xl md:text-5xl"
                      >
                        {item.initials}
                      </span>
                      <div className="space-y-1">
                        <p className="text-white text-[10px] font-black uppercase tracking-widest">{item.name}</p>
                        <p className="text-amber-500 text-[8px] font-bold uppercase tracking-widest">{item.specialty}</p>
                      </div>
                      <p className="text-white/70 text-[9px] font-medium leading-relaxed max-w-[200px] line-clamp-3">
                        {item.whySpecial}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Navy Card - Full Width */}
            {NATIONAL_OUTREACH.filter(item => item.isNavy).map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group/navy relative"
              >
                <div 
                  style={{ backgroundColor: item.color }}
                  className="w-full rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-blue-500/40 ring-4 ring-blue-500/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] hover:border-blue-400"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 opacity-40"></div>
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

                  <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <Anchor className="text-blue-400 animate-bounce" size={24} />
                      <p className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">Elite Military Recruitment</p>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                      {item.name}
                    </h3>
                    <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed italic">
                      "A prestigious invitation to the premier institution for naval leadership and strategic excellence."
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] font-black uppercase tracking-widest">
                        {item.type}
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/60 text-[10px] font-black uppercase tracking-widest">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl group-hover/navy:scale-110 transition-transform duration-700">
                    <span 
                      style={{ color: item.textColor }}
                      className="font-serif font-black select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] text-7xl md:text-9xl"
                    >
                      {item.initials}
                    </span>
                    <div className="absolute -bottom-2 px-4 py-1 bg-blue-500 rounded-full shadow-lg">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest">Strategic</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Other Invitations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {NATIONAL_OUTREACH.filter(item => !item.featured && !item.isNavy).map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center gap-3 group/card"
                >
                  <div 
                    style={{ backgroundColor: item.color }}
                    className={`w-full aspect-square rounded-3xl flex flex-col items-center justify-center p-6 shadow-xl border transition-all duration-500 relative overflow-hidden ${
                      item.isNavy
                        ? 'border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.3)] ring-2 ring-blue-500/20 group-hover/card:scale-[1.05] group-hover/card:-translate-y-2 group-hover/card:border-blue-400'
                        : 'border-white/10 group-hover/card:scale-[1.05] group-hover/card:-translate-y-2 group-hover/card:border-amber-500/40'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent ${item.isNavy ? 'opacity-60' : 'opacity-0 group-hover/card:opacity-100'} transition-opacity`}></div>
                    
                    {item.isNavy && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <Anchor size={120} className="text-white rotate-12" />
                      </div>
                    )}

                    <span 
                      style={{ color: item.textColor }}
                      className="font-serif font-black select-none relative z-10 drop-shadow-2xl text-3xl md:text-4xl lg:text-5xl"
                    >
                      {item.initials}
                    </span>

                    {item.isNavy && (
                      <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                        <p className="text-blue-400 text-[8px] font-black uppercase tracking-widest">Strategic Branch</p>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className={`text-[10px] font-black uppercase tracking-widest leading-tight group-hover/card:text-amber-400 transition-colors ${item.isNavy ? 'text-blue-400' : 'text-white'}`}>{item.name}</p>
                    {item.isNavy && <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest mt-1">{item.location}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Academics;
