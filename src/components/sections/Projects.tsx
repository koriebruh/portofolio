import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Layout, Terminal } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';
import Sparkles from '../ui/Sparkles';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices",
      description: "A distributed system handling 10k+ requests/sec using Golang and gRPC. Implemented saga pattern for distributed transactions.",
      tags: ["Golang", "gRPC", "RabbitMQ", "PostgreSQL"],
      icon: <ShoppingCart size={32} className="text-gold" />
    },
    {
      title: "Cloud Infrastructure Dashboard",
      description: "Real-time monitoring dashboard for container orchestration clusters with metrics visualization.",
      tags: ["React", "TypeScript", "WebSocket", "Go"],
      icon: <Layout size={32} className="text-blue-400" />
    },
    {
      title: "CLI Dev Tools",
      description: "A developer productivity tool for scaffolding backend services with built-in best practices.",
      tags: ["Rust", "CLI", "Systems Programming"],
      icon: <Terminal size={32} className="text-green-400" />
    }
  ];

  return (
    <SectionReveal id="projects" className="py-20 relative overflow-hidden">
      <Sparkles color="#b8956a" count={40} minSize={2} maxSize={6} className="opacity-60" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-accent-dim max-w-2xl mx-auto">
            A selection of projects that demonstrate my ability to solve complex engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full group border border-white/5 hover:border-gold/30 transition-colors"
            >
              <div className="h-48 bg-primary-light/20 relative overflow-hidden group-hover:bg-primary-light/30 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-primary-dark/50 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(184,149,106,0.15)]">
                     {project.icon}
                   </div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-accent group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-accent-dim/80 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-accent-dim border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Projects;
