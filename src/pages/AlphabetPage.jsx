import { useState } from 'react';
import { Languages, Volume2, X, Star, Info } from 'lucide-react';
import { alphabet, kandahariPronunciationInfo } from '../data/alphabet';

export default function AlphabetPage() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredAlphabet = alphabet.filter(letter => {
    if (filter === 'all') return true;
    if (filter === 'unique') return letter.isUnique;
    if (filter === 'kandahari') return letter.isKandahariSpecial;
    return letter.category === filter;
  });

  const filters = [
    { id: 'all', label: 'همه', count: alphabet.length },
    { id: 'unique', label: 'خاص پښتو', count: alphabet.filter(l => l.isUnique).length },
    { id: 'kandahari', label: 'کندهاری', count: alphabet.filter(l => l.isKandahariSpecial).length },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Languages className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">الفبای پښتو</h1>
            <p className="text-slate-400">د پښتو الفبا - ۴۴ حرف با تمرکز بر گویش کندهاری</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>
      </div>

      {/* Letters Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3">
        {filteredAlphabet.map((letter) => (
          <button
            key={letter.id}
            onClick={() => setSelectedLetter(letter)}
            className={`relative bg-slate-800 rounded-xl p-4 shadow-lg border transition-all hover:shadow-xl hover:scale-105 ${
              letter.isKandahariSpecial
                ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/20 to-orange-500/20'
                : letter.isUnique
                ? 'border-emerald-500/50 bg-gradient-to-br from-emerald-500/20 to-green-500/20'
                : 'border-slate-700 hover:border-emerald-500/50'
            }`}
          >
            {letter.isKandahariSpecial && (
              <Star className="absolute top-1 left-1 w-4 h-4 text-amber-400" />
            )}
            <div className="text-4xl font-bold text-slate-100 mb-1">{letter.letter}</div>
            <div className="text-xs text-slate-400 truncate">{letter.name}</div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700">
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-emerald-500/30 to-green-500/30 border border-emerald-500/50"></div>
            <span className="text-slate-300">حروف خاص پښتو (۹ حرف)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-amber-500/30 to-orange-500/30 border border-amber-500/50"></div>
            <span className="text-slate-300">تلفظ خاص کندهاری (ښ و ږ)</span>
          </div>
        </div>
      </div>

      {/* Letter Detail Modal */}
      {selectedLetter && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedLetter(null)}>
          <div className="bg-slate-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl font-bold ${
                    selectedLetter.isKandahariSpecial
                      ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-400 border border-amber-500/50'
                      : selectedLetter.isUnique
                      ? 'bg-gradient-to-br from-emerald-500/30 to-green-500/30 text-emerald-400 border border-emerald-500/50'
                      : 'bg-slate-700 text-slate-200 border border-slate-600'
                  }`}>
                    {selectedLetter.letter}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-100">{selectedLetter.name}</h2>
                    <p className="text-slate-400">{selectedLetter.namePashto}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedLetter(null)} className="p-2 hover:bg-slate-700 rounded-xl">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Sound */}
              <div className="bg-slate-700/50 rounded-xl p-4 mb-4 border border-slate-600">
                <div className="flex items-center gap-3 mb-2">
                  <Volume2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium text-slate-200">صدا</span>
                </div>
                <p className="text-xl text-slate-100 font-mono">{selectedLetter.sound}</p>
                <p className="text-sm text-slate-400 mt-1">معادل لاتین: {selectedLetter.latinEquivalent}</p>
              </div>

              {/* Kandahari Special Info */}
              {selectedLetter.isKandahariSpecial && kandahariPronunciationInfo[selectedLetter.letter] && (
                <div className="bg-amber-500/20 rounded-xl p-4 mb-4 border border-amber-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-amber-300">تلفظ کندهاری</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><span className="font-medium text-amber-400">کندهاری:</span> {kandahariPronunciationInfo[selectedLetter.letter].kandahari}</p>
                    <p className="text-slate-300"><span className="font-medium text-amber-400">کابلی:</span> {kandahariPronunciationInfo[selectedLetter.letter].kabuli}</p>
                    <p className="text-slate-400 mt-3">{kandahariPronunciationInfo[selectedLetter.letter].description}</p>
                  </div>
                </div>
              )}

              {/* Examples */}
              {selectedLetter.examples && selectedLetter.examples.length > 0 && (
                <div>
                  <h3 className="font-bold text-slate-200 mb-3">مثال‌ها</h3>
                  <div className="space-y-2">
                    {selectedLetter.examples.map((ex, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                        <span className="text-xl font-bold text-emerald-400">{ex.word}</span>
                        <div className="text-left">
                          <span className="text-slate-300">{ex.meaning}</span>
                          <span className="text-xs text-slate-500 block">{ex.transliteration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
