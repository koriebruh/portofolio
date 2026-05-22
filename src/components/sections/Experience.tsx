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
      icon: <Briefcase size={18} />
    },
    {
      type: "education",
      role: "Bachelor of Computer Science",
      organization: "University of Technology",
      period: "2019 - 2023",
      description: "Graduated with Honors. Specialized in Distributed Systems and Cloud Computing. Lead Developer of the university's coding club.",
      icon: <GraduationCap size={18} />
    }
  ];

  return (
    <SectionReveal id="experience" className="py-24 relative overflow-hidden bg-primary/20">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-2 block">My Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-accent">
            Journey <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">& Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full" />
        </div>

        <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/10 before:to-transparent">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-none"
            >
              {/* Timeline Icon Dot */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-2xl border bg-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300 ${
                item.type === 'work' 
                  ? 'border-brandCyan/20 text-brandCyan group-hover:bg-brandCyan group-hover:text-white' 
                  : 'border-brandGreen/20 text-brandGreen group-hover:bg-brandGreen group-hover:text-white'
              }`}>
                {item.icon}
              </div>

              {/* Card content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-accent/5 hover:border-brandCyan/25 shadow-sm hover:shadow-[0_12px_25px_rgba(24,30,36,0.03)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                  <h3 className="font-bold text-accent text-lg">{item.role}</h3>
                  <div className={`flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-lg border ${
                    item.type === 'work' 
                      ? 'text-brandCyan bg-brandCyan/10 border-brandCyan/10' 
                      : 'text-brandGreen bg-brandGreen/10 border-brandGreen/10'
                  }`}>
                    <Calendar size={12} />
                    {item.period}
                  </div>
                </div>
                <div className="text-brandCyan font-semibold text-sm mb-4">{item.organization}</div>
                <p className="text-sm text-accent/65 leading-relaxed font-sans">
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
