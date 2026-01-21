import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Globe } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const About = () => {
  const cards = [
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Backend Architecture",
      description: "Designing robust, scalable server-side applications using microservices patterns."
    },
    {
      icon: <Database className="w-8 h-8 text-gold" />,
      title: "Database Design",
      description: "Optimizing data schemas and queries for MySQL and Redis to ensure high performance."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "API Development",
      description: "Building RESTful and gRPC APIs with focus on security, documentation, and efficiency."
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable, testable code following SOLID principles and best practices."
    }
  ];

  return (
    <SectionReveal id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dim">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-accent-dim max-w-2xl mx-auto leading-relaxed">
            I am a fresh Computer Science graduate with a deep passion for the invisible machinery that powers the modern web. 
            While others focus on pixels, I focus on performance, scalability, and system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-6 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <div className="mb-4 bg-primary-dark/50 w-16 h-16 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-gold/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent group-hover:text-gold transition-colors">{card.title}</h3>
              <p className="text-sm text-accent-dim/80 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default About;
