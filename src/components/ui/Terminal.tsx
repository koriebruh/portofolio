import React from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

const Terminal = ({ children, className = '' }: TerminalProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
    >
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-xs font-mono text-gray-400">user@portfolio:~</div>
        <div className="w-14" /> {/* Spacer for centering */}
      </div>
      <div className="p-6 font-mono text-sm overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default Terminal;
