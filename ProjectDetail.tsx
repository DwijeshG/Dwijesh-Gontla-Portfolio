
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowLeft, Mail, Shield, Cpu, Briefcase, Globe, Award, Star, CheckCircle2, Sparkles, Zap, Lock, Eye, Activity, BarChart3, Layers, Clock, BookOpen, TrendingUp, ShieldCheck, Database, Users } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const isEnterpriseProject = project.title === 'Enterprise Network Architectures';
  const isSecurityProject = project.title === 'Anti-Malware Browser Extension' || project.title === 'Defensive Grid Labs';
  const isBusinessProject = project.title === 'Summer Business Operations';
  const isUILProject = project.title === 'UIL Website Development';

  // Determine theme colors based on project
  let accentColor = 'amber';
  let roleText = 'Specialist';
  let ProjectIcon = Globe;
  
  if (isSecurityProject) {
    roleText = 'Cybersecurity Developer';
    ProjectIcon = Shield;
  } else if (isBusinessProject) {
    roleText = 'Operations & Logistics';
    ProjectIcon = Briefcase;
  } else if (isUILProject) {
    roleText = 'UIL Website Team Captain';
    ProjectIcon = Award;
  } else if (isEnterpriseProject) {
    roleText = 'Network Architect & Cisco Specialist';
    ProjectIcon = Cpu;
  }

  const theme = 'text-amber-400 bg-amber-500 border-amber-500/20';

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="mb-16 flex items-center gap-4 text-brand-medium hover:text-white font-black uppercase text-[11px] tracking-[0.4em] transition-all group cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        </div>
        Return to Dossier
      </motion.button>

      <div className="space-y-20 md:space-y-32">
        {/* Header Section */}
        <header className="space-y-12">
          {project.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl relative group"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 flex items-center gap-6">
                <div className="w-20 h-20 bg-black/80 backdrop-blur-2xl rounded-3xl flex items-center justify-center text-5xl border border-white/10 shadow-2xl">
                  {project.icon}
                </div>
                <div>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Project Asset</p>
                  <h2 className="text-white text-3xl font-black tracking-tighter uppercase italic">{project.title}</h2>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
               <div className={`px-4 py-1.5 rounded-full border ${theme.split(' ')[2]} ${theme.split(' ')[0]} text-[10px] font-black uppercase tracking-[0.3em]`}>
                 Project Module
               </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              {project.title}
            </h1>
          </motion.div>

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center gap-10"
          >
            <div className="flex items-center gap-5">
              <div className={`w-14 h-14 ${theme.split(' ')[1]} text-black rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl shadow-black/40`}>
                DG
              </div>
              <div>
                <p className="text-white text-[13px] font-black uppercase tracking-widest leading-none mb-2">Dwijesh Gontla</p>
                <p className="text-brand-medium text-[10px] font-bold uppercase tracking-widest">{roleText}</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="flex flex-wrap items-center gap-6">
              <a href="mailto:gdwijju@gmail.com" className="flex items-center gap-3 text-brand-medium hover:text-white transition-colors group">
                <Mail size={18} className="group-hover:text-amber-500 transition-colors" />
                <span className="text-[12px] font-black uppercase tracking-[0.2em]">gdwijju@gmail.com</span>
              </a>
              {project.websiteUrl && (
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-medium hover:text-white transition-colors group">
                  <Globe size={18} className="group-hover:text-amber-500 transition-colors" />
                  <span className="text-[12px] font-black uppercase tracking-[0.2em]">Official Website</span>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-medium hover:text-white transition-colors group">
                  <Users size={18} className="group-hover:text-amber-500 transition-colors" />
                  <span className="text-[12px] font-black uppercase tracking-[0.2em]">GitHub Repos</span>
                </a>
              )}
            </div>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" 
        />

        {/* --- UIL Website Development --- */}
        {isUILProject && (
          <div className="space-y-20 md:space-y-32">
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-amber-400 text-[12px] font-black uppercase tracking-[0.5em] whitespace-nowrap">Professional Summary</h2>
                <div className="h-px flex-grow bg-amber-500/20"></div>
              </div>
              <p className="text-brand-light text-2xl md:text-4xl leading-tight font-bold tracking-tight">
                Led Gateway College Prep's UIL Website team to <strong className="text-amber-400">District Championship</strong> and <strong className="text-amber-400">3rd Place State</strong> as Captain. Designed and developed full-stack websites judged on functionality, design, and technical implementation.
              </p>
            </section>

            <section className="space-y-12">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Star className="text-amber-500" />
                Competition Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="royal-card p-10 rounded-[2.5rem] border-amber-500/20 bg-amber-500/5">
                  <p className="text-amber-400 text-[11px] font-black uppercase tracking-widest mb-4">District Level</p>
                  <h4 className="text-4xl font-black text-white tracking-tighter">1st Place</h4>
                  <p className="text-brand-medium mt-4 font-bold text-lg">Overall Champions & Team Captain Recognition</p>
                </div>
                <div className="royal-card p-10 rounded-[2.5rem] border-amber-500/20 bg-amber-500/5">
                  <p className="text-amber-400 text-[11px] font-black uppercase tracking-widest mb-4">State Level</p>
                  <h4 className="text-4xl font-black text-white tracking-tighter">3rd Place</h4>
                  <p className="text-brand-medium mt-4 font-bold text-lg">Top 3 Texas High School Web Development Teams</p>
                </div>
              </div>
            </section>

            <section className="space-y-12">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Layers className="text-amber-500" />
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'React', level: 'Advanced', icon: Cpu },
                  { name: 'Tailwind CSS', level: 'Expert', icon: Sparkles },
                  { name: 'Vite', level: 'Advanced', icon: Zap },
                  { name: 'Framer Motion', level: 'Advanced', icon: Activity }
                ].map((tech, i) => (
                  <div key={i} className="p-6 royal-card rounded-2xl border-white/5 flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                      <tech.icon size={24} />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase text-[10px] tracking-widest">{tech.name}</p>
                      <p className="text-amber-500/60 text-[8px] font-bold uppercase tracking-tighter">{tech.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-12">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Clock className="text-amber-500" />
                Development Roadmap
              </h3>
              <div className="space-y-6">
                {[
                  { phase: 'Phase 01', title: 'Conceptualization', desc: 'Defining user personas and core functionality requirements for the competition brief.' },
                  { phase: 'Phase 02', title: 'Architecture', desc: 'Designing the component hierarchy and state management strategy using React hooks.' },
                  { phase: 'Phase 03', title: 'Implementation', desc: 'Rapid development of the UI with Tailwind CSS and integration of interactive elements.' },
                  { phase: 'Phase 04', title: 'Optimization', desc: 'Performance tuning and accessibility auditing to meet strict UIL judging criteria.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-125 transition-transform"></div>
                      {i !== 3 && <div className="w-0.5 flex-grow bg-white/10 my-2"></div>}
                    </div>
                    <div className="pb-10">
                      <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">{step.phase}</p>
                      <h4 className="text-white font-black uppercase text-xl italic mb-2">{step.title}</h4>
                      <p className="text-brand-medium font-bold">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* --- Summer Business Operations --- */}
        {isBusinessProject && (
          <div className="space-y-24 md:space-y-40">
            <section className="space-y-12">
              <div className="flex items-center gap-6">
                <h2 className="text-amber-400 text-[12px] font-black uppercase tracking-[0.5em] whitespace-nowrap">Executive Summary</h2>
                <div className="h-px flex-grow bg-amber-500/20"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <p className="text-brand-light text-3xl md:text-5xl leading-tight font-black tracking-tighter italic">
                    Strategic Oversight of <span className="text-amber-400">High-Volume</span> Retail & Supermarket Enterprise.
                  </p>
                  <p className="text-brand-medium text-xl leading-relaxed font-bold">
                    A comprehensive immersion into high-stakes business management. I led a diverse team of employees, reporting directly to the CEO, CFO, Founder, and Managing Director. My responsibilities encompassed sophisticated warehouse management and inventory control, financial transaction integrity, and the implementation of employee welfare initiatives to ensure peak organizational performance and workplace satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 royal-card rounded-3xl bg-amber-500/5 border-amber-500/20 space-y-2">
                    <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Efficiency Gain</p>
                    <p className="text-4xl font-black text-white">+15%</p>
                  </div>
                  <div className="p-8 royal-card rounded-3xl bg-amber-500/5 border-amber-500/20 space-y-2">
                    <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Branches</p>
                    <p className="text-4xl font-black text-white">02</p>
                  </div>
                  <div className="p-8 royal-card rounded-3xl bg-amber-500/5 border-amber-500/20 space-y-2">
                    <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Region</p>
                    <p className="text-4xl font-black text-white italic">India</p>
                  </div>
                  <div className="p-8 royal-card rounded-3xl bg-amber-500/5 border-amber-500/20 space-y-2">
                    <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Role</p>
                    <p className="text-4xl font-black text-white italic">Lead</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-16">
              <h3 className="text-white text-4xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <BarChart3 className="text-amber-500" />
                Core Operational Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { 
                    title: 'Warehouse Management & Control', 
                    icon: Layers,
                    desc: 'Expertly managed item arrangement and inventory flow within a high-volume supermarket environment, ensuring optimal shelf-space utilization and supply chain efficiency.' 
                  },
                  { 
                    title: 'Financial Transaction Integrity', 
                    icon: BarChart3,
                    desc: 'Oversaw complex retail transactions and daily financial reconciliations, maintaining 100% accuracy in high-traffic consumer environments.' 
                  },
                  { 
                    title: 'Employee Welfare & Leadership', 
                    icon: Sparkles,
                    desc: 'Prioritized the happiness and professional welfare of the workforce, implementing support structures that boosted morale and operational productivity.' 
                  },
                  { 
                    title: 'Strategic Operational Oversight', 
                    icon: Clock,
                    desc: 'Worked directly under executive leadership to refine store-wide protocols, from customer service standards to back-end logistics.' 
                  }
                ].map((item, i) => (
                  <div key={i} className="p-12 royal-card rounded-[3rem] space-y-8 hover:border-amber-500/30 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-all"></div>
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                      <item.icon size={32} />
                    </div>
                    <div className="space-y-4 relative z-10">
                      <h4 className="text-white font-black uppercase text-xl tracking-tight italic">
                        {item.title}
                      </h4>
                      <p className="text-brand-medium text-lg font-bold leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-16">
              <div className="flex items-center gap-6">
                <h2 className="text-amber-400 text-[12px] font-black uppercase tracking-[0.5em] whitespace-nowrap">Professional Impact</h2>
                <div className="h-px flex-grow bg-amber-500/20"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 royal-card rounded-[2.5rem] space-y-6 text-center">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto">
                    <TrendingUp size={32} />
                  </div>
                  <h4 className="text-white font-black uppercase text-xl italic">Operational Scale</h4>
                  <p className="text-brand-medium font-bold">Managed thousands of unique SKUs across high-traffic retail environments.</p>
                </div>
                <div className="p-10 royal-card rounded-[2.5rem] space-y-6 text-center">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-white font-black uppercase text-xl italic">Financial Trust</h4>
                  <p className="text-brand-medium font-bold">Entrusted with end-to-end transaction handling and daily auditing.</p>
                </div>
                <div className="p-10 royal-card rounded-[2.5rem] space-y-6 text-center">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto">
                    <Star size={32} />
                  </div>
                  <h4 className="text-white font-black uppercase text-xl italic">Team Welfare</h4>
                  <p className="text-brand-medium font-bold">Directly supported and mentored 3 key team members, enhancing workplace morale.</p>
                </div>
              </div>
            </section>

            <section className="space-y-12">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Layers className="text-amber-500" />
                Operational Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Inventory Systems', level: 'Advanced', icon: Database },
                  { name: 'Team Leadership', level: 'Executive', icon: Users },
                  { name: 'Financial Audit', level: 'Advanced', icon: ShieldCheck },
                  { name: 'Logistics', level: 'Advanced', icon: Globe }
                ].map((tech, i) => (
                  <div key={i} className="p-6 royal-card rounded-2xl border-white/5 flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                      <tech.icon size={24} />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase text-[10px] tracking-widest">{tech.name}</p>
                      <p className="text-amber-500/60 text-[8px] font-bold uppercase tracking-tighter">{tech.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* --- Defensive Grid Labs (Security Project) --- */}
        {isSecurityProject && (
          <div className="space-y-24 md:space-y-40">
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-amber-400 text-[12px] font-black uppercase tracking-[0.5em] whitespace-nowrap">Security Dossier</h2>
                <div className="h-px flex-grow bg-amber-500/20"></div>
              </div>
              <p className="text-brand-light text-2xl md:text-5xl leading-[1.1] font-black tracking-tighter italic">
                Defensive Grid Labs: <span className="text-amber-400">Digital Sovereignty</span> & Founder-Led Architecture.
              </p>
              <p className="text-brand-medium text-xl font-bold leading-relaxed max-w-3xl">
                Founded by Dwijesh Gontla, who serves as the official Founder and 100% stakeholder, Defensive Grid Labs operates on the principle that security should be "Built with purpose and protected with intent." We provide elite cybersecurity solutions that prioritize user privacy through local-first processing and transparent protocols.
              </p>
            </section>

            <section className="space-y-16">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Shield className="text-amber-500" />
                Core Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Zero-Knowledge Architecture',
                    icon: Lock,
                    desc: 'The system is designed so that the provider has zero access to user data. Encryption keys are managed locally, ensuring absolute privacy.'
                  },
                  {
                    title: 'Hybrid Intelligence Model',
                    icon: Cpu,
                    desc: 'A unique 90/10 architectural split: 90% of processing happens locally to preserve privacy, while 10% uses elite cloud intelligence for global threat analysis.'
                  },
                  {
                    title: 'Privacy-First & Local-First',
                    icon: Eye,
                    desc: 'Data stays on the user\'s computer, never leaving their physical control unless explicitly authorized for anonymized threat detection.'
                  },
                  {
                    title: 'Building in Public',
                    icon: Users,
                    desc: 'A commitment to transparency by open-sourcing core protocols like nexus-shield-core and grid-protocol.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-10 royal-card rounded-[2.5rem] space-y-6 hover:border-amber-500/30 transition-all group">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                      <item.icon size={28} />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-black uppercase text-lg tracking-tight italic">{item.title}</h4>
                      <p className="text-brand-medium text-sm font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-16">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Activity className="text-amber-500" />
                Key Products & Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Nexus SOC',
                    icon: BarChart3,
                    desc: 'A high-fidelity, real-time dashboard for monitoring global threat vectors and system integrity.'
                  },
                  {
                    title: 'Nexus Shield',
                    icon: ShieldCheck,
                    desc: 'A browser-level protection engine that blocks advanced intrusion attempts.'
                  },
                  {
                    title: 'Sovereign Vault',
                    icon: Database,
                    desc: 'Local-first encrypted storage for sensitive digital assets.'
                  },
                  {
                    title: 'Global Grid',
                    icon: Globe,
                    desc: 'Real-time monitoring of global network health across major AWS regions.'
                  }
                ].map((product, i) => (
                  <div key={i} className="p-8 royal-card rounded-3xl space-y-6 hover:border-amber-500/30 transition-all group">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 group-hover:rotate-12 transition-transform">
                      <product.icon size={24} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-black uppercase text-sm tracking-tight italic">{product.title}</h4>
                      <p className="text-brand-medium text-[11px] font-bold leading-relaxed">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-12">
              <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                <Cpu className="text-amber-500" />
                Security Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Zero-Knowledge', level: 'Core', icon: Lock },
                  { name: 'Hybrid AI', level: '90/10 Split', icon: Cpu },
                  { name: 'Nexus SOC', level: 'Real-time', icon: BarChart3 },
                  { name: 'AWS Global', level: 'Monitoring', icon: Globe }
                ].map((tech, i) => (
                  <div key={i} className="p-6 royal-card rounded-2xl border-white/5 flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                      <tech.icon size={24} />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase text-[10px] tracking-widest">{tech.name}</p>
                      <p className="text-amber-500/60 text-[8px] font-bold uppercase tracking-tighter">{tech.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* --- Enterprise Network Architectures --- */}
        {isEnterpriseProject && (
          <div className="space-y-24 md:space-y-40">
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-amber-400 text-[12px] font-black uppercase tracking-[0.5em] whitespace-nowrap">Architecture Blueprint</h2>
                <div className="h-px flex-grow bg-amber-500/20"></div>
              </div>
              <p className="text-brand-light text-2xl md:text-5xl leading-tight font-black tracking-tighter italic">
                Designing <span className="text-amber-400">Resilient</span> Multi-Site Topologies through Self-Directed Mastery.
              </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                <section className="space-y-8">
                  <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                    <BookOpen className="text-amber-500" />
                    The Learning Journey
                  </h3>
                  <div className="p-10 royal-card rounded-[3rem] bg-white/5 space-y-6">
                    <p className="text-brand-light text-xl font-bold leading-relaxed">
                      This project represents a deep dive into enterprise-grade networking. I self-learned these complex systems through the <strong className="text-amber-400">Cisco Networking Academy (NetAcad)</strong>, moving far beyond standard curriculum.
                    </p>
                    <p className="text-brand-medium text-lg font-bold leading-relaxed">
                      Through hundreds of hours of hands-on experimentation in virtualized environments, I mastered the intricacies of multi-site connectivity, traffic engineering, and protocol optimization.
                    </p>
                  </div>
                </section>

                <section className="space-y-8">
                  <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                    <Zap className="text-amber-500" />
                    Technical Implementation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'VLAN Segmentation', desc: 'Logical isolation of broadcast domains to enhance security and reduce network congestion.' },
                      { title: 'OSPF Routing', desc: 'Implementation of Open Shortest Path First for dynamic, scalable routing across complex topologies.' },
                      { title: 'Security Hardening', desc: 'Multi-layered security protocols including ACLs, port security, and encrypted management planes.' },
                      { title: 'High Availability', desc: 'Redundancy protocols (HSRP/VRRP) to ensure zero-downtime for critical enterprise services.' }
                    ].map((s, i) => (
                      <div key={i} className="p-8 royal-card rounded-3xl border-white/5 hover:border-amber-500/30 transition-all">
                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-3 italic">{s.title}</h4>
                        <p className="text-brand-medium text-sm font-bold leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-12">
                  <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                    <Layers className="text-amber-500" />
                    Network Stack
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: 'Cisco IOS', level: 'Advanced', icon: Cpu },
                      { name: 'Packet Tracer', level: 'Expert', icon: Activity },
                      { name: 'Wireshark', level: 'Advanced', icon: Eye },
                      { name: 'GNS3', level: 'Advanced', icon: Globe }
                    ].map((tech, i) => (
                      <div key={i} className="p-6 royal-card rounded-2xl border-white/5 flex flex-col items-center text-center gap-4">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                          <tech.icon size={24} />
                        </div>
                        <div>
                          <p className="text-white font-black uppercase text-[10px] tracking-widest">{tech.name}</p>
                          <p className="text-amber-500/60 text-[8px] font-bold uppercase tracking-tighter">{tech.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="space-y-8">
                  <h3 className="text-white text-3xl font-black tracking-tighter uppercase italic">Cisco Mastery</h3>
                  <div className="p-8 royal-card rounded-[2.5rem] bg-amber-500/5 border-amber-500/20 space-y-8">
                    <div className="space-y-4">
                      <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Platform</p>
                      <p className="text-2xl font-black text-white italic">Cisco NetAcad</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Methodology</p>
                      <p className="text-2xl font-black text-white italic">Self-Directed</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Hours Logged</p>
                      <p className="text-2xl font-black text-white italic">300+</p>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3 text-amber-400">
                        <Award size={20} />
                        <span className="text-[11px] font-black uppercase tracking-widest">Cisco Certified Foundations</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* Catch-all Fallback */}
        {!isEnterpriseProject && !isSecurityProject && !isBusinessProject && !isUILProject && (
          <div className="py-20 text-center space-y-12">
            <div className="w-32 h-32 bg-brand-dark mx-auto rounded-[2.5rem] flex items-center justify-center text-6xl border border-white/10 shadow-3xl">
              {project.icon}
            </div>
            <div className="space-y-6">
              <h3 className="text-white text-4xl font-black tracking-tighter uppercase italic">Specifications Pending</h3>
              <p className="text-brand-medium max-w-md mx-auto text-xl font-bold">Full technical documentation for this module is currently being finalized.</p>
            </div>
            <button 
              onClick={onBack}
              className="px-12 py-5 bg-white text-black rounded-2xl font-black uppercase text-[12px] tracking-widest hover:bg-amber-500 transition-all active:scale-95 shadow-2xl"
            >
              Back to Portfolio
            </button>
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] bg-${accentColor}-500/5 blur-[150px] rounded-full`}></div>
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-${accentColor}-500/5 blur-[120px] rounded-full`}></div>
      </div>
    </div>
  );
};

export default ProjectDetail;
