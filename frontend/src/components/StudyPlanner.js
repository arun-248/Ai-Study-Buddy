import React, { useState } from "react";
import {
  Calendar,
  Sparkles,
  BookOpen,
  Trophy,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  Circle,
  Brain,
  Zap,
  ArrowRight,
  Play,
  ChevronRight,
  Download,
  Share2,
  Plus,
  Edit3,
  Trash2,
  AlertCircle
} from "lucide-react";

export default function StudyPlanner() {
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("7");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [error, setError] = useState("");
  
  // Mock progress data with daily tracking
  const [weekProgress, setWeekProgress] = useState([
    { day: "Mon", date: "Oct 7", completed: true, tasks: 3, total: 3, hours: 2.5 },
    { day: "Tue", date: "Oct 8", completed: true, tasks: 2, total: 3, hours: 2 },
    { day: "Wed", date: "Oct 9", completed: true, tasks: 3, total: 3, hours: 3 },
    { day: "Thu", date: "Oct 10", completed: false, tasks: 1, total: 3, hours: 1 },
    { day: "Fri", date: "Oct 11", completed: false, tasks: 0, total: 3, hours: 0 },
    { day: "Sat", date: "Oct 12", completed: false, tasks: 0, total: 4, hours: 0 },
    { day: "Sun", date: "Oct 13", completed: false, tasks: 0, total: 2, hours: 0 }
  ]);

  const [subjects, setSubjects] = useState([
    { name: "Machine Learning", progress: 75, color: "blue", icon: Brain, lastStudied: "2 hours ago", streak: 5 },
    { name: "Data Structures", progress: 60, color: "purple", icon: Zap, lastStudied: "1 day ago", streak: 3 },
    { name: "Web Development", progress: 85, color: "green", icon: BookOpen, lastStudied: "Today", streak: 7 },
    { name: "System Design", progress: 40, color: "orange", icon: Target, lastStudied: "3 days ago", streak: 2 }
  ]);

  const stats = [
    { label: "Total Study Hours", value: "8.5h", icon: Clock, color: "blue", change: "+2h from last week" },
    { label: "Tasks Completed", value: "9/18", icon: CheckCircle, color: "green", change: "50% completion" },
    { label: "Current Streak", value: "4 days", icon: Trophy, color: "orange", change: "Keep it up!" },
    { label: "Average Score", value: "82%", icon: TrendingUp, color: "purple", change: "+5% improvement" }
  ];

  // Generate local fallback plan
  const generateLocalPlan = (topic, days) => {
    const phases = [
      { name: "Fundamentals & Core Concepts", ratio: 0.3 },
      { name: "Intermediate Topics", ratio: 0.4 },
      { name: "Advanced Concepts & Projects", ratio: 0.3 }
    ];

    let plan = `📚 ${days}-Day Study Plan: ${topic}\n`;
    plan += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    plan += `Generated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\n`;
    plan += `Goal: Master ${topic} through structured daily learning\n\n`;

    let currentDay = 1;
    
    phases.forEach((phase, phaseIdx) => {
      const phaseDays = Math.max(1, Math.ceil(days * phase.ratio));
      
      plan += `\n${'='.repeat(50)}\n`;
      plan += `📌 PHASE ${phaseIdx + 1}: ${phase.name}\n`;
      plan += `${'='.repeat(50)}\n\n`;

      for (let i = 0; i < phaseDays && currentDay <= days; i++, currentDay++) {
        plan += `🗓️  DAY ${currentDay}:\n`;
        plan += `${'─'.repeat(40)}\n`;
        plan += `📖 Topic: ${phase.name} - Session ${i + 1}\n\n`;
        
        plan += `🎯 Learning Objectives:\n`;
        if (phaseIdx === 0) {
          plan += `   • Understand basic terminology and concepts\n`;
          plan += `   • Learn foundational principles\n`;
          plan += `   • Build strong conceptual understanding\n`;
        } else if (phaseIdx === 1) {
          plan += `   • Apply concepts to practical problems\n`;
          plan += `   • Understand real-world use cases\n`;
          plan += `   • Practice with guided examples\n`;
        } else {
          plan += `   • Master advanced techniques\n`;
          plan += `   • Work on comprehensive projects\n`;
          plan += `   • Integrate multiple concepts\n`;
        }
        
        plan += `\n⏱️  Recommended Study Time: 2-3 hours\n\n`;
        
        plan += `✅ Daily Activities:\n`;
        plan += `   1. Review previous day's notes (15 min)\n`;
        plan += `   2. Read/Watch learning materials (60 min)\n`;
        plan += `   3. Take detailed notes (30 min)\n`;
        plan += `   4. Practice exercises (45 min)\n`;
        plan += `   5. Self-assessment quiz (15 min)\n\n`;
        
        if (currentDay % 3 === 0) {
          plan += `🧪 CHECKPOINT: Take a practice quiz\n`;
          plan += `   • Test understanding of Days ${currentDay-2} to ${currentDay}\n`;
          plan += `   • Review any weak areas\n\n`;
        }
        
        if (currentDay % 7 === 0) {
          plan += `📊 WEEKLY REVIEW:\n`;
          plan += `   • Comprehensive revision of all topics\n`;
          plan += `   • Complete a mini-project\n\n`;
        }
        
        plan += `\n`;
      }
    });

    plan += `\n${'='.repeat(50)}\n`;
    plan += `💡 STUDY TIPS FOR SUCCESS\n`;
    plan += `${'='.repeat(50)}\n\n`;
    
    const tips = [
      "🍅 Use Pomodoro: 25 min study, 5 min break",
      "📝 Practice active recall regularly",
      "🔄 Use spaced repetition",
      "👥 Join study groups or communities",
      "🎯 Set specific daily goals",
      "💻 Build projects to apply learning",
      "📚 Use multiple resources",
      "😴 Get adequate sleep for memory",
      "🏃 Stay physically active",
      "✍️ Teach others to reinforce learning"
    ];
    
    tips.forEach(tip => plan += `${tip}\n`);
    
    plan += `\n${'='.repeat(50)}\n`;
    plan += `🎓 Remember: Consistency is key!\n`;
    plan += `   Complete 80% of daily tasks\n`;
    plan += `   Review regularly\n`;
    plan += `   Practice > Passive reading\n`;
    plan += `${'='.repeat(50)}\n\n`;
    plan += `🚀 Good luck with your ${days}-day journey!\n`;

    return plan;
  };

  const generatePlan = async () => {
    if (!goal.trim()) {
      setError("Please enter your study goal!");
      setTimeout(() => setError(""), 3000);
      return;
    }
    
    setLoading(true);
    setPlan("");
    setError("");
    setShowPlan(false);
    
    try {
      const res = await fetch("http://127.0.0.1:8000/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Create a detailed ${duration}-day study plan for learning: ${goal}

Please structure it as follows:
- Day-by-day breakdown with clear topics
- Daily learning objectives
- Recommended study duration per day
- Specific activities and exercises
- Mini quizzes every 3 days
- Study tips and best practices

Make it comprehensive, actionable, and motivating!`,
          docs: [],  // Empty array - no documents needed
          mode: "chat",  // Use chat mode for planner
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.detail || data.message || "API Error");
      }
      
      if (data.answer && data.answer.trim() && !data.answer.includes("No information was provided")) {
        setPlan(data.answer);
        setShowPlan(true);
        setError(""); // Clear any previous errors
      } else {
        throw new Error("Invalid response from API");
      }
      
      // Simulate progress update
      setSubjects(prev =>
        prev.map(s => ({ ...s, progress: Math.min(100, s.progress + Math.floor(Math.random() * 10)) }))
      );
    } catch (err) {
      console.error("API Error:", err);
      
      // Always use local fallback on error
      const fallbackPlan = generateLocalPlan(goal, parseInt(duration));
      setPlan(fallbackPlan);
      setShowPlan(true);
      
      setError("✨ Using built-in study planner (Backend unavailable)");
    } finally {
      setLoading(false);
    }
  };

  const markDayComplete = (index) => {
    setWeekProgress(prev => 
      prev.map((day, i) => 
        i === index ? { ...day, completed: !day.completed, tasks: day.completed ? 0 : day.total } : day
      )
    );
  };

  const downloadPlan = () => {
    const blob = new Blob([plan], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Study_Plan_${goal.replace(/\s+/g, '_')}_${duration}days.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const sharePlan = () => {
    if (navigator.share) {
      navigator.share({
        title: `${duration}-Day Study Plan: ${goal}`,
        text: plan,
      }).catch(err => console.log('Share cancelled'));
    } else {
      navigator.clipboard.writeText(plan);
      alert('✅ Plan copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 px-6">
      <div className="max-w-7xl mx-auto pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-indigo-700 text-sm">AI-Powered Planning</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Smart Study Planner
          </h1>
          <p className="text-lg text-gray-600">
            Create personalized study schedules and track your progress
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all group">
              <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Plan Generator & Weekly Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Plan Generator */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Generate Study Plan</h2>
                  <p className="text-sm text-gray-600">AI creates personalized schedules</p>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What do you want to study? *
                  </label>
                  <input
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="e.g., Machine Learning, React.js, Data Structures"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Plan Duration
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {["3", "7", "14", "30"].map((days) => (
                      <button
                        key={days}
                        onClick={() => setDuration(days)}
                        className={`py-3 rounded-lg font-semibold transition-all ${
                          duration === days
                            ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {days} days
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={generatePlan}
                  disabled={loading || !goal.trim()}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Generating Your Plan...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Study Plan
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Weekly Progress Tracker */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-900">This Week's Progress</h3>
                </div>
                <div className="text-sm text-gray-600">
                  {weekProgress.filter(d => d.completed).length} / {weekProgress.length} days
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {weekProgress.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => markDayComplete(i)}
                    className="group relative"
                  >
                    <div
                      className={`aspect-square rounded-xl transition-all ${
                        day.completed
                          ? "bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <div className={`text-xs font-bold mb-1 ${day.completed ? "text-white" : "text-gray-600"}`}>
                          {day.day}
                        </div>
                        <div className={`text-xs ${day.completed ? "text-white/80" : "text-gray-500"}`}>
                          {day.date}
                        </div>
                        {day.completed && (
                          <CheckCircle className="w-4 h-4 text-white mt-1" />
                        )}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                      <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {day.tasks}/{day.total} tasks • {day.hours}h
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Weekly Goal Progress</span>
                  <span className="font-semibold">
                    {Math.round((weekProgress.filter(d => d.completed).length / weekProgress.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${(weekProgress.filter(d => d.completed).length / weekProgress.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* AI Generated Plan Display */}
            {showPlan && plan && (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Your Study Plan</h3>
                      <p className="text-sm text-gray-600">{duration}-day schedule for {goal}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={downloadPlan}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                      title="Download Plan"
                    >
                      <Download className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={sharePlan}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                      title="Share Plan"
                    >
                      <Share2 className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200 max-h-96 overflow-y-auto">
                  <pre className="text-gray-800 whitespace-pre-wrap leading-relaxed text-sm font-mono">
                    {plan}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Subject Progress */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Subject Progress</h3>
                <Target className="w-6 h-6 text-indigo-600" />
              </div>

              <div className="space-y-4">
                {subjects.map((subject, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${subject.color}-100 rounded-lg flex items-center justify-center`}>
                          <subject.icon className={`w-5 h-5 text-${subject.color}-600`} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{subject.name}</div>
                          <div className="text-xs text-gray-500">{subject.lastStudied}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{subject.progress}%</div>
                        <div className="flex items-center gap-1 text-xs text-orange-600">
                          <Trophy className="w-3 h-3" />
                          {subject.streak}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-${subject.color}-500 to-${subject.color}-600 h-2 rounded-full transition-all duration-500 group-hover:shadow-lg`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Start Studying
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg border border-orange-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">💡</span>
                </div>
                <h3 className="font-bold text-gray-900">Study Tips</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Take 5-minute breaks every 25 minutes (Pomodoro)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Review summaries before starting new topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Use flashcards for quick revision</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Test yourself with quizzes regularly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}