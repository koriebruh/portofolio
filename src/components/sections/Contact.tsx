import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Play, Check, Terminal, Code, Settings, ListFilter, HelpCircle } from 'lucide-react';
import SectionReveal from '../ui/SectionReveal';

interface RoutePreset {
  id: string;
  method: 'POST' | 'GET';
  route: string;
  name: string;
  description: string;
}

const Contact = () => {
  const routePresets: RoutePreset[] = [
    { id: 'collab', method: 'POST', route: '/v1/collaborations', name: 'Collab Node', description: 'Partner on engineering & systems design.' },
    { id: 'recruitment', method: 'POST', route: '/v1/recruitment', name: 'Recruit Node', description: 'Employment opportunities & contract terms.' },
    { id: 'general', method: 'POST', route: '/v1/general/ping', name: 'Ping Handshake', description: 'General inquiries, feedback, and pings.' }
  ];

  const [activeRoute, setActiveRoute] = useState<RoutePreset>(routePresets[0]);
  const [activeTab, setActiveTab] = useState<'body' | 'headers'>('body');
  const [formState, setFormState] = useState({
    identity_name: '',
    reply_channel: '',
    payload_content: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "// API Client initialized. TLS 1.3 encrypted handshake active.",
    "// Standing by for TCP packet configuration..."
  ]);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString().split(' ')[0];
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev.slice(0, 3)]);
  };

  const handleFieldChange = (field: 'identity_name' | 'reply_channel' | 'payload_content', value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    if (value.length % 6 === 0 && value.length > 0) {
      addLog(`ALLOC: Buffer resized for '${field}' (+${value.length} B)`);
    }
  };

  const submissionSteps = [
    "Establishing TLS 1.3 handshake with api.koriebree.dev...",
    "Hashing payload elements using SHA-256 cipher...",
    "Opening temporary multiplex socket stream on port 443...",
    "Transmitting packet frames through reverse gateway node...",
    "HANDSHAKE SUCCESSFUL: Remote node committed transaction."
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.identity_name || !formState.reply_channel || !formState.payload_content) {
      addLog("ERROR: Null bytes rejected. Please configure payload body completely.");
      return;
    }

    setIsSubmitting(true);
    setCurrentStep(0);
    addLog(`EXEC: dispatching HTTP ${activeRoute.method} target ${activeRoute.route}`);

    let step = 0;
    const interval = setInterval(() => {
      if (step < submissionSteps.length - 1) {
        step++;
        setCurrentStep(step);
        addLog(`INFO: ${submissionSteps[step]}`);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          addLog("SUCCESS: HTTP 201 Created. Handshake complete.");
        }, 600);
      }
    }, 900);
  };

  const handleReset = () => {
    setFormState({ identity_name: '', reply_channel: '', payload_content: '' });
    setIsSuccess(false);
    setIsSubmitting(false);
    setCurrentStep(0);
    setLogs([
      "// Socket reset gracefully. Connection re-established.",
      "// Awaiting route parameters..."
    ]);
  };

  const calculateBytes = () => {
    return formState.identity_name.length + formState.reply_channel.length + formState.payload_content.length;
  };

  const socialLinks = [
    { name: "SMTP Direct Mail", desc: "hello@koriebree.dev", url: "mailto:hello@koriebree.dev", icon: <Mail size={18} />, colorClass: "text-brandCyan border-brandCyan/10 hover:border-brandCyan/35 hover:shadow-[0_8px_20px_rgba(39,181,217,0.04)]" },
    { name: "GitHub Node", desc: "github.com/profile", url: "#", icon: <Github size={18} />, colorClass: "text-brandTurquoise border-brandTurquoise/10 hover:border-brandTurquoise/35 hover:shadow-[0_8px_20px_rgba(44,201,218,0.04)]" },
    { name: "LinkedIn Secure", desc: "linkedin.com/in/profile", url: "#", icon: <Linkedin size={18} />, colorClass: "text-brandGreen border-brandGreen/10 hover:border-brandGreen/35 hover:shadow-[0_8px_20px_rgba(135,199,109,0.04)]" }
  ];

  return (
    <SectionReveal id="contact" className="py-28 relative overflow-hidden bg-primary">
      {/* Visual background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,30,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(24,30,36,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
      
      {/* Blurred lighting bubbles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brandMint/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brandCyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandCyan/10 border border-brandCyan/20 text-brandCyan text-xs font-mono font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brandGreen animate-pulse" />
            Gateway Router: Port 443 Available
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-accent">
            Initialize <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandCyan via-brandTurquoise to-brandGreen">Transmission</span>
          </h2>
          <p className="text-accent/70 text-lg max-w-xl mx-auto leading-relaxed font-sans">
            Submit a structured transaction. Interact with the REST routes below to stream your payload to my remote node.
          </p>
        </div>

        {/* REST API Client Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: API Route Preset Selector */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-accent/40 px-1 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <ListFilter size={12} className="text-brandCyan" />
                  Select Endpoint Route
                </span>
                <span>Active</span>
              </div>
              
              <div className="space-y-3">
                {routePresets.map((preset) => {
                  const isSelected = activeRoute.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setActiveRoute(preset);
                        addLog(`ROUTING: Switched active target context to '${preset.route}'`);
                      }}
                      className={`w-full text-left p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 bg-white/70 backdrop-blur-md shadow-sm ${
                        isSelected 
                          ? 'border-brandCyan/35 ring-1 ring-brandCyan/20 shadow-[0_8px_20px_rgba(39,181,217,0.04)]' 
                          : 'border-accent/5 hover:border-brandCyan/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-xs font-mono font-bold text-brandCyan bg-brandCyan/10 px-2 py-0.5 rounded">
                          {preset.method} {preset.route}
                        </span>
                        <span className={`text-[10px] font-mono font-bold uppercase transition-colors ${
                          isSelected ? 'text-brandGreen' : 'text-accent/30'
                        }`}>
                          {preset.name}
                        </span>
                      </div>
                      <p className="text-accent/50 text-[11px] font-sans mt-2 leading-relaxed">
                        {preset.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Social Connection Channels */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-accent/5 p-5 shadow-sm space-y-4">
              <div className="text-[10px] font-mono font-semibold text-accent/40 uppercase tracking-widest px-1">
                Alternate Channels
              </div>
              <div className="space-y-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    className={`flex items-center gap-4 p-3 rounded-xl border bg-white/50 transition-all duration-300 ${link.colorClass}`}
                  >
                    <div className="p-2.5 rounded-lg bg-primary/40 border border-accent/5">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-accent font-bold text-xs">{link.name}</div>
                      <div className="text-[10px] text-accent/40 font-mono truncate">{link.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive API Workspace / Form client */}
          <div className="lg:col-span-8">
            <div className="bg-white/85 backdrop-blur-xl rounded-2xl border border-accent/5 flex flex-col h-full shadow-[0_20px_50px_rgba(24,30,36,0.03)] overflow-hidden">
              
              {/* REST Client Top Header */}
              <div className="bg-primary/50 border-b border-accent/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
                
                {/* Router input bar */}
                <div className="flex items-center gap-2 flex-1 min-w-0 bg-white rounded-xl border border-accent/5 px-3 py-2">
                  <span className="text-xs font-mono font-bold text-brandCyan uppercase select-none">
                    {activeRoute.method}
                  </span>
                  <div className="w-px h-3.5 bg-accent/10" />
                  <span className="text-xs font-mono text-accent/40 select-none">
                    https://api.koriebree.dev
                  </span>
                  <span className="text-xs font-mono text-accent font-semibold truncate">
                    {activeRoute.route}
                  </span>
                </div>

                {/* HTTP settings/status indicator */}
                <div className="flex items-center gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-accent/40">
                    <Settings size={14} />
                    <span>Headers (3)</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
                  <span className="text-brandGreen font-bold">200 OK</span>
                </div>
              </div>

              {/* Sub-workspace tabs */}
              <div className="flex border-b border-accent/5 select-none text-xs font-mono font-semibold">
                <button
                  onClick={() => setActiveTab('body')}
                  className={`px-6 py-3 border-r border-accent/5 transition-colors flex items-center gap-2 ${
                    activeTab === 'body' ? 'bg-white text-brandCyan' : 'text-accent/50 hover:text-accent bg-primary/5'
                  }`}
                >
                  <Code size={13} />
                  Body (JSON)
                </button>
                <button
                  onClick={() => setActiveTab('headers')}
                  className={`px-6 py-3 border-r border-accent/5 transition-colors flex items-center gap-2 ${
                    activeTab === 'headers' ? 'bg-white text-brandCyan' : 'text-accent/50 hover:text-accent bg-primary/5'
                  }`}
                >
                  <Settings size={13} />
                  Headers
                </button>
              </div>

              {/* Tab Workspace content */}
              <div className="p-6 flex-1 flex flex-col justify-between min-h-[340px]">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between h-full space-y-6">
                      
                      {activeTab === 'body' ? (
                        /* Workspace Body: JSON Editor inputs */
                        <motion.div
                          key="body"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-4 font-mono text-sm leading-relaxed"
                        >
                          <div className="text-accent/30 text-xs">// JSON Request Payload Parameter List</div>
                          
                          <div className="flex items-start">
                            <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2">01</span>
                            <span className="text-accent/40 font-semibold">{`{`}</span>
                          </div>

                          {/* Param 1: Identity Name */}
                          <div className="flex items-center">
                            <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2">02</span>
                            <span className="text-brandCyan font-semibold pl-4">"identity_name"</span>
                            <span className="text-accent/40 mx-2">:</span>
                            <span className="text-[#DF6D6D]">"</span>
                            <input
                              type="text"
                              required
                              value={formState.identity_name}
                              onChange={(e) => handleFieldChange('identity_name', e.target.value)}
                              disabled={isSubmitting}
                              className="bg-transparent text-accent font-sans focus:outline-none border-b border-transparent focus:border-brandCyan/25 flex-1 py-0.5 text-sm"
                              placeholder="Your full name..."
                            />
                            <span className="text-[#DF6D6D]">",</span>
                          </div>

                          {/* Param 2: Reply channel */}
                          <div className="flex items-center">
                            <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2">03</span>
                            <span className="text-brandCyan font-semibold pl-4">"reply_channel"</span>
                            <span className="text-accent/40 mx-2">:</span>
                            <span className="text-[#DF6D6D]">"</span>
                            <input
                              type="email"
                              required
                              value={formState.reply_channel}
                              onChange={(e) => handleFieldChange('reply_channel', e.target.value)}
                              disabled={isSubmitting}
                              className="bg-transparent text-accent font-sans focus:outline-none border-b border-transparent focus:border-brandCyan/25 flex-1 py-0.5 text-sm"
                              placeholder="Your contact email address..."
                            />
                            <span className="text-[#DF6D6D]">",</span>
                          </div>

                          {/* Param 3: Content */}
                          <div className="flex flex-col">
                            <div className="flex items-start">
                              <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2">04</span>
                              <span className="text-brandCyan font-semibold pl-4">"payload_content"</span>
                              <span className="text-accent/40 mx-2">:</span>
                              <span className="text-[#DF6D6D]">"</span>
                            </div>
                            <div className="flex items-stretch mt-1">
                              <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2" />
                              <textarea
                                required
                                rows={3}
                                value={formState.payload_content}
                                onChange={(e) => handleFieldChange('payload_content', e.target.value)}
                                disabled={isSubmitting}
                                className="bg-primary/25 border border-accent/5 focus:border-brandCyan/25 rounded-xl px-4 py-2.5 text-accent focus:outline-none flex-1 resize-none placeholder:text-accent/30 leading-relaxed text-sm font-sans"
                                placeholder="State your system specs, requirements, or pings..."
                              />
                            </div>
                            <div className="flex items-center mt-1">
                              <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2" />
                              <span className="text-[#DF6D6D] pl-4">"</span>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <span className="text-accent/20 w-8 select-none border-r border-accent/5 mr-4 text-right pr-2">05</span>
                            <span className="text-accent/40 font-semibold">{`}`}</span>
                          </div>
                        </motion.div>
                      ) : (
                        /* Workspace Headers Table */
                        <motion.div
                          key="headers"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-4 font-mono text-xs text-accent/70 flex-1 flex flex-col justify-center"
                        >
                          <div className="flex justify-between border-b border-accent/5 pb-2.5">
                            <span className="text-accent/40 font-semibold">Content-Type</span>
                            <span className="font-bold text-accent">application/json</span>
                          </div>
                          <div className="flex justify-between border-b border-accent/5 pb-2.5">
                            <span className="text-accent/40 font-semibold">User-Agent</span>
                            <span className="font-bold text-accent">PortfolioAPIClient/v2.0</span>
                          </div>
                          <div className="flex justify-between border-b border-accent/5 pb-2.5">
                            <span className="text-accent/40 font-semibold">Accept</span>
                            <span className="font-bold text-accent">*/*</span>
                          </div>
                          <div className="flex justify-between border-b border-accent/5 pb-2.5">
                            <span className="text-accent/40 font-semibold">Authorization</span>
                            <span className="font-bold text-brandGreen">Bearer ephemeral_sha256_handshake</span>
                          </div>
                          <div className="text-[10px] text-accent/30 italic text-center pt-2">
                            <HelpCircle size={10} className="inline mr-1" />
                            These HTTP metadata headers are appended to protect transaction integrity.
                          </div>
                        </motion.div>
                      )}

                      {/* Actions */}
                      <div className="pt-6 border-t border-accent/5 mt-auto">
                        {isSubmitting ? (
                          <div className="space-y-3 p-4 rounded-xl bg-primary/30 border border-accent/5 font-mono text-xs shadow-sm">
                            <div className="flex items-center justify-between text-brandCyan font-semibold">
                              <span>TRANSMITTING PACKETS...</span>
                              <span>{Math.round(((currentStep + 1) / submissionSteps.length) * 100)}%</span>
                            </div>
                            <div className="w-full bg-accent/5 h-1.5 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-brandCyan to-brandGreen"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentStep + 1) / submissionSteps.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                            <div className="text-accent/60 mt-1 truncate">
                              {submissionSteps[currentStep]}
                            </div>
                          </div>
                        ) : (
                          <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full relative overflow-hidden bg-brandCyan text-white font-mono font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(39,181,217,0.12)] text-sm uppercase tracking-wider"
                          >
                            <Play size={13} />
                            Send REST Request Payload
                          </motion.button>
                        )}
                      </div>

                    </form>
                  ) : (
                    /* Handshake success screen */
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="flex flex-col items-center justify-center py-8 text-center space-y-6 flex-1"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-brandGreen/10 border border-brandGreen/25 flex items-center justify-center text-brandGreen shadow-sm">
                        <Check size={26} className="animate-bounce" />
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-accent tracking-wide font-heading">Handshake Finalized</h4>
                        <p className="text-accent/65 text-sm max-w-sm font-sans leading-relaxed">
                          Secure TCP gateway accepted packets. The target message buffer has been committed. I will reply back to your replica node coordinates.
                        </p>
                      </div>

                      <div className="bg-primary/20 border border-accent/5 p-4.5 rounded-xl font-mono text-left text-xs w-full max-w-xs space-y-2 shadow-sm">
                        <div className="text-brandGreen font-bold">STATUS: 201 CREATED</div>
                        <div className="text-accent/60">PAYLOAD HASH: SHA-256</div>
                        <div className="text-accent/60">TRANSMISSION SIZE: {calculateBytes()} Bytes</div>
                        <div className="text-accent/60">GATEWAY DURATION: 18.2ms</div>
                      </div>

                      <button 
                        onClick={handleReset}
                        className="px-5 py-2.5 rounded-xl bg-white hover:bg-primary/10 text-accent font-semibold text-xs border border-accent/5 flex items-center gap-2 hover:border-brandCyan/30 transition-all shadow-sm font-mono uppercase tracking-wider"
                      >
                        Reset Client Connection
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* API Client Bottom Console Logger Panel */}
              <div className="bg-[#181E24] border-t border-white/5 p-5 font-mono text-white/90 select-none">
                <div className="flex items-center justify-between text-xs text-white/30 mb-3 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={12} className="text-brandCyan" />
                    Console Logger Output
                  </span>
                  <span>buffer: {calculateBytes()}B</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  {logs.map((log, i) => (
                    <div 
                      key={i} 
                      className={`${
                        log.startsWith('//') ? 'text-white/30' :
                        log.includes('SUCCESS') || log.includes('201') ? 'text-brandGreen font-semibold' :
                        log.includes('ERROR') ? 'text-[#ff5f56] font-semibold' :
                        log.includes('ROUTING') ? 'text-brandCyan font-semibold' :
                        log.includes('ALLOC') ? 'text-[#FFD54F]' : 'text-white/50'
                      } truncate`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </SectionReveal>
  );
};

export default Contact;
