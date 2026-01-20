import { X, Volume2 } from 'lucide-react';

export default function LetterDetail({ letter, onClose }) {
  const hasKandahariSound = letter.kandahariSound && letter.kandahariSound !== letter.sound;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`p-6 text-center relative ${
          letter.isUniqueToPashto 
            ? 'bg-gradient-to-br from-green-500 to-green-600' 
            : 'bg-gradient-to-br from-slate-600 to-slate-700'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <span className="text-7xl font-bold text-white">{letter.letter}</span>
          
          {letter.isUniqueToPashto && (
            <span className="block mt-2 text-sm text-green-100 bg-white/20 rounded-full px-3 py-1 inline-block">
              حرف خاص پښتو
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Name */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">نام حرف</h3>
            <p className="text-lg font-semibold text-slate-800">{letter.name}</p>
          </div>

          {/* Sound */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">صدا</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-mono bg-slate-100 px-3 py-1 rounded">
                {letter.sound}
              </span>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Kandahari Sound */}
          {hasKandahariSound && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-amber-700 mb-1 flex items-center gap-2">
                <span>🎯</span>
                تلفظ کندهاری
              </h3>
              <p className="text-lg font-mono text-amber-800">{letter.kandahariSound}</p>
              {letter.kandahariNote && (
                <p className="text-sm text-amber-600 mt-2">{letter.kandahariNote}</p>
              )}
            </div>
          )}

          {/* Transliteration */}
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">حروف لاتین</h3>
            <p className="text-lg font-mono text-slate-800">{letter.transliteration}</p>
          </div>

          {/* Example */}
          {letter.example && (
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-1">مثال</h3>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xl font-bold text-slate-800">{letter.example}</p>
                <p className="text-sm text-slate-600 mt-1">{letter.exampleMeaning}</p>
              </div>
            </div>
          )}

          {/* Position Forms */}
          {letter.forms && (
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2">شکل‌های مختلف</h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-slate-50 rounded-lg p-2">
                  <span className="text-2xl">{letter.forms.isolated}</span>
                  <span className="block text-xs text-slate-500 mt-1">جدا</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <span className="text-2xl">{letter.forms.initial}</span>
                  <span className="block text-xs text-slate-500 mt-1">اول</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <span className="text-2xl">{letter.forms.medial}</span>
                  <span className="block text-xs text-slate-500 mt-1">وسط</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <span className="text-2xl">{letter.forms.final}</span>
                  <span className="block text-xs text-slate-500 mt-1">آخر</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Close button */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
