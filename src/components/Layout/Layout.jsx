import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PWAUpdatePrompt from '../PWAUpdatePrompt';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 rtl flex flex-col" dir="rtl">
      {/* PWA Update Prompt */}
      <PWAUpdatePrompt />
      
      {/* Fixed Header */}
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      {/* Main content area with sidebar */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar - fixed on desktop */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main content - scrollable */}
        <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-auto min-h-[calc(100vh-64px)] lg:mr-72">
          {children}
        </main>
      </div>
    </div>
  );
}
