
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Star, GraduationCap, ChevronRight, Cpu, Trophy, Database, Globe, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-48">
      <div className="relative">
        <Hero />
      </div>

      {/* Life Quote Section */}
      <section className="relative px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-amber-500 rounded-full opacity-50"></div>
          </div>
          <blockquote className="relative">
            <span className="absolute -top-12 -left-4 text-9xl text-amber-500/10 font-serif pointer-events-none">"</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white italic">
              It is not about how you <span className="gradient-gold">start life</span>, but how you <span className="gradient-gold">end it</span> and if you left cumulative impact on your <span className="gradient-gold">society and community</span>.
            </h2>
            <span className="absolute -bottom-20 -right-4 text-9xl text-amber-500/10 font-serif pointer-events-none rotate-180">"</span>
          </blockquote>
          <div className="flex justify-center pt-8">
            <div className="px-6 py-2 border border-amber-500/20 rounded-full bg-amber-500/5 backdrop-blur-sm">
              <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Personal Philosophy</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Achievements Section */}
      <section className="relative px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Featured Achievements</h2>
              <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
            </div>
            <Link to="/academics" className="group flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest text-[10px] md:text-[12px] hover:text-white transition-colors">
              View All Academic Honors
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Summer Recruitment Card */}
            <Link to="/future" className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="royal-card relative overflow-hidden p-10 md:p-12 rounded-[2.5rem] border border-white/5 group-hover:border-amber-500/30 transition-all duration-700 h-full"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200&h=800" 
                    alt="Recruitment" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-500">
                  <ChevronRight size={20} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shadow-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-500 backdrop-blur-xl">
                    <MessageSquare size={32} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Professional Outreach</p>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">Recruitment <br /> <span className="gradient-gold">& Outreach</span></h3>
                    <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                      Actively recruited by <strong className="text-white">AmeriCorps</strong>, <strong className="text-white">Texas Financial Advisors</strong>, and <strong className="text-white">Amazon</strong>. Explore the professional inquiries received as a dual-credit student.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* ACC Card */}
            <Link to="/academics" className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="royal-card relative overflow-hidden p-10 md:p-12 rounded-[2.5rem] border border-white/5 group-hover:border-amber-500/30 transition-all duration-700 h-full"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1523050335392-9ae86774929f?auto=format&fit=crop&q=80&w=1200&h=800" 
                    alt="ACC Associate Degree" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-500">
                  <ChevronRight size={20} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shadow-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-500 backdrop-blur-xl">
                    <GraduationCap size={32} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Collegiate Progress</p>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">ACC <br /> <span className="gradient-gold">Associate Degree</span></h3>
                    <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                      Maintaining a <strong className="text-white">4.0 GPA</strong> at Austin Community College while completing high school, pursuing a dual-track academic path.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Cisco Certification Card */}
            <Link to="/skills" className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="royal-card relative overflow-hidden p-10 md:p-12 rounded-[2.5rem] border border-white/5 group-hover:border-amber-500/30 transition-all duration-700 h-full"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1200&h=800" 
                    alt="Cisco Certifications" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-500">
                  <ChevronRight size={20} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shadow-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-500 backdrop-blur-xl">
                    <Cpu size={32} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Technical Validation</p>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">Cisco <br /> <span className="gradient-gold">Certifications</span></h3>
                    <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                      Official certifications in <strong className="text-white">Python</strong> and <strong className="text-white">C++</strong>, validating core engineering and systems foundations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* UIL State Card */}
            <Link to="/competitions" className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="royal-card relative overflow-hidden p-10 md:p-12 rounded-[2.5rem] border border-white/5 group-hover:border-amber-500/30 transition-all duration-700 h-full"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200&h=800" 
                    alt="UIL State Finalist" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-500">
                  <ChevronRight size={20} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shadow-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors duration-500 backdrop-blur-xl">
                    <Trophy size={32} />
                  </div>
                  <div className="space-y-4">
                    <p className="text-amber-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Competitive Excellence</p>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">UIL State <br /> <span className="gradient-gold">Finalist</span></h3>
                    <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                      Commanding the <strong className="text-white">UIL Website Team</strong> to a District Championship and a prestigious <strong className="text-white">3rd Place</strong> State finish.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
