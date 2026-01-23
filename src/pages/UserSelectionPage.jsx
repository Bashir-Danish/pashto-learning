import { useNavigate } from 'react-router-dom';
import { Users, LogIn, Plus } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useState } from 'react';

export default function UserSelectionPage() {
  const navigate = useNavigate();
  const { users, setCurrentUser, addUser } = useUser();
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserNameEn, setNewUserNameEn] = useState('');

  const colors = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];

  const handleSelectUser = (userId) => {
    setCurrentUser(userId);
    navigate('/');
  };

  const handleAddUser = () => {
    if (newUserName.trim() && newUserNameEn.trim()) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      addUser(newUserName, newUserNameEn, randomColor);
      setNewUserName('');
      setNewUserNameEn('');
      setShowAddUser(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">انتخاب کاربر</h1>
          <p className="text-slate-400">کاربر خود را انتخاب کنید یا یک کاربر جدید اضافه کنید</p>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {users.map(user => (
            <button
              key={user.id}
              onClick={() => handleSelectUser(user.id)}
              className="group relative overflow-hidden rounded-2xl p-6 bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: user.color }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{ backgroundColor: user.color }}
                >
                  {user.name.charAt(0)}
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold text-white">{user.name}</h3>
                  <p className="text-sm text-slate-400">{user.nameEn}</p>
                </div>
                <LogIn className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </div>
            </button>
          ))}

          {/* Add User Button */}
          {users.length < 6 && (
            <button
              onClick={() => setShowAddUser(!showAddUser)}
              className="rounded-2xl p-6 bg-slate-800/50 border-2 border-dashed border-slate-600 hover:border-indigo-500/50 transition-all hover:bg-slate-800 flex items-center justify-center gap-3 text-slate-400 hover:text-indigo-400"
            >
              <Plus className="w-6 h-6" />
              <span className="font-semibold">اضافه کردن کاربر</span>
            </button>
          )}
        </div>

        {/* Add User Form */}
        {showAddUser && (
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">کاربر جدید</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  نام (فارسی)
                </label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="مثال: محمد"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  نام (English)
                </label>
                <input
                  type="text"
                  value={newUserNameEn}
                  onChange={(e) => setNewUserNameEn(e.target.value)}
                  placeholder="Example: Mohammad"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleAddUser}
                  className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                >
                  ایجاد کاربر
                </button>
                <button
                  onClick={() => setShowAddUser(false)}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                >
                  لغو
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="bg-indigo-500/10 rounded-2xl p-4 border border-indigo-500/30 text-center">
          <p className="text-sm text-indigo-300">
            هر کاربر پیشرفت خود را جداگانه ذخیره می‌کند
          </p>
        </div>
      </div>
    </div>
  );
}
