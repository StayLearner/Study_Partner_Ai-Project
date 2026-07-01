"use client";

import { UserProfile } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useEffect } from "react";
import BackButton from "@/components/ui/back-button";

export default function SecurityPage() {
  // Auto-navigate Clerk UserProfile to the Security tab via hash routing
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash.includes("security")) {
      window.location.hash = "/security";
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Back Button */}
      <div className="mb-6">
        <BackButton fallback="/dashboard" />
      </div>
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 border border-red-100">
            <Shield className="w-5 h-5 text-red-500" />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
            <p className="text-sm text-gray-400 mt-0.5">
              Manage your password, two-factor authentication, and active sessions
            </p>
          </div>
        </div>
      </motion.div>

      {/* Clerk UserProfile – auto-opens Security tab via #/security hash */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <UserProfile routing="hash" />
      </motion.div>
    </div>
  );
}
