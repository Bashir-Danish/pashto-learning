import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Map, CheckCircle2, Circle, ChevronDown, ChevronUp,
  BookOpen, MessageCircle, Users, Play, Library, Clock,
  ArrowRight, Star, Target, Zap, Trophy
} from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

import { roadmapData } from '../data/roadmap';

const colorClasses = {
  emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/50', text: 'text-emerald-400', icon: 'bg-emerald-500' },
  pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/50', text: 'text-pink-400', icon: 'bg-pink-500' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-400', icon: 'bg-blue-500' },
  amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/50', text: 'text-amber-400', icon: 'bg-amber-500' },
  teal: { bg: 'bg-teal-500/20', border: 'border-teal-500/50', text: 'text-teal-400', icon: 'bg-teal-500' },
  violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/50', text: 'text-violet-400', icon: 'bg-violet-500' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/50', text: 'text-red-400', icon: 'bg-red-500' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', text: 'text-cyan-400', icon: 'bg-cyan-500' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/50', text: 'text-orange-400', icon: 'bg-orange-500' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-400', icon: 'bg-purple-500' },
  indigo: { bg: 'bg-indigo-500/20', border: 'border-indigo-500/50', text: 'text-indigo-400', icon: 'bg-indigo-500' },
};

export default function RoadmapPage() {
  const [expandedPhase, setExpandedPhase] = useState(1);
  const { progress, completePhase, uncompletePhase, isPhaseCompleted } = useProgress();

  const togglePhase = (phase) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  const toggleComplete = (phase) => {
    if (isPhaseCompleted(phase)) {
      uncompletePhase(phase);
    } else {
      completePhase(phase);
    }
  };

  const completedPhasesCount = progress?.completedPhases?.length || 0;
  const completedLessonsCount = progress?.completedLessons?.length || 0;
  const totalLessons = roadmapData.reduce((acc, p) => acc + p.lessons.length, 0);
  const progressPercentage = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Map className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">نقشه راه یادگیری</h1>
            <p className="text-slate-400">د زده کړې لارښود - مسیر کامل یادگیری پشتو کندهاری</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">پیشرفت کلی</span>
            <span className="text-indigo-400 font-bold">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {completedLessonsCount} از {totalLessons} درس تکمیل شده • {completedPhasesCount} از {roadmapData.length} مرحله
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center shadow-md">
          <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-100">{roadmapData.length}</p>
          <p className="text-xs text-slate-500 font-medium">مرحله</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center shadow-md">
          <Zap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-100">{totalLessons}</p>
          <p className="text-xs text-slate-500 font-medium">درس کل</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center shadow-md">
          <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-100">۸۰٪</p>
          <p className="text-xs text-slate-500 font-medium">رضایت کاربران</p>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-4">
        {roadmapData.map((phase, idx) => {
          const colors = colorClasses[phase.color];
          const isExpanded = expandedPhase === phase.phase;
          const isCompleted = isPhaseCompleted(phase.phase);
          const Icon = phase.icon;

          return (
            <div
              key={phase.phase}
              className={`bg-slate-800 rounded-2xl border transition-all ${isCompleted ? 'border-emerald-500/50' : 'border-slate-700'
                }`}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.phase)}
                className="w-full p-4 flex items-center gap-4 text-right"
              >
                {/* Phase Number */}
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {/* Connector Line */}
                  {idx < roadmapData.length - 1 && (
                    <div className={`absolute top-12 right-1/2 w-0.5 h-8 ${isCompleted ? 'bg-emerald-500' : 'bg-slate-600'
                      }`} />
                  )}
                </div>

                {/* Phase Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold ${isCompleted ? 'text-emerald-400' : 'text-slate-100'}`}>
                      {phase.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${colors.text}`}>{phase.titlePashto}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </span>
                    <span>{phase.lessons.length} درس</span>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="text-slate-500">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-slate-700 pt-4">
                  <p className="text-slate-300 mb-4">{phase.description}</p>

                  {/* Goals */}
                  <div className={`${colors.bg} rounded-xl p-4 mb-4 border ${colors.border}`}>
                    <h4 className={`font-bold ${colors.text} mb-2`}>اهداف این مرحله:</h4>
                    <ul className="space-y-1">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <Circle className={`w-2 h-2 ${colors.text}`} />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lessons */}
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-300 mb-2">درس‌ها:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.lessons.map((lesson) => (
                        <Link
                          key={lesson.id}
                          to={`/lesson/${lesson.id}`}
                          className="bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <BookOpen className="w-4 h-4 text-slate-500" />
                          {lesson.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                    <h4 className="font-bold text-amber-400 mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      نکته:
                    </h4>
                    <p className="text-sm text-slate-300">{phase.tips}</p>
                  </div>

                  {/* Complete Button */}
                  <button
                    onClick={() => toggleComplete(phase.phase)}
                    className={`mt-4 w-full py-3 rounded-xl font-bold transition-all ${isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                  >
                    {isCompleted ? '✓ تکمیل شده' : 'علامت‌گذاری به عنوان تکمیل شده'}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final Tips */}
      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30">
        <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
          <Star className="w-6 h-6" />
          نکات مهم برای موفقیت
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>هر روز حداقل ۳۰ دقیقه تمرین کنید - ثبات مهم‌تر از مدت است</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>با صدای بلند تمرین کنید - تلفظ کندهاری نیاز به تمرین دارد</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>از صفحه صرف فعل برای تمرین گردان فعل‌ها استفاده کنید</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>مکالمات را با نقش‌بازی تمرین کنید - هر دو طرف مکالمه را بخوانید</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>اگر امکان دارد با پشتوزبانان صحبت کنید - تمرین واقعی بهترین روش است</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
