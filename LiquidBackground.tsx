
import React from 'react';
import { motion } from 'framer-motion';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-brand-dark pointer-events-none">
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-500/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-amber-600/5 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full"
      />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '48px 48px' }}></div>
    </div>
  );
};

export default LiquidBackground;
