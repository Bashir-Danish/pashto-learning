import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, BookOpen } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { getLessonById, getNextLesson, getPrevLesson } from '../data/lessons';
import categoriesData from '../data/categories.json';

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, uncompleteLesson, isLessonCompleted } = useProgress();
  
  const lesson = getLessonById(lessonId);
  const isCompleted = isLessonCompleted(lessonId);
  const nextLesson = getNextLesson(lessonId);
  const prevLesson = getPrevLesson(lessonId);

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <h1 className="text-xl font-bold text-slate-200 mb-2">درس پیدا نشد</h1>
        <p className="text-slate-500 mb-6">این درس هنوز آماده نشده است</p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت به خانه
        </Link>
      </div>
    );
  }

  const handleComplete = () => {
    completeLesson(lessonId, 10);
  };

  const handleUncomplete = () => {
    uncompleteLesson(lessonId);
  };

  const handleNext = () => {
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-4 text-sm"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت به خانه
        </Link>
        
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-100 mb-1">{lesson.title}</h1>
            <p className="text-slate-400">{lesson.titlePashto}</p>
          </div>
          
          {isCompleted && (
            <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">تکمیل شده</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
          <span>⏱️ {lesson.estimatedTime}</span>
          <span className={`px-2 py-0.5 rounded-full ${
            lesson.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
            lesson.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {lesson.difficulty === 'easy' ? 'آسان' : 
             lesson.difficulty === 'medium' ? 'متوسط' : 'سخت'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg">
        <div className="prose prose-invert max-w-none prose-headings:text-slate-200 prose-p:text-slate-300 prose-strong:text-slate-200">
          <div 
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: formatContent(lesson.content) }}
          />
        </div>
      </div>

      {/* Pashto Content */}
      {lesson.contentPashto && (
        <details className="bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
          <summary className="p-4 cursor-pointer font-medium text-slate-300 hover:text-slate-100">
            📖 مشاهده به پښتو
          </summary>
          <div className="p-6 pt-0 border-t border-slate-700">
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(lesson.contentPashto) }}
            />
          </div>
        </details>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        {!isCompleted && (
          <button
            onClick={handleComplete}
            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            تکمیل درس (+10 XP)
          </button>
        )}
        
        {isCompleted && (
          <button
            onClick={handleUncomplete}
            className="flex-1 py-3 bg-slate-600 hover:bg-slate-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            لغو تکمیل
          </button>
        )}
        
        {lesson.hasPractice && (
          <Link
            to={`/practice/${lesson.practiceId || lessonId}`}
            className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl transition-colors text-center"
          >
            شروع تمرین
          </Link>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-slate-700">
        {prevLesson ? (
          <Link
            to={`/lesson/${prevLesson.id}`}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-200"
          >
            <ArrowRight className="w-4 h-4" />
            <span>{prevLesson.title}</span>
          </Link>
        ) : <div />}
        
        {nextLesson ? (
          <Link
            to={`/lesson/${nextLesson.id}`}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-200"
          >
            <span>{nextLesson.title}</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

// Simple markdown-like formatting
function formatContent(content) {
  if (!content) return '';
  
  // پردازش جدول‌ها
  const processTable = (tableContent) => {
    const lines = tableContent.trim().split('\n');
    if (lines.length < 2) return tableContent;
    
    let html = '<table class="w-full border-collapse my-4 text-sm">';
    
    lines.forEach((line, index) => {
      // رد کردن خط جداکننده (|---|---|)
      if (line.match(/^\|[\s-:|]+\|$/)) return;
      
      const cells = line.split('|').filter(c => c.trim() !== '');
      if (cells.length === 0) return;
      
      const tag = index === 0 ? 'th' : 'td';
      const bgClass = index === 0 ? 'bg-slate-700 font-bold text-slate-200' : 'text-slate-300';
      
      html += '<tr>';
      cells.forEach(cell => {
        html += `<${tag} class="border border-slate-600 px-3 py-2 ${bgClass}">${cell.trim()}</${tag}>`;
      });
      html += '</tr>';
    });
    
    html += '</table>';
    return html;
  };
  
  // پیدا کردن و پردازش جدول‌ها
  let result = content;
  const tableRegex = /(\|.+\|\n)+/g;
  result = result.replace(tableRegex, (match) => processTable(match));
  
  // پردازش سایر عناصر
  result = result
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-3 text-slate-200">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-4 text-slate-200">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-8 mb-4 text-slate-100">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-emerald-400">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-slate-300">$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-r-4 border-emerald-500 pr-4 my-4 text-slate-400 bg-slate-700/50 py-2 rounded-l">$1</blockquote>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="mb-2 mr-4 text-slate-300">$2</li>')
    .replace(/^- (.+)$/gm, '<li class="mb-1 mr-4 text-slate-300">$1</li>');
  
  // پردازش پاراگراف‌ها - فقط خطوطی که با تگ شروع نمی‌شوند
  const lines = result.split('\n');
  result = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return line;
    return `<p class="mb-3 text-slate-300">${line}</p>`;
  }).join('\n');
  
  return result;
}
