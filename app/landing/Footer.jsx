"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] sm:w-[90%] max-w-lg px-4 sm:px-5 py-2 sm:py-2.5 border border-white/20 bg-white/70 backdrop-blur-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] rounded-full transition-all duration-300 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 font-medium tracking-wide pointer-events-auto"
    >
      <p className="flex items-center gap-2">
        <span>Made by StayLearner</span>
        <a
          href="https://github.com/StayLearner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 text-gray-400 transition-colors flex items-center"
        >
          <Github className="w-3.5 h-3.5" />
        </a>
      </p>
      <p className="flex items-center gap-1 select-none">
        <span>Built for Every Learner</span>
        <span className="text-red-500 animate-pulse">❤️</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
