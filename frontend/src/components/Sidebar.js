
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Brain, Calendar, Sparkles } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { 
      name: "Notes Summarizer", 
      path: "/summarizer", 
      desc: "Upload & summarize notes", 
      icon: FileText, 
      gradient: "from-blue-400 to-cyan-400" 
    },
    { 
      name: "AI Tutor", 
      path: "/chat", 
      desc: "Ask questions & learn", 
      icon: Brain, 
      gradient: "from-purple-400 to-pink-400" 
    },
    { 
      name: "Study Planner", 
      path: "/planner", 
      desc: "Plan and track study goals", 
      icon: Calendar, 
      gradient: "from-orange-400 to-rose-400" 
    },
  ];

  return (
    <aside className="hidden md:block w-72 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 pt-24 shadow-xl border-r-4 border-indigo-300/60">
      
      {/* Header */}
      <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-indigo-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Study Tools
          </h2>
        </div>
        <p className="text-sm text-indigo-700 ml-1 font-medium">Choose your learning path</p>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;
          
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`group w-full block rounded-2xl transition-all duration-300 overflow-hidden ${
                  isActive ? "shadow-xl scale-105" : "shadow-md hover:shadow-lg hover:scale-102"
                }`}
              >
                {isActive ? (
                  <div className={`bg-gradient-to-r ${link.gradient} p-5`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-gray-800" />
                      </div>
                      <span className="text-lg font-bold text-white">{link.name}</span>
                    </div>
                    <p className="text-sm text-white/90 ml-1">{link.desc}</p>
                  </div>
                ) : (
                  <div className="bg-white/80 backdrop-blur-sm p-5 border-2 border-indigo-200 group-hover:border-indigo-400 group-hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 bg-gradient-to-r ${link.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 ml-1">{link.desc}</p>
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bottom Decorative Card */}
      <div className="mt-10 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl p-5 border-2 border-indigo-300 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-lg">💡</span>
          </div>
          <span className="font-bold text-indigo-900">Quick Tip</span>
        </div>
        <p className="text-sm text-indigo-800 leading-relaxed font-medium">
          Start with Notes Summarizer to upload your materials, then chat with AI Tutor for deeper understanding!
        </p>
      </div>
    </aside>
  );
}
