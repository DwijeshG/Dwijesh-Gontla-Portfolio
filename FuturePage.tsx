
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Target, Shield, Cpu, ArrowRight, GraduationCap, Globe, MessageSquare, Building2, Mail, Calendar, ExternalLink, ChevronRight, MapPin, Award, Sparkles, Anchor } from 'lucide-react';
import Reveal from '../components/Reveal';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { RECRUITMENT_OUTREACH, OTHER_RESPONSES, NATIONAL_OUTREACH } from '../constants';

const UniversityCard: React.FC<{ uni: any, idx: number }> = ({ uni, idx }) => {
  const isNavy = uni.isNavy;
  const isFeatured = uni.featured;
  const isNormal = !isNavy && !isFeatured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      className={`group relative transition-all duration-500 overflow-hidden flex flex-col ${
        isNavy 
          ? 'p-6 sm:p-8 rounded-[2.5rem] border bg-[#000040]/40 border-blue-900/50 hover:border-blue-400/50' 
          : isFeatured 
            ? 'p-6 sm:p-8 rounded-[2.5rem] border bg-amber-500/5 border-amber-500/20 hover:border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.05)]' 
            : 'aspect-square rounded-2xl sm:rounded-3xl border border-white/5 hover:border-amber-500/30'
      }`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 p-4">
          <Sparkles size={16} className="text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      
      {isNavy && (
        <div className="absolute top-0 right-0 p-6">
          <Anchor size={24} className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {isNormal ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl font-black transition-all duration-700 group-hover:scale-125 group-hover:rotate-6 group-hover:blur-md opacity-90 group-hover:opacity-20"
            style={{ backgroundColor: uni.color, color: uni.textColor }}
          >
            {uni.initials}
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-brand-dark/40 backdrop-blur-[2px]">
            <h3 className="text-white text-[10px] sm:text-xs font-black text-center uppercase tracking-tighter italic leading-tight drop-shadow-lg">
              {uni.name}
            </h3>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex-grow flex flex-col space-y-6">
          <div className={`flex ${isFeatured ? 'flex-col lg:flex-row lg:items-center' : 'flex-col items-start'} gap-4 sm:gap-6`}>
            <div 
              className={`rounded-2xl flex items-center justify-center font-black shadow-2xl border border-white/10 shrink-0 transition-transform duration-500 group-hover:scale-110 ${
                isNavy ? 'w-16 h-16 sm:w-20 sm:h-20 text-2xl shadow-blue-900/40' : 
                'w-16 h-16 sm:w-20 sm:h-20 text-2xl'
              }`}
              style={{ backgroundColor: uni.color, color: uni.textColor }}
            >
              {uni.initials}
            </div>
            <div className="space-y-1">
              <h3 className={`font-black text-white leading-tight group-hover:text-amber-400 transition-colors text-2xl sm:text-3xl`}>
                {uni.name}
              </h3>
              <div className="flex items-center gap-2 text-brand-medium text-[10px] font-black uppercase tracking-widest">
                <MapPin size={12} className="text-amber-500" />
                {uni.location}
              </div>
            </div>
          </div>
          
          <div className={`space-y-4 flex-grow flex flex-col justify-between ${isFeatured && !isNavy ? 'lg:grid lg:grid-cols-1 lg:gap-6' : ''}`}>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                  isNavy ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-white/5 border-white/5 text-amber-500/60'
                }`}>
                  {uni.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                  isNavy ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-white/5 border-white/5 text-amber-500/60'
                }`}>
                  {uni.specialty}
                </span>
              </div>
              {uni.whySpecial && (
                <p className={`text-brand-medium font-bold leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity ${isFeatured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
                  {uni.whySpecial}
                </p>
              )}
            </div>
            
            {isNavy && (
              <div className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl space-y-3 mt-4">
                <h4 className="text-blue-400 font-black uppercase tracking-widest text-[10px]">Strategic Leadership Program</h4>
                <p className="text-white/60 text-xs leading-relaxed font-medium">
                  The Naval Academy provides a unique four-year program that combines academic excellence with character development and leadership training.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const FuturePage: React.FC = () => {
  const [activeOutreach, setActiveOutreach] = useState<string | null>(null);

  const featuredColleges = NATIONAL_OUTREACH.filter(u => u.featured);
  const militaryCollege = NATIONAL_OUTREACH.find(u => u.isNavy);
  const otherColleges = NATIONAL_OUTREACH.filter(u => !u.featured && !u.isNavy);

  const roadmap = [
    {
      stage: "Stage 1",
      year: "2024-2025",
      title: "Foundation Building (9th Grade)",
      icon: <GraduationCap size={24} />,
      color: "from-amber-500 to-orange-600",
      sections: [
        {
          subtitle: "Academic Foundation",
          items: [
            "Establish strong GPA with core courses (English, Math, Science, History)",
            "Begin exploring computer science through introductory programming courses",
            "Develop study habits and time management skills for high school rigor"
          ]
        },
        {
          subtitle: "Initial Technical Skills",
          items: [
            "Learn programming fundamentals (HTML, CSS, basic Python or C++)",
            "Set up personal cybersecurity practices (password managers, basic VPN usage)",
            "Explore cybersecurity concepts through online resources and YouTube content",
            "Create first GitHub account and begin understanding version control"
          ]
        },
        {
          subtitle: "Exploration Phase",
          items: [
            "Research different areas of computer science and cybersecurity",
            "Join or explore technology clubs at school",
            "Begin following cybersecurity news and communities online"
          ]
        }
      ]
    },
    {
      stage: "Stage 2",
      year: "2025-2026",
      title: "Skill Development (10th Grade - Current)",
      icon: <Cpu size={24} />,
      color: "from-blue-500 to-indigo-600",
      sections: [
        {
          subtitle: "Academic Progress",
          items: [
            "Complete AP Human Geography, chemistry, C++ programming, and literature courses",
            "Continue dual credit enrollment",
            "Finish C++ Essentials and Python entry-level certifications"
          ]
        },
        {
          subtitle: "Technical Growth",
          items: [
            "Build Chrome extensions and practical security tools",
            "Configure advanced security architecture (DNS, VPN, firewalls, authenticators)",
            "Develop GitHub portfolio with documented projects",
            "Master Enpass, Proton suite, and Cloudflare tools"
          ]
        },
        {
          subtitle: "Initiative & Leadership",
          items: [
            "Plan and launch AI club at school with peers",
            "Begin first JEI research paper on cybersecurity topics",
            "Experiment with security tools and configurations across multiple devices"
          ]
        }
      ]
    },
    {
      stage: "Stage 3",
      year: "2026-2027",
      title: "Advanced Preparation (11th Grade)",
      icon: <Shield size={24} />,
      color: "from-emerald-500 to-teal-600",
      sections: [
        {
          subtitle: "Academic Advancement",
          items: [
            "Take AP Computer Science A and additional AP courses (AP Calculus, AP Statistics recommended)",
            "Continue dual credit courses to accumulate college credits",
            "Begin SAT/ACT preparation targeting scores for UT Austin and Texas A&M (1400+ SAT, 30+ ACT)"
          ]
        },
        {
          subtitle: "Cybersecurity Advancement",
          items: [
            "Earn CompTIA Security+ certification (foundational industry credential)",
            "Participate in Capture The Flag (CTF) competitions through platforms like picoCTF",
            "Complete second and third JEI research papers with increasing complexity",
            "Learn Linux fundamentals and command-line operations"
          ]
        },
        {
          subtitle: "Professional Exposure",
          items: [
            "Seek cybersecurity summer programs or workshops at local universities",
            "Explore virtual internships or cybersecurity competitions",
            "Network through local cybersecurity meetups (BSides Austin, ISSA chapter events)",
            "Grow AI club with structured projects and potential competition participation"
          ]
        }
      ]
    },
    {
      stage: "Stage 4",
      year: "2027-2028",
      title: "Specialization & College Applications (12th Grade)",
      icon: <Target size={24} />,
      color: "from-purple-500 to-pink-600",
      sections: [
        {
          subtitle: "College Strategy",
          items: [
            "Visit and research UT Austin's cybersecurity program, Texas A&M, and other top Texas schools",
            "Craft compelling college essays showcasing technical projects and security architecture",
            "Submit applications fall 2027 with strong portfolio of projects and certifications",
            "Apply for cybersecurity scholarships (CyberCorps, SMART, private scholarships)"
          ]
        },
        {
          subtitle: "Technical Mastery",
          items: [
            "Pursue CompTIA CySA+ or CEH (Certified Ethical Hacker) certification",
            "Deep dive into penetration testing through TryHackMe, HackTheBox platforms",
            "Study red team/blue team methodologies and network protocols (TCP/IP, encryption)",
            "Contribute to open-source security projects on GitHub"
          ]
        },
        {
          subtitle: "Portfolio & Leadership",
          items: [
            "Create 2-3 comprehensive cybersecurity projects (penetration testing tool, security automation, threat analysis system)",
            "Document personal security setup as detailed case study",
            "Mentor younger students in AI club or programming courses",
            "Compete in advanced CTF competitions and potentially win placements"
          ]
        }
      ]
    },
    {
      stage: "Stage 5",
      year: "2028 - Freshman Year",
      title: "College Transition & Career Foundation",
      icon: <Rocket size={24} />,
      color: "from-red-500 to-rose-600",
      sections: [
        {
          subtitle: "Pre-College Preparation",
          items: [
            "Complete any remaining certifications before college starts",
            "Attend cybersecurity summer camps or bootcamps if available",
            "Research professors and labs at your chosen university",
            "Connect with admitted students in cybersecurity programs"
          ]
        },
        {
          subtitle: "Freshman Year Excellence",
          items: [
            "Join university cybersecurity teams (CTF competition teams, security clubs)",
            "Seek undergraduate research positions in security labs early",
            "Apply for summer 2029 internships at companies like Raytheon, Lockheed Martin, or tech firms (applications open fall 2028)",
            "Maintain strong GPA for competitive internship and scholarship opportunities"
          ]
        },
        {
          subtitle: "Career Positioning",
          items: [
            "Build professional network through professors, industry events, and LinkedIn",
            "Consider specialized focus areas (malware analysis, cloud security, AI security)",
            "Plan certification path for college years (working toward OSCP, CISSP prerequisites)",
            "Explore government security clearance opportunities for defense sector roles"
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-48 pb-32">
      <PageHeader 
        icon={Target}
        title="Future"
        highlight="Vision"
        subtitle="My objective is to architect the next generation of secure digital infrastructure, ensuring that technological advancement never compromises human safety or data integrity."
      />

      {/* National Outreach Section */}
      <Section className="space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white">National <span className="gradient-gold">Outreach</span></h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          </div>
          <p className="text-brand-medium text-lg font-bold max-w-md italic">
            Direct recruitment and interest from over 50+ top-tier academic institutions across the United States.
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Institutions - 2x4 Layout */}
          <div className="space-y-8">
            <h3 className="text-xl font-black text-amber-500 uppercase tracking-widest flex items-center gap-3">
              <Sparkles size={20} /> Featured Institutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredColleges.map((uni, idx) => (
                <UniversityCard key={idx} uni={uni} idx={idx} />
              ))}
            </div>
          </div>

          {/* Military Institution - Full Width */}
          {militaryCollege && (
            <div className="space-y-8">
              <h3 className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-3">
                <Anchor size={20} /> Military Leadership
              </h3>
              <div className="w-full h-full">
                <UniversityCard uni={militaryCollege} idx={0} />
              </div>
            </div>
          )}

          {/* Other Institutions - Normal Grid (2 rows, 6 columns layout) */}
          <div className="space-y-8">
            <h3 className="text-xl font-black text-brand-medium uppercase tracking-widest">Nationwide University Outreach</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {otherColleges.map((uni, idx) => (
                <UniversityCard key={idx} uni={uni} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Professional Inquiries & Internships */}
      <Section className="space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white">Professional <span className="gradient-gold">Inquiries</span></h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          </div>
          <p className="text-brand-medium text-lg font-bold max-w-md italic">
            Recruitment outreach and internship opportunities received from industry leaders and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Detailed Inquiries */}
          <div className="space-y-8">
            {RECRUITMENT_OUTREACH.map((outreach, idx) => (
              <motion.div
                key={outreach.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 rounded-[3rem] border border-white/5 bg-brand-dark/40 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 border border-white/10">
                      <Building2 size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors uppercase italic tracking-tight">
                        {outreach.sender.split(' ')[0]} <span className="text-brand-medium">{outreach.sender.split(' ').slice(1).join(' ')}</span>
                      </h3>
                      <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">{outreach.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-brand-medium text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <Calendar size={12} className="text-amber-500" />
                    {outreach.date}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-6">
                    {outreach.messages.map((msg, mIdx) => (
                      <div key={mIdx} className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-amber-500 text-[9px] font-black uppercase tracking-widest">{msg.time}</span>
                          <Mail size={12} className="text-white/20" />
                        </div>
                        <p className="text-white/80 text-sm font-bold leading-relaxed italic">"{msg.content}"</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 text-amber-500 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Recruitment Active <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick List of Other Responses */}
          <div className="space-y-8">
            <div className="royal-card p-10 rounded-[3rem] border border-white/5 bg-gradient-to-br from-amber-500/5 to-transparent space-y-10">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">Additional <span className="gradient-gold">Outreach</span></h3>
                <p className="text-brand-medium text-sm font-bold italic">Strategic responses and future considerations from industry leaders.</p>
              </div>

              <div className="space-y-6">
                {OTHER_RESPONSES.map((resp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-5 p-5 rounded-2xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/5"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 border border-white/5">
                      <Globe size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-white font-black text-sm uppercase tracking-tight">{resp.sender}</h4>
                        <span className="px-2 py-0.5 bg-amber-500/10 rounded text-[8px] font-black uppercase tracking-widest text-amber-500 border border-amber-500/20">
                          {resp.category}
                        </span>
                      </div>
                      <p className="text-brand-medium text-[10px] font-black uppercase tracking-widest opacity-60">{resp.role}</p>
                      <p className="text-white/60 text-xs font-bold leading-relaxed italic mt-2">"{resp.reason}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-4 p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                  <Award className="text-amber-500 shrink-0" size={24} />
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                    All inquiries are maintained for future strategic alignment and professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section className="space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white">The <span className="gradient-gold">Roadmap</span></h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          </div>
          <p className="text-brand-medium text-lg font-bold max-w-md italic">
            A structured path toward technical mastery and leadership in systems architecture.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent hidden lg:block" />

          <div className="space-y-32 relative z-10">
            {roadmap.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-start gap-12 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full">
                  <div className={`royal-card p-10 rounded-[3rem] border border-white/5 bg-brand-dark/40 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-500 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-6 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                        {item.icon}
                      </div>
                      <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                        <span className="text-amber-500 font-black text-sm uppercase tracking-widest">{item.stage}</span>
                        <span className="text-white font-black text-2xl italic tracking-tighter">{item.year}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-8 uppercase italic tracking-tight">{item.title}</h3>
                    
                    <div className="space-y-8">
                      {item.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-4">
                          <h4 className="text-amber-500/80 text-sm font-black uppercase tracking-widest">{section.subtitle}</h4>
                          <ul className={`space-y-3 text-brand-medium text-sm font-bold italic opacity-80 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            {section.items.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 justify-end lg:justify-start">
                                {idx % 2 !== 0 && <ArrowRight size={14} className="text-amber-500 shrink-0 mt-1" />}
                                <span>{bullet}</span>
                                {idx % 2 === 0 && <ArrowRight size={14} className="text-amber-500 shrink-0 mt-1" />}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-brand-dark border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)] z-20 hidden lg:block mt-24" />
                
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FuturePage;
