"use client"

import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";
import { CourseCountContext } from "../_context/CourseCountContext";
import { AnimatePresence, motion } from "framer-motion";

/**
 * DashboardLayout wraps all dashboard pages with a responsive sidebar + header.
 * On mobile: sidebar is hidden; a hamburger in the header opens a slide-in drawer.
 * On md+: sidebar is always visible as a fixed column.
 */
function DashboardLayout({ children }) {
  const [totalCourse, setTotalCourse] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <CourseCountContext.Provider value={{ totalCourse, setTotalCourse }}>
      <div className="min-h-screen">
        {/* ── Fixed Desktop Sidebar ─────────────────────────── */}
        <div className="md:w-64 hidden md:block fixed top-0 left-0 h-full z-30">
          <SideBar />
        </div>

        {/* ── Mobile Sidebar Drawer ─────────────────────────── */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              {/* Drawer Panel */}
              <motion.div
                key="drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-64 z-50 md:hidden shadow-2xl"
              >
                <SideBar onClose={() => setSidebarOpen(false)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── Main Content Area ─────────────────────────────── */}
        <div className="md:ml-64 flex flex-col min-h-screen">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
            {children}
          </main>
        </div>
      </div>
    </CourseCountContext.Provider>
  );
}

export default DashboardLayout;
