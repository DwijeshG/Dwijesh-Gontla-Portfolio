
import React from 'react';
import { motion } from 'framer-motion';
import { COMPETITIONS, EXTRACURRICULARS, CLUBS } from '../constants';
import { Trophy, Award, Zap, Shield, Target, Medal, Star, Globe, Heart, Music, Activity, Users, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

const Competitions: React.FC = () => {
  return (
    <section className="space-y-32 md:space-y-48">
      {/* Extracurricular Spotlight */}
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <Reveal>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Extracurricular Spotlight</h3>
            </Reveal>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 160 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="h-1.5 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXTRACURRICULARS.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="royal-card group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 hover:border-amber-500/40 transition-all duration-500 bg-brand-dark/40 backdrop-blur-xl h-full scroll-mt-32"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl border border-white/10">
                  {item.icon}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="space-y-1">
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter italic group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-amber-500 text-[9px] font-black uppercase tracking-[0.2em]">
                    {item.role}
                  </p>
                </div>

                {item.metrics && (
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/5">
                    {item.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <p className="text-2xl font-black text-amber-500 tracking-tighter">{metric.value}</p>
                        <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-brand-medium text-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity flex-grow">
                  {item.desc}
                </p>

                <div className="flex gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[7px] font-black uppercase tracking-widest text-brand-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clubs Section */}
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <Reveal>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Clubs</h3>
            </Reveal>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 160 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="h-1.5 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLUBS.map((club, idx) => (
            <motion.div
              key={club.id}
              id={club.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="royal-card relative overflow-hidden rounded-[3rem] border border-white/5 group hover:border-amber-500/30 transition-all duration-700 scroll-mt-32"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-2/5 relative overflow-hidden h-64 sm:h-auto">
                  <img 
                    src={club.image} 
                    alt={club.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-50 group-hover:opacity-70"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-dark hidden sm:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent sm:hidden"></div>
                  <div className="absolute top-6 left-6 w-14 h-14 bg-amber-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl border border-white/10 shadow-2xl">
                    {club.icon}
                  </div>
                </div>
                <div className="sm:w-3/5 p-8 md:p-10 space-y-6 flex flex-col justify-center">
                  <div className="space-y-2">
                    <h4 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic group-hover:text-amber-400 transition-colors">
                      {club.title}
                    </h4>
                    <p className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">
                      {club.full}
                    </p>
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full self-start">
                    <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest">{club.role}</p>
                  </div>
                  <p className="text-brand-medium text-sm md:text-base leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                    "{club.desc}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-md"
            >
              <span className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
                <Trophy size={12} fill="currentColor" />
                UIL State Legacy & Competitive Record
              </span>
            </motion.div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic gradient-gold leading-[0.9]">
                Competitive <br /> <span className="text-white">Record</span>
              </h2>
            </Reveal>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="hidden md:block h-px flex-grow mx-12 bg-gradient-to-r from-amber-500/50 to-transparent opacity-20 origin-left"
          ></motion.div>
          <div className="flex gap-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-amber-500 text-3xl font-black tracking-tighter">1st</p>
              <p className="text-brand-medium text-[10px] font-black uppercase tracking-widest">District Peak</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-amber-500 text-3xl font-black tracking-tighter">3rd</p>
              <p className="text-brand-medium text-[10px] font-black uppercase tracking-widest">State Tier</p>
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <motion.p 
            whileHover={{ x: 5 }}
            className="text-brand-medium text-sm md:text-xl font-bold leading-relaxed italic border-l-2 border-amber-500 pl-6 py-2 transition-all max-w-4xl"
          >
            "As a 2-year member of the UIL Mathematics and CX Debate teams, I have focused on collaborative excellence. I contributed to back-to-back 2nd Place District finishes for the Mathematics Team (2025-2026) and secured 6th Place in District for CX Debate. My leadership as Captain of the UIL Website Team also led to a 1st Place District Championship and a 3rd Place finish at the State level."
          </motion.p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {COMPETITIONS.map((comp, idx) => (
          <motion.div 
            key={idx}
            id={comp.category.toLowerCase().replace(/\s+/g, '-')}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative royal-card p-5 sm:p-6 rounded-[1.5rem] hover:border-amber-500/30 transition-all duration-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-amber-500/10 transition-all duration-700"></div>
            
            <div className="relative z-10 flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-xl flex flex-col items-center justify-center border border-white/5 group-hover:border-amber-500/40 transition-all duration-700 shadow-2xl"
                >
                  <span className="text-[7px] md:text-[8px] font-mono font-black text-white/20 mb-1">{comp.year}</span>
                  {comp.category.includes('UIL') ? (
                    <Shield className={`w-4 h-4 md:w-5 md:h-5 ${comp.rank.includes('1st') || comp.rank.includes('State') || comp.rank.includes('Champion') ? 'text-amber-500' : 'text-white/30'}`} />
                  ) : (
                    <Zap className={`w-4 h-4 md:w-5 md:h-5 ${comp.rank.includes('State') || comp.rank.includes('Finalist') ? 'text-amber-500' : 'text-white/30'}`} />
                  )}
                </motion.div>
              </div>

              <div className="flex-grow min-w-0 space-y-2 md:space-y-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-white font-black text-base sm:text-lg tracking-tight group-hover:text-amber-400 transition-colors duration-500 break-words line-clamp-2">
                      {comp.category}
                    </h4>
                    {(comp.rank.includes('State') || comp.rank.includes('Champion')) && (
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded-full flex-shrink-0"
                      >
                        <Award size={8} className="text-amber-500 fill-amber-500" />
                      </motion.div>
                    )}
                  </div>
                  <p className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] italic opacity-80 break-words">
                    {comp.rank}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="h-px flex-grow bg-white/5 origin-left"
                  ></motion.div>
                  <Award className="w-3 h-3 text-white/10 group-hover:text-amber-500/50 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      {/* Versatility Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Target, title: "Technical Depth", text: "Beyond competitive rankings, my UIL participation in Computer Science and Website Development serves as a testing ground for real-world engineering challenges." },
          { icon: Medal, title: "Analytical Rigor", text: "Success in Mathematics competitions validates a high-level aptitude for complex problem-solving and quantitative analysis." },
          { icon: Shield, title: "Strategic Debate", text: "CX Debate participation has sharpened my ability to construct logical arguments, analyze systemic issues, and communicate complex ideas effectively." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="royal-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] space-y-5 md:space-y-6 border border-white/5 hover:border-amber-500/20 transition-all group"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors"
            >
              <item.icon size={20} />
            </motion.div>
            <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter italic group-hover:text-amber-400 transition-colors">{item.title}</h4>
            <p className="text-brand-medium text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competitions;
