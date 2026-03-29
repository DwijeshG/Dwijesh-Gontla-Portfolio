
import React from 'react';
import { motion } from 'framer-motion';
import { COMPETITIONS } from '../constants';
import { Trophy, Award, Zap, Shield, Target, Medal } from 'lucide-react';

const Competitions: React.FC = () => {
  return (
    <section className="space-y-20">
      {/* UIL Record Spotlight - Moved to Start */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-brand-dark to-black border border-white/10 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full -mr-64 -mt-64"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                <Trophy size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
                <span className="gradient-gold">UIL State</span> <span className="text-white">Legacy</span>
              </h3>
            </div>
            <p className="text-brand-medium text-lg md:text-xl font-bold leading-relaxed italic">
              "Commanding the UIL Website Team as Captain, I led Gateway College Prep to a District Championship and a prestigious 3rd Place finish at the State level, demonstrating elite technical execution and leadership."
            </p>
            <div className="flex gap-8">
              <div className="space-y-1">
                <p className="text-white text-4xl font-black tracking-tighter">#1</p>
                <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">District Rank</p>
              </div>
              <div className="space-y-1">
                <p className="text-white text-4xl font-black tracking-tighter">#3</p>
                <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">State Rank</p>
              </div>
            </div>
          </div>
          <div className="relative group/img">
            <div className="aspect-video bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center group-hover:border-amber-500/20 transition-all duration-700 overflow-hidden relative bg-black/40">
              <img 
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="UIL Competition" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="text-center space-y-4 relative z-10">
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/20 backdrop-blur-md border border-amber-500/20">
                  <Trophy size={40} className="text-amber-500 fill-amber-500" />
                </div>
                <p className="text-white font-black text-2xl tracking-tighter">State Finalist</p>
                <p className="text-brand-medium text-sm font-bold uppercase tracking-widest">University Interscholastic League</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-6">
          <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-md">
            <span className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
              <Target size={12} fill="currentColor" />
              Competitive Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic gradient-gold leading-[0.9]">
            UIL & National <br /> <span className="text-white">Record</span>
          </h2>
        </div>
        <div className="hidden md:block h-px flex-grow mx-12 bg-gradient-to-r from-amber-500/50 to-transparent opacity-20"></div>
        <div className="flex gap-12">
          <div>
            <p className="text-amber-500 text-3xl font-black tracking-tighter">1st</p>
            <p className="text-brand-medium text-[10px] font-black uppercase tracking-widest">District Peak</p>
          </div>
          <div>
            <p className="text-amber-500 text-3xl font-black tracking-tighter">3rd</p>
            <p className="text-brand-medium text-[10px] font-black uppercase tracking-widest">State Tier</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {COMPETITIONS.map((comp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.6 }}
            className="group relative royal-card p-8 rounded-[2.5rem] hover:border-amber-500/30 transition-all duration-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-all duration-700"></div>
            
            <div className="relative z-10 flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black rounded-2xl flex flex-col items-center justify-center border border-white/5 group-hover:border-amber-500/40 transition-all duration-700 shadow-2xl group-hover:scale-110">
                  <span className="text-[9px] font-mono font-black text-white/20 mb-1">{comp.year}</span>
                  {comp.category.includes('UIL') ? (
                    <Shield className={`w-6 h-6 ${comp.rank.includes('1st') || comp.rank.includes('State') || comp.rank.includes('Champion') ? 'text-amber-500' : 'text-white/30'}`} />
                  ) : (
                    <Zap className={`w-6 h-6 ${comp.rank.includes('State') || comp.rank.includes('Finalist') ? 'text-amber-500' : 'text-white/30'}`} />
                  )}
                </div>
              </div>

              <div className="flex-grow space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-white font-black text-xl md:text-2xl tracking-tight group-hover:text-amber-400 transition-colors duration-500">
                      {comp.category}
                    </h4>
                    {(comp.rank.includes('State') || comp.rank.includes('Champion')) && (
                      <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                        <Award size={10} className="text-amber-500 fill-amber-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                  <p className="text-amber-500 text-[11px] font-black uppercase tracking-[0.2em] italic opacity-80">
                    {comp.rank}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="h-px flex-grow bg-white/5"></div>
                  <Award className="w-4 h-4 text-white/10 group-hover:text-amber-500/50 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Versatility Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="royal-card p-10 rounded-[2.5rem] space-y-6 border border-white/5 hover:border-amber-500/20 transition-all"
        >
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
            <Target size={24} />
          </div>
          <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Technical Depth</h4>
          <p className="text-brand-medium text-sm leading-relaxed">
            Beyond competitive rankings, my UIL participation in Computer Science and Website Development serves as a testing ground for real-world engineering challenges.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="royal-card p-10 rounded-[2.5rem] space-y-6 border border-white/5 hover:border-amber-500/20 transition-all"
        >
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
            <Medal size={24} />
          </div>
          <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Analytical Rigor</h4>
          <p className="text-brand-medium text-sm leading-relaxed">
            Success in Mathematics and Number Sense competitions validates a high-level aptitude for complex problem-solving and quantitative analysis.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="royal-card p-10 rounded-[2.5rem] space-y-6 border border-white/5 hover:border-amber-500/20 transition-all"
        >
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
            <Shield size={24} />
          </div>
          <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Strategic Debate</h4>
          <p className="text-brand-medium text-sm leading-relaxed">
            CX Debate participation has sharpened my ability to construct logical arguments, analyze systemic issues, and communicate complex ideas effectively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;
