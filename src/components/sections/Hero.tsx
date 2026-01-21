import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { SiGo, SiSpring, SiDocker, SiKubernetes } from 'react-icons/si';
import Terminal from '../ui/Terminal';
import Sparkles from '../ui/Sparkles';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary-dark">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <Sparkles color="#b8956a" count={60} minSize={2} maxSize={5} className="z-0" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            System Ready: v2.0.4
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dim/50">invisible engine</span>
            <br /> of the web
          </h1>
          
          <p className="text-accent-dim text-lg mb-8 max-w-lg leading-relaxed">
            Fresh Graduate | Backend Specialist. <br />
            Architecting scalable distributed systems and robust cloud infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gold hover:bg-gold-glow text-primary-dark font-bold rounded-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(184,149,106,0.3)]"
            >
              Download Resume <Download size={18} />
            </motion.button>
            
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border border-accent/20 hover:border-accent/50 text-accent rounded-lg flex items-center gap-2 transition-all"
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Terminal className="w-full max-w-lg mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="space-y-2 text-gray-300">
              <div className="flex">
                <span className="text-green-400 mr-2">$</span>
                <span>cat stack_config.json</span>
              </div>
              <div className="text-yellow-300">{`{`}</div>
              <div className="pl-4">
                <span className="text-blue-400">"role"</span>: <span className="text-orange-300">"Backend Engineer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-400">"expertise"</span>: [
              </div>
              <div className="pl-8 text-orange-300">
                "Microservices", <br />
                "Distributed Systems"
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-blue-400">"stack"</span>: {`{`}
              </div>
              <div className="pl-8">
                <span className="text-blue-400">"language"</span>: <span className="text-orange-300">"Golang"</span>, <br />
                <span className="text-blue-400">"framework"</span>: <span className="text-orange-300">"Spring Boot"</span>, <br />
                <span className="text-blue-400">"container"</span>: <span className="text-orange-300">"Docker"</span>, <br />
                <span className="text-blue-400">"orchestration"</span>: <span className="text-orange-300">"K8s"</span>
              </div>
              <div className="pl-4">{`}`},</div>
              <div className="pl-4">
                <span className="text-blue-400">"status"</span>: <span className="text-green-400">"Open to Work"</span>
              </div>
              <div className="text-yellow-300">{`}`}</div>
              <div className="flex animate-pulse">
                <span className="text-green-400 mr-2">$</span>
                <span className="w-2 h-5 bg-gray-400 block" />
              </div>
            </div>
          </Terminal>
          
          {/* Decorative floating icons */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 w-16 h-16 bg-[#00ADD8]/10 backdrop-blur-md rounded-2xl border border-[#00ADD8]/30 flex items-center justify-center z-[-1] shadow-[0_0_30px_rgba(0,173,216,0.2)]"
          >
            <SiGo className="text-[#00ADD8] text-4xl" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#6DB33F]/10 backdrop-blur-md rounded-2xl border border-[#6DB33F]/30 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(109,179,63,0.2)]"
          >
            <SiSpring className="text-[#6DB33F] text-4xl" />
          </motion.div>

          <motion.div 
            animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -right-16 w-14 h-14 bg-[#2496ED]/10 backdrop-blur-md rounded-2xl border border-[#2496ED]/30 flex items-center justify-center z-0 shadow-[0_0_30px_rgba(36,150,237,0.2)]"
          >
            <SiDocker className="text-[#2496ED] text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
