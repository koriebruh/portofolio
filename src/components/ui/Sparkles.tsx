import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  color?: string;
  minSize?: number;
  maxSize?: number;
  count?: number;
  className?: string;
}

interface SparkleStyle {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
}

const Sparkles: React.FC<SparkleProps> = ({
  color = '#b8956a', // gold
  minSize = 2,
  maxSize = 6,
  count = 40,
  className = ''
}) => {
  const [sparkles, setSparkles] = useState<SparkleStyle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * (maxSize - minSize) + minSize,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 1.5, // Slower, more elegant duration
      }));
    };

    setSparkles(generateSparkles());
  }, [count, minSize, maxSize]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: color,
            boxShadow: `0 0 ${sparkle.size * 3}px ${color}`, // Increased glow
            filter: 'brightness(1.5)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
