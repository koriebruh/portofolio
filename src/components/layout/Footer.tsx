import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-accent-dim text-sm">
          © {new Date().getFullYear()} Backend Dev. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm text-accent-dim">
          <motion.a whileHover={{ color: '#b8956a' }} href="#" className="hover:text-gold transition-colors">Privacy Policy</motion.a>
          <motion.a whileHover={{ color: '#b8956a' }} href="#" className="hover:text-gold transition-colors">Terms of Service</motion.a>
        </div>

        <div className="flex items-center gap-2 text-xs text-accent-dim/50">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          System Status: Operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;
