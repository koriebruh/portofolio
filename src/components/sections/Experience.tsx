import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const Experience = () => {
  const timeline = [
    {
      type: "work",
      role: "Backend Developer Intern",
      organization: "Tech Startup Inc.",
      period: "Jan 2024 - Present",
      description: "Developed and maintained microservices using Golang and gRPC. Optimized database queries reducing response time by 40%. Collaborated with frontend team for API integration.",
      icon: <Briefcase size={20} />
    },
    {
      type: "education",
      role: "Bachelor of Computer Science",
      organization: "University of Technology",
      period: "2019 - 2023",
      description: "Graduated with Honors. Specialized in Distributed Systems and Cloud Computing. Lead Developer of the university's coding club.",
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <SectionReveal id="experience" className="py-20 bg-primary-dark/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Journey <span className="text-gold">& Education</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-primary-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-gold transition-colors">
                <span className="text-gold">{item.icon}</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl border border-white/5 hover:border-gold/20 transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <h3 className="font-bold text-accent text-lg">{item.role}</h3>
                  <div className="flex items-center gap-1 text-xs font-mono text-gold bg-gold/10 px-2 py-1 rounded">
                    <Calendar size={12} />
                    {item.period}
                  </div>
                </div>
                <div className="text-accent-dim font-medium mb-3">{item.organization}</div>
                <p className="text-sm text-accent-dim/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Experience;
