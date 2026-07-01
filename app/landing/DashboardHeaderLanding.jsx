"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Book, Github, Coffee, MailPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6"
    >
      <nav className="w-full max-w-6xl flex justify-between items-center px-6 py-2.5 border border-white/20 bg-white/70 backdrop-blur-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.02)] rounded-full transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-gray-900 tracking-tight text-sm sm:text-base">StudyPartner</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1.5 text-gray-600 font-medium text-sm">
          {[
            { href: "https://github.com/StayLearner/Study_Partner_Ai-Project", icon: Github, label: "GitHub" },
            { href: "#", icon: Book, label: "Docs" },
            { href: "https://wa.link/n6hutt", icon: MailPlus, label: "Review" },
            { href: "https://razorpay.me/@staylearner", icon: Coffee, label: "Buy a Tea" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="relative text-gray-600 hover:text-black px-3.5 py-1.5 flex items-center space-x-1.5 transition-colors group"
            >
              <item.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-gradient-to-r from-blue-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="/dashboard"
            whileHover={{ y: -2, scale: 1.02, boxShadow: "0 8px 20px rgba(59,130,246,0.15)" }}
            whileTap={{ scale: 0.98 }}
            className="text-white font-medium text-xs sm:text-sm flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-full shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300"
          >
            <span>Dashboard</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none p-1.5 hover:bg-black/5 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 mx-6 border border-white/50 bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-5 flex flex-col space-y-4 md:hidden z-50"
            >
              {[
                { href: "https://github.com/StayLearner/Study_Partner_Ai-Project", icon: Github, label: "GitHub" },
                { href: "#", icon: Book, label: "Documentation" },
                { href: "https://wa.link/n6hutt", icon: MailPlus, label: "Write a Review" },
                { href: "https://razorpay.me/@staylearner", icon: Coffee, label: "Buy Me a Tea" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-gray-600 hover:text-black transition-colors text-sm flex items-center space-x-2.5 py-1"
                >
                  <item.icon className="w-4 h-4 text-gray-500" />
                  <span>{item.label}</span>
                </a>
              ))}

              <hr className="border-black/[0.04]" />

              <a
                href="/dashboard"
                className="text-white font-semibold text-sm flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 py-3 rounded-xl shadow-md"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
