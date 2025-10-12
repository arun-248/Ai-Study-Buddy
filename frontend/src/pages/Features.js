import React from 'react';
import { 
  FileText, Brain, Calendar, Zap, MessageCircle, Map, 
  ListChecks, BookOpen, Trophy, Clock, CheckCircle, Sparkles 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "5 AI Summary Modes",
      description: "Choose the perfect summary style for your learning needs",
      color: "from-blue-500 to-cyan-500",
      modes: [
        { name: "Simple", desc: "Quick 5-point overview for fast revision" },
        { name: "Detailed", desc: "In-depth explanations with examples" },
        { name: "Concept Map", desc: "Visual hierarchy of topics" },
        { name: "Q&A Format", desc: "Question-answer style learning" },
        { name: "Key Takeaways", desc: "Essential points to remember" }
      ]
    },
    {
      icon: Zap,
      title: "Instant Quiz Generation",
      description: "Test your knowledge with AI-generated MCQs",
      color: "from-purple-500 to-pink-500",
      features: [
        "Auto-generate 5 questions from any summary",
        "Multiple choice format with instant scoring",
        "Track your progress and improvement",
        "Review correct answers after submission"
      ]
    },
    {
      icon: FileText,
      title: "Flashcard Generator",
      description: "Create study flashcards automatically",
      color: "from-orange-500 to-red-500",
      features: [
        "Generate flashcards from uploaded documents",
        "Front-back card format for effective memorization",
        "Navigate through cards easily",
        "Perfect for quick review sessions"
      ]
    },
    {
      icon: MessageCircle,
      title: "AI Tutor Chat",
      description: "Ask questions and get instant explanations",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Chat with AI about your uploaded materials",
        "Get syllabus-based explanations",
        "Voice input support for questions",
        "Context-aware responses from your documents"
      ]
    },
    {
      icon: Calendar,
      title: "Study Planner",
      description: "AI-powered personalized study schedules",
      color: "from-green-500 to-emerald-500",
      features: [
        "Generate 7-day study plans",
        "Track weekly progress visually",
        "Mark subjects as complete",
        "Stay organized and on track"
      ]
    },
    {
      icon: BookOpen,
      title: "Multi-Format Support",
      description: "Upload any study material format",
      color: "from-teal-500 to-cyan-500",
      features: [
        "PDF documents support",
        "PowerPoint presentations (PPTX)",
        "Plain text files (TXT)",
        "Fast and accurate text extraction"
      ]
    }
  ];

  const howToUse = [
    {
      step: "1",
      title: "Upload Your Documents",
      desc: "Drag and drop PDF, PPTX, or TXT files",
      icon: FileText
    },
    {
      step: "2",
      title: "Choose Summary Style",
      desc: "Select from 5 AI-powered modes",
      icon: ListChecks
    },
    {
      step: "3",
      title: "Generate Study Materials",
      desc: "Create quizzes and flashcards instantly",
      icon: Zap
    },
    {
      step: "4",
      title: "Chat with AI Tutor",
      desc: "Ask questions about your materials",
      icon: Brain
    },
    {
      step: "5",
      title: "Track Your Progress",
      desc: "Monitor learning with analytics",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-indigo-700 text-sm">All Features</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Everything You Need to Study Smarter
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed to transform how you learn
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              
              {feature.modes && (
                <div className="space-y-2">
                  {feature.modes.map((mode, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-800">{mode.name}:</span>
                        <span className="text-gray-600"> {mode.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {feature.features && (
                <ul className="space-y-2">
                  {feature.features.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use AI Study Buddy
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {howToUse.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Students Love AI Study Buddy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Save Time</h3>
              <p className="text-sm text-indigo-100">Reduce study prep by 70% - spend more time learning</p>
            </div>
            <div className="text-center">
              <Trophy className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Better Results</h3>
              <p className="text-sm text-indigo-100">Personalized learning improves retention and scores</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Smarter Study</h3>
              <p className="text-sm text-indigo-100">AI adapts to your learning style and pace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}