import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';
import Sparkles from '../ui/Sparkles';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic here
    console.log('Transmitting payload:', formState);
  };

  return (
    <SectionReveal id="contact" className="py-24 relative overflow-hidden">
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] opacity-30" />
      
      {/* Sparkles Effect */}
      <Sparkles color="#b8956a" count={50} minSize={2} maxSize={5} />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary-light/20 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Connection Status: LISTENING
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Transmission</span>
          </h2>
          <p className="text-accent-dim text-lg max-w-xl mx-auto font-light">
            Ready to accept data packets. Send your inquiry or collaboration proposal through the secure channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Methods & Terminal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-primary-light/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass-panel p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Terminal size={20} className="text-gold" />
                  <span className="font-mono">./contact_protocols</span>
                </h3>
                
                <div className="space-y-6">
                  <a href="mailto:hello@example.com" className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 transition-all group/item">
                    <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover/item:text-gold-glow transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Direct Mail</h4>
                      <p className="text-accent-dim text-sm font-mono">hello@example.com</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 transition-all group/item">
                    <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover/item:text-gold-glow transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Professional Network</h4>
                      <p className="text-accent-dim text-sm font-mono">linkedin.com/in/profile</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-gold/30 transition-all group/item">
                    <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover/item:text-gold-glow transition-colors">
                      <Github size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Code Repository</h4>
                      <p className="text-accent-dim text-sm font-mono">github.com/profile</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Status Panel */}
            <div className="glass-panel p-6 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                </div>
                <span className="text-sm font-mono text-accent-dim">System Status:</span>
              </div>
              <span className="text-sm font-mono text-green-400">ONLINE</span>
            </div>
          </motion.div>

          {/* Right Column: Code Editor Style Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/50 to-gold/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass-panel p-6 rounded-2xl border border-white/10 flex flex-col h-full justify-between">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Send size={20} className="text-gold" />
                  <span className="font-heading tracking-wide">Send Message</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-accent-dim mb-1.5">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-sans focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-accent-dim mb-1.5">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-sans focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-accent-dim mb-1.5">Message</label>
                    <textarea 
                      id="message"
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-sans focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none transition-colors resize-none placeholder:text-white/20 leading-relaxed"
                      placeholder="I'd like to discuss..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full group relative overflow-hidden bg-gold hover:bg-gold-glow text-primary-dark font-bold py-2.5 px-6 rounded-lg transition-all duration-300 mt-2"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                      Execute Transmission <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Contact;
