
import React from 'react';
import { motion } from 'framer-motion';
import Competitions from '../components/Competitions';
import { Trophy } from 'lucide-react';

const CompetitionsPage: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-48">
      {/* Page Header */}
      <section className="relative pt-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-center justify-center text-amber-500 shadow-2xl shadow-amber-500/5 backdrop-blur-xl"
          >
            <Trophy size={40} />
          </motion.div>
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic gradient-gold"
            >
              Competitive <span className="text-white">Arena</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-medium text-lg md:text-2xl font-bold tracking-tight max-w-3xl mx-auto italic"
            >
              Showcasing a legacy of strategic leadership and technical dominance across UIL and national platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy - Moved to Start */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
                <span className="text-white">Leadership</span> <span className="gradient-gold">Philosophy</span>
              </h3>
          <p className="text-brand-medium text-lg md:text-xl font-medium leading-relaxed italic">
            "Competition is not just about the rank; it's about the discipline of preparation and the resilience required to perform under pressure. As a team captain and individual competitor, I strive to elevate not only my own standards but also the collective ambition of my peers."
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <p className="text-white text-2xl font-black tracking-tighter">Integrity</p>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Core Value</p>
          </div>
          <div className="space-y-2">
            <p className="text-white text-2xl font-black tracking-tighter">Resilience</p>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Core Value</p>
          </div>
          <div className="space-y-2">
            <p className="text-white text-2xl font-black tracking-tighter">Innovation</p>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Core Value</p>
          </div>
          <div className="space-y-2">
            <p className="text-white text-2xl font-black tracking-tighter">Excellence</p>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Core Value</p>
          </div>
        </div>
      </section>

      <Competitions />
    </div>
  );
};

export default CompetitionsPage;
