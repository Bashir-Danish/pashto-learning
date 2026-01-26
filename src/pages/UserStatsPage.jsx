import { useUser } from '../contexts/UserContext';
import { useProgress } from '../contexts/ProgressContext';
import { Users, TrendingUp, Trophy, Flame, BookOpen, Download, Upload, ShieldCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { roadmapData } from '../data/roadmap';

export default function UserStatsPage() {
  const { users, currentUser, setCurrentUser } = useUser();
  const { progress, exportProgress, importProgress } = useProgress();
  const [allUsersProgress, setAllUsersProgress] = useState({});
  const fileInputRef = useRef(null);

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
  }, [progress]);

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

  const getTotalLessons = () => {
    return roadmapData.reduce((acc, phase) => acc + phase.lessons.length, 0);
  };

  const getUserStats = (userId) => {
    const userProgress = getUserProgress(userId);
    const completedCount = userProgress.completedLessons?.length || 0;
    const totalLessons = getTotalLessons();
    const percentage = Math.min(100, Math.round((completedCount / totalLessons) * 100));

    return {
      completedLessons: completedCount,
      totalLessons,
      percentage,
      xp: userProgress.totalXP || 0,
      streak: userProgress.currentStreak || 0,
      phases: userProgress.completedPhases?.length || 0,
    };
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        importProgress(content);
        alert('اطلاعات با موفقیت بازیابی شد!');
      };
      reader.readAsText(file);
    }
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
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">تحصیلات و آمار</h1>
            <p className="text-slate-400">مدیریت پیشرفت و دیتای محلی</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={exportProgress}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-bold">پشتیبان‌گیری (JSON)</span>
          </button>

          <button
            onClick={() => fileInputRef.current.click()}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl transition-all border border-slate-600"
          >
            <Upload className="w-4 h-4" />
            <span className="text-sm font-bold">بازیابی اطلاعات</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>

      {/* Persistence Notice */}
      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
        <div className="text-sm text-indigo-200/80 leading-relaxed">
          <p className="font-bold text-indigo-300 mb-1">امنیت داده‌های شما:</p>
          با استفاده از دکمه پشتیبان‌گیری، می‌توانید پیشرفت خود را به صورت یک فایل ذخیره کرده و در هر زمان (حتی پس از آپدیت سیستم یا تغییر مرورگر) دوباره بازیابی کنید. این فایل شامل تمام دروس تیک خورده و امتیازات شماست.
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
              className={`rounded-2xl p-6 border transition-all cursor-pointer relative overflow-hidden ${isCurrentUser
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
                  <span className="text-slate-400">پیشرفت کل</span>
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
                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">درس‌ها</span>
                  </div>
                  <p className="text-lg font-bold text-white">
                    {stats.completedLessons}/{stats.totalLessons}
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-slate-400">امتیاز</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stats.xp}</p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-slate-400">رشته</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stats.streak}</p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">مراحل</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stats.phases}/{roadmapData.length}</p>
                </div>
              </div>

              {isCurrentUser && (
                <div className="mt-4 pt-4 border-t border-slate-700 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    کاربر فعال
                  </span>
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
          جدول قهرمانان
        </h2>

        <div className="space-y-2">
          {sortedUsers.map((user, index) => {
            const stats = getUserStats(user.id);
            const medals = ['🥇', '🥈', '🥉'];

            return (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-slate-500 transition-all"
              >
                <div className="text-2xl font-bold w-8 text-center">
                  {index < 3 ? medals[index] : `${index + 1}.`}
                </div>

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-md"
                  style={{ backgroundColor: user.color }}
                >
                  {user.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-xs text-slate-400">{stats.completedLessons} درس با موفقیت گذرانده شده</p>
                </div>

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
