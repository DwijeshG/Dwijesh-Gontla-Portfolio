
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, ChevronRight, FileText } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About Me', path: '/' },
    { name: 'Academic Excellence', path: '/academics' },
    { name: 'Skills & Impact', path: '/skills' },
    { name: 'Future', path: '/future' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-2' : 'py-4 md:py-6'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className={`flex justify-between items-center px-8 md:px-12 py-2 md:py-3 rounded-2xl md:rounded-full border transition-all duration-700 relative ${
          scrolled || mobileMenuOpen
            ? 'glass-nav border-white/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}>
          
          <Link 
            to="/" 
            className="flex items-center gap-3 md:gap-4 group cursor-pointer outline-none shrink-0"
            aria-label="Dwijesh Gontla About Me"
          >
            <div className="w-7 h-7 md:w-9 md:h-9 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-xl shadow-black/40 group-hover:scale-110 transition-all duration-500 overflow-hidden relative">
              <img src="/logo.png" alt="DG Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="text-white font-black text-[clamp(9px,0.7vw,12px)] uppercase tracking-widest leading-none">Dwijesh Gontla</span>
              <span className="text-amber-500 font-black text-[clamp(7px,0.5vw,9px)] uppercase tracking-[0.2em] mt-1">Cybersecurity & Research Portfolio</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-[clamp(1.2rem,2.5vw,3.5rem)] whitespace-nowrap">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-[clamp(9px,0.65vw,11px)] font-black uppercase tracking-[0.3em] transition-all py-2 relative group text-white/40 hover:text-amber-500"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all group-hover:w-full"></span>
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`text-[clamp(9px,0.65vw,11px)] font-black uppercase tracking-[0.3em] transition-all py-2 relative group ${
                    location.pathname === link.path ? 'text-amber-500' : 'text-white/40 hover:text-amber-500'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path ? (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all group-hover:w-full"></span>
                  )}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-[clamp(0.5rem,1.5vw,1.5rem)]">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#footer"
              onClick={(e) => handleNavClick(e, '#footer')}
              className="hidden sm:flex items-center gap-2.5 px-[clamp(1.2rem,2vw,2.5rem)] py-[clamp(0.4rem,0.75vw,0.9rem)] rounded-full text-[clamp(9px,0.65vw,10px)] font-black uppercase tracking-[0.25em] bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10 group/btn"
            >
              <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" />
              LEARN MORE
              <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 flex flex-col gap-3 shadow-3xl">
                {navLinks.map((link) => (
                  link.path.startsWith('#') ? (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className="text-[12px] font-black uppercase tracking-[0.35em] py-5 px-6 border-b border-white/5 last:border-0 active:bg-white/5 rounded-2xl transition-all flex items-center justify-between group text-white/60 hover:text-amber-500 hover:bg-white/5"
                    >
                      {link.name}
                      <ChevronRight size={14} className="transition-all -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[12px] font-black uppercase tracking-[0.35em] py-5 px-6 border-b border-white/5 last:border-0 active:bg-white/5 rounded-2xl transition-all flex items-center justify-between group ${
                        location.pathname === link.path ? 'text-amber-500 bg-white/5' : 'text-white/60 hover:text-amber-500 hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronRight size={14} className={`transition-all -translate-x-2 group-hover:translate-x-0 ${
                        location.pathname === link.path ? 'opacity-100 translate-x-0' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </Link>
                  )
                ))}
                
                <div className="grid grid-cols-1 gap-3 mt-6">
                  <a 
                    href="#footer"
                    onClick={(e) => handleNavClick(e, '#footer')}
                    className="flex items-center justify-center gap-4 py-6 bg-amber-500 text-black text-[12px] font-black uppercase tracking-widest rounded-2xl shadow-2xl shadow-amber-500/10 active:scale-95 transition-all"
                  >
                    <Mail className="w-4.5 h-4.5" />
                    LEARN MORE
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
