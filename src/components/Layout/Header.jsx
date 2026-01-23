import { Link } from 'react-router-dom';
import { BookOpen, BarChart3, Menu, Trophy, Flame, Users, RefreshCw } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { useUser } from '../../contexts/UserContext';
import { useState } from 'react';

export default function Header({ onMenuClick }) {
  const { progress } = useProgress();
  const { currentUser, users, setCurrentUser, getCurrentUserData } = useUser();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const currentUserData = getCurrentUserData();

  const handleUserChange = (userId) => {
    setCurrentUser(userId);
    setShowUserMenu(false);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Check for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((reg) => {
          reg.update().then(() => {
            if (reg.waiting) {
              reg.waiting.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      });
    }
    // Reload page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-slate-800 border-b border-slate-700 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="h-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Right side - Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Menu button - mobile only */}
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-slate-700 rounded-xl lg:hidden transition-all border border-slate-600"
            >
              <Menu className="w-5 h-5 text-emerald-400" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all group-hover:scale-105">
                <span className="text-amber-300 font-bold text-xl sm:text-2xl">ښ</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg font-bold text-emerald-400">
                  یادگیری پښتو
                </h1>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                  د پښتو زده کړه - کندهاری
                </p>
              </div>
            </Link>
          </div>

          {/* Left side - Stats */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 hover:bg-slate-700 rounded-lg sm:rounded-xl border border-slate-600 hover:border-cyan-500/50 transition-all disabled:opacity-50"
              title="تازه‌سازی"
            >
              <RefreshCw className={`w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>

            {/* User Selector */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/50 rounded-lg sm:rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all"
              >
                <div
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: currentUserData?.color || '#3b82f6' }}
                >
                  {currentUserData?.name.charAt(0)}
                </div>
                <span className="hidden sm:inline text-xs sm:text-sm font-semibold text-indigo-300">
                  {currentUserData?.name}
                </span>
              </button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 rounded-xl border border-slate-700 shadow-lg z-50">
                  <div className="p-2">
                    {users.map(user => (
                      <button
                        key={user.id}
                        onClick={() => handleUserChange(user.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          currentUser === user.id
                            ? 'bg-indigo-500/20 border border-indigo-500/50'
                            : 'hover:bg-slate-700'
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: user.color }}
                        >
                          {user.name.charAt(0)}
                        </div>
                        <div className="text-left flex-1">
                          <div className="text-sm font-semibold text-white">{user.name}</div>
                          <div className="text-xs text-slate-400">{user.nameEn}</div>
                        </div>
                        {currentUser === user.id && (
                          <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/50 rounded-lg sm:rounded-xl border border-orange-500/30">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              <span className="text-xs sm:text-sm font-bold text-orange-300">{progress.currentStreak}</span>
              <span className="hidden sm:inline text-[10px] sm:text-xs text-orange-400/70">روز</span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700/50 rounded-lg sm:rounded-xl border border-amber-500/30">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="text-xs sm:text-sm font-bold text-amber-300">{progress.totalXP}</span>
              <span className="hidden sm:inline text-[10px] sm:text-xs text-amber-400/70">XP</span>
            </div>

            {/* Progress - hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700/50 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide text-slate-400 font-semibold">پیشرفت</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200">
                    {progress.completedLessons?.length || 0} درس
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
