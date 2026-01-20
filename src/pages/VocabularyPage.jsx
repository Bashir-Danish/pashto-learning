import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Hand, Users, Hash, Heart, Utensils, Palette, 
  Play, MessageSquareText, MessageCircle, ChevronDown, ChevronUp, ArrowRight, BookOpen
} from 'lucide-react';
import { vocabularyCategories } from '../data/vocabulary/index.js';
import * as vocabulary from '../data/vocabulary/index.js';

// نقشه دسته‌بندی به داده
const categoryDataMap = {
  'greetings': vocabulary.greetings,
  'family': vocabulary.family,
  'numbers': vocabulary.numbers,
  'body-parts': vocabulary.bodyParts,
  'food': vocabulary.food,
  'colors': vocabulary.colors,
  'verbs': vocabulary.verbs,
  'slang': vocabulary.slang,
  'conversations': vocabulary.conversations,
};

// نقشه آیکون‌ها
const iconMap = {
  'greetings': Hand,
  'family': Users,
  'numbers': Hash,
  'body-parts': Heart,
  'food': Utensils,
  'colors': Palette,
  'verbs': Play,
  'slang': MessageSquareText,
  'conversations': MessageCircle,
};

export default function VocabularyPage() {
  const { categoryId } = useParams();
  const [activeSection, setActiveSection] = useState(null);

  // اگر دسته‌بندی انتخاب نشده، لیست دسته‌بندی‌ها را نشان بده
  if (!categoryId) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-100">واژگان پښتو کندهاری</h1>
              <p className="text-slate-400">دسته‌بندی مورد نظر را انتخاب کنید</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vocabularyCategories.map((cat) => {
            const IconComponent = iconMap[cat.id] || BookOpen;
            return (
              <Link
                key={cat.id}
                to={`/vocabulary/${cat.id}`}
                className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:border-blue-500/50 text-center flex flex-col items-center group"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-blue-500/30">
                  <IconComponent className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="font-bold text-slate-200 mb-1">{cat.title}</h3>
                <p className="text-sm text-blue-400">{cat.titlePashto}</p>
                <p className="text-xs text-slate-500 mt-2">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // پیدا کردن دسته‌بندی و داده
  const category = vocabularyCategories.find(c => c.id === categoryId);
  const data = categoryDataMap[categoryId];
  const IconComponent = iconMap[categoryId] || BookOpen;

  if (!category || !data) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <p className="text-xl text-slate-400 mb-4">دسته‌بندی پیدا نشد</p>
        <Link to="/vocabulary" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          بازگشت به لیست
        </Link>
      </div>
    );
  }

  // رندر کردن بخش‌های مختلف داده
  const renderSection = (title, items, key) => {
    if (!items || items.length === 0) return null;
    
    const isOpen = activeSection === key;
    
    return (
      <div key={key} className="mb-4">
        <button
          onClick={() => setActiveSection(isOpen ? null : key)}
          className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-emerald-500/30"
        >
          <span className="font-bold text-emerald-400">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-emerald-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-emerald-400" />
          )}
        </button>
        
        {isOpen && (
          <div className="bg-slate-700/50 rounded-b-lg border border-t-0 border-emerald-500/30 p-4">
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-600">
                  <div className="text-right">
                    <span className="text-xl font-bold text-emerald-400 block">
                      {item.pashto}
                    </span>
                    <span className="text-sm text-slate-500">
                      {item.pronunciation}
                    </span>
                  </div>
                  <span className="text-slate-300">{item.farsi}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // رندر کردن جملات
  const renderSentences = (sentences) => {
    if (!sentences || sentences.length === 0) return null;
    
    const isOpen = activeSection === 'sentences';
    
    return (
      <div className="mb-4">
        <button
          onClick={() => setActiveSection(isOpen ? null : 'sentences')}
          className="w-full bg-amber-500/20 hover:bg-amber-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-amber-500/30"
        >
          <span className="font-bold text-amber-400">جملات مفید</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-amber-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-amber-400" />
          )}
        </button>
        
        {isOpen && (
          <div className="bg-slate-700/50 rounded-b-lg border border-t-0 border-amber-500/30 p-4">
            <div className="space-y-4">
              {sentences.map((item, idx) => (
                <div key={idx} className="p-4 bg-amber-500/20 rounded-lg border border-amber-500/30">
                  <p className="text-xl font-bold text-amber-300 mb-1">
                    {item.pashto}
                  </p>
                  <p className="text-slate-300 mb-1">{item.farsi}</p>
                  <p className="text-sm text-slate-500">{item.pronunciation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // رندر کردن مکالمه
  const renderConversation = (conversation, title = 'مکالمه نمونه') => {
    if (!conversation || conversation.length === 0) return null;
    
    const isOpen = activeSection === 'conversation';
    
    return (
      <div className="mb-4">
        <button
          onClick={() => setActiveSection(isOpen ? null : 'conversation')}
          className="w-full bg-blue-500/20 hover:bg-blue-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-blue-500/30"
        >
          <span className="font-bold text-blue-400">{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-400" />
          )}
        </button>
        
        {isOpen && (
          <div className="bg-slate-700/50 rounded-b-lg border border-t-0 border-blue-500/30 p-4">
            <div className="space-y-3">
              {conversation.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-lg ${
                    line.speaker === 'A' ? 'bg-blue-500/20 mr-8 border border-blue-500/30' : 'bg-slate-700 ml-8 border border-slate-600'
                  }`}
                >
                  <span className="text-xs text-slate-500 block mb-1">
                    {line.speaker}
                  </span>
                  <p className="font-bold text-slate-200">{line.pashto}</p>
                  <p className="text-sm text-slate-400">{line.farsi}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // رندر کردن بخش مقایسه رسمی/غیررسمی
  const renderComparison = (comparison) => {
    if (!comparison || comparison.length === 0) return null;
    
    const isOpen = activeSection === 'comparison';
    
    return (
      <div className="mb-4">
        <button
          onClick={() => setActiveSection(isOpen ? null : 'comparison')}
          className="w-full bg-purple-500/20 hover:bg-purple-500/30 rounded-lg p-4 text-right flex justify-between items-center transition-colors border border-purple-500/30"
        >
          <span className="font-bold text-purple-400">مقایسه رسمی و غیررسمی</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-purple-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-400" />
          )}
        </button>
        
        {isOpen && (
          <div className="bg-slate-700/50 rounded-b-lg border border-t-0 border-purple-500/30 p-4">
            <div className="space-y-4">
              {comparison.map((item, idx) => (
                <div key={idx} className="border border-slate-600 rounded-xl overflow-hidden">
                  <div className="bg-slate-700 px-4 py-2 text-center">
                    <span className="font-bold text-slate-300">{item.context}</span>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-slate-600">
                    {/* رسمی */}
                    <div className="p-4 bg-blue-500/20">
                      <div className="text-xs text-blue-400 font-bold mb-2 text-center">رسمی</div>
                      <p className="text-lg font-bold text-blue-300 text-center">{item.formal.pashto}</p>
                      <p className="text-sm text-slate-400 text-center">{item.formal.farsi}</p>
                    </div>
                    {/* غیررسمی */}
                    <div className="p-4 bg-emerald-500/20">
                      <div className="text-xs text-emerald-400 font-bold mb-2 text-center">غیررسمی</div>
                      <p className="text-lg font-bold text-emerald-300 text-center">{item.informal.pashto}</p>
                      <p className="text-sm text-slate-400 text-center">{item.informal.farsi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // تعیین بخش‌های قابل نمایش بر اساس نوع داده
  const getSections = () => {
    const sections = [];
    
    const titles = {
      basic: 'پایه',
      head: 'سر و صورت',
      body: 'تنه',
      limbs: 'دست و پا',
      internal: 'اعضای داخلی',
      teens: '۱۱ تا ۲۰',
      tens: 'دهگان‌ها',
      twenties: '۲۱ تا ۲۵',
      large: 'اعداد بزرگ',
      mainDishes: 'غذاهای اصلی',
      vegetables: 'سبزیجات',
      fruits: 'میوه‌ها',
      drinks: 'نوشیدنی‌ها',
      dairy: 'لبنیات',
      spices: 'ادویه‌ها',
      shades: 'سایه‌ها',
      adjectives: 'صفت‌ها',
      nature: 'در طبیعت',
      movement: 'حرکتی',
      daily: 'روزمره',
      emotional: 'احساسی',
      formal: 'رسمی',
      informal: 'غیررسمی',
      howAreYou: 'احوالپرسی',
      responses: 'پاسخ‌ها',
      timeOfDay: 'وقت روز',
      thanksAndApology: 'تشکر و عذرخواهی',
      welcome: 'خوش‌آمدگویی',
      common: 'رایج',
      exclamations: 'تعجب',
      kandahariSpecific: 'خاص کندهاری',
      friendly: 'دوستانه',
      negative: 'منفی',
      proverbs: 'ضرب‌المثل‌ها',
      immediate: 'خانواده نزدیک',
      grandparents: 'پدربزرگ و مادربزرگ',
      auntsUncles: 'عمو و خاله',
      marriage: 'ازدواج',
      children: 'بچه‌ها',
    };
    
    Object.keys(data).forEach(key => {
      if (key === 'sentences') return;
      if (key === 'sampleConversation') return;
      if (key === 'culturalNote') return;
      if (key === 'conjugation') return;
      if (key === 'comparison') return; // مقایسه جداگانه رندر می‌شود
      
      const value = data[key];
      if (Array.isArray(value) && value.length > 0 && value[0].pashto) {
        sections.push({ key, title: titles[key] || key, items: value });
      }
    });
    
    return sections;
  };

  const sections = getSections();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* هدر */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <Link to="/vocabulary" className="text-blue-400 hover:text-blue-300 mb-4 inline-flex items-center gap-2 text-sm">
          <ArrowRight className="w-4 h-4" />
          بازگشت به واژگان
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
            <IconComponent className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">{category.title}</h1>
            <p className="text-blue-400">{category.titlePashto}</p>
          </div>
        </div>
      </div>

      {/* بخش‌های واژگان */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 space-y-4">
        {/* بخش مقایسه رسمی/غیررسمی */}
        {data.comparison && renderComparison(data.comparison)}
        
        {sections.map(section => renderSection(section.title, section.items, section.key))}
        
        {/* جملات */}
        {data.sentences && renderSentences(data.sentences)}
        
        {/* مکالمه نمونه */}
        {data.sampleConversation && renderConversation(data.sampleConversation)}
      </div>
      
      {/* نکته فرهنگی */}
      {data.culturalNote && (
        <div className="bg-purple-500/20 rounded-2xl p-6 border border-purple-500/30 shadow-lg">
          <h3 className="font-bold text-purple-300 mb-2">نکته فرهنگی</h3>
          <p className="text-slate-300 leading-relaxed">
            {data.culturalNote.farsi}
          </p>
        </div>
      )}
    </div>
  );
}
