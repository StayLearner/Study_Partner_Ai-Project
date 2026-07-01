"use client";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";

/**
 * DashboardHeader – top bar for the dashboard.
 * onMenuClick: callback to open the mobile sidebar drawer.
 */
function DashboardHeader({ onMenuClick }) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentDateTime(`${formattedDate} | ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-20 p-3 sm:p-4 shadow-md bg-white/80 backdrop-blur-md flex items-center justify-between gap-3 rounded-none sm:rounded-lg mx-0 sm:mx-2 sm:mt-2"
    >
      {/* ── Left: Hamburger (mobile) + Tagline (desktop) ── */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Hamburger – mobile only */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-gray-600 shrink-0"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Animated tagline – hidden on mobile to avoid overlap */}
        <div className="hidden md:block overflow-hidden flex-1">
          <motion.p
            className="text-sm font-semibold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap"
            animate={{ x: ["-5%", "60%", "-5%"] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
          >
            Upgrade Your Learning Experience — The Smart Way!
          </motion.p>
        </div>

        {/* Static title – mobile only */}
        <span className="md:hidden text-sm font-bold text-blue-700 truncate">Study Partner</span>
      </div>

      {/* ── Right: Clock + User ──────────────────────────── */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Clock – hidden on small screens */}
        <motion.div
          className="hidden sm:flex px-3 py-1.5 backdrop-blur-md bg-white/30 border border-gray-100 rounded-lg text-xs text-gray-600 shadow-sm whitespace-nowrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          🕒 {currentDateTime}
        </motion.div>

        {/* User Profile */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <UserButton />
        </motion.div>
      </div>
    </motion.header>
  );
}

export default DashboardHeader;
