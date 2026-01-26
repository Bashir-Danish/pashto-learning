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
    <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-slate-900/95 border-b border-slate-700/50 z-50 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="h-full px-3 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between h-full">
          {/* Right side - Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Menu button - mobile only */}
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-slate-800 rounded-xl lg:hidden transition-all border border-slate-700 active:scale-95 group"
              aria-label="منو"
            >
              <Menu className="w-5 h-5 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all group-hover:scale-110 active:scale-95">
                <span className="text-amber-300 font-bold text-xl sm:text-2xl drop-shadow-sm">ښ</span>
              </div>
              <div className="hidden xs:flex flex-col">
                <h1 className="text-sm sm:text-xl font-black text-emerald-400 leading-none tracking-tight">
                  یادگیری پښتو
                </h1>
                <p className="text-[9px] sm:text-xs text-slate-400 font-bold leading-tight mt-0.5 uppercase tracking-widest opacity-80">
                  د پښتو زده کړه
                </p>
              </div>
            </Link>
          </div>

          {/* Left side - Stats */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Refresh Button - hidden on very small mobile */}
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 sm:p-2.5 hover:bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all disabled:opacity-50 hidden sm:flex items-center justify-center group active:scale-90"
              title="تازه‌سازی"
            >
              <RefreshCw className={`w-5 h-5 text-cyan-400 transition-all ${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 duration-500'}`} />
            </button>

            {/* Streak */}
            <div className="flex items-center gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2.5 bg-slate-800/40 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all shadow-inner shadow-orange-500/5 group">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 animate-pulse group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-base font-black text-orange-400 drop-shadow-sm">{progress.currentStreak}</span>
              <span className="hidden sm:inline text-[10px] text-orange-400/60 font-bold uppercase tracking-widest">روز</span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2.5 bg-slate-800/40 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all shadow-inner shadow-amber-500/5 group">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-base font-black text-amber-400 drop-shadow-sm">{progress.totalXP}</span>
              <span className="hidden sm:inline text-[10px] text-amber-400/60 font-bold uppercase tracking-widest">XP</span>
            </div>

            {/* User Selector */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center gap-2 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-xl border transition-all active:scale-95 ${showUserMenu
                  ? 'bg-indigo-500/20 border-indigo-500 shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-800/40 border-indigo-500/20 hover:border-indigo-500/40'
                  }`}
              >
                <div
                  className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs font-black shadow-md"
                  style={{ backgroundColor: currentUserData?.color || '#6366f1' }}
                >
                  {currentUserData?.name.charAt(0)}
                </div>
                <span className="hidden sm:inline text-xs sm:text-sm font-black text-indigo-300 tracking-wide uppercase">
                  {currentUserData?.name}
                </span>
                <Users className={`hidden xs:block w-3.5 h-3.5 text-indigo-400/60 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <div className="absolute top-full left-0 sm:right-0 mt-3 w-56 bg-slate-900/98 rounded-2xl border border-slate-700 shadow-2xl z-[60] py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200 backdrop-blur-xl">
                  <div className="px-4 py-2 border-b border-slate-800 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">انتخاب کاربر</span>
                  </div>
                  <div className="px-2 space-y-1">
                    {users.map(user => (
                      <button
                        key={user.id}
                        onClick={() => handleUserChange(user.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${currentUser === user.id
                          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                          : 'hover:bg-slate-800 text-slate-300'
                          }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black shadow-sm transition-transform group-hover:scale-110 ${currentUser === user.id ? 'bg-white/20' : ''}`}
                          style={{ backgroundColor: currentUser === user.id ? undefined : user.color }}
                        >
                          {user.name.charAt(0)}
                        </div>
                        <div className="text-left flex-1">
                          <div className={`text-sm font-black leading-none ${currentUser === user.id ? 'text-white' : 'text-slate-200'}`}>{user.name}</div>
                          <div className={`text-[10px] mt-1 font-bold ${currentUser === user.id ? 'text-indigo-100/70' : 'text-slate-500'}`}>{user.nameEn}</div>
                        </div>
                        {currentUser === user.id && (
                          <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-sm shadow-white/50" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Progress - hidden on mobile */}
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-800/40 rounded-xl border border-emerald-500/20 shadow-inner shadow-emerald-500/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-500 font-bold">پیشرفت</div>
                  <div className="text-sm font-black text-slate-200 leading-none mt-0.5">
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
