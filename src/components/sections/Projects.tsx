import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Terminal,
  ArrowUpRight, Play, Check, Cpu, Database,
  GitBranch, Activity, Zap
} from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

type TabType = 'overview' | 'spec' | 'endpoint';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [simRunning, setSimRunning] = useState(false);
  const [simDone, setSimDone] = useState(false);
  const [activeSmall, setActiveSmall] = useState<number | null>(null);

  const featured = {
    title: "E-Commerce Microservices Platform",
    subtitle: "Distributed SAGA Orchestration Engine",
    description:
      "A production-grade distributed system architected to handle 10,000+ concurrent transactions per second. Implements the SAGA pattern for distributed transaction management across independent microservices—ensuring strong eventual consistency without a global lock.",
    tags: ["Golang", "gRPC", "RabbitMQ", "PostgreSQL", "Docker", "Redis"],
    accent: "#27B5D9",
    accentBg: "rgba(39,181,217,0.06)",
    accentBorder: "rgba(39,181,217,0.15)",
    stats: [
      { label: "Throughput", value: "12k req/s", icon: <Zap size={14} /> },
      { label: "Avg Latency", value: "14ms P99", icon: <Activity size={14} /> },
      { label: "Uptime SLA", value: "99.99%", icon: <Database size={14} /> },
      { label: "Microservices", value: "6 nodes", icon: <Cpu size={14} /> },
    ],
    spec: {
      "Throughput Limit": "12,000 msg/s",
      "Message Broker": "RabbitMQ AMQP v3",
      "Persistence Layer": "PostgreSQL w/ Citus cluster",
      "Cache Layer": "Redis Sentinel (HA)",
      "Design Pattern": "SAGA Orchestration",
      "Transport Protocol": "HTTP/2 cleartext (H2C)",
    },
    endpoint: "GET /api/v1/order/status/4921",
    response: `{
  "order_id": "4921",
  "status": "COMPLETED",
  "saga_stages": {
    "payment_service":   { "status": "APPROVED", "duration": "2ms"  },
    "inventory_service": { "status": "RESERVED", "duration": "1ms"  },
    "delivery_service":  { "status": "SHIPPED",  "duration": "12ms" }
  },
  "total_latency": "15.4ms",
  "node": "go-svc-pod-3"
}`,
  };

  const smallProjects = [
    {
      title: "Cloud Infrastructure Dashboard",
      subtitle: "Real-time Cluster Monitoring",
      description:
        "Real-time monitoring dashboard for Kubernetes orchestration clusters. Streams live pod metrics via TLS WebSockets with Prometheus time-series backend.",
      tags: ["React", "TypeScript", "WebSocket", "Go", "Prometheus"],
      accent: "#2CC9DA",
      accentBg: "rgba(44,201,218,0.07)",
      icon: <LayoutDashboard size={20} className="text-brandTurquoise" />,
      stat1: { label: "Active Pods", value: "48" },
      stat2: { label: "Stream Rate", value: "8.5k/s" },
    },
    {
      title: "CLI Developer Toolchain",
      subtitle: "Backend Service Scaffolding",
      description:
        "A productivity CLI built in Rust for scaffolding production-ready backend services with opinionated best-practice templates and embedded SQLite config stores.",
      tags: ["Rust", "Tokio", "CLI", "SQLite"],
      accent: "#87C76D",
      accentBg: "rgba(135,199,109,0.07)",
      icon: <Terminal size={20} className="text-brandGreen" />,
      stat1: { label: "Templates", value: "14+" },
      stat2: { label: "Build Time", value: "0.3s" },
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

  const handleSimulate = () => {
    if (simRunning || simDone) return;
    setSimRunning(true);
    setTimeout(() => {
      setSimRunning(false);
      setSimDone(true);
    }, 1400);
  };

  const tabs: { key: TabType; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'spec', label: 'System Spec' },
    { key: 'endpoint', label: 'Live Endpoint' },
  ];

  return (
    <SectionReveal id="projects" className="py-28 relative overflow-hidden bg-primary/40">
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
                e_commerce_microservices.arch
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
              <button className="flex items-center gap-2 text-xs font-mono font-bold text-brandCyan hover:text-brandCyan/80 transition-colors group self-start">
                View Repository
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
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

                  {/* Overview tab */}
                  {activeTab === 'overview' && (
                    <motion.div
                      key="ov"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="h-full flex flex-col gap-5"
                    >
                      {/* Architecture diagram (visual boxes) */}
                      <div className="text-[10px] font-mono text-accent/40 uppercase tracking-widest mb-1">Request Flow Architecture</div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {[
                          { label: "Client", color: "#27B5D9" },
                          { label: "API Gateway", color: "#2CC9DA" },
                          { label: "Load Balancer", color: "#47DCE2" },
                          { label: "Go Services", color: "#87C76D" },
                          { label: "PostgreSQL", color: "#9FD693" },
                        ].map((node, i, arr) => (
                          <div key={i} className="flex items-center gap-2">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.08 }}
                              className="px-3 py-2 rounded-xl border text-[10px] font-mono font-bold text-center whitespace-nowrap shadow-sm"
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

                      {/* Highlight metrics */}
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {[
                          { label: "SAGA Compensations", value: "Zero Data Loss", color: "#27B5D9" },
                          { label: "Cache Hit Rate", value: "94.2%", color: "#87C76D" },
                          { label: "DB Query Time", value: "< 4ms avg", color: "#2CC9DA" },
                        ].map((m, i) => (
                          <div key={i} className="bg-primary/20 rounded-xl p-3 border border-accent/5 text-center">
                            <div className="text-[9px] font-mono text-accent/40 uppercase mb-1">{m.label}</div>
                            <div className="text-xs font-bold font-mono" style={{ color: m.color }}>{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <p className="text-accent/55 text-xs font-sans leading-relaxed mt-auto">
                        Each microservice owns its own database. The SAGA orchestrator coordinates cross-service workflows using compensating transactions, ensuring consistency without distributed locks.
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

                  {/* Endpoint tab */}
                  {activeTab === 'endpoint' && (
                    <motion.div
                      key="ep"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col gap-4 h-full"
                    >
                      {/* Route bar */}
                      <div className="bg-[#181E24] rounded-xl p-3.5 flex items-center justify-between font-mono text-[11px] text-white select-none">
                        <div className="flex items-center gap-2.5">
                          <span className="bg-brandCyan/20 text-brandCyan font-bold px-2 py-0.5 rounded text-[10px]">GET</span>
                          <span className="text-white/50">api.koriebree.dev</span>
                          <span className="text-white font-semibold">/api/v1/order/status/4921</span>
                        </div>
                        <button
                          onClick={handleSimulate}
                          disabled={simRunning}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[10px] transition-all ${
                            simRunning
                              ? 'bg-white/10 text-white/40 cursor-not-allowed'
                              : simDone
                              ? 'bg-brandGreen/20 text-brandGreen border border-brandGreen/30'
                              : 'bg-brandCyan text-white hover:bg-brandCyan/90'
                          }`}
                        >
                          {simRunning
                            ? <><span className="w-1.5 h-1.5 rounded-full bg-brandCyan animate-pulse" /> Running...</>
                            : simDone
                            ? <><Check size={10} /> 200 OK</>
                            : <><Play size={10} /> Execute</>}
                        </button>
                      </div>

                      {/* Response body */}
                      <div className="bg-[#181E24] rounded-xl flex-1 p-4 font-mono text-[11px] text-white/90 overflow-y-auto leading-relaxed">
                        {simRunning ? (
                          <div className="h-full flex flex-col items-center justify-center gap-2 select-none">
                            <div className="text-brandCyan font-bold animate-pulse text-xs">ESTABLISHING TCP CONNECTION...</div>
                            <div className="text-white/30 text-[10px]">Awaiting server response packets...</div>
                          </div>
                        ) : simDone ? (
                          <>
                            <div className="text-white/30 text-[10px] mb-2">HTTP/2 200 OK · 15.4ms · 348 B</div>
                            <pre className="text-brandGreen whitespace-pre-wrap">{featured.response}</pre>
                          </>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center gap-2 text-center select-none">
                            <div className="text-white/25 text-xs italic">No response yet.</div>
                            <div className="text-white/20 text-[10px]">Click Execute to query the endpoint.</div>
                          </div>
                        )}
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
              onHoverStart={() => setActiveSmall(idx)}
              onHoverEnd={() => setActiveSmall(null)}
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-accent/5 overflow-hidden shadow-[0_12px_40px_rgba(24,30,36,0.03)] hover:shadow-[0_18px_50px_rgba(24,30,36,0.05)] hover:border-accent/10 transition-all duration-300 cursor-default group"
            >
              {/* Top stripe accent */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${proj.accent}80, ${proj.accent}20)` }} />

              <div className="p-7">
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

              {/* Hover reveal bottom bar */}
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
                      <span className="text-[10px] font-mono text-accent/40">View source & documentation</span>
                      <button
                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-3 py-1.5 rounded-lg border transition-all"
                        style={{ color: proj.accent, borderColor: `${proj.accent}30`, backgroundColor: proj.accentBg }}
                      >
                        <GitBranch size={10} />
                        Open Repository
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionReveal>
  );
};

export default Projects;
