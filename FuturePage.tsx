
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Shield, Cpu, ArrowRight, GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

const FuturePage: React.FC = () => {
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
            "Explore government security clearance opportunities for defense sector roles",
            "Engage with job recruitment opportunities from JASON and AmeriCorps"
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

      {/* Roadmap Section */}
      <Section className="space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white">The <span className="gradient-gold">Roadmap</span></h2>
            <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
          </div>
          <p className="text-brand-medium text-lg font-bold max-w-md italic">
            A structured path toward technical mastery and leadership in cybersecurity research.
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
