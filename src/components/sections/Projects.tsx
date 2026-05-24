import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  ArrowUpRight, Cpu, Database,
  GitBranch, Activity, Zap
} from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

type TabType = 'overview' | 'spec' | 'endpoint';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [activeSmall, setActiveSmall] = useState<number | null>(null);

  const featured = {
    title: "Enterprise Banking Microservices System",
    subtitle: "Event-Driven Financial Services Platform",
    description:
      "A production-grade, event-driven banking platform composed of 6 decoupled microservices. Handles financial transactions with strict consistency guarantees via the Outbox Transactional pattern, gRPC inter-service communication, and Kafka-based event streaming—engineered for fault tolerance under high concurrency.",
    repoUrl: "https://github.com/koriebruh/banking-services",
    tags: ["Spring Boot", "Golang", "gRPC", "Kafka", "PostgreSQL", "Redis", "Docker", "Nginx"],
    accent: "#27B5D9",
    accentBg: "rgba(39,181,217,0.06)",
    accentBorder: "rgba(39,181,217,0.15)",
    stats: [
      { label: "Microservices", value: "6 nodes", icon: <Cpu size={14} /> },
      { label: "Message Broker", value: "Apache Kafka", icon: <Activity size={14} /> },
      { label: "Observability", value: "Grafana Stack", icon: <Database size={14} /> },
      { label: "Resilience", value: "Circuit Breaker", icon: <Zap size={14} /> },
    ],
    spec: {
      "API Gateway": "Spring Cloud Gateway + Netflix Eureka",
      "Auth Mechanism": "JWT + TOTP (Two-Factor)",
      "Inter-Service RPC": "gRPC (Account → Transfer)",
      "Message Broker": "Apache Kafka (auth, account, transfer events)",
      "Persistence Layer": "PostgreSQL (per-service isolation)",
      "Cache Layer": "Redis (session & token store)",
      "Observability Stack": "Grafana, Alloy, Tempo, Loki",
      "Resilience Patterns": "Circuit Breaker, Retry, DLQ, Outbox, Fallback",
      "Load Balancer": "Nginx",
      "Containerisation": "Docker Compose",
      "Notification Delivery": "WebSocket + MailHog (SMTP)",
    },
  };

  const smallProjects = [
    {
      title: "Midtrans Payment Service",
      subtitle: "Integrated Payment Gateway",
      description:
        "A resilient, production-ready payment microservice integrating Midtrans as the payment gateway. Built with Golang, it implements full observability (distributed tracing, structured logging, and Prometheus metrics) alongside advanced resilience patterns—Circuit Breaker, Retry, DLQ, Outbox Transactional, and Fallback—to guarantee reliable transaction processing under adverse conditions.",
      tags: ["Golang", "Kafka", "PostgreSQL", "Redis", "Docker", "Grafana"],
      accent: "#2CC9DA",
      accentBg: "rgba(44,201,218,0.07)",
      icon: <Database size={20} className="text-brandTurquoise" />,
      stat1: { label: "Observability", value: "Full Stack" },
      stat2: { label: "Resilience", value: "5 Patterns" },
      repoUrl: "https://github.com/koriebruh/payment-service",
      comingSoon: false,
    },
    {
      title: "Next Project",
      subtitle: "Coming Soon",
      description:
        "Something exciting is currently being engineered. A new open-source project is in active development and will be showcased here once ready. Stay tuned.",
      tags: ["In Progress", "TBD"],
      accent: "#87C76D",
      accentBg: "rgba(135,199,109,0.07)",
      icon: <Terminal size={20} className="text-brandGreen" />,
      stat1: { label: "Status", value: "Building" },
      stat2: { label: "ETA", value: "Soon™" },
      repoUrl: null,
      comingSoon: true,
    },
  ];

  const tagColors = [
    "bg-brandCyan/10 text-brandCyan border-brandCyan/10",
    "bg-brandGreen/10 text-brandGreen border-brandGreen/10",
    "bg-brandTurquoise/10 text-brandTurquoise border-brandTurquoise/10",
    "bg-brandMint/20 text-[#248B87] border-brandMint/15",
    "bg-[#FF9800]/10 text-[#E68900] border-[#FF9800]/10",
    "bg-brandGreenLight/15 text-[#4a8a38] border-brandGreenLight/15",
  ];

  const tabs: { key: TabType; label: string }[] = [
    { key: 'overview', label: 'Architecture' },
    { key: 'spec', label: 'Tech Stack' },
    { key: 'endpoint', label: 'Deployment' },
  ];

  return (
    <SectionReveal id="projects" className="py-28 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,30,36,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(24,30,36,0.012)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-brandMint/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brandCyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-3 block">
            Engineering Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5 text-accent">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">Blueprints</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full mb-5" />
          <p className="text-accent/65 max-w-xl mx-auto font-sans text-base leading-relaxed">
            Production-grade microservices, infrastructure tooling, and distributed systems engineered for scale.
          </p>
        </div>

        {/* ── Featured Project Card ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-accent/5 overflow-hidden shadow-[0_20px_60px_rgba(24,30,36,0.04)] hover:shadow-[0_28px_70px_rgba(24,30,36,0.06)] transition-shadow duration-500"
        >
          {/* Card top bar */}
          <div className="bg-primary/30 border-b border-accent/5 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#E57373]/80" />
                <span className="w-3 h-3 rounded-full bg-[#FFD54F]/80" />
                <span className="w-3 h-3 rounded-full bg-[#81C784]/80" />
              </div>
              <div className="h-4 w-px bg-accent/10" />
              <span className="text-[11px] font-mono text-accent/40 font-semibold">
                banking_microservices.arch
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
              <span className="text-[10px] font-mono text-brandGreen font-bold">PRODUCTION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: project info */}
            <div className="lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r border-accent/5 flex flex-col justify-between gap-6">
              <div>
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4"
                  style={{ backgroundColor: featured.accentBg, color: featured.accent, border: `1px solid ${featured.accentBorder}` }}
                >
                  <GitBranch size={10} />
                  {featured.subtitle}
                </div>

                <h3 className="text-2xl font-bold text-accent font-heading leading-tight mb-3">
                  {featured.title}
                </h3>
                <p className="text-accent/65 text-sm leading-relaxed font-sans">
                  {featured.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag, i) => (
                  <span key={i} className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border ${tagColors[i % tagColors.length]}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {featured.stats.map((stat, i) => (
                  <div key={i} className="bg-primary/25 rounded-xl p-3 border border-accent/5 flex items-center gap-2.5">
                    <div className="text-brandCyan opacity-70">{stat.icon}</div>
                    <div>
                      <div className="text-[9px] font-mono text-accent/40 uppercase tracking-wide">{stat.label}</div>
                      <div className="text-sm font-bold text-accent font-mono">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={featured.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono font-bold text-brandCyan hover:text-brandCyan/80 transition-colors group self-start"
              >
                View on GitHub
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: interactive panel */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Tabs */}
              <div className="flex border-b border-accent/5 select-none">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-3.5 text-[11px] font-mono font-bold transition-all duration-200 border-r border-accent/5 last:border-r-0 ${
                      activeTab === tab.key
                        ? 'bg-white text-brandCyan border-b-2 border-b-brandCyan'
                        : 'text-accent/45 hover:text-accent bg-primary/10 hover:bg-primary/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab body */}
              <div className="flex-1 p-8 overflow-hidden">
                <AnimatePresence mode="wait">

                  {/* Overview / Architecture tab */}
                  {activeTab === 'overview' && (
                    <motion.div
                      key="ov"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="h-full flex flex-col gap-4"
                    >
                      {/* Request flow */}
                      <div className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">Ingress → Service Mesh → Data Layer</div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {[
                          { label: "Nginx", color: "#27B5D9" },
                          { label: "API Gateway", color: "#2CC9DA" },
                          { label: "Eureka", color: "#47DCE2" },
                          { label: "Auth Svc", color: "#87C76D" },
                          { label: "Account Svc", color: "#9FD693" },
                          { label: "Transfer Svc", color: "#6EC6A0" },
                        ].map((node, i, arr) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.07 }}
                              className="px-2.5 py-1.5 rounded-lg border text-[10px] font-mono font-bold whitespace-nowrap shadow-sm"
                              style={{ borderColor: `${node.color}30`, backgroundColor: `${node.color}08`, color: node.color }}
                            >
                              {node.label}
                            </motion.div>
                            {i < arr.length - 1 && (
                              <div className="flex gap-0.5">
                                <span className="w-1 h-1 rounded-full bg-accent/15" />
                                <span className="w-1 h-1 rounded-full bg-accent/10" />
                                <span className="w-1 h-1 rounded-full bg-accent/5" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Kafka event bus row */}
                      <div className="bg-brandCyan/8 border border-brandCyan/15 rounded-xl px-4 py-3 font-mono text-[10px] flex items-center gap-3 flex-wrap">
                        <span className="text-brandCyan/70 uppercase tracking-widest font-semibold">Kafka Topics →</span>
                        {["auth.event", "account.event", "transfer.event"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-brandCyan/15 text-brandCyan font-bold border border-brandCyan/25">{t}</span>
                        ))}
                        <span className="text-accent/35 ml-auto">consumed by Audit &amp; Notification</span>
                      </div>

                      {/* Resilience patterns */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Tx Integrity", value: "Outbox Pattern", color: "#27B5D9" },
                          { label: "Fault Tolerance", value: "Circuit Breaker + DLQ", color: "#87C76D" },
                          { label: "RPC Transport", value: "gRPC (Account ↔ Transfer)", color: "#2CC9DA" },
                          { label: "Observability", value: "Grafana · Tempo · Loki", color: "#6EC6A0" },
                        ].map((m, i) => (
                          <div key={i} className="bg-primary/20 rounded-xl p-3 border border-accent/5">
                            <div className="text-[9px] font-mono text-accent/40 uppercase mb-0.5">{m.label}</div>
                            <div className="text-[11px] font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <p className="text-accent/50 text-[11px] font-sans leading-relaxed mt-auto">
                        Each service maintains its own isolated PostgreSQL database. Cross-service financial operations are coordinated via gRPC with Kafka-driven event propagation, ensuring eventual consistency through the Outbox Transactional pattern.
                      </p>
                    </motion.div>
                  )}

                  {/* System Spec tab */}
                  {activeTab === 'spec' && (
                    <motion.div
                      key="sp"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-0 divide-y divide-accent/5 font-mono text-xs"
                    >
                      <div className="text-[10px] font-mono text-accent/40 uppercase tracking-widest mb-4">Technical Specifications</div>
                      {Object.entries(featured.spec).map(([key, val], i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-center justify-between py-3"
                        >
                          <span className="text-accent/45 font-semibold">{key}</span>
                          <span className="font-bold text-accent text-right max-w-[55%] leading-snug">{val}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Deployment tab */}
                  {activeTab === 'endpoint' && (
                    <motion.div
                      key="ep"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col gap-4 h-full"
                    >
                      {/* Status banner */}
                      <div className="bg-white/70 border border-accent/8 rounded-xl p-3.5 flex items-center justify-between font-mono text-[11px] select-none shadow-sm">
                        <div className="flex items-center gap-2.5">
                          <span className="bg-brandGreen/15 text-brandGreen font-bold px-2 py-0.5 rounded text-[10px] border border-brandGreen/20">STATUS</span>
                          <span className="text-accent/50">banking-services.local</span>
                          <span className="text-accent font-semibold">/api/v1/account/balance</span>
                        </div>
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-brandGreenLight border border-brandGreen/20 px-2.5 py-1 rounded-lg bg-brandGreen/8">
                          <span className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
                          Local Only
                        </span>
                      </div>

                      {/* Info panel */}
                      <div className="bg-white/70 border border-accent/8 rounded-xl flex-1 p-5 font-mono text-[11px] overflow-y-auto leading-relaxed flex flex-col justify-between shadow-sm">
                        <div>
                          <div className="text-accent/40 text-[10px] uppercase tracking-widest mb-4 border-b border-accent/8 pb-3">Deployment Environment · Local / Docker Compose</div>
                          <div className="space-y-3">
                            {[
                              { svc: "api-gateway",      port: ":8080", runtime: "Spring Cloud Gateway" },
                              { svc: "auth-service",     port: ":8081", runtime: "Spring Boot + Redis"   },
                              { svc: "account-service",  port: ":8082", runtime: "Spring Boot + gRPC"    },
                              { svc: "transfer-service", port: ":8083", runtime: "Golang + gRPC client"  },
                              { svc: "notification-svc", port: ":8084", runtime: "Golang + WebSocket"    },
                              { svc: "audit-service",    port: ":8085", runtime: "Golang + Kafka"        },
                            ].map((row, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen/70" />
                                  <span className="text-accent/80 font-semibold">{row.svc}</span>
                                  <span className="text-accent/35">{row.port}</span>
                                </div>
                                <span className="text-[10px] text-accent/45">{row.runtime}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-accent/8 pt-4 mt-4">
                          <div className="text-accent/40 text-[10px] leading-relaxed font-sans italic">
                            Runs locally via Docker Compose. Cloud deployment is not yet available.
                            Source code &amp; docker-compose.yml are publicly available on GitHub.
                          </div>
                          <a
                            href="https://github.com/koriebruh/banking-services"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 mt-4 text-brandCyan text-[10px] font-bold hover:text-brandCyan/80 transition-colors"
                          >
                            <GitBranch size={11} />
                            github.com/koriebruh/banking-services
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Two Smaller Project Cards ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              onHoverStart={() => !proj.comingSoon && setActiveSmall(idx)}
              onHoverEnd={() => setActiveSmall(null)}
              className={`relative bg-white/80 backdrop-blur-xl rounded-2xl border overflow-hidden shadow-[0_12px_40px_rgba(24,30,36,0.03)] transition-all duration-300 ${
                proj.comingSoon
                  ? 'border-accent/5 opacity-70 cursor-default'
                  : 'border-accent/5 hover:shadow-[0_18px_50px_rgba(24,30,36,0.05)] hover:border-accent/10 cursor-default group'
              }`}
            >
              {/* Coming soon overlay */}
              {proj.comingSoon && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/60 backdrop-blur-[2px] rounded-2xl">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-14 h-14 rounded-2xl bg-brandGreen/10 border border-brandGreen/20 flex items-center justify-center"
                  >
                    <Terminal size={22} className="text-brandGreen" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-sm font-bold font-heading text-accent">Coming Soon</div>
                    <div className="text-[11px] font-mono text-accent/45 mt-0.5">Next project in development</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-brandGreen/70 border border-brandGreen/20 px-3 py-1 rounded-full bg-brandGreen/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
                    In Progress
                  </div>
                </div>
              )}

              {/* Top stripe accent */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${proj.accent}80, ${proj.accent}20)` }} />

              <div className={`p-7 ${proj.comingSoon ? 'blur-[2px] select-none pointer-events-none' : ''}`}>
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm flex-shrink-0"
                    style={{ backgroundColor: proj.accentBg, borderColor: `${proj.accent}25` }}
                  >
                    {proj.icon}
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-accent/25 group-hover:text-brandCyan transition-colors mt-1"
                  />
                </div>

                <div
                  className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1"
                  style={{ color: proj.accent }}
                >
                  {proj.subtitle}
                </div>
                <h3 className="text-lg font-bold text-accent font-heading mb-3 leading-tight">
                  {proj.title}
                </h3>
                <p className="text-accent/60 text-sm leading-relaxed font-sans mb-5">
                  {proj.description}
                </p>

                {/* Mini stats */}
                <div className="flex gap-3 mb-5">
                  <div className="flex-1 bg-primary/20 rounded-xl p-3 border border-accent/5 text-center">
                    <div className="text-[9px] font-mono text-accent/40 uppercase tracking-wide">{proj.stat1.label}</div>
                    <div className="text-base font-bold font-mono" style={{ color: proj.accent }}>{proj.stat1.value}</div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-xl p-3 border border-accent/5 text-center">
                    <div className="text-[9px] font-mono text-accent/40 uppercase tracking-wide">{proj.stat2.label}</div>
                    <div className="text-base font-bold font-mono" style={{ color: proj.accent }}>{proj.stat2.value}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border ${tagColors[tIdx % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover reveal bottom bar — only for non-comingSoon cards */}
              {!proj.comingSoon && (
                <AnimatePresence>
                  {activeSmall === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-accent/5"
                    >
                      <div className="px-7 py-4 flex items-center justify-between bg-primary/10">
                        <span className="text-[10px] font-mono text-accent/40">View source &amp; documentation</span>
                        <a
                          href={proj.repoUrl!}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-3 py-1.5 rounded-lg border transition-all"
                          style={{ color: proj.accent, borderColor: `${proj.accent}30`, backgroundColor: proj.accentBg }}
                        >
                          <GitBranch size={10} />
                          Open Repository
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </SectionReveal>
  );
};

export default Projects;
