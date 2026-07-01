"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

/**
 * BackButton — Global reusable back navigation component
 *
 * Props:
 *  - fallback: string  — route to push if no browser history (default: "/dashboard")
 *  - label: string     — text shown on desktop (default: "Back")
 *  - className: string — extra Tailwind classes for positioning overrides
 */
export default function BackButton({ fallback = "/dashboard", label = "Back", className = "" }) {
  const router = useRouter();

  const handleBack = () => {
    // If there is history in the session, go back; otherwise use fallback
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ x: -3 }}
      whileTap={{ scale: 0.95 }}
      className={`
        group inline-flex items-center gap-2
        px-3 py-2 rounded-xl
        bg-white/80 backdrop-blur-sm
        border border-gray-200/80
        shadow-sm hover:shadow-md
        text-gray-500 hover:text-gray-900
        text-sm font-medium
        transition-all duration-200
        cursor-pointer
        ${className}
      `}
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {/* Label hidden on mobile, shown on sm+ */}
      <span className="hidden sm:inline">{label}</span>
    </motion.button>
  );
}
