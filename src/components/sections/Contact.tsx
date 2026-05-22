import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Github, Linkedin, Send, Check,
  MapPin, Clock, MessageSquare, User, AtSign
} from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setIsSuccess(false);
    setError('');
  };

  const channels = [
    {
      label: 'Email',
      value: 'hello@koriebree.dev',
      href: 'mailto:hello@koriebree.dev',
      icon: <Mail size={18} />,
      color: '#27B5D9',
      bg: 'rgba(39,181,217,0.08)',
      border: 'rgba(39,181,217,0.2)',
    },
    {
      label: 'GitHub',
      value: 'github.com/koriebree',
      href: '#',
      icon: <Github size={18} />,
      color: '#2CC9DA',
      bg: 'rgba(44,201,218,0.08)',
      border: 'rgba(44,201,218,0.2)',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/koriebree',
      href: '#',
      icon: <Linkedin size={18} />,
      color: '#87C76D',
      bg: 'rgba(135,199,109,0.08)',
      border: 'rgba(135,199,109,0.2)',
    },
  ];

  const inputBase =
    'w-full bg-primary/20 border rounded-xl px-4 py-3 text-accent placeholder:text-accent/30 text-sm font-sans focus:outline-none transition-all duration-200 resize-none';

  return (
    <SectionReveal id="contact" className="py-28 relative overflow-hidden bg-primary">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,30,36,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(24,30,36,0.018)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brandMint/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brandCyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5 text-accent">
            Initialize{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan via-brandTurquoise to-brandGreen">
              Transmission
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full mb-5" />
          <p className="text-accent/65 text-base max-w-lg mx-auto font-sans leading-relaxed">
            Open for collaboration, internship opportunities, and interesting conversations. Drop a message — I respond within 24 hours.
          </p>
        </div>

        {/* ── Two symmetric columns ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── LEFT: Info column ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Availability card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-accent/5 p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGreen opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brandGreen" />
                </div>
                <span className="font-bold text-accent text-sm">Currently Available</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-accent mb-2 leading-snug">
                Let's build something great together.
              </h3>
              <p className="text-accent/60 text-sm font-sans leading-relaxed mb-6">
                Whether you have a project in mind, an engineering challenge to solve, or just want to connect — I'd love to hear from you.
              </p>

              {/* Info rows */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-accent/60">
                  <div className="w-8 h-8 rounded-xl bg-brandCyan/10 flex items-center justify-center text-brandCyan flex-shrink-0">
                    <MapPin size={14} />
                  </div>
                  <span className="font-sans">Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-accent/60">
                  <div className="w-8 h-8 rounded-xl bg-brandGreen/10 flex items-center justify-center text-brandGreen flex-shrink-0">
                    <Clock size={14} />
                  </div>
                  <span className="font-sans">Response time · usually within 24h</span>
                </div>
              </div>
            </div>

            {/* Contact channels */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-accent/5 p-7 shadow-sm">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent/40 mb-5">
                Direct Channels
              </div>
              <div className="space-y-3">
                {channels.map((ch, i) => (
                  <motion.a
                    key={i}
                    href={ch.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-4 p-3.5 rounded-xl border transition-all duration-200 group"
                    style={{
                      backgroundColor: ch.bg,
                      borderColor: ch.border,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: 'white', color: ch.color, border: `1px solid ${ch.border}` }}
                    >
                      {ch.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-0.5" style={{ color: ch.color }}>
                        {ch.label}
                      </div>
                      <div className="text-sm font-sans text-accent/70 font-medium truncate">
                        {ch.value}
                      </div>
                    </div>
                    <div className="text-accent/25 group-hover:text-accent/50 transition-colors flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form column ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/85 backdrop-blur-xl rounded-2xl border border-accent/5 shadow-[0_20px_60px_rgba(24,30,36,0.04)] overflow-hidden">

              {/* Form header */}
              <div className="bg-primary/30 border-b border-accent/5 px-7 py-4 flex items-center gap-2.5 select-none">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/70" />
                </div>
                <div className="h-3.5 w-px bg-accent/10 mx-1" />
                <MessageSquare size={12} className="text-accent/40" />
                <span className="text-[11px] font-mono text-accent/40 font-medium">new_message.draft</span>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">

                  {!isSuccess ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-accent/50 uppercase tracking-widest flex items-center gap-1.5">
                          <User size={10} />
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          disabled={isSubmitting}
                          placeholder="Your full name"
                          className={`${inputBase} ${
                            focused === 'name'
                              ? 'border-brandCyan/40 bg-brandCyan/5 shadow-[0_0_0_3px_rgba(39,181,217,0.06)]'
                              : 'border-accent/8 hover:border-accent/15'
                          }`}
                        />
                      </div>

                      {/* Email field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-accent/50 uppercase tracking-widest flex items-center gap-1.5">
                          <AtSign size={10} />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => handleChange('email', e.target.value)}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          disabled={isSubmitting}
                          placeholder="your@email.com"
                          className={`${inputBase} ${
                            focused === 'email'
                              ? 'border-brandCyan/40 bg-brandCyan/5 shadow-[0_0_0_3px_rgba(39,181,217,0.06)]'
                              : 'border-accent/8 hover:border-accent/15'
                          }`}
                        />
                      </div>

                      {/* Message field */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-accent/50 uppercase tracking-widest flex items-center gap-1.5">
                          <MessageSquare size={10} />
                          Message
                        </label>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={e => handleChange('message', e.target.value)}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          disabled={isSubmitting}
                          placeholder="Tell me about your project, opportunity, or just say hi..."
                          className={`${inputBase} ${
                            focused === 'message'
                              ? 'border-brandCyan/40 bg-brandCyan/5 shadow-[0_0_0_3px_rgba(39,181,217,0.06)]'
                              : 'border-accent/8 hover:border-accent/15'
                          }`}
                        />
                      </div>

                      {/* Error message */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-[#E57373] text-xs font-sans px-3 py-2 rounded-lg bg-[#E57373]/8 border border-[#E57373]/15"
                          >
                            {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                        className={`w-full py-4 rounded-xl font-bold text-sm font-sans flex items-center justify-center gap-2.5 transition-all duration-300 ${
                          isSubmitting
                            ? 'bg-brandCyan/60 text-white cursor-not-allowed'
                            : 'bg-brandCyan hover:bg-brandCyan/95 text-white shadow-[0_8px_24px_rgba(39,181,217,0.18)] hover:shadow-[0_12px_30px_rgba(39,181,217,0.24)]'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>

                  ) : (
                    /* ── Success State ──────────────────────────── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center text-center py-10 space-y-5"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brandGreen/10 border border-brandGreen/25 flex items-center justify-center text-brandGreen shadow-sm">
                        <Check size={28} strokeWidth={2.5} />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-accent font-heading">Message Sent!</h4>
                        <p className="text-accent/60 text-sm font-sans leading-relaxed max-w-xs">
                          Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3 w-full max-w-xs text-center font-mono">
                        <div className="bg-primary/20 rounded-xl p-3 border border-accent/5">
                          <div className="text-[9px] text-accent/40 uppercase mb-0.5">Status</div>
                          <div className="text-xs font-bold text-brandGreen">Delivered</div>
                        </div>
                        <div className="bg-primary/20 rounded-xl p-3 border border-accent/5">
                          <div className="text-[9px] text-accent/40 uppercase mb-0.5">Size</div>
                          <div className="text-xs font-bold text-accent">
                            {form.name.length + form.email.length + form.message.length}B
                          </div>
                        </div>
                        <div className="bg-primary/20 rounded-xl p-3 border border-accent/5">
                          <div className="text-[9px] text-accent/40 uppercase mb-0.5">ETA Reply</div>
                          <div className="text-xs font-bold text-brandCyan">~24h</div>
                        </div>
                      </div>

                      <button
                        onClick={handleReset}
                        className="text-xs font-mono font-semibold text-accent/50 hover:text-brandCyan transition-colors underline underline-offset-2 mt-2"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionReveal>
  );
};

export default Contact;
