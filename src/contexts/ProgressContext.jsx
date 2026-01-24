import { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import usersData from '../data/users.json';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'pashto-learning-progress-multi';

// Roadmap data with phase-to-lesson mapping
const getRoadmapData = () => [
  {
    phase: 1,
    lessons: [
      { id: 'alphabet-intro' },
      { id: 'unique-letters' },
      { id: 'kandahari-sounds' },
      { id: 'vowels' },
    ],
  },
  {
    phase: 2,
    lessons: [
      { id: 'basic-greetings' },
      { id: 'how-are-you' },
      { id: 'introductions' },
      { id: 'formal-informal' },
    ],
  },
  {
    phase: 3,
    lessons: [
      { id: 'pronouns' },
      { id: 'possessive-pronouns' },
      { id: 'demonstratives' },
      { id: 'sentence-structure' },
    ],
  },
  {
    phase: 4,
    lessons: [
      { id: 'gender' },
      { id: 'plural' },
      { id: 'adjectives' },
      { id: 'prepositions' },
      { id: 'questions' },
      { id: 'negation' },
    ],
  },
  {
    phase: 5,
    lessons: [
      { id: 'family' },
      { id: 'numbers-11-100' },
      { id: 'food' },
      { id: 'body-parts' },
      { id: 'colors' },
      { id: 'days-months' },
    ],
  },
  {
    phase: 6,
    lessons: [
      { id: 'verb-to-be' },
      { id: 'verb-to-go' },
      { id: 'verb-to-come' },
      { id: 'verb-to-eat' },
      { id: 'verb-to-drink' },
      { id: 'verb-to-do' },
      { id: 'verb-to-want' },
      { id: 'modal-verbs' },
      { id: 'transitive-verbs' },
    ],
  },
  {
    phase: 7,
    lessons: [
      { id: 'past-simple' },
      { id: 'past-to-be' },
      { id: 'past-to-go' },
      { id: 'past-to-come' },
      { id: 'past-to-eat' },
      { id: 'past-to-drink' },
      { id: 'past-to-do' },
      { id: 'past-to-see' },
    ],
  },
  {
    phase: 8,
    lessons: [
      { id: 'future-tense' },
      { id: 'future-to-be' },
      { id: 'future-to-go' },
      { id: 'future-to-come' },
      { id: 'future-to-eat' },
      { id: 'future-to-drink' },
      { id: 'future-to-do' },
      { id: 'imperative' },
      { id: 'imperative-formal' },
      { id: 'requests' },
    ],
  },
  {
    phase: 9,
    lessons: [
      { id: 'comprehensive-verbs' },
    ],
  },
  {
    phase: 10,
    lessons: [
      { id: 'conv-shopping' },
      { id: 'conv-restaurant' },
      { id: 'conv-taxi' },
      { id: 'conv-phone' },
      { id: 'conv-doctor' },
      { id: 'conv-guest' },
    ],
  },
  {
    phase: 11,
    lessons: [
      { id: 'retroflex' },
      { id: 'idioms' },
      { id: 'proverbs' },
      { id: 'kandahari-slang' },
      { id: 'advanced-food-cooking' },
      { id: 'advanced-body-parts' },
    ],
  },
];

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

    const newCompletedLessons = [...progress.completedLessons, lessonId];
    
    // Check if any phase is now complete
    const newCompletedPhases = [...progress.completedPhases];
    const roadmapData = getRoadmapData();
    
    roadmapData.forEach(phase => {
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
    
    // Check if any phase should be uncompleted
    const newCompletedPhases = progress.completedPhases.filter(phaseNum => {
      const roadmapData = getRoadmapData();
      const phase = roadmapData.find(p => p.phase === phaseNum);
      if (!phase) return true;
      
      // Keep phase only if all its lessons are still completed
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

  const completePhase = (phaseNumber) => {
    if (progress.completedPhases.includes(phaseNumber)) return;
    
    const roadmapData = getRoadmapData();
    const phase = roadmapData.find(p => p.phase === phaseNumber);
    
    if (!phase) return;
    
    // Auto-complete all lessons in this phase
    const newCompletedLessons = [...progress.completedLessons];
    phase.lessons.forEach(lesson => {
      if (!newCompletedLessons.includes(lesson.id)) {
        newCompletedLessons.push(lesson.id);
      }
    });
    
    updateProgress({
      completedPhases: [...progress.completedPhases, phaseNumber],
      completedLessons: newCompletedLessons,
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
    uncompleteLesson,
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
