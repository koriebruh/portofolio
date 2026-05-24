import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiGo,
  SiSpringboot,
  SiDocker,
  SiRabbitmq,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiPostgresql,
  SiSwagger
} from 'react-icons/si';
import SectionReveal from '../ui/SectionReveal';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    {
      label: "Languages & Runtimes",
      color: "#27B5D9",
      bg: "rgba(39,181,217,0.07)",
      border: "rgba(39,181,217,0.15)",
      skills: [
        { name: "Golang", icon: <SiGo size={28} />, level: 90 },
        { name: "Java", icon: <SiSpringboot size={28} />, level: 80 },
      ]
    },
    {
      label: "Frameworks & APIs",
      color: "#87C76D",
      bg: "rgba(135,199,109,0.07)",
      border: "rgba(135,199,109,0.15)",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot size={28} />, level: 82 },
        { name: "REST API", icon: <SiSwagger size={28} />, level: 92 },
      ]
    },
    {
      label: "Infrastructure",
      color: "#2CC9DA",
      bg: "rgba(44,201,218,0.07)",
      border: "rgba(44,201,218,0.15)",
      skills: [
        { name: "Docker", icon: <SiDocker size={28} />, level: 85 },
        { name: "Kubernetes", icon: <SiKubernetes size={28} />, level: 70 },
      ]
    },
    {
      label: "Data & Messaging",
      color: "#9FD693",
      bg: "rgba(159,214,147,0.07)",
      border: "rgba(159,214,147,0.15)",
      skills: [
        { name: "MySQL", icon: <SiMysql size={28} />, level: 88 },
        { name: "PostgreSQL", icon: <SiPostgresql size={28} />, level: 82 },
        { name: "Redis", icon: <SiRedis size={28} />, level: 78 },
        { name: "RabbitMQ", icon: <SiRabbitmq size={28} />, level: 75 },
      ]
    },
  ];

  const protocols = [
    { name: "gRPC", desc: "Remote procedure calls", color: "#27B5D9" },
    { name: "REST", desc: "HTTP/1.1 & HTTP/2", color: "#87C76D" },
    { name: "WebSocket", desc: "Realtime bi-directional", color: "#2CC9DA" },
    { name: "AMQP", desc: "Async message protocol", color: "#FF9800" },
    { name: "Microservices", desc: "Distributed architecture", color: "#9FD693" },
    { name: "Git & CI/CD", desc: "Version control pipeline", color: "#47DCE2" },
  ];

  return (
    <SectionReveal id="skills" className="py-28 relative overflow-hidden bg-transparent">
      {/* Soft background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brandMint/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brandCyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-3 block">Technical Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5 text-accent">
            Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full mb-5" />
          <p className="text-accent/60 text-base max-w-xl mx-auto font-sans leading-relaxed">
            A refined backend stack — engineered for performance, reliability, and horizontal scalability.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((cat, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cIdx * 0.08, duration: 0.5 }}
              className="bg-white/75 backdrop-blur-md rounded-2xl border border-accent/5 p-6 shadow-sm hover:shadow-md hover:border-accent/10 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-5 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent/50">{cat.label}</span>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group cursor-default"
                    onMouseEnter={() => setHoveredSkill(`${cIdx}-${sIdx}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                          style={{ backgroundColor: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-sm font-semibold text-accent">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold" style={{ color: cat.color }}>
                        {hoveredSkill === `${cIdx}-${sIdx}` ? `${skill.level}%` : ''}
                      </span>
                    </div>
                    {/* Proficiency bar */}
                    <div className="h-1 bg-accent/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: cat.color, opacity: 0.7 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: cIdx * 0.08 + sIdx * 0.06 + 0.3, duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Protocols & patterns row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl border border-accent/5 p-6 shadow-sm"
        >
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent/40 mb-5 text-center">
            Protocols & Architecture Patterns
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {protocols.map((proto, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/80 border border-accent/5 hover:border-accent/15 shadow-sm cursor-default group transition-all duration-200 text-center"
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: proto.color }}
                />
                <span className="text-xs font-bold font-mono" style={{ color: proto.color }}>{proto.name}</span>
                <span className="text-[9px] font-sans text-accent/40 leading-tight">{proto.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionReveal>
  );
};

export default Skills;
