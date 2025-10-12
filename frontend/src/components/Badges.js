import React from 'react';
import { Trophy, Zap, Target, Award, Star, Flame } from 'lucide-react';

export default function Badges() {
  const badges = [
    { icon: Trophy, name: "First Steps", desc: "Upload your first document", unlocked: true },
    { icon: Zap, name: "Quick Learner", desc: "Complete 10 summaries", unlocked: true },
    { icon: Target, name: "Perfect Score", desc: "Get 100% on a quiz", unlocked: true },
    { icon: Flame, name: "Week Streak", desc: "Study 7 days in a row", unlocked: true },
    { icon: Star, name: "Knowledge Seeker", desc: "Read 50 summaries", unlocked: false },
    { icon: Award, name: "Master Student", desc: "Reach 1000 XP", unlocked: false },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <h2 className="text-3xl font-bold mb-8">🏆 Your Achievements</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {badges.map((badge, i) => (
          <div 
            key={i}
            className={`rounded-2xl p-6 text-center transition-all ${
              badge.unlocked
                ? 'bg-gradient-to-br from-yellow-600 to-orange-600 hover:scale-105'
                : 'bg-white/5 opacity-50'
            }`}
          >
            <badge.icon className="w-16 h-16 mx-auto mb-3" />
            <h3 className="font-bold mb-2">{badge.name}</h3>
            <p className="text-sm text-gray-300">{badge.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}