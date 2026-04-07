
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic gradient-gold inline-block">Projects</h2>
        </Reveal>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        {PROJECTS.map((project, idx) => {
          const isFeatured = idx < 2; // First two projects are featured/larger
          
          return (
            <motion.button 
              key={idx} 
              id={project.title.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project)}
              className={`group relative flex flex-col w-full text-left outline-none cursor-pointer ${
                isFeatured ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {/* Card Container */}
              <div className={`relative flex flex-col ${
                isFeatured ? 'md:flex-row' : 'flex-col'
              } h-full rounded-[3rem] overflow-hidden border border-white/10 bg-brand-dark/40 backdrop-blur-3xl transition-all duration-700 group-hover:border-amber-500/40 group-hover:shadow-[0_80px_150px_-30px_rgba(245,158,11,0.25)]`}>
                
                {/* Image Section */}
                <div className={`relative overflow-hidden border-white/10 ${
                  isFeatured 
                    ? 'w-full md:w-1/2 aspect-[16/10] md:aspect-auto border-b md:border-b-0 md:border-r' 
                    : 'w-full aspect-[16/10] border-b'
                }`}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent ${isFeatured ? 'hidden md:block' : 'hidden'}`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent ${isFeatured ? 'md:hidden' : 'block'}`}></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-6 left-6 ${
                    isFeatured ? 'w-16 h-16 text-4xl' : 'w-12 h-12 text-2xl'
                  } bg-black/80 backdrop-blur-3xl rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl group-hover:bg-amber-500 group-hover:text-black transition-all duration-700 z-20`}>
                    {project.icon}
                  </div>
                </div>
   
                {/* Content Section */}
                <div className={`relative flex flex-col justify-center ${
                  isFeatured 
                    ? 'w-full md:w-1/2 p-8 md:p-12 lg:p-16' 
                    : 'w-full p-8 md:p-10'
                }`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-amber-500/10 transition-all duration-1000"></div>
                  
                  <div className={`${isFeatured ? 'space-y-6' : 'space-y-4'} relative z-10`}>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.slice(0, isFeatured ? undefined : 3).map(tag => (
                        <span 
                          key={tag} 
                          className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-amber-500/80 border border-amber-500/20 px-3 py-1 rounded-full bg-amber-500/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className={`${
                      isFeatured 
                        ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' 
                        : 'text-2xl sm:text-3xl md:text-4xl'
                    } font-black text-white tracking-tighter leading-[0.95] group-hover:text-amber-400 transition-colors duration-700 italic uppercase`}>
                      {project.title}
                    </h3>
   
                    <p className={`${
                      isFeatured ? 'text-base md:text-lg lg:text-xl' : 'text-sm md:text-base'
                    } text-brand-medium font-bold leading-relaxed opacity-60 group-hover:opacity-100 transition-all duration-700 max-w-2xl line-clamp-3`}>
                      {project.description}
                    </p>
   
                    <div className={`${isFeatured ? 'pt-8' : 'pt-4'} flex items-center gap-6`}>
                      <div className="flex items-center gap-3 group/link">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Explore</span>
                        <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover/link:bg-amber-500 group-hover/link:text-black transition-all duration-500">
                          <ArrowUpRight size={16} strokeWidth={3} />
                        </div>
                      </div>
                      
                      <div className="h-px flex-grow bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
