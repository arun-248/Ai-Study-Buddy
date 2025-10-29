import React from "react";
import { Link } from "react-router-dom";
import { Brain, Heart, Mail, Sparkles, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white mt-auto relative overflow-hidden shadow-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10">
        {/* Main Content */}
        <div className="text-center mb-6">
          {/* Brand Section */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl transform hover:rotate-12 transition-transform hover:scale-110">
              <Brain className="w-7 h-7 text-indigo-600" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white drop-shadow-lg">
                AI Study Buddy
              </div>
              <div className="text-xs text-white/90 font-semibold drop-shadow-md">
                by Arun Chinthalapally
              </div>
            </div>
          </div>

          <p className="text-base mb-4 text-white/90 font-medium max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Transform your study materials into interactive learning experiences with AI ✨
          </p>

          {/* Buildathon Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 shadow-lg mb-6 hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-yellow-200" />
            <span className="font-bold text-white drop-shadow-md text-sm">
              OpenAI × NxtWave Buildathon 2025
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            to="/dashboard"
            className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-semibold transition-all hover:scale-110 border border-white/40 shadow-md text-sm"
          >
            Dashboard
          </Link>
          <Link
            to="/features"
            className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-semibold transition-all hover:scale-110 border border-white/40 shadow-md text-sm"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-semibold transition-all hover:scale-110 border border-white/40 shadow-md text-sm"
          >
            About Us
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-6 shadow-sm"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-white/90 font-medium drop-shadow-md text-sm">
            <span className="font-bold">© {currentYear} Team IntelliLearn</span>
            <span className="hidden md:inline text-white/70">•</span>
            <span className="flex items-center gap-2">
              Built with{" "}
              <Heart className="w-4 h-4 fill-white text-white animate-pulse drop-shadow-lg" />{" "}
              for students worldwide
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:arunchinthalapally248@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-125 border border-white/40 shadow-lg">
                <Mail className="w-5 h-5" />
              </button>
            </a>

            <a
              href="https://github.com/arun-248"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-125 border border-white/40 shadow-lg">
                <Github className="w-5 h-5" />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/arun-chinthalapally-7a254b256"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-125 border border-white/40 shadow-lg">
                <Linkedin className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-8 pt-6 border-t border-white/30">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-md">
              <span className="font-bold text-white">Powered by</span>
              <span className="text-yellow-200 font-bold">Gemini 2.5 Flash</span>
            </div>
            <div className="hidden md:block text-white/70 font-bold">•</div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-md">
              <span className="font-bold text-white">Built with</span>
              <span className="text-cyan-200 font-bold">React</span>
              <span className="text-white/70 font-bold">&</span>
              <span className="text-green-200 font-bold">FastAPI</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-5 text-center">
          <p className="text-white/90 font-bold text-sm drop-shadow-lg">
            "Learn smarter, not harder" 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}