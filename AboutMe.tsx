
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ExploreMore from '../components/ExploreMore';
import Reveal from '../components/Reveal';
import Section from '../components/Section';

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      <Hero />

      {/* Life Quote Section */}
      <Section className="px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <Reveal width="100%" delay={0.2}>
            <div className="flex justify-center">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-amber-500 rounded-full opacity-50"
              ></motion.div>
            </div>
          </Reveal>
          <blockquote className="relative">
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-8 md:-top-12 -left-2 md:-left-4 text-7xl md:text-9xl text-amber-500/10 font-serif pointer-events-none"
            >"</motion.span>
            <Reveal width="100%" delay={0.4}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] md:leading-[1.1] text-white italic px-4">
                It is not about how you <span className="gradient-gold">start life</span>, but how you <span className="gradient-gold">end it</span> and if you left cumulative impact on your <span className="gradient-gold">society and community</span>.
              </h2>
            </Reveal>
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-16 md:-bottom-20 -right-2 md:-right-4 text-7xl md:text-9xl text-amber-500/10 font-serif pointer-events-none rotate-180"
            >"</motion.span>
          </blockquote>
          <Reveal width="100%" delay={0.6}>
            <div className="flex justify-center pt-8">
              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                className="px-6 py-2 border border-amber-500/20 rounded-full bg-amber-500/5 backdrop-blur-sm transition-colors cursor-default"
              >
                <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Personal Philosophy</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Strategic Narrative Section */}
      <Section className="px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal width="100%" delay={0.2}>
            <div className="space-y-12 md:space-y-16">
              {/* The Narrative Header */}
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-px w-12 bg-amber-500/50"></div>
                  <span className="text-amber-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">Personal Narrative</span>
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white italic">
                  About <span className="gradient-gold">Me.</span>
                </h2>
              </div>

              {/* The Essay Content */}
              <div className="royal-card p-8 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 space-y-8 text-brand-medium text-base md:text-lg leading-[1.8] font-medium">
                  <p>
                    My journey is defined by a relentless pursuit of excellence and a strategic approach to every challenge I encounter. Born in Vijayawada, India, and moving to the United States in 2017, I quickly learned that success is built on a foundation of adaptability and disciplined preparation. Currently, as a 15-year-old scholar at Gateway College Prep and Austin Community College, I maintain an <a href="/academics#metrics" className="text-amber-400 font-bold hover:underline">unweighted 3.94/4 (5.18/6 weighted) GPA</a> and a <a href="/academics#metrics" className="text-amber-400 font-bold hover:underline">rank of 6th out of 141</a>. As a consistent <a href="/academics#honor-roll" className="text-amber-400 font-bold hover:underline">A Honor Roll student</a>—currently on track for another perfect year—I have demonstrated academic mastery by scoring a <a href="/academics#ap-scores" className="text-amber-400 font-bold hover:underline">perfect 5 on both AP Human Geography and AP Computer Science Principles</a>.
                  </p>

                  <p>
                    My academic strategy is built on a dual-track approach: I am currently <a href="/academics#associates-plan" className="text-amber-400 font-bold hover:underline">on track to complete my Associate's Degree</a> while still in high school. This involves a rigorous selection of <a href="/academics#acc-coursework" className="text-amber-400 font-bold hover:underline">Computer Science and related coursework at Austin Community College (ACC)</a>, complemented by advanced AP classes at my home campus. My academic excellence is further recognized through my induction into the <a href="/academics#nsls" className="text-amber-400 font-bold hover:underline">National Society of Leadership and Success (NSLS)</a>, the <a href="/academics#scla" className="text-amber-400 font-bold hover:underline">Society for Collegiate Leadership & Achievement (SCLA)</a>, and <a href="/academics#ptk" className="text-amber-400 font-bold hover:underline">Phi Theta Kappa (PTK)</a>, alongside my recognition by the College Board and recruitment interest from over <a href="/academics#recruitment" className="text-amber-400 font-bold hover:underline">50+ top-tier universities</a> nationwide.
                  </p>

                  <p>
                    In the technical realm, I treat systems architecture as a craft. I have achieved <span className="text-amber-400 font-bold">official C++ and Python certifications</span> from recognized institutions, where I spent hundreds of hours mastering enterprise network topologies, OSPF routing, and multi-layered security. This technical foundation led to the founding of <a href="/skills#defensive-grid-labs" className="text-amber-400 font-bold hover:underline">Defensive Grid Labs</a>, an elite cybersecurity firm focused on Digital Sovereignty and Zero-Knowledge Architecture, featuring the Nexus SOC and a 90/10 Hybrid Intelligence model, as well as professional certifications in web development from the <a href="/skills#html-5" className="text-amber-400 font-bold hover:underline">University of Michigan</a>.
                  </p>

                  <p>
                    My competitive drive is best reflected in my leadership within the UIL circuit and business organizations. As the <a href="/competitions#uil-legacy" className="text-amber-400 font-bold hover:underline">Captain of the UIL Website Team</a>, I led my group to a <a href="/competitions#uil-legacy" className="text-amber-400 font-bold hover:underline">District Championship (1st Place)</a> and a <a href="/competitions#uil-legacy" className="text-amber-400 font-bold hover:underline">3rd Place finish at the State level</a> during the 2024-2025 season. I am also a <span className="text-amber-400 font-bold">2-year member of the UIL Mathematics and CX Debate teams</span>, contributing to back-to-back <a href="/competitions#uil-mathematics-team" className="text-amber-400 font-bold hover:underline">2nd Place District finishes for the Mathematics Team (2025-2026)</a> and securing <a href="/competitions#uil-cx-debate" className="text-amber-400 font-bold hover:underline">6th Place in District for CX Debate</a>. I am also an active member of <a href="/competitions#deca-business-operations" className="text-amber-400 font-bold hover:underline">DECA</a> and have served in <a href="/competitions#rotary-club" className="text-amber-400 font-bold hover:underline">Rotary for two years</a>. My team-based competitive record also includes Robotics (3rd in District 2024, 2nd in District 2025).
                  </p>

                  <p>
                    Leadership and community impact are the pillars of my personal philosophy. Whether serving as the <a href="/skills#njhs-treasurer" className="text-amber-400 font-bold hover:underline">NJHS Treasurer</a>, managing high-volume <a href="/skills#summer-business-operations" className="text-amber-400 font-bold hover:underline">Summer Business Operations</a> reporting directly to executive leadership, or leading global data science initiatives through <a href="/competitions#code-4-change" className="text-amber-400 font-bold hover:underline">Code 4 Change</a>, I strive to bridge the gap between technical mastery and social responsibility. This discipline extends to my personal life, where I am a dedicated <a href="/competitions#piano-performance" className="text-amber-400 font-bold hover:underline">classical pianist</a>, a <a href="/competitions#karate-excellence" className="text-amber-400 font-bold hover:underline">3rd Gup Karate student</a> nearing my Black Belt, and an instructor of <a href="/competitions#telugu-teaching" className="text-amber-400 font-bold hover:underline">Telugu teaching</a>.
                  </p>

                  <p className="text-white font-bold italic pt-4">
                    Ultimately, I believe that it is not about how you start life, but the cumulative impact you leave on your community through strategic precision and unwavering integrity.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <ExploreMore />
    </div>
  );
};

export default AboutMe;
