
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Cpu, Trophy, GraduationCap, Globe, MessageSquare, Shield, Code, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACHIEVEMENTS = [
  {
    to: "/future",
    label: "Professional Outreach",
    title: "Recruitment",
    subtitle: "& Outreach",
    desc: "Actively recruited by AmeriCorps, Texas Financial Advisors, and Amazon. Explore the professional inquiries received.",
    icon: <MessageSquare size={32} />,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    to: "/academics",
    label: "Collegiate Progress",
    title: "ACC",
    subtitle: "Associate Degree",
    desc: "Maintaining a 4.0 GPA at Austin Community College while completing high school, pursuing a dual-track academic path.",
    icon: <GraduationCap size={32} />,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    to: "/skills",
    label: "Technical Validation",
    title: "Official Certifications",
    subtitle: "& Credly Badges",
    desc: "Official certifications in Python and C++, validated by Cisco and Credly, confirming core engineering and systems foundations.",
    icon: <Cpu size={32} />,
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    to: "/skills",
    label: "Competitive Excellence",
    title: "UIL State",
    subtitle: "Finalist",
    desc: "Commanding the UIL Website Team to a District Championship and a prestigious 3rd Place State finish.",
    icon: <Trophy size={32} />,
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    to: "/",
    label: "Global Impact",
    title: "Code 4 Change",
    subtitle: "Leadership",
    desc: "Leading international initiatives to provide technical education and bridge the digital divide for students.",
    icon: <Code size={32} />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200&h=800"
  }
];

const ExploreMore: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ACHIEVEMENTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative px-6 pb-24 overflow-hidden">
      <div className="max-w-full mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Explore More</h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1">
              <button 
                onClick={prevSlide}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-amber-500"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-amber-500"
                aria-label={isPaused ? "Play Slideshow" : "Pause Slideshow"}
              >
                {isPaused ? <Play size={20} /> : <Pause size={20} />}
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-amber-500"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <Link to="/academics" className="group flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest text-[10px] md:text-[12px] hover:text-white transition-colors">
              View All
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center h-[400px] sm:h-[450px] md:h-[550px] relative">
            <AnimatePresence mode="wait">
              {ACHIEVEMENTS.map((achievement, idx) => {
                const isCurrent = idx === currentIndex;
                const isPrev = idx === (currentIndex - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length;
                const isNext = idx === (currentIndex + 1) % ACHIEVEMENTS.length;

                if (!isCurrent && !isPrev && !isNext) return null;

                return (
                   <motion.div
                    key={idx}
                    className="absolute w-full max-w-[320px] sm:max-w-[400px] md:max-w-[800px]"
                    initial={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      x: isNext ? 200 : -200,
                      zIndex: 0 
                    }}
                    animate={{ 
                      opacity: isCurrent ? 1 : 0.4, 
                      scale: isCurrent ? 1.05 : 0.85, 
                      x: isCurrent ? 0 : (isNext ? (window.innerWidth < 768 ? 150 : 400) : (window.innerWidth < 768 ? -150 : -400)),
                      zIndex: isCurrent ? 20 : 10,
                      filter: isCurrent ? 'blur(0px)' : 'blur(4px)'
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      x: isPrev ? -200 : 200 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    <Link to={achievement.to} className="block h-full group">
                      <div className={`relative overflow-hidden p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all duration-700 h-[320px] sm:h-[350px] md:h-[450px] flex flex-col justify-end bg-brand-dark ${
                        isCurrent ? 'border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.2)]' : 'border-white/5 opacity-40'
                      }`}>
                        <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isCurrent ? 'opacity-60' : 'opacity-30'}`}>
                          <img 
                            src={achievement.image} 
                            alt={achievement.title} 
                            className="w-full h-full object-cover brightness-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                        </div>
                        
                        <div className="relative z-10 space-y-4 md:space-y-6">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-500 shadow-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-500 backdrop-blur-xl">
                            {React.cloneElement(achievement.icon as React.ReactElement, { size: window.innerWidth < 768 ? 24 : 32 })}
                          </div>
                          <div className="space-y-2 md:space-y-3">
                            <p className="text-amber-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">{achievement.label}</p>
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight">
                              {achievement.title} <br /> 
                              <span className="gradient-gold">{achievement.subtitle}</span>
                            </h3>
                            <p className="text-slate-400 text-xs md:text-base font-medium leading-relaxed line-clamp-2">
                              {achievement.desc}
                            </p>
                          </div>
                          {isCurrent && (
                            <div className="pt-2 md:pt-4 flex items-center gap-2 text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                              Explore Details <ChevronRight size={14} />
                            </div>
                          )}
                        </div>

                        {/* Progress Bar */}
                        {isCurrent && !isPaused && (
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                            <motion.div 
                              key={currentIndex}
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 7, ease: "linear" }}
                              className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {ACHIEVEMENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex ? 'w-12 bg-amber-500' : 'w-3 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
