
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ProjectDetail from './components/ProjectDetail';
import AboutMe from './pages/AboutMe';
import AcademicsPage from './pages/AcademicsPage';
import SkillsPage from './pages/SkillsPage';
import FuturePage from './pages/FuturePage';
import { Project } from './types';

const AppContent: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProject]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.div 
            key="project-detail"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[60vh] flex items-center"
          >
            <ProjectDetail project={activeProject} onBack={() => setActiveProject(null)} />
          </motion.div>
        ) : (
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/skills" element={<SkillsPage onSelectProject={setActiveProject} />} />
            <Route path="/future" element={<FuturePage />} />
          </Routes>
        )}
      </AnimatePresence>
    </Layout>
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
