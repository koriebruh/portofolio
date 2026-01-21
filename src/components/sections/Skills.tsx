import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiGo, 
  SiSpringboot, 
  SiDocker, 
  SiRabbitmq, 
  SiMysql,
  SiSwagger
} from 'react-icons/si';
import SectionReveal from '../ui/SectionReveal';

// gRPC Logo Component since it's not in react-icons standard pack sometimes or for custom look
const GrpcLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M129.5 130.5V381H383.5V130.5H129.5ZM155 156H358V355.5H155V156Z"/>
    <path d="M298.5 220.5H332V291.5H298.5V220.5Z"/>
    <path d="M180 220.5H213.5V291.5H180V220.5Z"/>
    <path d="M129.5 96H383.5V121.5H129.5V96Z" fillOpacity="0.5"/>
    <path d="M129.5 390.5H383.5V416H129.5V390.5Z" fillOpacity="0.5"/>
  </svg>
);

const Skills = () => {
  const mainStack = [
    { name: "Golang", icon: <SiGo size={50} />, color: "#00ADD8", bg: "rgba(0, 173, 216, 0.1)" },
    { name: "Spring Boot", icon: <SiSpringboot size={50} />, color: "#6DB33F", bg: "rgba(109, 179, 63, 0.1)" },
    { name: "MySQL", icon: <SiMysql size={50} />, color: "#4479A1", bg: "rgba(68, 121, 161, 0.1)" },
    { name: "Docker", icon: <SiDocker size={50} />, color: "#2496ED", bg: "rgba(36, 150, 237, 0.1)" },
    { name: "RabbitMQ", icon: <SiRabbitmq size={50} />, color: "#FF6600", bg: "rgba(255, 102, 0, 0.1)" },
  ];

  const protocols = [
    { 
      name: "gRPC", 
      icon: (
        <div className="w-full h-full flex items-center justify-center font-bold text-lg tracking-tighter">
          gRPC
        </div>
      ), 
      color: "#244c5a", 
      bg: "rgba(36, 76, 90, 0.2)"
    },
    { 
      name: "REST", 
      icon: <SiSwagger size={40} />, 
      color: "#85EA2D", 
      bg: "rgba(133, 234, 45, 0.1)"
    },
    { 
      name: "Microservices", 
      icon: (
        <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="9" height="9" rx="2"/>
          <rect x="13" y="2" width="9" height="9" rx="2"/>
          <rect x="2" y="13" width="9" height="9" rx="2"/>
          <rect x="13" y="13" width="9" height="9" rx="2"/>
        </svg>
      ),
      color: "#A855F7", 
      bg: "rgba(168, 85, 247, 0.1)"
    }
  ];

  return (
    <SectionReveal id="skills" className="py-32 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Technologies</span>
        </h2>
        <p className="text-accent-dim text-lg mb-20 max-w-2xl mx-auto">
          High-performance stack for scalable systems.
        </p>

        {/* Main Stack Floating Icons */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-24">
          {mainStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                y: {
                  duration: 4 + idx, // Varied duration
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 5 + idx, // Varied duration
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
              className="relative group cursor-pointer"
            >
              <div 
                className="w-24 h-24 md:w-28 md:h-28 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(184,149,106,0.2)]"
                style={{ 
                  boxShadow: `0 0 30px ${tech.bg}`
                }}
              >
                <div className="text-accent group-hover:scale-110 transition-transform duration-300" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-mono text-gold whitespace-nowrap">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Protocols / Architecture Floating Icons */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
           {protocols.map((proto, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               animate={{ 
                 y: [10, -10, 10], // Opposite phase to main stack
                 rotate: [0, -5, 5, 0]
               }}
               transition={{ 
                 y: {
                   duration: 5 + idx,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: 1
                 },
                 rotate: {
                   duration: 6 + idx,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: 1
                 },
                 opacity: { duration: 0.5 },
                 scale: { duration: 0.5 }
               }}
               className="relative group cursor-pointer"
             >
               <div 
                 className="w-24 h-24 md:w-28 md:h-28 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(184,149,106,0.2)]"
                 style={{ 
                    boxShadow: `0 0 30px ${proto.bg}`
                 }}
               >
                 <div className="text-accent group-hover:scale-110 transition-transform duration-300" style={{ color: proto.color }}>
                   {proto.icon}
                 </div>
               </div>
                
               {/* Tooltip */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-mono text-accent-dim/80">
                 {proto.name}
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Skills;
