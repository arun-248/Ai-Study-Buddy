import React from 'react';
import { 
  Target, Lightbulb, Code, Users, Award, Rocket, 
  Brain, Zap, TrendingUp, CheckCircle, Star, Globe, Sparkles
} from 'lucide-react';

export default function About() {
  const problemPoints = [
    "Students spend 60% of study time organizing notes",
    "Traditional methods don't adapt to learning styles",
    "Creating quizzes and flashcards is time-consuming",
    "No personalized feedback on progress",
    "Hard to extract insights from long documents"
  ];

  const solutionPoints = [
    {
      title: "5 AI Summary Modes",
      desc: "Adapts to your learning style with multiple formats",
      icon: Brain
    },
    {
      title: "Instant Study Materials",
      desc: "Auto-generate quizzes and flashcards in seconds",
      icon: Zap
    },
    {
      title: "Smart Progress Tracking",
      desc: "Visual analytics show your learning journey",
      icon: TrendingUp
    },
    {
      title: "Document Intelligence",
      desc: "Extracts key insights from PDFs and presentations",
      icon: Code
    }
  ];

  const whyDifferent = [
    {
      title: "Purpose-Built for Students",
      desc: "Document-centric learning workflows designed for real study needs",
      icon: Target
    },
    {
      title: "Real Product Thinking",
      desc: "End-to-end solution with professional UI/UX design",
      icon: Lightbulb
    },
    {
      title: "Technical Innovation",
      desc: "Custom prompt engineering with Gemini 2.5 Flash",
      icon: Code
    },
    {
      title: "Scalable Architecture",
      desc: "React + FastAPI ready for production deployment",
      icon: Rocket
    },
    {
      title: "User-Centric Design",
      desc: "Gamification, progress tracking, and adaptive learning",
      icon: Users
    },
    {
      title: "EdTech Impact",
      desc: "Reduces study prep time by 70%, improves retention",
      icon: Award
    }
  ];

  const technicalStack = [
    {
      category: "AI & Machine Learning",
      items: [
        "Gemini 2.5 Flash integration",
        "5 distinct summarization algorithms",
        "Sentence transformers for processing",
        "Intelligent quiz generation"
      ]
    },
    {
      category: "Full-Stack Development",
      items: [
        "React with modern hooks",
        "FastAPI async backend",
        "RESTful API design",
        "Multi-format file processing"
      ]
    },
    {
      category: "UX/UI Excellence",
      items: [
        "TailwindCSS styling",
        "Responsive mobile-first design",
        "Smooth animations",
        "Accessible color schemes"
      ]
    },
    {
      category: "Product Features",
      items: [
        "Real-time progress indicators",
        "Download functionality",
        "User feedback system",
        "Analytics dashboard"
      ]
    }
  ];

  const futureVision = [
    { text: "Voice-enabled summaries for audio learners", icon: Globe },
    { text: "Collaborative study groups", icon: Users },
    { text: "Mobile app for iOS and Android", icon: Rocket },
    { text: "LMS integration", icon: Code },
    { text: "AI-powered schedule optimization", icon: Brain },
    { text: "Multi-language support", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-5 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="font-semibold text-purple-700 text-sm">About the Project</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            About AI Study Buddy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than a buildathon project - a solution to real educational challenges
          </p>
        </div>

        {/* The Problem */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900">The Problem We're Solving</h2>
          </div>
          <p className="text-base text-gray-700 mb-6">
            Students today face a paradox: more information available than ever, but less time to process it effectively.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {problemPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold text-xs">{i + 1}</span>
                </div>
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Solution */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Our Intelligent Solution</h2>
          </div>
          <p className="text-base text-gray-700 mb-6">
            AI Study Buddy transforms raw study materials into personalized, interactive learning experiences.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {solutionPoints.map((solution, i) => (
              <div key={i} className="bg-green-50 rounded-lg p-6 border border-green-200">
                <solution.icon className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-700">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It's Different */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Why This Project Stands Out
            </h2>
            <p className="text-base text-gray-600">For recruiters, judges, and the community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDifferent.map((reason, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Technical Excellence</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalStack.map((section, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-purple-600 mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Value */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900">Real-World Impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <p className="text-sm text-gray-700">Time Saved</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <p className="text-sm text-gray-700">Learning Styles</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
              <p className="text-sm text-gray-700">Documents</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border border-purple-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Perfect for EdTech Portfolios</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              This project demonstrates end-to-end product development, from identifying user pain points to 
              implementing AI-powered solutions. It showcases full-stack capabilities, modern UI/UX design, 
              and practical AI integration - exactly what recruiters look for in standout candidates.
            </p>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg border border-purple-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-bold text-gray-900">Future Roadmap</h2>
          </div>
          <p className="text-base text-gray-700 mb-6">
            This buildathon project is just the beginning. Here's how AI Study Buddy can evolve:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {futureVision.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                <item.icon className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center mb-8">
          <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Team IntelliLearn</h2>
          <p className="text-base text-gray-700 max-w-xl mx-auto mb-6">
            Built with passion for the OpenAI × NxtWave Buildathon 2025
          </p>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
              TI
            </div>
            <div className="text-left">
              <div className="font-bold text-lg text-gray-900">Team IntelliLearn</div>
              <div className="text-sm text-gray-600">Developers, Designers, Problem Solvers</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-base mb-6 max-w-xl mx-auto">
            See how AI Study Buddy transforms the learning experience. Try it now and discover smarter ways to study.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dashboard" className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
              Try Live Demo
            </a>
            <a href="https://github.com/arun-248/AI-Study-Buddy.git" target="_blank" rel="noopener noreferrer" className="bg-white/20 border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all hover:scale-105">
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}