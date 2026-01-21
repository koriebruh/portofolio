import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const Contact = () => {
  return (
    <SectionReveal id="contact" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Initialize <span className="text-gold">Connection</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-accent-dim max-w-lg mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent">Contact Info</h3>
            <p className="text-accent-dim/80">
              Feel free to reach out via email or connect on social media.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 glass-panel rounded-xl hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-accent-dim">Email</div>
                  <div className="text-accent font-medium">hello@example.com</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 p-4 glass-panel rounded-xl hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-sm text-accent-dim">LinkedIn</div>
                  <div className="text-accent font-medium">Connect Profile</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 p-4 glass-panel rounded-xl hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-sm text-accent-dim">GitHub</div>
                  <div className="text-accent font-medium">View Code</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-accent-dim mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-primary-dark/50 border border-white/10 rounded-lg px-4 py-3 text-accent focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-accent-dim mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-primary-dark/50 border border-white/10 rounded-lg px-4 py-3 text-accent focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-accent-dim mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-primary-dark/50 border border-white/10 rounded-lg px-4 py-3 text-accent focus:outline-none focus:border-gold/50 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold-glow text-primary-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold/10"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Contact;
