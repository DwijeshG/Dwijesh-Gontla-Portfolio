
import React from 'react';
import { motion } from 'framer-motion';
import Competitions from '../components/Competitions';
import ExploreMore from '../components/ExploreMore';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { Trophy } from 'lucide-react';

const CompetitionsPage: React.FC = () => {
  return (
    <div className="pb-32">
      <PageHeader 
        icon={Trophy}
        title="Extracurricular"
        highlight="Arena"
        subtitle="Showcasing a legacy of strategic leadership, community impact, and technical dominance across diverse platforms."
      />

      {/* Leadership Philosophy - Moved to Start */}
      <Section className="max-w-6xl mx-auto px-6 text-center space-y-12">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent origin-center"
        ></motion.div>
        <div className="space-y-6">
          <Reveal width="100%" delay={0.2}>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
              <span className="text-white">Leadership</span> <span className="gradient-gold">Philosophy</span>
            </h3>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-brand-medium text-lg md:text-xl font-medium leading-relaxed italic transition-transform"
            >
              "Competition is not just about the rank; it's about the discipline of preparation and the resilience required to perform under pressure. As a team captain and individual competitor, I strive to elevate not only my own standards but also the collective ambition of my peers."
            </motion.p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Integrity', 'Resilience', 'Innovation', 'Excellence'].map((value, idx) => (
            <motion.div 
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all group"
            >
              <p className="text-white text-2xl font-black tracking-tighter group-hover:text-amber-400 transition-colors">{value}</p>
              <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Core Value</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="max-w-full mx-auto px-6">
        <Competitions />
      </Section>

      <ExploreMore />
    </div>
  );
};

export default CompetitionsPage;
