import { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import usersData from '../data/users.json';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'pashto-learning-progress-multi';

const getDefaultProgress = () => ({
  completedLessons: [],
  completedPractices: [],
  completedPhases: [],
  currentStreak: 0,
  totalXP: 0,
  lastStudyDate: null,
});

export function ProgressProvider({ children }) {
  const { currentUser } = useUser();
  
  const [allProgress, setAllProgress] = useState(() => {
    try {
      // Try to load from localStorage first
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
      
      // Initialize from users.json
      const initialProgress = {};
      usersData.users.forEach(user => {
        initialProgress[user.id] = user.progress || getDefaultProgress();
      });
      return initialProgress;
    } catch {
      return {};
    }
  });

  const progress = allProgress[currentUser] || getDefaultProgress();

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
  }, [allProgress]);

  const updateProgress = (updates) => {
    setAllProgress(prev => ({
      ...prev,
      [currentUser]: {
        ...getDefaultProgress(),
        ...prev[currentUser],
        ...updates,
      },
    }));
  };

  const completeLesson = (lessonId, xp = 10) => {
    if (progress.completedLessons.includes(lessonId)) return;
    
    const today = new Date().toDateString();
    const lastDate = progress.lastStudyDate;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    let newStreak = progress.currentStreak;
    if (lastDate === yesterday) {
      newStreak += 1;
    } else if (lastDate !== today) {
      newStreak = 1;
    }

    updateProgress({
      completedLessons: [...progress.completedLessons, lessonId],
      totalXP: progress.totalXP + xp,
      currentStreak: newStreak,
      lastStudyDate: today,
    });
  };

  const completePractice = (practiceId, xp = 5) => {
    if (progress.completedPractices.includes(practiceId)) return;
    updateProgress({
      completedPractices: [...progress.completedPractices, practiceId],
      totalXP: progress.totalXP + xp,
    });
  };

  const completePhase = (phaseNumber) => {
    if (progress.completedPhases.includes(phaseNumber)) return;
    updateProgress({
      completedPhases: [...progress.completedPhases, phaseNumber],
    });
  };

  const uncompletePhase = (phaseNumber) => {
    updateProgress({
      completedPhases: progress.completedPhases.filter(p => p !== phaseNumber),
    });
  };

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const isLessonComplete = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const isPhaseCompleted = (phaseNumber) => {
    return progress.completedPhases.includes(phaseNumber);
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
    completePhase,
    uncompletePhase,
    isLessonCompleted,
    isLessonComplete,
    isPhaseCompleted,
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
