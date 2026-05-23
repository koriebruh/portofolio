import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-accent/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-accent/50 text-sm font-medium">
          © {new Date().getFullYear()} Muhammad Jamaludin Nur. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm text-accent/50">
          <motion.a whileHover={{ color: '#27B5D9' }} href="#" className="hover:text-brandCyan font-medium transition-colors">Privacy Policy</motion.a>
          <motion.a whileHover={{ color: '#27B5D9' }} href="#" className="hover:text-brandCyan font-medium transition-colors">Terms of Service</motion.a>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-accent/40">
          <span className="w-2 h-2 rounded-full bg-brandGreen animate-pulse" />
          System Status: Operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;
