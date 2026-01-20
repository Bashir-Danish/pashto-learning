import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'pashto-learning-progress';

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        completedLessons: [],
        completedPractices: [],
        currentStreak: 0,
        totalXP: 0,
        lastStudyDate: null,
      };
    } catch {
      return {
        completedLessons: [],
        completedPractices: [],
        currentStreak: 0,
        totalXP: 0,
        lastStudyDate: null,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId, xp = 10) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      
      const today = new Date().toDateString();
      const lastDate = prev.lastStudyDate;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let newStreak = prev.currentStreak;
      if (lastDate === yesterday) {
        newStreak += 1;
      } else if (lastDate !== today) {
        newStreak = 1;
      }

      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        totalXP: prev.totalXP + xp,
        currentStreak: newStreak,
        lastStudyDate: today,
      };
    });
  };

  const completePractice = (practiceId, xp = 5) => {
    setProgress(prev => {
      if (prev.completedPractices.includes(practiceId)) return prev;
      return {
        ...prev,
        completedPractices: [...prev.completedPractices, practiceId],
        totalXP: prev.totalXP + xp,
      };
    });
  };

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const isLessonComplete = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const getProgressPercentage = (categoryLessons) => {
    if (!categoryLessons || categoryLessons.length === 0) return 0;
    const completed = categoryLessons.filter(l => 
      progress.completedLessons.includes(l.id)
    ).length;
    return Math.round((completed / categoryLessons.length) * 100);
  };

  const getCategoryProgress = (categoryLessons) => {
    if (!categoryLessons || categoryLessons.length === 0) return 0;
    const completed = categoryLessons.filter(l => 
      progress.completedLessons.includes(l.id)
    ).length;
    return Math.round((completed / categoryLessons.length) * 100);
  };

  const value = {
    progress,
    completeLesson,
    completePractice,
    isLessonCompleted,
    isLessonComplete,
    getProgressPercentage,
    getCategoryProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
