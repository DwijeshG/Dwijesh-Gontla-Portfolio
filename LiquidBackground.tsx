
import React from 'react';
import { motion } from 'framer-motion';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-brand-dark pointer-events-none">
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.4, 0.8, 1],
          rotate: [0, 90, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] bg-amber-500/10 blur-[140px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -200, 150, 0],
          y: [0, 200, -150, 0],
          scale: [1, 1.5, 0.9, 1],
          rotate: [0, -120, -240, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-25%] right-[-15%] w-[80%] h-[80%] bg-amber-600/10 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 100, -150, 0],
          y: [0, 100, 150, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[30%] left-[20%] w-[30%] h-[30%] bg-amber-400/5 blur-[80px] rounded-full"
      />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '64px 64px' }}></div>
    </div>
  );
};

export default LiquidBackground;
