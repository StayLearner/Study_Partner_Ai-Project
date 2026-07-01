"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Brain, 
  FileText, 
  Trophy,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

function LandingPage() {
  // Animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center justify-center py-8 lg:py-0 px-6 max-w-7xl mx-auto h-full lg:h-[calc(100vh-170px)] min-h-0 relative"
    >
      {/* Head Section */}
      <Head>
        <title>StudyPartner - Next-Gen AI Study Companion</title>
        <meta name="description" content="Your AI-powered study companion to learn more in less time." />
      </Head>

      {/* Floating Premium Elements: Limit to 3 (Book, Brain, Sparkle) */}
      {/* 1. 📘 Book (Left side) */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3%] top-[20%] hidden lg:flex p-3 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl text-blue-500 opacity-60 shadow-sm pointer-events-none z-0"
      >
        <BookOpen className="w-5 h-5 text-blue-500" />
      </motion.div>

      {/* 2. 🧠 Brain (Bottom-center) */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[48%] bottom-[12%] hidden lg:flex p-3 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl text-indigo-500 opacity-60 shadow-sm pointer-events-none z-0"
      >
        <Brain className="w-5 h-5 text-indigo-500" />
      </motion.div>

      {/* 3. ✨ Sparkle (Top-right) */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-[6%] top-[8%] hidden lg:flex p-2.5 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl text-teal-500 opacity-60 shadow-sm pointer-events-none z-0"
      >
        <Sparkles className="w-4.5 h-4.5 text-teal-500" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto min-h-0 z-10">
        {/* Left Side: Tagline, Header, Subheading, Partners */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-7"
        >
          {/* Gemini Badge */}
          <motion.div
            whileHover={{ y: -2, scale: 1.01 }}
            className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600 select-none shadow-[0_2px_12px_rgba(59,130,246,0.02)] cursor-default transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span className="tracking-wide">Supercharged by Gemini 2.5 Flash</span>
          </motion.div>

          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.08] lg:max-w-xl">
              Next-Gen AI <br />
              <span className="font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                StudyPartner
              </span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-md font-normal max-w-[540px] mx-auto lg:mx-0 leading-relaxed">
              Understand your study needs, generate interactive summaries, and learn more in less time.
            </p>
          </div>

          {/* Featured In / Social Proof Section */}
          <div className="w-full max-w-[500px] pt-2 space-y-3">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center lg:text-left">
              Featured In
            </h4>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-10">
              {[
                { src: "/google.png", alt: "Google", name: "Google", link: "https://www.google.com" },
                { src: "/duckduckgo.png", alt: "DuckDuckGo", name: "DuckDuckGo", link: "https://www.duckduckgo.com" },
                { src: "/yahoo.png", alt: "Yahoo", name: "Yahoo", link: "https://www.yahoo.com" },
              ].map(({ src, alt, name, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 opacity-40 hover:opacity-100 transition-all duration-300 transform hover:translate-y-[-1.5px]"
                >
                  <Image src={src} alt={alt} width={20} height={20} className="object-contain filter grayscale" />
                  <span className="text-[11px] font-bold text-gray-400 hover:text-gray-600 tracking-wide transition-colors">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Hero Card wrapper */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center w-full relative animate-none"
        >
          {/* Hero Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-sm border border-white/50 bg-white/70 backdrop-blur-xl shadow-hero-card rounded-2xl p-7 flex flex-col relative overflow-hidden group text-left"
          >
            {/* Soft decorative hover glow */}
            <div className="absolute inset-0 border border-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />

            {/* Title / Header */}
            <div className="flex items-center space-x-2.5 mb-6 border-b border-black/[0.03] pb-3 w-full">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                <Brain className="w-4 h-4 text-blue-500 animate-breath" />
              </div>
              <h3 className="text-xs font-bold text-gray-900 tracking-tight">Your Smart Companion</h3>
            </div>

            {/* 3 Points (Green Ticks & Points) */}
            <ul className="w-full text-left space-y-5 mb-8 text-xs text-gray-600 flex-1 max-w-xs mx-auto">
              <li className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span className="font-semibold tracking-tight text-gray-700">Topic-Wise Q&A Generation</span>
              </li>
              <li className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span className="font-semibold tracking-tight text-gray-700">Personalized Study Outlines</span>
              </li>
              <li className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span className="font-semibold tracking-tight text-gray-700">Instant Notes & Explanations</span>
              </li>
            </ul>

            {/* Premium CTA Button */}
            <Link href="/dashboard" className="w-full">
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-[1.5px] rounded-[16px] bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-300 shadow-[0_4px_12px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_24px_rgba(59,130,246,0.16)] group/btn"
              >
                <button 
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-[15px] text-xs transition-all duration-300"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
