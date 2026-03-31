
import React from 'react';
import { motion } from 'framer-motion';
import Academics from '../components/Academics';
import { GraduationCap, Briefcase, Clock, User, XCircle, CheckCircle2 } from 'lucide-react';
import { RECRUITMENT_OUTREACH, OTHER_RESPONSES } from '../constants';

const AcademicsPage: React.FC = () => {
  return (
    <div className="relative space-y-32 md:space-y-48 pb-32">
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
            <GraduationCap size={40} />
          </motion.div>
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic gradient-gold"
            >
              Academic <span className="text-white">Excellence</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-medium text-lg md:text-2xl font-bold tracking-tight max-w-3xl mx-auto italic"
            >
              A synthesis of rigorous scholarship, elite university recruitment, and a 4.0 collegiate GPA.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <Academics />
      </div>
    </div>
  );
};

export default AcademicsPage;
