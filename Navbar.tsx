
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
    { name: 'Home', path: '/' },
    { name: 'Academic Excellence', path: '/academics' },
    { name: 'UIL Record', path: '/competitions' },
    { name: 'Skills', path: '/skills' },
    { name: 'Future', path: '/future' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-8 md:py-12'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center px-6 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-full border transition-all duration-700 relative ${
          scrolled || mobileMenuOpen
            ? 'glass-nav border-white/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}>
          
          <Link 
            to="/" 
            className="flex items-center gap-3 md:gap-4 group cursor-pointer outline-none"
            aria-label="Dwijesh Gontla Home"
          >
            <div className="w-10 h-10 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-xl shadow-black/40 group-hover:scale-110 transition-all duration-500 overflow-hidden relative">
              <img src="/logo.png" alt="DG Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all py-2 relative group ${
                  location.pathname === link.path ? 'text-amber-500' : 'text-white/40 hover:text-amber-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-amber-500 transition-all ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95 group/resume"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              RESUME
            </a>

            <a 
              href="mailto:gdwijju@gmail.com"
              className="hidden sm:flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] bg-amber-500 text-black hover:bg-amber-400 transition-all active:scale-95 shadow-xl shadow-amber-500/10 group/btn"
            >
              <Mail className="w-3.5 h-3.5" />
              CONNECT
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

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
                ))}
                
                <div className="grid grid-cols-1 gap-3 mt-6">
                  <a 
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 py-6 bg-white/5 border border-white/10 text-white text-[12px] font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-all"
                  >
                    <FileText className="w-4.5 h-4.5 text-amber-500" />
                    VIEW RESUME
                  </a>
                  <a 
                    href="mailto:gdwijju@gmail.com"
                    className="flex items-center justify-center gap-4 py-6 bg-amber-500 text-black text-[12px] font-black uppercase tracking-widest rounded-2xl shadow-2xl shadow-amber-500/10 active:scale-95 transition-all"
                  >
                    <Mail className="w-4.5 h-4.5" />
                    SEND DIRECT MESSAGE
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
