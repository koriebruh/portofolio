import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Activity, ShieldCheck, Heart } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const About = () => {
  const [load, setLoad] = useState(48000); // Simulated concurrent request load

  // Mathematical helpers to calculate simulated stats dynamically based on slider values
  const heapMemory = ((load * 0.0006) + 8.2).toFixed(1);
  const cpuUsage = Math.min(((load * 0.0012) + 4.5), 100).toFixed(1);
  const activeHandlers = Math.round(load / 450);

  return (
    <SectionReveal id="about" className="py-28 relative overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brandMint/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-brandGreenLight/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase block">Architecture Manifesto</span>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-accent leading-tight">
              Obsessed with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan to-brandGreen">
                high-throughput
              </span> <br />
              resiliency.
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen rounded-full" />
            
            <p className="text-accent/70 leading-relaxed font-sans text-base">
              I am a fresh Computer Science graduate who looks past visual paint to focus entirely on the architectural foundations. I specialize in backend systems engineering—focusing on database indexing, microservice synchronization, and horizontal compute scaling.
            </p>
            
            <p className="text-accent/70 leading-relaxed font-sans text-base">
              My engineering philosophy relies heavily on strict memory efficiency, zero-downtime integration structures, and building robust APIs that behave predictably under catastrophic spikes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs text-accent/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brandGreen w-4 h-4" />
                <span>SOLID Principles</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-brandCyan w-4 h-4" />
                <span>REST & gRPC Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="text-brandTurquoise w-4 h-4" />
                <span>Distributed Caching</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="text-brandMint w-4 h-4" />
                <span>Fault-Tolerant Patterns</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engine Health & Concurrency Telemetry Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-accent/5 p-6 md:p-8 shadow-[0_20px_50px_rgba(24,30,36,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brandCyan/5 rounded-bl-full -mr-6 -mt-6 pointer-events-none" />

              <div className="flex items-center justify-between border-b border-accent/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGreen opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brandGreen"></span>
                  </span>
                  <h3 className="font-bold text-accent text-sm uppercase tracking-wide">Developer Engine Telemetry</h3>
                </div>
                <div className="text-[10px] font-mono text-accent/40">v2.0.4 - dev_mode</div>
              </div>

              {/* Live interactive metrics */}
              <div className="space-y-6">
                
                {/* Metric 1: Uptime */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent/50">Core Engine Reliability:</span>
                  <span className="font-bold text-brandGreen">99.999% SLA Uptime</span>
                </div>

                {/* Interactive Slider: Concurrency Load */}
                <div className="space-y-2 select-none">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-accent/60 font-semibold">Simulated Concurrent Load:</span>
                    <span className="text-brandCyan font-bold">{load.toLocaleString()} req/s</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={load}
                    onChange={(e) => setLoad(Number(e.target.value))}
                    className="w-full h-1 bg-accent/5 rounded-full appearance-none cursor-pointer accent-brandCyan focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-accent/30 font-mono">
                    <span>5k req/s</span>
                    <span>100k req/s (Stress Limit)</span>
                  </div>
                </div>

                {/* Simulated Compute Node Outputs */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-accent/5">
                  <div className="bg-primary/20 rounded-xl p-3 border border-accent/5 text-center font-mono select-none">
                    <div className="text-[9px] text-accent/40 uppercase font-semibold mb-1">Heap Allocation</div>
                    <div className="text-accent font-bold text-sm tracking-tight">{heapMemory} MB</div>
                    <div className="w-full bg-accent/5 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-brandCyan" style={{ width: `${Math.min((parseFloat(heapMemory) / 68) * 100, 100)}%` }} />
                    </div>
                  </div>

                  <div className="bg-primary/20 rounded-xl p-3 border border-accent/5 text-center font-mono select-none">
                    <div className="text-[9px] text-accent/40 uppercase font-semibold mb-1">CPU Load Core</div>
                    <div className="text-accent font-bold text-sm tracking-tight">{cpuUsage}%</div>
                    <div className="w-full bg-accent/5 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-brandGreen" style={{ width: `${cpuUsage}%` }} />
                    </div>
                  </div>

                  <div className="bg-primary/20 rounded-xl p-3 border border-accent/5 text-center font-mono select-none">
                    <div className="text-[9px] text-accent/40 uppercase font-semibold mb-1">Routine Threads</div>
                    <div className="text-accent font-bold text-sm tracking-tight">{activeHandlers}</div>
                    <div className="w-full bg-accent/5 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-brandTurquoise" style={{ width: `${(activeHandlers / 222) * 100}%` }} />
                    </div>
                  </div>
                </div>

                {/* Health description */}
                <div className="text-center pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brandGreen/10 border border-brandGreen/25 text-brandGreen font-mono text-[10px] font-semibold">
                    <Heart size={10} className="animate-pulse" />
                    Garbage Collector Status: Optimal (0.01ms GC pause)
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </SectionReveal>
  );
};

export default About;
