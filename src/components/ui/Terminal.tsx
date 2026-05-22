import React from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Terminal = ({ children, className = '', title = 'user@portfolio:~' }: TerminalProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-accent/5 shadow-[0_20px_50px_rgba(24,30,36,0.04)] ${className}`}
    >
      <div className="bg-white/40 px-5 py-3.5 flex items-center justify-between border-b border-accent/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#E57373]/80" />
          <div className="w-3 h-3 rounded-full bg-[#FFD54F]/80" />
          <div className="w-3 h-3 rounded-full bg-[#81C784]/80" />
        </div>
        <div className="text-xs font-mono font-medium text-accent/50">{title}</div>
        <div className="w-14" /> {/* Spacer for centering */}
      </div>
      <div className="p-6 font-mono text-sm overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default Terminal;
