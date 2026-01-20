import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { getPracticeById } from '../data/practices';

export default function PracticePage() {
  const { practiceId } = useParams();
  const { completePractice } = useProgress();
  
  const practice = getPracticeById(practiceId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!practice) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-xl font-bold text-slate-200 mb-2">تمرین پیدا نشد</h1>
        <p className="text-slate-500 mb-6">این تمرین هنوز آماده نشده است</p>
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

  const currentQuestion = practice.questions[currentIndex];
  const totalQuestions = practice.questions.length;

  const handleAnswer = (answer) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === currentQuestion.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
      completePractice(practiceId, 5);
    }
  };

  if (isFinished) {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
          percentage >= 70 ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-amber-500/20 border border-amber-500/30'
        }`}>
          <Trophy className={`w-10 h-10 ${
            percentage >= 70 ? 'text-emerald-400' : 'text-amber-400'
          }`} />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-100 mb-2">
          {percentage >= 70 ? 'آفرین!' : 'تلاش خوب بود!'}
        </h1>
        <p className="text-slate-500 mb-6">
          {percentage >= 70 ? 'ډیره ښه!' : 'بیا هڅه وکړه!'}
        </p>
        
        <div className="bg-slate-800 rounded-2xl p-6 mb-8 border border-slate-700">
          <div className="text-4xl font-bold text-slate-100 mb-2">
            {score}/{totalQuestions}
          </div>
          <div className="text-slate-500">پاسخ صحیح</div>
          <div className="mt-4 text-emerald-400 font-medium">+5 XP</div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors"
          >
            بازگشت به خانه
          </Link>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setSelectedAnswer(null);
              setShowResult(false);
              setScore(0);
              setIsFinished(false);
            }}
            className="py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium rounded-xl transition-colors border border-slate-600"
          >
            تکرار تمرین
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-4 text-sm"
        >
          <ArrowRight className="w-4 h-4" />
          بازگشت
        </Link>
        
        <h1 className="text-xl font-bold text-slate-100">{practice.title}</h1>
        <p className="text-slate-500 text-sm">{practice.titlePashto}</p>
      </div>

      {/* Progress */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <div className="flex justify-between text-sm text-slate-500 mb-2">
          <span>سوال {currentIndex + 1} از {totalQuestions}</span>
          <span>{score} پاسخ صحیح</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg">
        <h2 className="text-lg font-medium text-slate-200 mb-6">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correct;
            
            let buttonClass = 'border-slate-600 hover:border-emerald-500/50 hover:bg-emerald-500/10';
            
            if (showResult) {
              if (isCorrect) {
                buttonClass = 'border-emerald-500 bg-emerald-500/20';
              } else if (isSelected && !isCorrect) {
                buttonClass = 'border-red-500 bg-red-500/20';
              }
            } else if (isSelected) {
              buttonClass = 'border-emerald-500 bg-emerald-500/20';
            }
            
            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                className={`w-full p-4 text-right rounded-xl border-2 transition-all ${buttonClass}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {showResult && (
        <div className={`p-4 rounded-xl border ${
          selectedAnswer === currentQuestion.correct 
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
            : 'bg-red-500/20 text-red-300 border-red-500/30'
        }`}>
          {selectedAnswer === currentQuestion.correct ? (
            <p className="font-medium">✅ آفرین! پاسخ صحیح است.</p>
          ) : (
            <p className="font-medium">❌ پاسخ صحیح: {currentQuestion.correct}</p>
          )}
          {currentQuestion.explanation && (
            <p className="text-sm mt-2 opacity-80">{currentQuestion.explanation}</p>
          )}
        </div>
      )}

      {/* Next Button */}
      {showResult && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors"
        >
          {currentIndex < totalQuestions - 1 ? 'سوال بعدی' : 'مشاهده نتیجه'}
        </button>
      )}
    </div>
  );
}
