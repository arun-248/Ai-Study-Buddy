import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, Brain, Zap, Trophy, ArrowRight, BookOpen, 
  Target, Clock, CheckCircle, FileText, MessageSquare, 
  Map, ListChecks, TrendingUp
} from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "5 AI Summary Modes",
      description: "Simple, Detailed, Concept Map, Q&A, and Key Takeaways - choose how you learn best",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Instant Quiz Generation",
      description: "Auto-generate MCQs from any document in seconds with AI-powered question creation",
      color: "indigo"
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and study insights",
      color: "purple"
    },
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "Upload PDFs, PowerPoints, or text files - we handle all your study materials",
      color: "green"
    },
    {
      icon: Target,
      title: "Smart Study Plans",
      description: "AI-generated personalized study schedules based on your goals",
      color: "orange"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce study prep time by 70% - spend more time learning, less organizing",
      color: "pink"
    }
  ];

  const useCases = [
    {
      title: "Exam Preparation",
      description: "Quickly review key concepts before tests",
      icon: BookOpen
    },
    {
      title: "Research Papers",
      description: "Extract insights from lengthy documents",
      icon: FileText
    },
    {
      title: "Quick Revision",
      description: "5-minute summaries for last-minute reviews",
      icon: Clock
    },
    {
      title: "Concept Clarity",
      description: "Understand complex topics with AI explanations",
      icon: MessageSquare
    }
  ];

  const stats = [
    { value: "5", label: "AI Summary Modes", icon: Map },
    { value: "70%", label: "Time Saved", icon: Clock },
    { value: "100%", label: "AI-Powered", icon: Sparkles },
    { value: "∞", label: "Documents", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-8 shadow-lg border border-indigo-200">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-indigo-700">OpenAI × NxtWave Buildathon 2025</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
          Learn Smarter with
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
            AI Study Buddy
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Transform your study materials into <span className="text-indigo-600 font-semibold">interactive learning experiences</span>. 
          Get AI-powered summaries, quizzes, and flashcards in seconds.
        </p>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Built by <span className="text-indigo-600 font-semibold">Team IntelliLearn</span> to help students 
          learn efficiently and effectively.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
          >
            Start Learning Now <ArrowRight className="w-6 h-6" />
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="bg-white border-2 border-indigo-300 px-8 py-4 rounded-full font-bold text-lg text-indigo-700 hover:bg-indigo-50 transition-all hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <stat.icon className="w-8 h-8 text-indigo-600 mb-2 mx-auto" />
              <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Everything You Need to Study Better
          </h2>
          <p className="text-xl text-gray-600">Powerful features designed for modern students</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Perfect For Every Student
            </h2>
            <p className="text-xl text-gray-600">Whether you're cramming or researching, we've got you covered</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 hover:border-indigo-400 transition-all"
              >
                <useCase.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Upload Document", desc: "Drag & drop your PDF, PPTX, or TXT file", icon: FileText, color: "indigo" },
            { step: "2", title: "Choose Style", desc: "Select from 5 AI-powered summary modes", icon: ListChecks, color: "purple" },
            { step: "3", title: "Learn & Quiz", desc: "Read summary, take quiz, track progress", icon: Trophy, color: "pink" }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-indigo-400 transition-all shadow-lg">
                <div className={`absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl`}>
                  {item.step}
                </div>
                <item.icon className={`w-16 h-16 text-${item.color}-600 mb-6 mx-auto mt-4`} />
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Built with Modern Technology</h2>
            <p className="text-gray-600">Cutting-edge AI and web technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React + TailwindCSS", desc: "Modern, responsive UI", color: "blue" },
              { name: "FastAPI", desc: "High-performance backend", color: "green" },
              { name: "Gemini 2.5 Flash", desc: "Advanced AI processing", color: "purple" },
              { name: "PostgreSQL", desc: "Reliable data storage", color: "indigo" }
            ].map((tech, i) => (
              <div key={i} className={`bg-${tech.color}-50 border border-${tech.color}-200 rounded-xl p-6 text-center`}>
                <CheckCircle className={`w-10 h-10 text-${tech.color}-600 mb-3 mx-auto`} />
                <h3 className="font-bold mb-2 text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-12 border-2 border-indigo-300 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Study Smarter?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join students learning better with AI Study Buddy
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-5 rounded-full font-bold text-xl text-white shadow-xl hover:shadow-2xl transition-all hover:scale-110 inline-flex items-center gap-3"
          >
            Get Started Free <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Minimal Footer Info */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200 bg-white">
        <div className="text-center text-gray-600">
          <p className="mb-2">Built with ❤️ by <span className="text-indigo-600 font-semibold">Team IntelliLearn</span></p>
          <p className="text-sm">OpenAI × NxtWave Buildathon 2025 Submission</p>
        </div>
      </div>
    </div>
  );
}