"use client"
import { useState } from "react";
import { Menu, X, ArrowRight, Book, Github, Coffee } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 shadow-md rounded-lg max-w-full mx-auto from-white to-transparent">
      {/* Logo */}
      <img src="/logo.svg" alt="Logo" className="w-10 h-10" />

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-gray-900 font-semibold">
        <a
          href="https://github.com/StayLearner/Ai_Study_Helper_Project"
          className="hover:text-blue-500 transition duration-200 text-lg flex items-center space-x-2"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>

        <a
          href="#"
          className="hover:text-blue-500 transition duration-200 text-lg flex items-center space-x-2"
        >
          <Book className="w-5 h-5" />
          <span>Documentation</span>
        </a>

        <a
          href="https://razorpay.me/@staylearner"
          className="hover:text-blue-500 transition duration-200 text-lg flex items-center space-x-2"
        >
          <Coffee className="w-5 h-5" />
          <span>Buy Me a Tea</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-900 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } py-6 flex flex-col items-center space-y-4 md:hidden z-40`}
      >
        <a
          href="https://github.com/StayLearner/Ai_Study_Helper_Project"
          className="text-gray-900 hover:text-blue-500 transition duration-200 text-lg flex items-center space-x-2"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>

        <a
          href="#"
          className="text-gray-900 hover:text-blue-500 transition duration-200 text-lg flex items-center space-x-2"
        >
          <Book className="w-5 h-5" />
          <span>Documentation</span>
        </a>

        <a
          href="https://razorpay.me/@staylearner"
          className="text-gray-900 hover:text-blue-500 transition duration-200 text-lg flex items-center space-x-2"
        >
          <Coffee className="w-5 h-5" />
          <span>Buy Me a Tea</span>
        </a>
      </div>

      {/* Login Button */}
      <div className="hidden md:flex items-center space-x-1">
        <a
          href="/dashboard"
          className="text-gray-900 font-semibold flex items-center hover:text-blue-500 transition duration-200"
        >
          Log in <ArrowRight className="w-5 h-5 ml-1" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
