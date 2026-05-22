import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ArrowRight, Star } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const Experience = () => {
  const items = [
    {
      type: 'work',
      role: 'Backend Developer Intern',
      org: 'Tech Startup Inc.',
      location: 'Jakarta, Indonesia',
      period: 'Jan 2024 – Present',
      current: true,
      color: '#27B5D9',
      colorBg: 'rgba(39,181,217,0.07)',
      colorBorder: 'rgba(39,181,217,0.18)',
      icon: <Briefcase size={16} />,
      highlights: [
        'Built & deployed 4 production microservices using Golang + gRPC',
        'Reduced database query latency by 40% via query optimization & indexing',
        'Implemented async event processing with RabbitMQ (12k msg/s peak)',
      ],
      badge: 'Full-time Internship',
    },
    {
      type: 'education',
      role: 'Bachelor of Computer Science',
      org: 'University of Technology',
      location: 'Bandung, Indonesia',
      period: '2019 – 2023',
      current: false,
      color: '#87C76D',
      colorBg: 'rgba(135,199,109,0.07)',
      colorBorder: 'rgba(135,199,109,0.18)',
      icon: <GraduationCap size={16} />,
      highlights: [
        'Graduated with Honors — GPA 3.87 / 4.00',
        'Thesis: "Distributed Transaction Handling in Microservice Systems"',
        'Lead Developer of the University Competitive Programming Club',
      ],
      badge: 'Graduated with Honors',
    },
  ];

  return (
    <SectionReveal id="experience" className="py-28 relative overflow-hidden bg-primary/20">
      {/* Subtle bg glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-72 bg-brandGreenLight/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-brandCyan/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-3 block">
            My Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5 text-accent">
            Journey <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">& Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-10">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card — takes half width each side */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white/85 backdrop-blur-md rounded-2xl border shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(24,30,36,0.05)]"
                    style={{ borderColor: `rgba(24,30,36,0.05)` }}
                  >
                    {/* Top accent bar */}
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${item.color}90, ${item.color}20)` }} />

                    <div className="p-7">
                      {/* Role + badge row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-bold text-accent text-lg font-heading leading-snug">{item.role}</h3>
                        {item.current && (
                          <span className="flex-shrink-0 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full flex items-center gap-1 mt-0.5"
                            style={{ backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                            Active
                          </span>
                        )}
                      </div>

                      {/* Org + location */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                        <span className="font-bold text-sm" style={{ color: item.color }}>{item.org}</span>
                        <span className="flex items-center gap-1 text-[11px] text-accent/40 font-sans">
                          <MapPin size={10} />
                          {item.location}
                        </span>
                      </div>

                      {/* Period */}
                      <div className="text-[11px] font-mono text-accent/40 mb-5 tracking-wide">{item.period}</div>

                      {/* Highlights list */}
                      <ul className="space-y-2.5 mb-5">
                        {item.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-2.5 text-sm text-accent/65 font-sans leading-relaxed">
                            <ArrowRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Bottom badge */}
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${item.color}10`, color: item.color, border: `1px solid ${item.color}20` }}>
                        <Star size={9} fill="currentColor" />
                        {item.badge}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot — hidden on mobile, shown md+ */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md border-2 bg-white"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionReveal>
  );
};

export default Experience;
