import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Github, Linkedin, Send, Check,
  MessageSquare, User, AtSign, Instagram,
  MapPin, ArrowUpRight, Zap
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
      label: 'GitHub',
      value: 'koriebruh',
      href: 'https://github.com/koriebruh/',
      icon: <Github size={20} />,
      color: '#27B5D9',
      bg: 'rgba(39,181,217,0.07)',
      border: 'rgba(39,181,217,0.18)',
    },
    {
      label: 'LinkedIn',
      value: 'mjamaludinnur',
      href: 'https://www.linkedin.com/in/mjamaludinnur/',
      icon: <Linkedin size={20} />,
      color: '#2CC9DA',
      bg: 'rgba(44,201,218,0.07)',
      border: 'rgba(44,201,218,0.18)',
    },
    {
      label: 'Instagram',
      value: 'mjamaludin92',
      href: 'https://www.instagram.com/mjamaludin92/',
      icon: <Instagram size={20} />,
      color: '#87C76D',
      bg: 'rgba(135,199,109,0.07)',
      border: 'rgba(135,199,109,0.18)',
    },
    {
      label: 'Email',
      value: 'mjamaludinnur927@gmail.com',
      href: 'mailto:mjamaludinnur927@gmail.com',
      icon: <Mail size={20} />,
      color: '#90E0DD',
      bg: 'rgba(144,224,221,0.07)',
      border: 'rgba(144,224,221,0.22)',
    },
  ];

  const inputBase =
    'w-full bg-white/60 border rounded-xl px-4 py-3 text-accent placeholder:text-accent/30 text-sm font-sans focus:outline-none transition-all duration-200 resize-none';

  return (
    <SectionReveal id="contact" className="py-28 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,30,36,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(24,30,36,0.015)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-brandCyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brandGreen/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandMint/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-semibold tracking-wider text-brandCyan uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-5 text-accent leading-tight">
            Let's Build{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan via-brandTurquoise to-brandGreen">
              Something
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandGreen via-brandTurquoise to-brandCyan">
              Together
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandCyan to-brandGreen mx-auto rounded-full mb-5" />
          <p className="text-accent/60 text-base max-w-md mx-auto font-sans leading-relaxed">
            Open to collaboration, internship opportunities, and interesting conversations.
            I reply within 24 hours — let's connect.
          </p>

          {/* Quick meta */}
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-accent/50 font-sans">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGreen opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brandGreen" />
              </div>
              Available for opportunities
            </div>
            <div className="flex items-center gap-1.5 text-sm text-accent/50 font-sans">
              <MapPin size={13} className="text-brandCyan" />
              Semarang, Indonesia
            </div>
            <div className="flex items-center gap-1.5 text-sm text-accent/50 font-sans">
              <Zap size={13} className="text-brandGreen" />
              Replies within 24h
            </div>
          </div>
        </motion.div>

        {/* ── Social channels row ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {channels.map((ch, i) => (
            <motion.a
              key={i}
              href={ch.href}
              target={ch.href.startsWith('mailto') ? undefined : '_blank'}
              rel={ch.href.startsWith('mailto') ? undefined : 'noreferrer'}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-200 group cursor-pointer"
              style={{ backgroundColor: ch.bg, borderColor: ch.border }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: 'white', color: ch.color, border: `1px solid ${ch.border}` }}
              >
                {ch.icon}
              </div>
              <div className="text-center">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-0.5" style={{ color: ch.color }}>
                  {ch.label}
                </div>
                <div className="text-[11px] font-sans text-accent/55 font-medium truncate max-w-[120px]">
                  {ch.label === 'Email' ? ch.value : `@${ch.value.replace(/^.+\//, '')}`}
                </div>
              </div>
              <ArrowUpRight
                size={13}
                className="text-accent/20 group-hover:text-accent/50 transition-colors"
                style={{ color: ch.color + '60' }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* ── Divider ──────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          <span className="text-[11px] font-mono text-accent/35 uppercase tracking-widest px-2">or send a message</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        </div>

        {/* ── Contact form — centred, single column ────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-accent/5 shadow-[0_20px_60px_rgba(24,30,36,0.04)] overflow-hidden">

            {/* Form header strip */}
            <div className="border-b border-accent/5 px-7 py-4 flex items-center justify-between select-none bg-white/40">
              <div className="flex items-center gap-2.5">
                <MessageSquare size={13} className="text-brandCyan" />
                <span className="text-[12px] font-mono text-accent/50 font-semibold">Direct message</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-brandGreen font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
                Online
              </div>
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
                    className="space-y-4"
                  >
                    {/* Name + Email side by side on md+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-accent/45 uppercase tracking-widest flex items-center gap-1.5">
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
                          placeholder="Muhammad Jamaludin"
                          className={`${inputBase} ${
                            focused === 'name'
                              ? 'border-brandCyan/40 bg-brandCyan/5 shadow-[0_0_0_3px_rgba(39,181,217,0.07)]'
                              : 'border-accent/8 hover:border-accent/15'
                          }`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono font-bold text-accent/45 uppercase tracking-widest flex items-center gap-1.5">
                          <AtSign size={10} />
                          Email
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
                              ? 'border-brandCyan/40 bg-brandCyan/5 shadow-[0_0_0_3px_rgba(39,181,217,0.07)]'
                              : 'border-accent/8 hover:border-accent/15'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono font-bold text-accent/45 uppercase tracking-widest flex items-center gap-1.5">
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
                        placeholder="Tell me about your project, an idea, or just say hi — all messages are welcome."
                        className={`${inputBase} ${
                          focused === 'message'
                            ? 'border-brandCyan/40 bg-brandCyan/5 shadow-[0_0_0_3px_rgba(39,181,217,0.07)]'
                            : 'border-accent/8 hover:border-accent/15'
                        }`}
                      />
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-xs font-sans px-3 py-2 rounded-lg bg-red-50 border border-red-100"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-3.5 rounded-xl font-bold text-sm font-sans flex items-center justify-center gap-2.5 transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-brandCyan/50 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-brandCyan to-brandTurquoise text-white shadow-[0_8px_24px_rgba(39,181,217,0.2)] hover:shadow-[0_12px_30px_rgba(39,181,217,0.3)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>

                ) : (
                  /* ── Success State ───────────────────────────── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                      className="w-16 h-16 rounded-2xl bg-brandGreen/10 border border-brandGreen/25 flex items-center justify-center text-brandGreen"
                    >
                      <Check size={28} strokeWidth={2.5} />
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-accent font-heading mb-1">Message delivered!</h4>
                      <p className="text-accent/55 text-sm font-sans leading-relaxed max-w-xs">
                        Thanks for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="flex gap-3 w-full max-w-xs">
                      <div className="flex-1 bg-primary/20 rounded-xl p-3 border border-accent/5 text-center">
                        <div className="text-[9px] font-mono text-accent/40 uppercase mb-0.5">Status</div>
                        <div className="text-xs font-bold text-brandGreen">Delivered</div>
                      </div>
                      <div className="flex-1 bg-primary/20 rounded-xl p-3 border border-accent/5 text-center">
                        <div className="text-[9px] font-mono text-accent/40 uppercase mb-0.5">ETA Reply</div>
                        <div className="text-xs font-bold text-brandCyan">≤ 24h</div>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-xs font-mono text-accent/45 hover:text-brandCyan transition-colors underline underline-offset-2"
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
    </SectionReveal>
  );
};

export default Contact;
