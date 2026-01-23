import { useNavigate } from 'react-router-dom';
import { Users, LogIn } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export default function UserSelectionPage() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useUser();

  const handleSelectUser = (userId) => {
    setCurrentUser(userId);
    navigate('/');
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
          <p className="text-slate-400">کاربر خود را انتخاب کنید</p>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-lg"
                  style={{ backgroundColor: user.color }}
                >
                  {user.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">{user.name}</h3>
                  <p className="text-sm text-slate-400">{user.nameEn}</p>
                </div>
                <LogIn className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>

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
