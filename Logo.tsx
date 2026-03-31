
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 100, className = "" }) => {
  return (
    <div 
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <img 
          src="/logo.png" 
          alt="DG Logo" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 border-[0.05em] border-amber-500/20 rounded-full animate-pulse pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Logo;
