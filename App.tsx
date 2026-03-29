
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import LiquidBackground from './components/LiquidBackground';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import AcademicsPage from './pages/AcademicsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import SkillsPage from './pages/SkillsPage';
import FuturePage from './pages/FuturePage';
import { Project } from './types';

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const pageTransition = {
    initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -20, filter: 'blur(10px)' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen selection:bg-amber-500/20 text-white bg-brand-dark overflow-x-hidden relative">
      <CustomCursor />
      <LiquidBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[100] no-print"
        style={{ scaleX }}
      />
      
      <Navbar scrolled={scrolled} />
      
      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.div 
            key="project-detail"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen pt-24"
          >
            <ProjectDetail project={activeProject} onBack={() => setActiveProject(null)} />
          </motion.div>
        ) : (
          <motion.main 
            key={location.pathname}
            {...pageTransition}
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 pb-32"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/competitions" element={<CompetitionsPage />} />
              <Route path="/skills" element={<SkillsPage onSelectProject={setActiveProject} />} />
              <Route path="/future" element={<FuturePage />} />
            </Routes>
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
