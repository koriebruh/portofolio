import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ArrowRight, Star, BookOpen, Download, ExternalLink, Award } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const Experience = () => {
  const items = [
    {
      type: 'work',
      role: 'Backend Engineer',
      org: 'PT. Firstudio',
      location: 'Semarang, Indonesia',
      period: 'Jan 2025 – Jul 2025',
      current: false,
      color: '#27B5D9',
      colorBg: 'rgba(39,181,217,0.07)',
      colorBorder: 'rgba(39,181,217,0.18)',
      icon: <Briefcase size={16} />,
      highlights: [
        'Architected and delivered a Citizen Management System handling 24,000+ resident records with 43 REST API endpoints — enabling city administrators to manage population data across departments in real time.',
        'Hardened the service with API Key authentication and request rate limiting to protect against abuse and enforce fair usage policies.',
        'Containerised and deployed the entire application to a production VPS using Docker, ensuring consistent, reproducible releases across environments.',
      ],
      stack: ['Golang', 'MySQL', 'Docker'],
      badge: 'Backend Engineer',
    },
    {
      type: 'work',
      role: 'Web Developer Intern',
      org: 'PWM Jawa Tengah',
      location: 'Semarang, Indonesia',
      period: 'Feb 2025 – Apr 2025',
      current: false,
      color: '#2CC9DA',
      colorBg: 'rgba(44,201,218,0.07)',
      colorBorder: 'rgba(44,201,218,0.18)',
      icon: <Briefcase size={16} />,
      highlights: [
        'Developed and launched websites for two organisational divisions, encompassing event registration, donation tracking, and institutional information pages.',
        'Fully digitised previously manual administrative workflows, reducing coordination overhead and accelerating data access within two months of project kick-off.',
      ],
      stack: ['WordPress', 'MySQL'],
      badge: 'Web Development Internship',
    },
    {
      type: 'work',
      role: 'Student Mentor',
      org: 'SMA Kanisius',
      location: 'Semarang, Indonesia',
      period: 'Dec 2023',
      current: false,
      color: '#87C76D',
      colorBg: 'rgba(135,199,109,0.07)',
      colorBorder: 'rgba(135,199,109,0.18)',
      icon: <Briefcase size={16} />,
      highlights: [
        'Facilitated a programming fundamentals workshop for junior high school students, introducing core concepts of computational thinking and logical problem-solving.',
        'Designed hands-on exercises to build confidence in approaching algorithmic challenges from first principles.',
      ],
      stack: ['Teaching', 'Programming Fundamentals'],
      badge: 'Workshop Facilitator',
    },
    {
      type: 'education',
      role: 'Bachelor of Informatics Engineering',
      org: 'Universitas Dian Nuswantoro',
      location: 'Semarang, Indonesia',
      period: 'Sep 2022 – Feb 2026 · ~3.5 years',
      current: false,
      color: '#9FD693',
      colorBg: 'rgba(159,214,147,0.07)',
      colorBorder: 'rgba(159,214,147,0.18)',
      icon: <GraduationCap size={16} />,
      highlights: [
        'Graduated with a cumulative GPA of 3.65 / 4.00, demonstrating consistent academic performance throughout the programme.',
        'Focused elective coursework on distributed systems, database engineering, and software architecture patterns.',
        'Actively contributed to peer learning communities and participated in faculty-level research under academic supervision.',
      ],
      stack: [],
      badge: 'GPA 3.65 / 4.00',
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
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5 text-accent">
            Experience <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">&amp; Education</span>
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
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
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
                      {/* Role + type icon */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-bold text-accent text-lg font-heading leading-snug">{item.role}</h3>
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: item.colorBg, color: item.color }}
                        >
                          {item.type === 'education' ? <GraduationCap size={14} /> : <Briefcase size={14} />}
                        </div>
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

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-5">
                        {item.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-2.5 text-sm text-accent/65 font-sans leading-relaxed">
                            <ArrowRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Stack tags */}
                      {item.stack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {item.stack.map((s, si) => (
                            <span
                              key={si}
                              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border"
                              style={{ backgroundColor: `${item.color}10`, color: item.color, borderColor: `${item.color}25` }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bottom badge */}
                      <div
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: `${item.color}10`, color: item.color, border: `1px solid ${item.color}20` }}
                      >
                        <Star size={9} fill="currentColor" />
                        {item.badge}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md border-2 bg-white"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Publication Card ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase block">
              Academic Publication
            </span>
          </div>

          <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-accent/5 shadow-sm overflow-hidden hover:shadow-[0_16px_40px_rgba(24,30,36,0.05)] transition-shadow duration-300">
            {/* Top accent bar — gold/amber to signal award */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #F59E0B90, #87C76D40)' }} />

            <div className="p-7 md:p-9">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

                {/* Left: award icon block */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shadow-sm">
                    <Award size={28} className="text-amber-500" />
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  {/* Award badge */}
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-amber-50 text-amber-600 border border-amber-200/60">
                    <Star size={9} fill="currentColor" />
                    Best Paper Award · IEEE Xplore · ISEMANTIC 2025
                  </div>

                  <h3 className="text-xl font-bold font-heading text-accent leading-tight mb-2">
                    Customer Churn Prediction Using CatBoost with Domain-Specific Feature Engineering
                  </h3>

                  <p className="text-sm text-accent/60 font-sans leading-relaxed mb-5">
                    A peer-reviewed machine learning paper presenting a churn prediction pipeline leveraging
                    CatBoost and targeted feature engineering on domain-specific behavioural signals.
                    Recognised as the <strong className="text-accent/80">Best Paper</strong> among all submissions
                    at the 2025 International Seminar on Application for Technology of Information and Communication
                    (ISEMANTIC), published on <span className="text-brandCyan font-semibold">IEEE Xplore</span>.
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono text-accent/45 mb-6">
                    <span>First Author</span>
                    <span>·</span>
                    <span>ISEMANTIC 2025</span>
                    <span>·</span>
                    <span>IEEE Xplore</span>
                    <span>·</span>
                    <span>Machine Learning</span>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://ieeexplore.ieee.org/document/11291801"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brandCyan text-white text-sm font-bold hover:bg-brandCyan/90 transition-all shadow-[0_4px_14px_rgba(39,181,217,0.2)] hover:shadow-[0_6px_18px_rgba(39,181,217,0.3)]"
                    >
                      <ExternalLink size={14} />
                      Read on IEEE Xplore
                    </a>
                    <a
                      href="/paper.pdf"
                      download="Muhammad_Jamaludin_Nur_IEEE_Paper.pdf"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-accent/10 text-accent text-sm font-bold hover:border-brandCyan/30 hover:text-brandCyan transition-all shadow-sm"
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                    <a
                      href="/paper.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-accent/10 text-accent text-sm font-bold hover:border-brandCyan/30 hover:text-brandCyan transition-all shadow-sm"
                    >
                      <BookOpen size={14} />
                      Read PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionReveal>
  );
};

export default Experience;
