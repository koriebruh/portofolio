import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Layout, Terminal, TerminalSquare, Info, Server, Play, Check } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices",
      description: "A distributed system handling 10k+ requests/sec using Golang and gRPC. Implemented saga pattern for distributed transactions.",
      tags: ["Golang", "gRPC", "RabbitMQ", "PostgreSQL"],
      icon: <ShoppingCart size={22} className="text-brandCyan" />,
      colorClass: "bg-brandCyan/10 text-brandCyan border-brandCyan/10",
      spec: {
        concurrency: "12,000 msg/s",
        broker: "RabbitMQ AMQP v3",
        database: "PostgreSQL with Citus cluster",
        pattern: "SAGA Orchestration Pattern",
        network: "HTTP/2 cleartext (H2C)"
      },
      endpoint: "GET /api/v1/order/status/4921",
      response: `{
  "order_id": "4921",
  "status": "COMPLETED",
  "stages": {
    "payment": "APPROVED (2ms)",
    "inventory": "RESERVED (1ms)",
    "delivery": "SHIPPED (12ms)"
  },
  "mesh_latency": "15.4ms"
}`
    },
    {
      title: "Cloud Infrastructure Dashboard",
      description: "Real-time monitoring dashboard for container orchestration clusters with metrics visualization.",
      tags: ["React", "TypeScript", "WebSocket", "Go"],
      icon: <Layout size={22} className="text-brandTurquoise" />,
      colorClass: "bg-brandTurquoise/10 text-brandTurquoise border-brandTurquoise/10",
      spec: {
        concurrency: "8,500 streaming nodes",
        broker: "Gorilla WebSockets TLS",
        database: "Prometheus Time-Series + Redis Cache",
        pattern: "Pub/Sub Fan-out Pattern",
        network: "TLS 1.3 Secure Websockets"
      },
      endpoint: "GET /api/v1/infra/telemetry",
      response: `{
  "cluster_status": "OPERATIONAL",
  "active_pods": 48,
  "cpu_utilization": "54.2%",
  "network_in": "12.4 GB/s",
  "replica_sets": {
    "desired": 6,
    "current": 6
  }
}`
    },
    {
      title: "CLI Dev Tools",
      description: "A developer productivity tool for scaffolding backend services with built-in best practices.",
      tags: ["Rust", "CLI", "Systems Programming"],
      icon: <Terminal size={22} className="text-brandGreen" />,
      colorClass: "bg-brandGreen/10 text-brandGreen border-brandGreen/10",
      spec: {
        concurrency: "Local multithreading (Tokio)",
        broker: "IPC Named Pipes (Windows/Unix)",
        database: "SQLite embedded configuration",
        pattern: "Command Pattern CLI Scaffold",
        network: "No Network Overheads (Zero IO)"
      },
      endpoint: "POST /api/v1/generator/template",
      response: `{
  "template_id": "rust-grpc-service",
  "files_generated": 14,
  "compression_ratio": "0.34",
  "dependencies": [
    "tokio",
    "tonic",
    "serde"
  ],
  "status": "READY"
}`
    }
  ];

  // Track the active tab for each project independently
  const [activeTabs, setActiveTabs] = useState<('overview' | 'architecture' | 'endpoint')[]>([
    'overview',
    'overview',
    'overview'
  ]);

  // Track simulated trigger states for endpoints
  const [runningSim, setRunningSim] = useState<Record<number, boolean>>({});
  const [ranSim, setRanSim] = useState<Record<number, boolean>>({});

  const handleTabChange = (projIdx: number, tab: 'overview' | 'architecture' | 'endpoint') => {
    const updated = [...activeTabs];
    updated[projIdx] = tab;
    setActiveTabs(updated);
  };

  const handleRunEndpoint = (projIdx: number) => {
    if (runningSim[projIdx]) return;
    setRunningSim(prev => ({ ...prev, [projIdx]: true }));
    
    setTimeout(() => {
      setRunningSim(prev => ({ ...prev, [projIdx]: false }));
      setRanSim(prev => ({ ...prev, [projIdx]: true }));
    }, 1200);
  };

  const getTagColor = (_tag: string, index: number) => {
    const classes = [
      "bg-brandCyan/10 text-brandCyan border-brandCyan/10",
      "bg-brandGreen/10 text-brandGreen border-brandGreen/10",
      "bg-brandTurquoise/10 text-brandTurquoise border-brandTurquoise/10",
      "bg-brandMint/20 text-[#248B87] border-brandMint/10"
    ];
    return classes[index % classes.length];
  };

  return (
    <SectionReveal id="projects" className="py-28 relative overflow-hidden bg-primary/40">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,30,36,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(24,30,36,0.015)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-2 block font-sans">System Spec Repositories</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-accent">
            Featured Blueprints
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full mb-6" />
          <p className="text-accent/70 max-w-2xl mx-auto font-sans text-base leading-relaxed">
            Fully engineered microservices, event-driven infrastructure layers, and core backend tooling architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const activeTab = activeTabs[idx];
            const isRunning = runningSim[idx];
            const hasRun = ranSim[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl border border-accent/5 overflow-hidden flex flex-col h-[460px] group shadow-[0_15px_45px_rgba(24,30,36,0.02)] hover:shadow-[0_20px_50px_rgba(24,30,36,0.04)] hover:border-brandCyan/25 transition-all duration-300 relative"
              >
                
                {/* Visualizer header window tab style */}
                <div className="bg-primary/30 border-b border-accent/5 px-4 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-brandCyan/20 border border-brandCyan/40" />
                    <span className="text-[10px] font-mono text-accent/40 font-semibold">{project.title.toLowerCase().replace(/\s/g, '_')}.conf</span>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-white border border-accent/5 flex items-center justify-center text-accent/50">
                    {project.icon}
                  </div>
                </div>

                {/* Subnav specification control tabs */}
                <div className="flex border-b border-accent/5 bg-primary/10 select-none text-[11px] font-mono font-semibold">
                  <button
                    onClick={() => handleTabChange(idx, 'overview')}
                    className={`flex-1 py-3 border-r border-accent/5 transition-colors flex items-center justify-center gap-1.5 ${
                      activeTab === 'overview' ? 'bg-white text-brandCyan' : 'text-accent/50 hover:text-accent'
                    }`}
                  >
                    <Info size={11} />
                    Overview
                  </button>
                  <button
                    onClick={() => handleTabChange(idx, 'architecture')}
                    className={`flex-1 py-3 border-r border-accent/5 transition-colors flex items-center justify-center gap-1.5 ${
                      activeTab === 'architecture' ? 'bg-white text-brandCyan' : 'text-accent/50 hover:text-accent'
                    }`}
                  >
                    <Server size={11} />
                    System Spec
                  </button>
                  <button
                    onClick={() => handleTabChange(idx, 'endpoint')}
                    className={`flex-1 py-3 transition-colors flex items-center justify-center gap-1.5 ${
                      activeTab === 'endpoint' ? 'bg-white text-brandCyan' : 'text-accent/50 hover:text-accent'
                    }`}
                  >
                    <TerminalSquare size={11} />
                    Endpoint
                  </button>
                </div>

                {/* Tab content viewer */}
                <div className="p-6 flex-1 flex flex-col justify-between overflow-hidden">
                  <AnimatePresence mode="wait">
                    
                    {/* Tab 1: Overview */}
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4 flex-1 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-accent font-heading group-hover:text-brandCyan transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-accent/65 text-sm leading-relaxed font-sans">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 pt-4">
                          {project.tags.map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border ${getTagColor(tag, tIdx)}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 2: System Spec */}
                    {activeTab === 'architecture' && (
                      <motion.div
                        key="architecture"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-3.5 font-mono text-xs text-accent/70 flex-1 flex flex-col justify-center"
                      >
                        <div className="flex justify-between border-b border-accent/5 pb-2">
                          <span className="text-accent/40">Throughput Limit:</span>
                          <span className="font-bold text-accent">{project.spec.concurrency}</span>
                        </div>
                        <div className="flex justify-between border-b border-accent/5 pb-2">
                          <span className="text-accent/40">Message Broker:</span>
                          <span className="font-bold text-accent">{project.spec.broker}</span>
                        </div>
                        <div className="flex justify-between border-b border-accent/5 pb-2">
                          <span className="text-accent/40">Persistence Layer:</span>
                          <span className="font-bold text-accent">{project.spec.database}</span>
                        </div>
                        <div className="flex justify-between border-b border-accent/5 pb-2">
                          <span className="text-accent/40">Design Protocol:</span>
                          <span className="font-bold text-accent">{project.spec.pattern}</span>
                        </div>
                        <div className="flex justify-between border-b border-accent/5 pb-2">
                          <span className="text-accent/40">Transport Link:</span>
                          <span className="font-bold text-accent">{project.spec.network}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 3: Interactive Endpoint */}
                    {activeTab === 'endpoint' && (
                      <motion.div
                        key="endpoint"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="flex-1 flex flex-col justify-between overflow-hidden"
                      >
                        {/* Interactive Console Route Header */}
                        <div className="bg-[#181E24] rounded-lg p-2.5 flex items-center justify-between font-mono text-[10px] text-white border border-white/5 mb-3 select-none">
                          <span className="text-brandCyan font-bold">{project.endpoint}</span>
                          <button
                            onClick={() => handleRunEndpoint(idx)}
                            disabled={isRunning}
                            className={`px-2 py-1 rounded font-bold text-[9px] flex items-center gap-1 transition-all ${
                              isRunning 
                                ? 'bg-white/10 text-white/50 cursor-not-allowed'
                                : 'bg-brandCyan text-white hover:bg-brandCyan/95'
                            }`}
                          >
                            {isRunning ? '...' : (hasRun ? <Check size={10} className="text-brandGreen" /> : <Play size={8} />)}
                            {isRunning ? 'QUERY' : (hasRun ? 'DONE' : 'GET')}
                          </button>
                        </div>

                        {/* Interactive Console Payload Body */}
                        <div className="bg-[#181E24] rounded-lg p-3.5 font-mono text-[11px] leading-normal text-white/90 shadow-inner flex-1 overflow-y-auto select-all max-h-[190px]">
                          {isRunning ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-2 select-none">
                              <span className="text-brandCyan font-bold animate-pulse">ESTABLISHING TCP LINK...</span>
                              <span className="text-[9px] text-white/30">Streaming response payload packets...</span>
                            </div>
                          ) : (hasRun ? (
                            <pre className="text-brandGreen">{project.response}</pre>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center text-white/30 italic select-none">
                              <span>Ready to execute payload query.</span>
                              <span className="text-[9px] mt-1">Click the trigger to pull telemetry response.</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                  </AnimatePresence>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Projects;
