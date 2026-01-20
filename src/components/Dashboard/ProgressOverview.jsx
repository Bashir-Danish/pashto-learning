import { Trophy, BookOpen, Target, Flame } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import categoriesData from '../../data/categories.json';

export default function ProgressOverview() {
  const { progress } = useProgress();
  
  const totalLessons = categoriesData.categories.reduce(
    (sum, cat) => sum + cat.lessons.length,
    0
  );
  
  const totalPractices = categoriesData.categories.reduce(
    (sum, cat) => sum + cat.lessons.filter(l => l.hasPractice).length,
    0
  );
  
  const completedLessons = progress.completedLessons.length;
  const completedPractices = progress.completedPractices.length;
  const overallProgress = totalLessons > 0 
    ? Math.round((completedLessons / totalLessons) * 100) 
    : 0;

  const stats = [
    {
      icon: BookOpen,
      label: 'درس‌ها',
      labelPs: 'لوستونه',
      value: `${completedLessons}/${totalLessons}`,
    },
    {
      icon: Target,
      label: 'تمرین‌ها',
      labelPs: 'تمرینونه',
      value: `${completedPractices}/${totalPractices}`,
    },
    {
      icon: Trophy,
      label: 'امتیاز',
      labelPs: 'ټکي',
      value: `${progress.totalXP} XP`,
    },
    {
      icon: Flame,
      label: 'روزهای متوالی',
      labelPs: 'پرله پسې ورځې',
      value: progress.currentStreak,
    },
  ];

  return (
    <div className="bg-gradient-to-l from-green-600 to-emerald-700 rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Welcome message */}
        <div>
          <h2 className="text-2xl font-bold mb-1 text-white">
            به یادگیری پښتو خوش آمدید
          </h2>
          <p className="text-green-100">
            د پښتو زده کړې ته ښه راغلاست
          </p>
          <p className="text-green-200 text-sm mt-2">
            گویش کندهاری را با تمرین‌های تعاملی یاد بگیرید
          </p>
        </div>

        {/* Progress circle */}
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${overallProgress * 2.51} 251`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{overallProgress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/20 backdrop-blur rounded-lg p-3"
          >
            <div className="flex items-center gap-2 mb-1">
              <stat.icon className="w-4 h-4 text-green-100" />
              <span className="text-sm text-green-100">{stat.label}</span>
            </div>
            <div className="text-xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
