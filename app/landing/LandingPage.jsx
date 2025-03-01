"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Head Section */}
      <Head>
        <title>Study Partner - Next-Gen AI Study Notes</title>
        <meta name="description" content="Your AI-powered study companion" />
      </Head>

      {/* Header Section */}
      <header className="text-center text-4xl font-bold text-gray-900 mb-6">
        <h1>Next-Gen AI</h1>
        <h2 className="text-blue-600">Study Partner</h2>
      </header>

      {/* Main Content Box */}
      <div className="from-teal-400 to-stone-100 rounded-lg shadow-xl p-6 w-5/6 max-w-lg text-center">
        <h3 className="text-xl font-semibold mb-4">Your Study Companion: AI</h3>
        <span className="text-sm font-semibold text-blue-400">
          That Understands Your Study Needs, Learn More in Less Time.
        </span>

        <div className="p-4 rounded-lg flex flex-col items-center">
          {/* Optimized Logo using next/image */}
          <Image
            src="/logo.svg"
            alt="Study Smart Logo"
            width={160}
            height={160}
            className="w-2/3 mb-4"
          />

          {/* Next.js Internal Link */}
          <Link href="/dashboard">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>

      {/* Social Media Links */}
      <section className="mt-10 w-full max-w-4xl text-center px-4">
        <h3 className="text-xl font-semibold mb-4">Find Us On</h3>

        <div className="grid grid-cols-3 gap-6 sm:flex sm:justify-center sm:space-x-16">
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
              className="flex flex-col items-center space-y-2 transition-transform hover:scale-105"
            >
              <Image src={src} alt={alt} width={48} height={48} className="sm:w-16 sm:h-16" />
              <span className="text-sm sm:text-base">{name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
