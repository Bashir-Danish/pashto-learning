import { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import usersData from '../data/users.json';
import { roadmapData } from '../data/roadmap';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'pashto-learning-progress-multi';

const getRoadmapData = () => roadmapData;

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
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }

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

    const newCompletedLessons = [...progress.completedLessons, lessonId];
    const newCompletedPhases = [...progress.completedPhases];
    const roadmap = getRoadmapData();

    roadmap.forEach(phase => {
      if (!newCompletedPhases.includes(phase.phase)) {
        const allLessonsComplete = phase.lessons.every(lesson =>
          newCompletedLessons.includes(lesson.id)
        );
        if (allLessonsComplete) {
          newCompletedPhases.push(phase.phase);
        }
      }
    });

    updateProgress({
      completedLessons: newCompletedLessons,
      completedPhases: newCompletedPhases,
      totalXP: progress.totalXP + xp,
      currentStreak: newStreak,
      lastStudyDate: today,
    });
  };

  const uncompleteLesson = (lessonId) => {
    const newCompletedLessons = progress.completedLessons.filter(id => id !== lessonId);
    const newCompletedPhases = progress.completedPhases.filter(phaseNum => {
      const roadmap = getRoadmapData();
      const phase = roadmap.find(p => p.phase === phaseNum);
      if (!phase) return true;
      return phase.lessons.every(lesson =>
        newCompletedLessons.includes(lesson.id)
      );
    });

    updateProgress({
      completedLessons: newCompletedLessons,
      completedPhases: newCompletedPhases,
    });
  };

  const completePractice = (practiceId, xp = 5) => {
    if (progress.completedPractices.includes(practiceId)) return;
    updateProgress({
      completedPractices: [...progress.completedPractices, practiceId],
      totalXP: progress.totalXP + xp,
    });
  };

  // Helper functions for External JSON Storage (User Data Persistence)
  const exportProgress = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `pashto_progress_${currentUser}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const importProgress = (jsonData) => {
    try {
      const importedData = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      updateProgress(importedData);
      return true;
    } catch (e) {
      console.error("Import failed", e);
      return false;
    }
  };

  const resetAllProgress = () => {
    updateProgress(getDefaultProgress());
  };

  const value = {
    progress,
    allProgress,
    completeLesson,
    uncompleteLesson,
    completePractice,
    exportProgress,
    importProgress,
    resetAllProgress,
    isLessonComplete: (id) => progress.completedLessons.includes(id),
    isLessonCompleted: (id) => progress.completedLessons.includes(id),
    isPhaseCompleted: (num) => progress.completedPhases.includes(num),
    getCategoryProgress: (lessons) => {
      if (!lessons || lessons.length === 0) return 0;
      const completed = lessons.filter(l => progress.completedLessons.includes(l.id)).length;
      return Math.round((completed / lessons.length) * 100);
    },
    getProgressPercentage: (lessons) => {
      if (!lessons || lessons.length === 0) return 0;
      const completed = lessons.filter(l => progress.completedLessons.includes(l.id)).length;
      return Math.round((completed / lessons.length) * 100);
    }
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within a ProgressProvider');
  return context;
}
