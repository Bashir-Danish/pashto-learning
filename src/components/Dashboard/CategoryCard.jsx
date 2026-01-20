import { Link } from 'react-router-dom';
import { Type, Volume2, Hash, MessageCircle, BookOpen, Library, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';

const iconMap = {
  Type,
  Volume2,
  Hash,
  MessageCircle,
  BookOpen,
  Library,
};

const difficultyLabels = {
  easy: 'آسان',
  medium: 'متوسط',
  hard: 'سخت',
};

const difficultyColors = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700',
};

export default function CategoryCard({ category }) {
  const { isLessonCompleted, getProgressPercentage } = useProgress();
  const Icon = iconMap[category.icon] || BookOpen;
  const progress = getProgressPercentage(category.lessons);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div 
        className="p-4 border-b border-slate-100"
        style={{ backgroundColor: `${category.color}10` }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: category.color }} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900">{category.name}</h3>
            <p className="text-sm text-slate-500">{category.namePashto}</p>
          </div>
          <div className="text-left">
            <div className="text-lg font-bold" style={{ color: category.color }}>
              {progress}%
            </div>
            <div className="text-xs text-slate-500">
              {category.lessons.length} درس
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{ 
              width: `${progress}%`,
              backgroundColor: category.color 
            }}
          />
        </div>
      </div>

      {/* Lessons list */}
      <div className="divide-y divide-slate-100">
        {category.lessons.slice(0, 4).map((lesson) => {
          const isComplete = isLessonCompleted(lesson.id);
          
          return (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-slate-400" />
              
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${
                  isComplete ? 'text-slate-500' : 'text-slate-900'
                }`}>
                  {lesson.title}
                </p>
                <p className="text-xs text-slate-400">{lesson.estimatedTime}</p>
              </div>
              
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                difficultyColors[lesson.difficulty]
              }`}>
                {difficultyLabels[lesson.difficulty]}
              </span>
              
              {isComplete ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0" />
              )}
            </Link>
          );
        })}
        
        {category.lessons.length > 4 && (
          <div className="p-3 text-center">
            <span className="text-sm text-slate-500">
              +{category.lessons.length - 4} درس دیگر
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
