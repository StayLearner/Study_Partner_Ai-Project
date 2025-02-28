"use client";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function DashboardHeader() {
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

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative p-4 shadow-lg flex items-center justify-between rounded-lg overflow-hidden"
    >
      {/* Animated Tagline */}
      <motion.h1
        className="absolute left-0 text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap"
        animate={{ x: ["-10%", "100%", "-10%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      >
        Upgrade Your Learning Experience - The Smart Way!
      </motion.h1>

      {/* Sexy Date-Time Section */}
      <motion.div
        className="px-4 py-2 backdrop-blur-md bg-white/20  rounded-lg text- text-sm shadow-md"
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
    </motion.header>
  );
}

export default DashboardHeader;
