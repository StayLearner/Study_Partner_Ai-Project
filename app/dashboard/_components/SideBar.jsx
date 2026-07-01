"use client";

import { CourseCountContext } from "@/app/_context/CourseCountContext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield, UserCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { motion } from "framer-motion";

/**
 * SideBar renders the navigation panel.
 * On desktop it is always visible.
 * On mobile it is rendered inside a drawer — onClose is called when the × button is tapped.
 */
function SideBar({ onClose }) {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
    {
      name: "Security",
      icon: Shield,
      path: "/dashboard/security",
    },
  ];

  const { totalCourse } = useContext(CourseCountContext);
  const path = usePathname();

  return (
    <div className="h-screen bg-white shadow-md p-5 flex flex-col overflow-y-auto">
      {/* ── Logo Row ──────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-2">
        <Link href="/" className="flex-1" onClick={onClose}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h1 className="text-xl sm:text-2xl font-bold text-blue-700">Study Partner</h1>
          </motion.div>
        </Link>

        {/* Close button – mobile drawer only */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 text-gray-500 shrink-0"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* ── Create Button & Menu ──────────────────────────── */}
      <div className="mt-8 flex-1">
        <Link href="/create" className="w-full" onClick={onClose}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Button className="w-full bg-black text-white">+ Create New</Button>
          </motion.div>
        </Link>

        <div className="mt-5">
          {MenuList.map((menu, index) => (
            <Link href={menu.path} key={index} onClick={onClose}>
              <div
                className={`flex gap-4 items-center p-3
                  hover:bg-slate-100 rounded-lg cursor-pointer mt-2 transition-colors
                  ${path === menu.path ? "bg-slate-200" : ""}`}
              >
                <menu.icon className="w-5 h-5 shrink-0" />
                <h2 className="text-sm font-medium">{menu.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
