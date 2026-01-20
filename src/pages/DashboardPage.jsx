import { Link } from 'react-router-dom';
import { Languages, BookOpen, MessageCircle, MessageSquareText, Trophy, Flame, Target, TrendingUp, Sparkles } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

export default function DashboardPage() {
  const { progress } = useProgress();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">به یادگیری پښتو خوش آمدید</h1>
            <p className="text-emerald-100 text-lg">د پښتو زده کړې ته ښه راغلاست</p>
          </div>
          <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
            <span className="text-4xl font-bold">پ</span>
          </div>
        </div>
        <p className="text-emerald-50 mb-6">پښتو کندهاری را با تمرین‌های تعاملی یاد بگیرید</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">{progress.totalXP}</div>
            <div className="text-sm text-emerald-100">امتیاز XP</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
            <Flame className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">{progress.currentStreak}</div>
            <div className="text-sm text-emerald-100">روزهای متوالی</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">{progress.completedLessons?.length || 0}</div>
            <div className="text-sm text-emerald-100">درس تکمیل شده</div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <h2 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          شروع سریع
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link 
            to="/alphabet" 
            className="bg-slate-700/50 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-slate-200 text-lg">الفبا</span>
            <span className="text-sm text-slate-400 mt-1">۴۴ حرف پښتو</span>
          </Link>
          
          <Link 
            to="/vocabulary" 
            className="bg-slate-700/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-slate-200 text-lg">واژگان</span>
            <span className="text-sm text-slate-400 mt-1">۹ دسته‌بندی</span>
          </Link>
          
          <Link 
            to="/conversation" 
            className="bg-slate-700/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-slate-200 text-lg">مکالمات</span>
            <span className="text-sm text-slate-400 mt-1">۶ موقعیت</span>
          </Link>
          
          <Link 
            to="/vocabulary/slang" 
            className="bg-slate-700/50 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/60 hover:bg-slate-700 transition-all flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
              <MessageSquareText className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-slate-200 text-lg">اصطلاحات</span>
            <span className="text-sm text-slate-400 mt-1">کندهاری</span>
          </Link>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-slate-800 rounded-2xl p-6 border border-amber-500/30 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-amber-300 text-lg mb-2">نکته یادگیری</h3>
            <p className="text-slate-300 leading-relaxed">
              در گویش کندهاری، حروف <span className="font-bold text-amber-400 text-xl mx-1">ښ</span> و <span className="font-bold text-amber-400 text-xl mx-1">ږ</span> صداهای برگشته (retroflex) دارند. 
              برای تلفظ صحیح، نوک زبان را به سمت سقف دهان ببرید و صدای "ش" یا "ژ" عمیق‌تری بدهید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
