import React from 'react';
import { TrendingUp, Award, Calendar, Target } from 'lucide-react';

export default function Analytics() {
  const weeklyData = [
    { day: 'Mon', summaries: 2, quizzes: 1 },
    { day: 'Tue', summaries: 3, quizzes: 2 },
    { day: 'Wed', summaries: 1, quizzes: 1 },
    { day: 'Thu', summaries: 4, quizzes: 3 },
    { day: 'Fri', summaries: 2, quizzes: 2 },
    { day: 'Sat', summaries: 0, quizzes: 0 },
    { day: 'Sun', summaries: 1, quizzes: 0 },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <TrendingUp className="w-8 h-8" />
        Your Learning Analytics
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6">
          <Target className="w-10 h-10 mb-3" />
          <div className="text-4xl font-bold">85%</div>
          <div className="text-sm">Avg Quiz Score</div>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6">
          <Calendar className="w-10 h-10 mb-3" />
          <div className="text-4xl font-bold">12</div>
          <div className="text-sm">Days Active</div>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-6">
          <TrendingUp className="w-10 h-10 mb-3" />
          <div className="text-4xl font-bold">24</div>
          <div className="text-sm">Summaries Created</div>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6">
          <Award className="w-10 h-10 mb-3" />
          <div className="text-4xl font-bold">7</div>
          <div className="text-sm">Badges Earned</div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Weekly Activity</h3>
        <div className="flex items-end justify-between h-48 gap-2">
          {weeklyData.map((day, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col gap-1">
                <div 
                  className="w-full bg-purple-500 rounded-t transition-all hover:bg-purple-400"
                  style={{ height: `${day.summaries * 20}px` }}
                  title={`${day.summaries} summaries`}
                ></div>
                <div 
                  className="w-full bg-blue-500 rounded-t transition-all hover:bg-blue-400"
                  style={{ height: `${day.quizzes * 20}px` }}
                  title={`${day.quizzes} quizzes`}
                ></div>
              </div>
              <span className="text-xs text-gray-400">{day.day}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span>Summaries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Quizzes</span>
          </div>
        </div>
      </div>
    </div>
  );
}