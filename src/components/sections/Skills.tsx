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

const Skills = () => {
  const mainStack = [
    { name: "Golang", icon: <SiGo size={46} />, color: "#27B5D9", bg: "rgba(39, 181, 217, 0.08)" },
    { name: "Spring Boot", icon: <SiSpringboot size={46} />, color: "#87C76D", bg: "rgba(135, 199, 109, 0.08)" },
    { name: "MySQL", icon: <SiMysql size={46} />, color: "#2CC9DA", bg: "rgba(44, 201, 218, 0.08)" },
    { name: "Docker", icon: <SiDocker size={46} />, color: "#47DCE2", bg: "rgba(71, 220, 226, 0.08)" },
    { name: "RabbitMQ", icon: <SiRabbitmq size={46} />, color: "#FF9800", bg: "rgba(255, 152, 0, 0.08)" },
  ];

  const protocols = [
    { 
      name: "gRPC", 
      icon: (
        <div className="w-full h-full flex items-center justify-center font-bold text-base tracking-tighter">
          gRPC
        </div>
      ), 
      color: "#27B5D9", 
      bg: "rgba(39, 181, 217, 0.08)"
    },
    { 
      name: "REST", 
      icon: <SiSwagger size={36} />, 
      color: "#87C76D", 
      bg: "rgba(135, 199, 109, 0.08)"
    },
    { 
      name: "Microservices", 
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="9" height="9" rx="2"/>
          <rect x="13" y="2" width="9" height="9" rx="2"/>
          <rect x="2" y="13" width="9" height="9" rx="2"/>
          <rect x="13" y="13" width="9" height="9" rx="2"/>
        </svg>
      ),
      color: "#2CC9DA", 
      bg: "rgba(44, 201, 218, 0.08)"
    }
  ];

  return (
    <SectionReveal id="skills" className="py-28 relative overflow-hidden bg-primary/20">
      {/* Soft Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brandMint/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brandCyan/10 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-2 block">Technical Expertise</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-accent">
          Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">Technologies</span>
        </h2>
        <p className="text-accent/60 text-lg mb-20 max-w-2xl mx-auto font-sans">
          A modern, high-performance stack optimized for scalable systems and microservices.
        </p>
 
        {/* Main Stack Floating Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-24">
          {mainStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [-6, 6, -6],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                y: {
                  duration: 5 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 6 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="relative group cursor-pointer animate-none"
            >
              <div 
                className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-md rounded-2xl border border-accent/5 flex items-center justify-center transition-all duration-300 group-hover:border-brandCyan/30 group-hover:shadow-[0_12px_25px_rgba(24,30,36,0.03)]"
                style={{ 
                  boxShadow: `0 8px 30px ${tech.bg}`
                }}
              >
                <div className="text-accent group-hover:scale-105 transition-transform duration-300" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-mono font-semibold text-brandCyan bg-white border border-accent/5 px-2.5 py-1 rounded-lg shadow-sm whitespace-nowrap">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
 
        {/* Protocols / Architecture Floating Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
           {protocols.map((proto, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.85 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               animate={{ 
                 y: [6, -6, 6], 
                 rotate: [0, -2, 2, 0]
               }}
               transition={{ 
                 y: {
                   duration: 6 + idx,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: 0.5
                 },
                 rotate: {
                   duration: 7 + idx,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: 0.5
                 },
                 opacity: { duration: 0.4 },
                 scale: { duration: 0.4 }
               }}
               className="relative group cursor-pointer"
             >
               <div 
                 className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-md rounded-2xl border border-accent/5 flex items-center justify-center transition-all duration-300 group-hover:border-brandCyan/30 group-hover:shadow-[0_12px_25px_rgba(24,30,36,0.03)]"
                 style={{ 
                    boxShadow: `0 8px 30px ${proto.bg}`
                 }}
               >
                 <div className="text-accent group-hover:scale-105 transition-transform duration-300" style={{ color: proto.color }}>
                   {proto.icon}
                 </div>
               </div>
                
               {/* Tooltip */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-mono font-semibold text-brandCyan bg-white border border-accent/5 px-2.5 py-1 rounded-lg shadow-sm whitespace-nowrap">
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
