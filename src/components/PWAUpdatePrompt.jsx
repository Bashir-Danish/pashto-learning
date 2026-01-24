import { useEffect, useState } from 'react';
import { RefreshCw, X } from 'lucide-react';

export default function PWAUpdatePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const handleServiceWorkerUpdate = (reg) => {
      if (reg.waiting) {
        setRegistration(reg);
        setShowPrompt(true);
      }
    };

    navigator.serviceWorker.ready.then((reg) => {
      reg.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      if (reg.waiting) {
        handleServiceWorkerUpdate(reg);
      }
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });

    // Check for updates periodically
    const interval = setInterval(() => {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((reg) => {
          reg.update();
          if (reg.waiting) {
            handleServiceWorkerUpdate(reg);
          }
        });
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleUpdate = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-sm pointer-events-auto">
      <div className="bg-slate-800 border border-emerald-500/50 rounded-xl p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <RefreshCw className="w-5 h-5 text-emerald-400 animate-spin" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white mb-1">نسخه جدید موجود است</h3>
            <p className="text-sm text-slate-400 mb-3">
              یک نسخه جدید از اپلیکیشن دریافت شده است. برای استفاده از آن، صفحه را تازه‌سازی کنید.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                تازه‌سازی
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-semibold rounded-lg transition-colors"
              >
                بعدا
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-slate-300 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
