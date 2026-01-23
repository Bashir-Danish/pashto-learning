import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

const USERS_STORAGE_KEY = 'pashto-learning-users';
const CURRENT_USER_KEY = 'pashto-learning-current-user';

// Default users
const DEFAULT_USERS = [
  { id: 'user1', name: 'محمد', nameEn: 'Mohammad', color: '#3b82f6' },
  { id: 'user2', name: 'فاطمه', nameEn: 'Fatima', color: '#ec4899' },
  { id: 'user3', name: 'علی', nameEn: 'Ali', color: '#10b981' },
];

export function UserProvider({ children }) {
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem(USERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  });

  const [currentUser, setCurrentUserState] = useState(() => {
    try {
      const saved = localStorage.getItem(CURRENT_USER_KEY);
      if (saved) {
        const userId = JSON.parse(saved);
        // Verify user still exists
        if (users.find(u => u.id === userId)) {
          return userId;
        }
      }
      // Default to first user
      return users[0]?.id || null;
    } catch {
      return users[0]?.id || null;
    }
  });

  // Save users to localStorage
  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  // Save current user to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const setCurrentUser = (userId) => {
    if (users.find(u => u.id === userId)) {
      setCurrentUserState(userId);
    }
  };

  const getCurrentUserData = () => {
    return users.find(u => u.id === currentUser) || null;
  };

  const addUser = (name, nameEn, color) => {
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      nameEn,
      color,
    };
    setUsers([...users, newUser]);
    return newUser;
  };

  const updateUser = (userId, updates) => {
    setUsers(users.map(u => u.id === userId ? { ...u, ...updates } : u));
  };

  const deleteUser = (userId) => {
    const newUsers = users.filter(u => u.id !== userId);
    setUsers(newUsers);
    
    // If deleted user was current, switch to first user
    if (currentUser === userId) {
      setCurrentUserState(newUsers[0]?.id || null);
    }
  };

  const value = {
    users,
    currentUser,
    setCurrentUser,
    getCurrentUserData,
    addUser,
    updateUser,
    deleteUser,
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
