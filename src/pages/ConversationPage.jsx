import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ChevronDown, ChevronUp, MessageCircle, Users, Sparkles } from 'lucide-react';
import { conversations } from '../data/vocabulary/conversations.js';

const conversationList = [
  { id: 'shopping', ...conversations.shopping },
  { id: 'restaurant', ...conversations.restaurant },
  { id: 'introduction', ...conversations.introduction },
  { id: 'taxi', ...conversations.taxi },
  { id: 'phone', ...conversations.phone },
  { id: 'doctor', ...conversations.doctor },
  { id: 'guestVisit', ...conversations.guestVisit },
  { id: 'pharmacy', ...conversations.pharmacy },
  { id: 'bank', ...conversations.bank },
  { id: 'mosque', ...conversations.mosque },
  { id: 'wedding', ...conversations.wedding },
  { id: 'fruitShop', ...conversations.fruitShop },
  { id: 'bakery', ...conversations.bakery },
  { id: 'publicBath', ...conversations.publicBath },
  { id: 'mobileShop', ...conversations.mobileShop },
  { id: 'guestHouse', ...conversations.guestHouse },
];

export default function ConversationPage() {
  const { conversationId } = useParams();
  const [showVocab, setShowVocab] = useState(false);
  const [showPhrases, setShowPhrases] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(true);

  // لیست مکالمات
  if (!conversationId) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-100">مکالمات روزمره</h1>
              <p className="text-slate-400">خبرې اترې - یادگیری مکالمه در موقعیت‌های مختلف</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
            در هر مکالمه، نسخه‌های رسمی و غیررسمی جملات نشان داده می‌شود تا بتوانید در موقعیت‌های مختلف از آنها استفاده کنید.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {conversationList.map((conv) => (
            <Link
              key={conv.id}
              to={`/conversation/${conv.id}`}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:border-purple-500/50 group"
            >
              <h3 className="font-bold text-slate-200 text-xl mb-1 group-hover:text-purple-400">{conv.title}</h3>
              <p className="text-purple-400 mb-2">{conv.titlePashto}</p>
              {conv.description && (
                <p className="text-sm text-slate-500 mb-3">{conv.description}</p>
              )}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {conv.dialogue.length} خط
                </span>
                {conv.vocabulary && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {conv.vocabulary.length} واژه
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }


  // پیدا کردن مکالمه
  const conversation = conversationList.find(c => c.id === conversationId);

  if (!conversation) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <MessageCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <p className="text-xl text-slate-400 mb-4">مکالمه پیدا نشد</p>
        <Link to="/conversation" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          بازگشت به لیست
        </Link>
      </div>
    );
  }

  // بررسی وجود نسخه‌های جایگزین
  const hasAlternatives = conversation.dialogue.some(line => line.formalAlt || line.informalAlt);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* هدر */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <Link to="/conversation" className="text-purple-400 hover:text-purple-300 mb-4 inline-flex items-center gap-2 text-sm">
          <ArrowRight className="w-4 h-4" />
          بازگشت به مکالمات
        </Link>
        <h1 className="text-2xl font-bold text-slate-100">{conversation.title}</h1>
        <p className="text-purple-400 mb-2">{conversation.titlePashto}</p>
        {conversation.description && (
          <p className="text-sm text-slate-500">{conversation.description}</p>
        )}
        
        {/* Toggle for alternatives */}
        {hasAlternatives && (
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setShowAlternatives(!showAlternatives)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                showAlternatives 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
              }`}
            >
              {showAlternatives ? '✓ نمایش رسمی/غیررسمی' : 'نمایش رسمی/غیررسمی'}
            </button>
          </div>
        )}
      </div>

      {/* مکالمه */}
      <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-6">
        <div className="space-y-4">
          {conversation.dialogue.map((line, idx) => {
            const isEven = idx % 2 === 0;
            const hasAlt = line.formalAlt || line.informalAlt;
            
            return (
              <div key={idx} className="space-y-2">
                {/* Main dialogue */}
                <div className={`flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      isEven 
                        ? 'bg-purple-600 text-white rounded-br-sm' 
                        : 'bg-slate-700 text-slate-200 rounded-bl-sm border border-slate-600'
                    }`}
                  >
                    <span className={`text-xs block mb-1 ${isEven ? 'text-purple-200' : 'text-slate-500'}`}>
                      {line.speaker}
                    </span>
                    <p className="font-bold text-lg leading-relaxed">{line.pashto}</p>
                    <p className={`text-sm mt-1 ${isEven ? 'text-purple-100' : 'text-slate-400'}`}>
                      {line.farsi}
                    </p>
                  </div>
                </div>
                
                {/* Alternative version (formal/informal) */}
                {showAlternatives && hasAlt && (
                  <div className={`flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[85%] p-3 rounded-xl border-2 border-dashed ${
                        isEven 
                          ? 'border-purple-500/50 bg-purple-500/10' 
                          : 'border-slate-600 bg-slate-700/50'
                      }`}
                    >
                      <span className={`text-xs font-medium block mb-1 ${
                        line.formalAlt ? 'text-emerald-400' : 'text-amber-400'
                      }`}>
                        {line.formalAlt ? '📋 رسمی:' : '💬 غیررسمی:'}
                      </span>
                      <p className="font-bold text-slate-200">
                        {line.formalAlt || line.informalAlt}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        {line.formalAltFarsi || line.informalAltFarsi}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* واژگان کلیدی */}
      {conversation.vocabulary && (
        <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
          <button
            onClick={() => setShowVocab(!showVocab)}
            className="w-full p-4 bg-amber-500/20 hover:bg-amber-500/30 transition-colors flex justify-between items-center border-b border-amber-500/30"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-amber-300">واژگان کلیدی ({conversation.vocabulary.length})</span>
            </div>
            {showVocab ? (
              <ChevronUp className="w-5 h-5 text-amber-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-amber-400" />
            )}
          </button>
          
          {showVocab && (
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {conversation.vocabulary.map((word, idx) => (
                  <div key={idx} className="bg-amber-500/10 rounded-lg p-3 hover:bg-amber-500/20 transition-colors border border-amber-500/20">
                    <p className="font-bold text-amber-300 text-lg">{word.pashto}</p>
                    <p className="text-sm text-slate-300">{word.farsi}</p>
                    <p className="text-xs text-slate-500 font-mono">{word.pronunciation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* عبارات مفید */}
      {conversation.usefulPhrases && (
        <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
          <button
            onClick={() => setShowPhrases(!showPhrases)}
            className="w-full p-4 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors flex justify-between items-center border-b border-emerald-500/30"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-emerald-300">عبارات مفید ({conversation.usefulPhrases.length})</span>
            </div>
            {showPhrases ? (
              <ChevronUp className="w-5 h-5 text-emerald-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-emerald-400" />
            )}
          </button>
          
          {showPhrases && (
            <div className="p-4 space-y-3">
              {conversation.usefulPhrases.map((phrase, idx) => (
                <div key={idx} className="bg-emerald-500/10 rounded-lg p-4 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                  <p className="font-bold text-emerald-300 text-lg">{phrase.pashto}</p>
                  <p className="text-slate-300">{phrase.farsi}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">{phrase.pronunciation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
