import { motion } from 'framer-motion';

const Starfish = ({ className, size = 100 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" stroke="#A68A64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M49 12 Q55 25 60 40 Q75 40 88 43 Q75 52 65 60 Q70 75 74 88 Q60 80 50 70 Q40 80 26 88 Q30 75 35 60 Q25 52 12 43 Q25 40 40 40 Q45 25 51 12 Z" fill="currentColor" fillOpacity="0.35" />
    <path d="M50 70 Q50 60 50 50" strokeWidth="1" strokeDasharray="2 2" fill="none" />
    <path d="M50 50 Q55 45 60 40" strokeWidth="1" strokeDasharray="2 2" fill="none" />
    <path d="M50 50 Q45 45 40 40" strokeWidth="1" strokeDasharray="2 2" fill="none" />
    <path d="M50 50 Q55 55 65 60" strokeWidth="1" strokeDasharray="2 2" fill="none" />
    <path d="M50 50 Q45 55 35 60" strokeWidth="1" strokeDasharray="2 2" fill="none" />
    <circle cx="50" cy="50" r="1.5" fill="#A68A64" stroke="none" />
    <circle cx="50" cy="35" r="1" fill="#A68A64" stroke="none" />
    <circle cx="43" cy="53" r="1" fill="#A68A64" stroke="none" />
    <circle cx="57" cy="53" r="1" fill="#A68A64" stroke="none" />
  </svg>
);

const ConchShell = ({ className, size = 100 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" stroke="#A68A64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Outline merged into a single path for fill, approximating the shape */}
    <path d="M20 70 C 15 50, 25 30, 45 20 C 65 10, 85 25, 80 45 C 75 65, 55 80, 35 75 C 25 72, 15 65, 20 70 Z" fill="currentColor" fillOpacity="0.35" />
    <path d="M45 20 C 55 25, 60 35, 55 45 C 50 55, 40 60, 35 55" fill="none" />
    <path d="M35 55 C 30 50, 30 40, 35 35 C 40 30, 50 30, 55 35" fill="none" />
    <path d="M55 35 C 60 40, 60 50, 55 55 C 50 60, 40 60, 35 55" fill="none" />
    <path d="M25 40 L 40 25" strokeWidth="1" fill="none" />
    <path d="M20 55 L 35 40" strokeWidth="1" fill="none" />
    <path d="M25 70 L 45 55" strokeWidth="1" fill="none" />
    <path d="M40 75 L 55 60" strokeWidth="1" fill="none" />
    <path d="M60 70 L 70 55" strokeWidth="1" fill="none" />
  </svg>
);

const ScallopShell = ({ className, size = 100 }: { className?: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" stroke="#A68A64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M50 85 C 30 85, 15 70, 15 50 C 15 30, 30 15, 50 15 C 70 15, 85 30, 85 50 C 85 70, 70 85, 50 85 Z" fill="currentColor" fillOpacity="0.35" />
    <path d="M30 85 L 25 95 L 45 90 L 55 90 L 75 95 L 70 85 Z" fill="currentColor" fillOpacity="0.35" />
    <path d="M50 90 L 50 15" strokeWidth="1" fill="none" />
    <path d="M45 90 L 30 20" strokeWidth="1" fill="none" />
    <path d="M55 90 L 70 20" strokeWidth="1" fill="none" />
    <path d="M40 88 L 20 35" strokeWidth="1" fill="none" />
    <path d="M60 88 L 80 35" strokeWidth="1" fill="none" />
    <path d="M35 85 L 15 50" strokeWidth="1" fill="none" />
    <path d="M65 85 L 85 50" strokeWidth="1" fill="none" />
  </svg>
);

// Better pseudo-random generator
const random = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Pastel colors for the ornaments
const pastelColors = [
  '#F4A4A4', // Soft Pink
  '#90E0DD', // Soft Mint
  '#D4A373', // Soft Sandy Peach
  '#A0C4E2', // Soft Blue
  '#E6C280', // Soft Sun Yellow
];

// Generate deterministic truly random scattered decorations
const decorations = Array.from({ length: 45 }).map((_, i) => {
  const r1 = random(i + 1);
  const r2 = random(i + 2);
  const r3 = random(i + 3);
  
  const typeIndex = Math.floor(random(i + 4) * 3);
  const Type = typeIndex === 0 ? Starfish : typeIndex === 1 ? ConchShell : ScallopShell;
  
  const size = 35 + Math.floor(r1 * 80); // 35px to 115px
  const top = `${Math.floor(r2 * 98)}%`;
  const left = `${Math.floor(r3 * 96)}%`;
  const baseRotation = Math.floor(random(i + 5) * 360);
  const animationDuration = 5 + (random(i + 6) * 6);
  
  const colorIndex = Math.floor(random(i + 7) * pastelColors.length);
  const color = pastelColors[colorIndex];
  
  return { id: i, Type, size, top, left, baseRotation, animationDuration, color };
});

const BeachDecorations = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{ opacity: 0.85 }}
    >
      {decorations.map((item) => (
        <motion.div 
          key={item.id}
          animate={{ 
            y: [0, 10, 0], 
            rotate: [item.baseRotation, item.baseRotation + 8, item.baseRotation] 
          }} 
          transition={{ duration: item.animationDuration, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{ top: item.top, left: item.left, color: item.color }}
        >
          <item.Type size={item.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default BeachDecorations;
