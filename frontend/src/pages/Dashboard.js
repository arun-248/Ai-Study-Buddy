import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brain, FileText, Calendar, TrendingUp, CheckCircle, Clock, Target } from "lucide-react";

export default function Dashboard() {
  const [userName] = useState("Student");
  const [docs, setDocs] = useState([]);

  // Fetch uploaded documents
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/docs");
        const data = await res.json();
        if (Array.isArray(data)) setDocs(data);
      } catch (err) {
        console.error("Error loading documents:", err);
      }
    };
    fetchDocs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back, {userName}! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Continue your learning journey - access your tools and recent uploads
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
            <FileText className="w-10 h-10 text-blue-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900">{docs.length}</div>
            <div className="text-sm text-gray-600">Uploaded Docs</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-200">
            <CheckCircle className="w-10 h-10 text-green-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Summaries</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
            <Target className="w-10 h-10 text-purple-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900">5</div>
            <div className="text-sm text-gray-600">Quizzes Taken</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
            <TrendingUp className="w-10 h-10 text-orange-600 mb-3" />
            <div className="text-3xl font-bold text-gray-900">7</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Study Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              to="/summarizer"
              className="group p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <FileText className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl text-gray-900 mb-2">📄 Notes Summarizer</h3>
              <p className="text-gray-600 text-sm">
                Upload PDFs or notes for AI-powered summaries in 5 different styles
              </p>
            </Link>

            <Link
              to="/chat"
              className="group p-8 bg-white rounded-2xl shadow-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all"
            >
              <Brain className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl text-gray-900 mb-2">🧠 AI Tutor</h3>
              <p className="text-gray-600 text-sm">
                Ask questions and get clear, syllabus-based explanations instantly
              </p>
            </Link>

            <Link
              to="/planner"
              className="group p-8 bg-white rounded-2xl shadow-lg border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all"
            >
              <Calendar className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl text-gray-900 mb-2">📘 Study Planner</h3>
              <p className="text-gray-600 text-sm">
                Track your progress and follow AI-generated study schedules
              </p>
            </Link>
          </div>
        </div>

        {/* Recent Documents Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-7 h-7 text-indigo-600" />
              Your Recent Documents
            </h2>
            <Link 
              to="/summarizer"
              className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1"
            >
              Upload New →
            </Link>
          </div>

          {docs.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                You haven't uploaded any documents yet
              </p>
              <Link
                to="/summarizer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Upload Your First Document
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {docs.map((doc) => (
                <div 
                  key={doc.id} 
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{doc.name}</div>
                      <div className="text-xs text-gray-500">Uploaded recently</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to="/summarizer"
                      className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-medium transition-all"
                    >
                      Summarize
                    </Link>
                    <Link
                      to="/chat"
                      className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg text-sm font-medium transition-all"
                    >
                      Ask AI
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Study Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-7 h-7 text-green-600" />
            This Week's Progress
          </h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Study Time</span>
                <span className="text-gray-600">4.5 / 7 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Documents Reviewed</span>
                <span className="text-gray-600">3 / 5 docs</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 font-medium">Quiz Performance</span>
                <span className="text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Keep Going! 🎯</h3>
                <p className="text-sm text-gray-700">
                  You're on track to reach your weekly study goal. Complete 2 more summaries to unlock your weekly badge!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}