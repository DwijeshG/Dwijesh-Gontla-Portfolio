
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  highlight?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon: Icon, title, subtitle, highlight }) => {
  return (
    <section className="relative pt-12 mb-24 md:mb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      <div className="flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-center justify-center text-amber-500 shadow-2xl shadow-amber-500/5 backdrop-blur-xl"
        >
          <Icon size={40} />
        </motion.div>
        <div className="space-y-4">
          <Reveal width="100%" delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic gradient-gold">
              {title} {highlight && <span className="text-white">{highlight}</span>}
            </h1>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-brand-medium text-lg md:text-2xl font-bold tracking-tight max-w-3xl mx-auto italic">
              {subtitle}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
