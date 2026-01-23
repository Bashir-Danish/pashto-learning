import { useUser } from '../contexts/UserContext';
import { useProgress } from '../contexts/ProgressContext';
import { Users, TrendingUp, Trophy, Flame, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function UserStatsPage() {
  const { users, currentUser, setCurrentUser } = useUser();
  const { progress } = useProgress();
  const [allUsersProgress, setAllUsersProgress] = useState({});

  // Load progress for all users
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pashto-learning-progress-multi');
      if (saved) {
        setAllUsersProgress(JSON.parse(saved));
      }
    } catch {
      setAllUsersProgress({});
    }
  }, []);

  const getUserProgress = (userId) => {
    return allUsersProgress[userId] || {
      completedLessons: [],
      completedPractices: [],
      completedPhases: [],
      currentStreak: 0,
      totalXP: 0,
      lastStudyDate: null,
    };
  };

  const getTotalLessons = () => 57; // Total lessons in the app

  const getUserStats = (userId) => {
    const userProgress = getUserProgress(userId);
    const completedCount = userProgress.completedLessons?.length || 0;
    const totalLessons = getTotalLessons();
    const percentage = Math.round((completedCount / totalLessons) * 100);

    return {
      completedLessons: completedCount,
      totalLessons,
      percentage,
      xp: userProgress.totalXP || 0,
      streak: userProgress.currentStreak || 0,
      phases: userProgress.completedPhases?.length || 0,
    };
  };

  // Sort users by progress
  const sortedUsers = [...users].sort((a, b) => {
    const statsA = getUserStats(a.id);
    const statsB = getUserStats(b.id);
    return statsB.percentage - statsA.percentage;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">آمار کاربران</h1>
            <p className="text-slate-400">مقایسه پیشرفت تمام کاربران</p>
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedUsers.map((user, index) => {
          const stats = getUserStats(user.id);
          const isCurrentUser = currentUser === user.id;

          return (
            <div
              key={user.id}
              className={`rounded-2xl p-6 border transition-all cursor-pointer ${
                isCurrentUser
                  ? 'bg-slate-800 border-indigo-500/50 shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
              onClick={() => setCurrentUser(user.id)}
            >
              {/* Rank Badge */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-amber-500/20 border border-amber-500/50 rounded-lg px-3 py-1 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300">رتبه ۱</span>
                </div>
              )}

              {/* User Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                  style={{ backgroundColor: user.color }}
                >
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{user.name}</h3>
                  <p className="text-sm text-slate-400">{user.nameEn}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">پیشرفت</span>
                  <span className="text-indigo-400 font-bold">{stats.percentage}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Lessons */}
                <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">درس‌ها</span>
                  </div>
                  <p className="text-lg font-bold text-white">
                    {stats.completedLessons}/{stats.totalLessons}
                  </p>
                </div>

                {/* XP */}
                <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-slate-400">امتیاز</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stats.xp}</p>
                </div>

                {/* Streak */}
                <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-slate-400">رشته</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stats.streak}</p>
                </div>

                {/* Phases */}
                <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">مراحل</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stats.phases}/11</p>
                </div>
              </div>

              {/* Current User Badge */}
              {isCurrentUser && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-center">
                    <span className="text-xs font-semibold text-indigo-400">
                      ✓ کاربر فعلی
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Leaderboard */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-amber-400" />
          جدول رتبه‌بندی
        </h2>

        <div className="space-y-2">
          {sortedUsers.map((user, index) => {
            const stats = getUserStats(user.id);
            const medals = ['🥇', '🥈', '🥉'];

            return (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-all"
              >
                {/* Rank */}
                <div className="text-2xl font-bold w-8 text-center">
                  {index < 3 ? medals[index] : `${index + 1}.`}
                </div>

                {/* User Info */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: user.color }}
                >
                  {user.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-xs text-slate-400">{stats.completedLessons} درس تکمیل شده</p>
                </div>

                {/* Progress */}
                <div className="text-right">
                  <p className="text-lg font-bold text-indigo-400">{stats.percentage}%</p>
                  <p className="text-xs text-slate-400">{stats.xp} XP</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
