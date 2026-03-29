
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Circle, Rocket, Flag, Target, BookOpen, ShieldCheck, Cpu, GraduationCap, Briefcase, Clock, User, XCircle } from 'lucide-react';
import { RECRUITMENT_OUTREACH, OTHER_RESPONSES, NATIONAL_OUTREACH } from '../constants';

const ROADMAP_DATA = [
  {
    stage: "Stage 1",
    title: "Foundation Building",
    period: "9th Grade, 2024-2025",
    icon: <BookOpen className="w-6 h-6" />,
    items: [
      { category: "Academic Foundation", points: ["Establish strong GPA with core courses (English, Math, Science, History)", "Complete AP Human Geography with high marks", "Begin exploring computer science through introductory programming courses", "Develop study habits and time management skills for high school rigor"] },
      { category: "Initial Technical Skills", points: ["Learn programming fundamentals (HTML/CSS, basic Python or C++)", "Set up personal cybersecurity practices (password managers, basic VPN usage)", "Explore cybersecurity concepts through online resources and YouTube content", "Create first GitHub account and begin understanding version control"] },
      { category: "Exploration Phase", points: ["Research different areas of computer science and cybersecurity", "Join or explore technology clubs at school", "Begin following cybersecurity news and communities online"] }
    ]
  },
  {
    stage: "Stage 2",
    title: "Skill Development",
    period: "10th Grade - Current, 2025-2026",
    icon: <Cpu className="w-6 h-6" />,
    current: true,
    items: [
      { category: "Academic Progress", points: ["Complete chemistry, C++ programming, and literature courses", "Continue dual credit enrollment", "Finish C++ Essentials and Python entry-level certifications"] },
      { category: "Technical Growth", points: ["Build Chrome extensions and practical security tools", "Configure advanced security architecture (DNS, VPN, firewalls, authenticators)", "Develop GitHub portfolio with documented projects", "Master Enpass, Proton suite, and Cloudflare tools"] },
      { category: "Initiative & Leadership", points: ["Plan and launch AI club at school with peers", "Begin first JEI research paper on cybersecurity topics", "Experiment with security tools and configurations across multiple devices"] }
    ]
  },
  {
    stage: "Stage 3",
    title: "Advanced Preparation",
    period: "11th Grade, 2026-2027",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { category: "Academic Advancement", points: ["Take AP Computer Science A and additional AP courses (AP Calculus, AP Statistics recommended)", "Continue dual credit courses to accumulate college credits", "Begin SAT/ACT preparation targeting scores for UT Austin and Texas A&M (1400+ SAT, 30+ ACT)"] },
      { category: "Cybersecurity Advancement", points: ["Earn CompTIA Security+ certification (foundational industry credential)", "Complete second and third JEI research papers with increasing complexity", "Learn Linux fundamentals and command-line operations"] },
      { category: "Professional Exposure", points: ["Seek cybersecurity summer programs or workshops at local universities", "Explore virtual internships or cybersecurity competitions", "Network through local cybersecurity meetups (BSides Austin, ISSA chapter events)", "Grow AI club with structured projects and potential competition participation"] }
    ]
  },
  {
    stage: "Stage 4",
    title: "Specialization & College Applications",
    period: "12th Grade, 2027-2028",
    icon: <GraduationCap className="w-6 h-6" />,
    items: [
      { category: "College Strategy", points: ["Visit and research UT Austin's cybersecurity program, Texas A&M, and other top Texas schools", "Craft compelling college essays showcasing technical projects and security architecture", "Submit applications fall 2027 with strong portfolio of projects and certifications", "Apply for cybersecurity scholarships (CyberCorps, SMART, private scholarships)"] },
      { category: "Technical Mastery", points: ["Pursue CompTIA CySA+ or CEH (Certified Ethical Hacker) certification", "Deep dive into penetration testing through TryHackMe, HackTheBox platforms", "Study red team/blue team methodologies and network protocols (TCP/IP, encryption)", "Contribute to open-source security projects on GitHub"] },
      { category: "Portfolio & Leadership", points: ["Create 2-3 comprehensive cybersecurity projects (penetration testing tool, security automation, threat analysis system)", "Document personal security setup as detailed case study", "Mentor younger students in AI club or programming courses"] }
    ]
  },
  {
    stage: "Stage 5",
    title: "College Transition & Career Foundation",
    period: "Summer 2028 - Freshman Year",
    icon: <Rocket className="w-6 h-6" />,
    items: [
      { category: "Pre-College Preparation", points: ["Complete any remaining certifications before college starts", "Attend cybersecurity summer camps or bootcamps if available", "Research professors and labs at your chosen university", "Connect with admitted students in cybersecurity programs"] },
      { category: "Freshman Year Excellence", points: ["Join university cybersecurity clubs", "Seek undergraduate research positions in security labs early", "Apply for summer 2029 internships at companies like Raytheon, Lockheed Martin, or tech firms (applications open fall 2028)", "Maintain strong GPA for competitive internship and scholarship opportunities"] },
      { category: "Career Positioning", points: ["Build professional network through professors, industry events, and LinkedIn", "Consider specialized focus areas (malware analysis, cloud security, AI security)", "Plan certification path for college years (working toward OSCP, CISSP prerequisites)", "Explore government security clearance opportunities for defense sector roles"] }
    ]
  }
];

const FuturePage: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-48 pb-32">
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
            <Rocket size={40} />
          </motion.div>
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic gradient-gold"
            >
              Future <span className="text-white">& Vision</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-medium text-lg md:text-2xl font-bold tracking-tight max-w-3xl mx-auto italic"
            >
              A strategic blueprint for academic excellence, professional growth, and cybersecurity specialization.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-24 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none opacity-30 -mr-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=800" 
            alt="Future Tech" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Professional Outreach</h2>
          <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          <p className="text-brand-medium text-lg font-bold italic">A record of professional outreach from industry leaders and government agencies.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {RECRUITMENT_OUTREACH.map((thread, threadIdx) => (
            <motion.div 
              key={thread.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: threadIdx * 0.1, duration: 0.8 }}
              className="royal-card p-8 md:p-12 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl space-y-10 group hover:border-amber-500/30 transition-all duration-700"
            >
              {/* Thread Header */}
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Briefcase size={40} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-white tracking-tight">{thread.sender}</h3>
                  <p className="text-amber-500 text-sm font-black uppercase tracking-widest">{thread.role}</p>
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-wider pt-2">
                    <Clock size={12} />
                    Started {thread.date}
                  </div>
                </div>
              </div>

              {/* Quotes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                {thread.messages.map((msg, msgIdx) => (
                  <div 
                    key={msgIdx}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest">
                        {msg.time}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed italic font-medium">
                      "{msg.content}"
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Responses */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic gradient-gold">Other Professional <span className="text-white">Inquiries</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_RESPONSES.map((resp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
                    <User size={24} />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <CheckCircle2 size={12} className="text-amber-500/60" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{resp.category}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">{resp.sender}</h4>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider leading-relaxed">{resp.role}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] text-amber-500/60 font-black uppercase tracking-widest mb-1">Strategic Context</p>
                    <p className="text-xs text-brand-medium leading-relaxed italic">"{resp.reason}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-[3rem] bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/20 backdrop-blur-xl space-y-8">
            <CheckCircle2 size={48} className="text-amber-500 mx-auto" />
            <h3 className="text-3xl font-black text-white tracking-tight italic">Future Professional <span className="gradient-gold">Engagements</span></h3>
            <p className="text-brand-medium text-lg font-medium leading-relaxed italic">
              "I am currently focused on my Dual Credit studies and academic excellence. While I am not currently seeking full-time employment, I value these professional connections and look forward to future collaborations once I have completed my current academic milestones."
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="max-w-6xl mx-auto px-6 relative space-y-16">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none rounded-[4rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200&h=800" 
            alt="Research Lab" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
        </div>
        <div className="space-y-4 relative z-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Strategic Roadmap</h2>
          <div className="h-1 w-16 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {ROADMAP_DATA.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 z-20 hidden md:block">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl border-2 transition-all duration-500 ${stage.current ? 'bg-gradient-gold shimmer-overlay text-black border-transparent scale-110' : 'bg-brand-dark text-amber-500 border-white/10'}`}>
                    {React.cloneElement(stage.icon as React.ReactElement, { size: 20 })}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] royal-card p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-amber-500/30 transition-all duration-700 relative group overflow-hidden ${stage.current ? 'ring-2 ring-amber-500/20' : ''}`}>
                  {stage.current && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                      <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></div>
                      <span className="text-amber-500 text-[7px] font-black uppercase tracking-widest">Current</span>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-amber-500 text-[8px] font-black uppercase tracking-[0.4em]">{stage.stage}</p>
                      <h3 className="text-2xl font-black text-white tracking-tighter leading-none">{stage.title}</h3>
                      <p className="text-brand-medium text-xs font-bold italic">{stage.period}</p>
                    </div>

                    <div className="space-y-6">
                      {stage.items.map((item, i) => (
                        <div key={i} className="space-y-2">
                          <h4 className="text-amber-500/80 text-[9px] font-black uppercase tracking-widest border-b border-white/5 pb-1">{item.category}</h4>
                          <ul className="space-y-1.5">
                            {item.points.map((point, p) => (
                              <li key={p} className="flex items-start gap-2 text-brand-medium text-xs leading-relaxed group/item">
                                <div className="mt-1 shrink-0">
                                  <Circle size={4} className="text-amber-500/40 group-hover/item:text-amber-500 transition-colors" fill="currentColor" />
                                </div>
                                <span className="group-hover/item:text-brand-light transition-colors">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <p className="text-brand-medium text-lg font-medium italic">
          "The future is not something we enter, but something we create through strategic action and relentless excellence."
        </p>
      </section>
    </div>
  );
};

export default FuturePage;
