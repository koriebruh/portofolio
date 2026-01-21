import React from 'react';
import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionReveal = ({ children, id, className = '' }: SectionRevealProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
