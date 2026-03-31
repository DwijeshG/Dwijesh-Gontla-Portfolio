
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Projects</h2>
        <div className="h-1.5 w-24 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {PROJECTS.map((project, idx) => (
          <motion.button 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectProject(project)}
            className="group relative flex flex-col h-full text-left outline-none cursor-pointer"
          >
            {/* Card Container */}
            <div className="relative flex flex-col h-full rounded-[3rem] overflow-hidden border border-white/10 bg-brand-dark/40 backdrop-blur-xl transition-all duration-700 group-hover:border-amber-500/40 group-hover:shadow-[0_40px_100px_-20px_rgba(245,158,11,0.2)] group-hover:-translate-y-2">
              
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-black/80 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-3xl border border-white/10 shadow-2xl group-hover:bg-amber-500 group-hover:text-black transition-all duration-700">
                  {project.icon}
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-700">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 space-y-6 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-all duration-700"></div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-500/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none group-hover:text-amber-400 transition-colors duration-500 italic uppercase">
                    {project.title}
                  </h3>
                </div>

                <p className="text-brand-medium text-base md:text-lg font-bold leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-4 mt-auto flex items-center justify-between border-t border-white/5">
                  <div className="flex -space-x-2">
                    {project.tags.map((tag, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-[8px] font-black text-amber-500/40 group-hover:border-amber-500/20 transition-all">
                        {tag.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
