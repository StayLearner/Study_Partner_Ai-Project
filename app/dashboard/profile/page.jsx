"use client";

import { useUser } from "@clerk/nextjs";
import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Calendar,
  BookOpen,
  FileText,
  Copy,
  Check,
  Shield,
  Settings,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";
import { CourseCountContext } from "@/app/_context/CourseCountContext";
import { UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import BackButton from "@/components/ui/back-button";

// ─────────────────────────────────────────────────────────────
// Skeleton Loader
// ─────────────────────────────────────────────────────────────
function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-44 rounded-2xl bg-gradient-to-r from-blue-200 to-purple-200" />
      <div className="grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-gray-200" />
        ))}
      </div>
      <div className="h-48 rounded-xl bg-gray-200" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Stat Card – premium gradient style
// ─────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, gradient, iconBg, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.45, type: "spring", stiffness: 120 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`relative overflow-hidden rounded-3xl p-6 shadow-lg border border-white/60 ${gradient}`}
    >
      {/* Frosted glass shine */}
      <div className="absolute inset-0 bg-white/10 rounded-3xl" />
      {/* Top-right decorative circle */}
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />

      <div className="relative">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${iconBg} shadow-lg mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className="text-3xl font-extrabold text-white tracking-tight">{value ?? "—"}</p>
        <p className="text-sm font-medium text-white/70 mt-1">{label}</p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Info Field – standalone styled card per field
// ─────────────────────────────────────────────────────────────
function InfoField({ icon: Icon, label, value, copyable, accentColor = "border-blue-400", iconColor = "text-blue-500", iconBg = "bg-blue-50" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 border-l-4 ${accentColor} group`}>
      {/* Icon */}
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${iconBg} shrink-0`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
          <p className="text-sm font-semibold text-gray-800 truncate max-w-[260px]">{value || "—"}</p>
        </div>
      </div>
      {/* Copy button */}
      {copyable && (
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-blue-100 text-xs font-medium text-gray-500 hover:text-blue-600 transition-all shrink-0 ml-3"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { totalCourse } = useContext(CourseCountContext);
  const [showClerkSettings, setShowClerkSettings] = useState(false);

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    : null;

  if (!isLoaded) return <ProfileSkeleton />;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
        <p>Unable to load profile. Please sign in again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">

      {/* Back Button */}
      <div>
        <BackButton fallback="/dashboard" />
      </div>

      {/* ── PROFILE HEADER ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 p-8 text-white shadow-xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-24 translate-x-24" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-16 -translate-x-16" />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-2xl ring-4 ring-white/30 overflow-hidden shadow-xl">
              {user.imageUrl ? (
                <Image
                  src={user.imageUrl}
                  alt={user.fullName || "Profile"}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/20 text-3xl font-bold">
                  {user.fullName?.[0] ?? "U"}
                </div>
              )}
            </div>
            <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-green-400 border-2 border-white rounded-full" />
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl font-bold">{user.fullName || "User"}</h1>
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/15 text-xs font-medium border border-white/20 w-fit mx-auto sm:mx-0">
                <BadgeCheck className="w-3.5 h-3.5 text-green-300" />
                Verified
              </span>
            </div>

            <p className="text-blue-200 mt-1 text-sm">
              {user.primaryEmailAddress?.emailAddress}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
              {user.username && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20">
                  <User className="w-3 h-3" />
                  @{user.username}
                </span>
              )}
              {joinedDate && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20">
                  <Calendar className="w-3 h-3" />
                  Joined {joinedDate}
                </span>
              )}
            </div>
          </div>

          {/* Settings Button */}
          <button
            onClick={() => setShowClerkSettings(true)}
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/25 text-sm font-medium hover:bg-white/25 transition-colors"
          >
            <Settings className="w-4 h-4" />
            Account Settings
          </button>
        </div>
      </motion.div>

      {/* ── STATS GRID (2 cards only) ───────────────────────── */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={BookOpen}
            label="Courses Created"
            value={totalCourse ?? 0}
            gradient="bg-gradient-to-br from-blue-500 to-blue-700"
            iconBg="bg-white/20"
            delay={0.1}
          />
          <StatCard
            icon={FileText}
            label="Notes Generated"
            value={totalCourse ? totalCourse * 8 : 0}
            gradient="bg-gradient-to-br from-teal-400 to-teal-600"
            iconBg="bg-white/20"
            delay={0.15}
          />
        </div>
      </div>

      {/* ── ACCOUNT INFO (full width) ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
      >
        {/* Card header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-700 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-base">Account Information</h3>
            <p className="text-xs text-slate-400 mt-0.5">Your profile details</p>
          </div>
        </div>
        {/* Fields */}
        <div className="p-5 bg-gray-50/60 space-y-3">
          <InfoField
            icon={User}
            label="Full Name"
            value={user.fullName}
            accentColor="border-blue-400"
            iconColor="text-blue-500"
            iconBg="bg-blue-50"
          />
          <InfoField
            icon={Mail}
            label="Email Address"
            value={user.primaryEmailAddress?.emailAddress}
            accentColor="border-violet-400"
            iconColor="text-violet-500"
            iconBg="bg-violet-50"
          />
          <InfoField
            icon={Calendar}
            label="Member Since"
            value={joinedDate}
            accentColor="border-teal-400"
            iconColor="text-teal-500"
            iconBg="bg-teal-50"
          />
          <InfoField
            icon={Shield}
            label="User ID"
            value={user.id}
            accentColor="border-orange-400"
            iconColor="text-orange-500"
            iconBg="bg-orange-50"
            copyable
          />
        </div>
      </motion.div>

      {/* ── CLERK SETTINGS MODAL ──────────────────────────── */}
      {showClerkSettings && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setShowClerkSettings(false); }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-900">Account Settings</h3>
                <p className="text-sm text-gray-400 mt-0.5">Secured by Clerk</p>
              </div>
              <button
                onClick={() => setShowClerkSettings(false)}
                className="flex items-center justify-center w-8 h-8 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors text-lg font-light"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <UserProfile routing="hash" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
