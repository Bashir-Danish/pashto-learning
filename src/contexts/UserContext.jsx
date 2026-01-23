import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

const CURRENT_USER_KEY = 'pashto-learning-current-user';

// Fixed 3 users
const FIXED_USERS = [
  { id: 'user1', name: 'User 1', nameEn: 'User 1', color: '#3b82f6' },
  { id: 'user2', name: 'User 2', nameEn: 'User 2', color: '#ec4899' },
  { id: 'user3', name: 'User 3', nameEn: 'User 3', color: '#10b981' },
];

export function UserProvider({ children }) {
  const [currentUser, setCurrentUserState] = useState(() => {
    try {
      const saved = localStorage.getItem(CURRENT_USER_KEY);
      if (saved) {
        const userId = JSON.parse(saved);
        // Verify user still exists
        if (FIXED_USERS.find(u => u.id === userId)) {
          return userId;
        }
      }
      // Default to first user
      return FIXED_USERS[0]?.id || null;
    } catch {
      return FIXED_USERS[0]?.id || null;
    }
  });

  // Save current user to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const setCurrentUser = (userId) => {
    if (FIXED_USERS.find(u => u.id === userId)) {
      setCurrentUserState(userId);
    }
  };

  const getCurrentUserData = () => {
    return FIXED_USERS.find(u => u.id === currentUser) || null;
  };

  const value = {
    users: FIXED_USERS,
    currentUser,
    setCurrentUser,
    getCurrentUserData,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
