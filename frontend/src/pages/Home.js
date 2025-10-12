import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-24 text-center px-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Your AI-Powered Study Assistant
      </h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8">
        Learn smarter, not harder. Get personalized study plans, clear
        explanations, summaries, and quizzes — all in one place.
      </p>
      <Link
        to="/dashboard"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-semibold"
      >
        Start Learning →
      </Link>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-indigo-700 mb-2">
            Personalized Study Plans
          </h3>
          <p className="text-gray-600">
            AI builds a plan around your syllabus.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-indigo-700 mb-2">Smart Q&A Tutor</h3>
          <p className="text-gray-600">
            Ask anything and get clear explanations.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-indigo-700 mb-2">
            AI Summarizer & Notes Generator
          </h3>
          <p className="text-gray-600">
            Upload PDFs or text to get concise notes.
          </p>
        </div>
      </div>
    </div>
  );
}
