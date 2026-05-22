import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Play, Zap, ShieldCheck, Database, Cpu, Server, Layers } from 'lucide-react';
import { SiGo, SiSpring } from 'react-icons/si';

const Hero = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "// System operational. Standing by for request..."
  ]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString().split(' ')[0];
    setLogs(prev => [`[${time}] ${msg}`, ...prev.slice(0, 3)]);
  };

  const triggerSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setLogs([]);
    
    // Step 1: Client Request
    setActiveStep('client');
    addLog("CLIENT: Outgoing TCP request dispatched from browser.");

    // Step 2: Gateway
    setTimeout(() => {
      setActiveStep('gateway');
      addLog("GATEWAY: Shield active. HTTPS request authenticated. API Key verified.");
    }, 800);

    // Step 3: Load Balancer / Routing
    setTimeout(() => {
      setActiveStep('router');
      addLog("ROUTER: Load balancer routing request to active Golang pod.");
    }, 1600);

    // Step 4: Microservice Logic
    setTimeout(() => {
      setActiveStep('service');
      addLog("ENGINE: Golang handler triggered. Running middleware pipeline.");
    }, 2400);

    // Step 5: Redis / DB lookup
    setTimeout(() => {
      setActiveStep('data');
      addLog("DATA: Redis Cache query. DB read replica committed. Time: 0.04ms.");
    }, 3200);

    // Step 6: Response Complete
    setTimeout(() => {
      setActiveStep('done');
      addLog("RESPONSE: Handled successfully. Returned HTTP 200 OK in 14ms.");
      setSimulating(false);
    }, 4000);
  };

  const steps = [
    { id: 'client', label: 'Client Port', icon: <Layers className="w-5 h-5" />, color: 'text-brandCyan' },
    { id: 'gateway', label: 'API Gateway', icon: <ShieldCheck className="w-5 h-5" />, color: 'text-brandTurquoise' },
    { id: 'router', label: 'Load Balancer', icon: <Server className="w-5 h-5" />, color: 'text-brandMint' },
    { id: 'service', label: 'Golang Engine', icon: <Cpu className="w-5 h-5" />, color: 'text-brandGreen' },
    { id: 'data', label: 'Data Node', icon: <Database className="w-5 h-5" />, color: 'text-brandLightCyan' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden bg-primary">
      {/* Premium organic blurred blobs matching the user's custom sand-cream and green-cyan theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,30,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(24,30,36,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brandMint/20 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brandCyan/15 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-brandGreenLight/15 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Premium Pitch Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandCyan/10 border border-brandCyan/20 text-brandCyan text-xs font-mono font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brandGreen animate-pulse" />
            Active Service Mesh: Online
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6 text-accent">
            Architecting <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan via-brandTurquoise to-brandGreen">
              Robust Systems
            </span>
            <br /> for the Web
          </h1>
          
          <p className="text-accent/70 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-sans">
            Hi, I'm a Backend Developer specializing in engineering fast, highly-concurrent, and fault-tolerant microservice nodes and data flow pipelines.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-brandCyan hover:bg-brandCyan/95 text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-[0_8px_20px_rgba(39,181,217,0.12)] text-sm uppercase tracking-wider"
            >
              Download Resume <Download size={16} />
            </motion.button>
            
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white/70 hover:bg-white border border-accent/5 text-accent font-semibold rounded-xl flex items-center gap-2 transition-all shadow-sm text-sm uppercase tracking-wider"
              >
                View Systems <ArrowRight size={16} />
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Premium Request Flow Simulator Redesign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl border border-accent/5 p-6 md:p-8 shadow-[0_20px_60px_rgba(24,30,36,0.03)] hover:shadow-[0_25px_70px_rgba(24,30,36,0.05)] transition-all duration-500 relative">
            
            {/* Header window tag */}
            <div className="flex items-center justify-between border-b border-accent/5 pb-4 mb-6 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E57373]/90" />
                <span className="w-3 h-3 rounded-full bg-[#FFD54F]/90" />
                <span className="w-3 h-3 rounded-full bg-[#81C784]/90" />
                <span className="text-xs text-accent/40 font-mono pl-2">service_mesh_simulator.exe</span>
              </div>
              <div className="text-[10px] text-brandCyan font-mono font-semibold px-2 py-0.5 rounded bg-brandCyan/10 border border-brandCyan/10">
                latency: 14ms
              </div>
            </div>

            {/* Interactive service flow grid */}
            <div className="grid grid-cols-5 gap-3 md:gap-4 relative mb-6">
              {steps.map((step) => {
                const isActive = activeStep === step.id || (activeStep === 'done');
                const isCurrent = activeStep === step.id;

                return (
                  <div key={step.id} className="flex flex-col items-center relative z-10">
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.6, repeat: isCurrent ? Infinity : 0 }}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm ${
                        isActive 
                          ? 'bg-white border-brandCyan text-brandCyan shadow-[0_8px_20px_rgba(39,181,217,0.1)]' 
                          : 'bg-primary/40 border-accent/5 text-accent/40'
                      }`}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <span className={`text-[9px] md:text-xs font-mono mt-3 font-semibold text-center transition-colors duration-300 ${
                      isActive ? 'text-brandCyan' : 'text-accent/40'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}

              {/* Dotted vector path connecting nodes */}
              <div className="absolute top-6 left-6 right-6 h-0.5 -z-10 pointer-events-none">
                <svg className="w-full h-2 overflow-visible" fill="none">
                  <path 
                    d="M 12 1 L 520 1" 
                    stroke="#181E24" 
                    strokeWidth="1.5" 
                    strokeOpacity="0.04"
                    strokeDasharray="4,4" 
                  />
                  <AnimatePresence>
                    {simulating && (
                      <motion.path
                        layoutId="active-flow"
                        d="M 12 1 L 520 1"
                        stroke="#27B5D9"
                        strokeWidth="2"
                        className="flow-line"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </svg>
              </div>
            </div>

            {/* Simulated request stats console */}
            <div className="bg-[#181E24] rounded-xl p-4 font-mono text-xs text-white/90 shadow-inner mb-6 min-h-[96px] flex flex-col justify-between select-none">
              <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold border-b border-white/5 pb-2 mb-2 flex items-center justify-between">
                <span>Node Transaction Log</span>
                <span className="flex items-center gap-1.5 text-brandGreen font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
                  Listener: 8080
                </span>
              </div>
              <div className="space-y-1">
                {logs.length === 0 ? (
                  <div className="text-white/30 italic">Initializing payload mesh...</div>
                ) : (
                  logs.map((log, i) => (
                    <div 
                      key={i} 
                      className={`${
                        log.startsWith('//') ? 'text-white/30' :
                        log.includes('CLIENT') ? 'text-[#FFD54F]' :
                        log.includes('GATEWAY') ? 'text-brandTurquoise' :
                        log.includes('ROUTER') ? 'text-brandMint' :
                        log.includes('ENGINE') ? 'text-brandGreen' :
                        log.includes('DATA') ? 'text-brandLightCyan font-semibold' : 'text-brandGreen font-bold'
                      } truncate`}
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Run request buttons */}
            <div className="flex items-center justify-between gap-4">
              <motion.button
                onClick={triggerSimulation}
                disabled={simulating}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`flex-1 font-mono font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border flex items-center justify-center gap-2 shadow-sm transition-all duration-300 ${
                  simulating 
                    ? 'bg-primary/20 border-accent/5 text-accent/30 cursor-not-allowed' 
                    : 'bg-white hover:bg-brandCyan hover:text-white border-brandCyan/20 hover:border-brandCyan text-brandCyan'
                }`}
              >
                <Play size={14} className={simulating ? 'animate-pulse' : ''} />
                {simulating ? 'Simulating Pipeline...' : 'Simulate Outgoing Request'}
              </motion.button>
              
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-accent/40 pr-2">
                <Zap size={14} className="text-brandGreen" />
                <span>Zero Downtime Mesh</span>
              </div>
            </div>
          </div>

          {/* Elegant decorative backdrop tags */}
          <div className="absolute -top-6 -right-6 z-20 pointer-events-none hidden sm:block">
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-white px-4 py-2.5 rounded-xl border border-accent/5 shadow-sm font-mono text-[10px] text-accent/50 flex items-center gap-2"
            >
              <SiGo className="text-brandCyan text-base" />
              <span>Concurrency active</span>
            </motion.div>
          </div>

          <div className="absolute -bottom-6 -left-6 z-20 pointer-events-none hidden sm:block">
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-white px-4 py-2.5 rounded-xl border border-accent/5 shadow-sm font-mono text-[10px] text-accent/50 flex items-center gap-2"
            >
              <SiSpring className="text-brandGreen text-base" />
              <span>Heap memory: 42MB</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
