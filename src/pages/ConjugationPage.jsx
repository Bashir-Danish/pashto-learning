import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { verbConjugations, verbList } from '../data/conjugations';

function ConjugationPage() {
  const [selectedVerb, setSelectedVerb] = useState('to-go');

  const verb = verbConjugations[selectedVerb];

  // Get tense order with numbers
  const tenseOrder = ['present', 'past', 'future', 'imperative'];
  const tenseNumbers = {
    present: '۱',
    past: '۲',
    future: '۳',
    imperative: '۴',
  };

  const tenseColors = {
    present: 'from-emerald-600 to-green-600',
    past: 'from-blue-600 to-indigo-600',
    future: 'from-purple-600 to-violet-600',
    imperative: 'from-orange-600 to-amber-600',
  };

  return (
    <div className="p-6 min-h-screen" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-200">گردان فعل‌های پښتو</h1>
        </div>

        {/* Verb Selector */}
        <div className="bg-slate-800 rounded-xl p-4 mb-6 shadow-lg border border-slate-700">
          <label className="block text-slate-400 font-medium mb-2">انتخاب فعل:</label>
          <select
            value={selectedVerb}
            onChange={(e) => setSelectedVerb(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-200 text-lg focus:border-emerald-500 focus:outline-none transition-colors"
          >
            {verbList.map((v, index) => (
              <option key={v.id} value={v.id}>
                {index + 1}. {v.namePashto} - {v.name} ({v.root})
              </option>
            ))}
          </select>
        </div>

        {/* Verb Info */}
        {verb && (
          <div className="bg-slate-800 rounded-xl p-4 mb-6 shadow-lg border border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-500 text-sm">مصدر پښتو</div>
                <div className="text-xl font-bold text-slate-200">{verb.infinitive}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-500 text-sm">مصدر فارسی</div>
                <div className="text-xl font-bold text-slate-200">{verb.infinitiveFarsi}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-500 text-sm">ریشه</div>
                <div className="text-xl font-bold text-emerald-400">{verb.root}</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <div className="text-slate-500 text-sm">نوع</div>
                <div className="text-lg font-medium text-slate-300">
                  {verb.type === 'transitive' ? 'متعدی' : verb.type === 'intransitive' ? 'لازم' : 'بی‌قاعده'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conjugation Tables */}
        {verb && tenseOrder.map((tenseKey, index) => {
          const tense = verb.tenses[tenseKey];
          if (!tense) return null;
          
          return (
            <div key={tenseKey} className="bg-slate-800 rounded-xl mb-6 shadow-lg border border-slate-700 overflow-hidden">
              {/* Tense Header with Number */}
              <div className={`p-4 flex items-center gap-3 bg-gradient-to-r ${tenseColors[tenseKey] || 'from-slate-600 to-slate-700'} text-white`}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                  {tenseNumbers[tenseKey]}
                </div>
                <div>
                  <span className="text-xl font-bold">{tense.namePashto}</span>
                  <span className="text-lg opacity-80 mr-2">({tense.name})</span>
                </div>
              </div>

              {/* Conjugation Table */}
              <div className="p-4">
                {tense.note && (
                  <div className="bg-amber-500/20 text-amber-300 p-3 rounded-lg mb-4 text-sm border border-amber-500/30">
                    ⚠️ {tense.note}
                  </div>
                )}
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-700">
                        <th className="p-3 text-right text-slate-300 font-semibold">ضمیر</th>
                        <th className="p-3 text-right text-slate-300 font-semibold">پښتو</th>
                        <th className="p-3 text-right text-slate-300 font-semibold">فارسی</th>
                        <th className="p-3 text-right text-slate-300 font-semibold">تلفظ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tense.conjugations.map((conj, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-750'}>
                          <td className="p-3 font-medium text-slate-400">{conj.pronoun}</td>
                          <td className="p-3 text-xl font-bold text-emerald-400">{conj.pashto}</td>
                          <td className="p-3 text-slate-300">{conj.farsi}</td>
                          <td className="p-3 text-slate-500 text-sm" dir="ltr">{conj.pronunciation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Negative Imperative */}
                {tense.negative && (
                  <div className="mt-4">
                    <h4 className="font-bold text-red-400 mb-2">منفی (نهی):</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <tbody>
                          {tense.negative.map((conj, idx) => (
                            <tr key={idx} className="bg-red-500/10 border border-red-500/20">
                              <td className="p-3 font-medium text-slate-400">{conj.pronoun}</td>
                              <td className="p-3 text-xl font-bold text-red-400">{conj.pashto}</td>
                              <td className="p-3 text-slate-300">{conj.farsi}</td>
                              <td className="p-3 text-slate-500 text-sm" dir="ltr">{conj.pronunciation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Examples */}
        {verb && verb.examples && (
          <div className="bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700">
            <h3 className="text-lg font-bold text-slate-200 mb-3">مثال‌ها:</h3>
            <div className="space-y-2">
              {verb.examples.map((ex, idx) => (
                <div key={idx} className="bg-slate-700/50 p-3 rounded-lg flex justify-between items-center border border-slate-600">
                  <span className="text-emerald-400 font-bold">{ex.pashto}</span>
                  <span className="text-slate-400">{ex.farsi}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Reference */}
        <div className="mt-6 bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700">
          <h3 className="text-lg font-bold text-slate-200 mb-3">راهنمای سریع:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
              <div className="font-bold text-emerald-400 mb-1">پسوندهای حال:</div>
              <div className="text-slate-400">م، ې، ي، و، ئ، ي</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
              <div className="font-bold text-purple-400 mb-1">علامت آینده:</div>
              <div className="text-slate-400">به + فعل حال</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
              <div className="font-bold text-blue-400 mb-1">علامت گذشته:</div>
              <div className="text-slate-400">پیشوند «و» + ریشه گذشته</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
              <div className="font-bold text-red-400 mb-1">منفی‌ساز:</div>
              <div className="text-slate-400">نه (خبری) / مه (امری)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConjugationPage;
