import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Languages, BookOpen, MessageCircle, Hash, Users, Heart,
  Utensils, Palette, Play, MessageSquareText, Layers,
  ChevronDown, ChevronRight, X, Sparkles, CheckCircle2, Table, Map
} from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import categoriesData from '../../data/categories.json';

const iconMap = {
  Languages, BookOpen, MessageCircle, Hash, Users, Heart,
  Utensils, Palette, Play, MessageSquareText, Layers
};

// Quick access items
const quickAccess = [
  { id: 'roadmap', path: '/roadmap', icon: Map, label: 'نقشه راه', labelPs: 'لارښود', color: '#6366f1' },
  { id: 'users', path: '/users', icon: Users, label: 'کاربران', labelPs: 'کاربران', color: '#ec4899' },
  { id: 'alphabet', path: '/alphabet', icon: Languages, label: 'الفبا', labelPs: 'الفبا', color: '#10b981' },
  { id: 'conjugation', path: '/conjugation', icon: Table, label: 'گردان فعل', labelPs: 'فعلونه', color: '#f59e0b' },
  { id: 'conversations', path: '/conversation', icon: MessageCircle, label: 'مکالمات', labelPs: 'خبرې', color: '#8b5cf6' },
];

export default function Sidebar({ isOpen, onClose }) {
  const { isLessonComplete, getCategoryProgress } = useProgress();
  const [expandedCategories, setExpandedCategories] = useState(['alphabet']);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-16 bottom-0 z-50 bg-slate-800 border-slate-700
          w-64 sm:w-72 transition-transform duration-300 ease-in-out
          right-0 border-l
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0
          overflow-hidden flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-700 bg-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </div>
            <h2 className="font-bold text-slate-200 text-sm sm:text-base">دسته‌بندی‌ها</h2>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1.5 sm:p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
          </button>
        </div>

        {/* Quick Access */}
        <div className="p-2 sm:p-3 border-b border-slate-700 flex-shrink-0">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mb-2 px-1">دسترسی سریع</p>
          <div className="grid grid-cols-4 gap-1 sm:gap-2">
            {quickAccess.map(item => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all ${
                      isActive
                        ? 'bg-slate-700 border border-emerald-500/50'
                        : 'hover:bg-slate-700/50 border border-transparent'
                    }`
                  }
                >
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 text-center leading-tight">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Scrollable content */}
        <nav className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1.5 sm:space-y-2">
          {categoriesData.categories.map((category, index) => {
            const Icon = iconMap[category.icon] || BookOpen;
            const progress = getCategoryProgress ? getCategoryProgress(category.lessons) : 0;
            const isExpanded = expandedCategories.includes(category.id);
            const completedCount = category.lessons?.filter(l => isLessonComplete(l.id)).length || 0;
            const totalLessons = category.lessons?.length || 0;
            const isComplete = completedCount === totalLessons && totalLessons > 0;

            return (
              <div 
                key={category.id} 
                className={`rounded-lg sm:rounded-xl overflow-hidden border transition-all duration-200 ${
                  isExpanded 
                    ? 'border-slate-600 bg-slate-700/50' 
                    : 'border-slate-700 bg-slate-800 hover:bg-slate-700/30 hover:border-slate-600'
                }`}
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`
                    w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 text-right transition-all
                    ${isExpanded ? 'bg-slate-700/50' : 'hover:bg-slate-700/30'}
                  `}
                >
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: `${category.color}20`,
                      border: `1px solid ${category.color}40`
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: category.color }} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-slate-200 text-xs sm:text-sm truncate">
                        {index + 1}. {category.nameFa}
                      </span>
                      {isComplete && (
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                      <div className="flex-1 h-1 sm:h-1.5 bg-slate-600 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${progress}%`,
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`
                          }}
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-500 whitespace-nowrap">
                        {completedCount}/{totalLessons}
                      </span>
                    </div>
                  </div>

                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center transition-all ${
                    isExpanded ? 'bg-slate-600' : 'bg-slate-700'
                  }`}>
                    {isExpanded ? (
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                    )}
                  </div>
                </button>

                {/* Lessons list */}
                {isExpanded && category.lessons && (
                  <div className="border-t border-slate-600 bg-slate-800/50">
                    <ul className="py-1.5 sm:py-2 px-1.5 sm:px-2 space-y-0.5 sm:space-y-1">
                      {category.lessons.map((lesson) => {
                        const lessonComplete = isLessonComplete(lesson.id);
                        
                        return (
                          <li key={lesson.id}>
                            <NavLink
                              to={`/lesson/${lesson.id}`}
                              onClick={onClose}
                              className={({ isActive }) =>
                                `flex items-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm transition-all ${
                                  isActive
                                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-semibold'
                                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-300 border border-transparent'
                                }`
                              }
                            >
                              {lessonComplete ? (
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0">
                                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                                </div>
                              ) : (
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-slate-600 flex-shrink-0 bg-slate-700" />
                              )}
                              <span className="truncate flex-1">
                                {lesson.titleFa || lesson.title}
                              </span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-700 bg-slate-800 flex-shrink-0">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-500">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
            <span className="font-medium">پښتو کندهاری</span>
          </div>
        </div>
      </aside>
    </>
  );
}
