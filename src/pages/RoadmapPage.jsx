import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Map, CheckCircle2, Circle, ChevronDown, ChevronUp, 
  BookOpen, MessageCircle, Users, Play, Library, Clock, 
  ArrowRight, Star, Target, Zap, Trophy
} from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

const roadmapData = [
  {
    phase: 1,
    title: 'مرحله ۱: آشنایی با الفبا و صداها',
    titlePashto: 'لومړی پړاو: الفبا او غږونه',
    duration: '۱-۲ هفته',
    icon: BookOpen,
    color: 'emerald',
    description: 'یادگیری حروف الفبای پشتو و صداهای خاص کندهاری',
    goals: [
      'شناخت ۴۴ حرف الفبای پشتو',
      'یادگیری ۴ حرف خاص پشتو (ښ، ږ، ځ، څ)',
      'تمرین صداهای برگشته (ټ، ډ، ړ، ڼ)',
      'آشنایی با مصوت‌ها و تلفظ کندهاری',
    ],
    lessons: [
      { id: 'alphabet-intro', title: 'آشنایی با الفبا' },
      { id: 'unique-letters', title: 'حروف خاص پښتو' },
      { id: 'kandahari-sounds', title: 'صداهای کندهاری' },
      { id: 'vowels', title: 'مصوت‌ها' },
    ],
    tips: 'هر روز ۱۵ دقیقه تمرین تلفظ کنید. از صفحه الفبا استفاده کنید.',
  },
  {
    phase: 2,
    title: 'مرحله ۲: سلام و احوالپرسی',
    titlePashto: 'دویم پړاو: سلام او حال احوال',
    duration: '۱ هفته',
    icon: MessageCircle,
    color: 'pink',
    description: 'یادگیری عبارات اولیه برای شروع مکالمه',
    goals: [
      'سلام کردن رسمی و غیررسمی',
      'پرسیدن حال و جواب دادن',
      'معرفی خود به دیگران',
      'خداحافظی کردن',
    ],
    lessons: [
      { id: 'basic-greetings', title: 'سلام و خداحافظی' },
      { id: 'how-are-you', title: 'حالت چطور است؟' },
      { id: 'introductions', title: 'معرفی خود' },
      { id: 'formal-informal', title: 'رسمی و غیررسمی' },
    ],
    tips: 'این عبارات را با صدای بلند تمرین کنید. سعی کنید هر روز استفاده کنید.',
  },
  {
    phase: 3,
    title: 'مرحله ۳: ضمایر و ساختار جمله',
    titlePashto: 'دریم پړاو: ضمیرونه او جملې جوړښت',
    duration: '۱-۲ هفته',
    icon: Users,
    color: 'blue',
    description: 'یادگیری ضمایر و ساختار پایه جملات پشتو',
    goals: [
      'ضمایر شخصی (زه، ته، هغه...)',
      'ضمایر ملکی (زما، ستا، د هغه...)',
      'ساختار SOV جملات پشتو',
      'تفاوت رسمی و غیررسمی',
    ],
    lessons: [
      { id: 'pronouns', title: 'ضمایر شخصی' },
      { id: 'possessive-pronouns', title: 'ضمایر ملکی' },
      { id: 'demonstratives', title: 'ضمایر اشاره' },
      { id: 'sentence-structure', title: 'ساختار جمله SOV' },
    ],
    tips: 'پشتو ساختار SOV دارد: فاعل + مفعول + فعل. این را همیشه به یاد داشته باشید.',
  },
  {
    phase: 4,
    title: 'مرحله ۴: فعل‌های زمان حال',
    titlePashto: 'څلورم پړاو: اوسمهال فعلونه',
    duration: '۲-۳ هفته',
    icon: Play,
    color: 'amber',
    description: 'یادگیری صرف فعل‌های پرکاربرد در زمان حال',
    goals: [
      'فعل بودن (یم، یې، دی...)',
      'فعل‌های حرکتی (ځم، راځم)',
      'فعل‌های روزمره (خورم، څښم، کوم)',
      'فعل خواستن (غواړم)',
      'فعل‌های کمکی (باید، کولی شی، توانیدل)',
      'فعل‌های انتقالی (نیول، ورکول، پرېږدل)',
      'فعل‌های اساسی در تمام زمان‌ها',
    ],
    lessons: [
      { id: 'verb-to-be', title: 'فعل بودن' },
      { id: 'verb-to-go', title: 'فعل رفتن' },
      { id: 'verb-to-come', title: 'فعل آمدن' },
      { id: 'verb-to-eat', title: 'فعل خوردن' },
      { id: 'verb-to-drink', title: 'فعل نوشیدن' },
      { id: 'verb-to-do', title: 'فعل کردن' },
      { id: 'verb-to-want', title: 'فعل خواستن' },
      { id: 'modal-verbs', title: 'فعل‌های کمکی' },
      { id: 'transitive-verbs', title: 'فعل‌های انتقالی' },
    ],
    tips: 'از صفحه صرف فعل استفاده کنید. هر فعل را با تمام ضمایر تمرین کنید. درس جامع فعل‌ها و فعل‌های کمکی را برای یادگیری تمام زمان‌ها ببینید.',
  },
  {
    phase: 5,
    title: 'مرحله ۵: واژگان پایه',
    titlePashto: 'پنځم پړاو: بنسټیز لغات',
    duration: '۲ هفته',
    icon: Library,
    color: 'teal',
    description: 'یادگیری کلمات ضروری برای مکالمه روزمره',
    goals: [
      'اعضای خانواده',
      'اعداد ۱ تا ۱۰۰',
      'غذا و نوشیدنی',
      'اعضای بدن',
      'رنگ‌ها و روزها',
    ],
    lessons: [
      { id: 'family', title: 'خانواده' },
      { id: 'numbers-1-10', title: 'اعداد ۱-۱۰' },
      { id: 'numbers-11-100', title: 'اعداد ۱۱-۱۰۰' },
      { id: 'food', title: 'غذا و نوشیدنی' },
      { id: 'body-parts', title: 'اعضای بدن' },
      { id: 'colors', title: 'رنگ‌ها' },
      { id: 'days-months', title: 'روزها و ماه‌ها' },
    ],
    tips: 'هر روز ۱۰ کلمه جدید یاد بگیرید. کارت‌های فلش درست کنید.',
  },
  {
    phase: 6,
    title: 'مرحله ۶: فعل‌های زمان گذشته',
    titlePashto: 'شپږم پړاو: تېرمهال فعلونه',
    duration: '۲ هفته',
    icon: Clock,
    color: 'violet',
    description: 'یادگیری صرف فعل‌ها در زمان گذشته',
    goals: [
      'ساختار گذشته ساده',
      'فعل‌های بی‌قاعده در گذشته',
      'تفاوت گذشته و حال',
      'جملات منفی گذشته',
    ],
    lessons: [
      { id: 'past-simple', title: 'گذشته ساده' },
      { id: 'past-to-go', title: 'رفتم (لاړم)' },
      { id: 'past-to-come', title: 'آمدم (راغلم)' },
      { id: 'past-to-eat', title: 'خوردم (وخوړم)' },
      { id: 'past-to-do', title: 'کردم (وکړم)' },
      { id: 'past-to-see', title: 'دیدم (ولیدم)' },
    ],
    tips: 'در پشتو، پیشوند «و» معمولاً نشانه گذشته است.',
  },
  {
    phase: 7,
    title: 'مرحله ۷: دستور زبان میانی',
    titlePashto: 'اووم پړاو: منځنی ګرامر',
    duration: '۲ هفته',
    icon: BookOpen,
    color: 'red',
    description: 'یادگیری قواعد دستوری پیشرفته‌تر',
    goals: [
      'جنسیت اسم‌ها (مذکر/مونث)',
      'جمع بستن اسم‌ها',
      'صفت‌ها و تطابق',
      'جملات سوالی و منفی',
    ],
    lessons: [
      { id: 'gender', title: 'جنسیت اسم‌ها' },
      { id: 'plural', title: 'جمع بستن' },
      { id: 'adjectives', title: 'صفت‌ها' },
      { id: 'prepositions', title: 'حروف اضافه' },
      { id: 'questions', title: 'جملات سوالی' },
      { id: 'negation', title: 'جملات منفی' },
    ],
    tips: 'در پشتو جنسیت اسم‌ها مهم است و صفت باید با اسم تطابق داشته باشد.',
  },
  {
    phase: 8,
    title: 'مرحله ۸: آینده و امری',
    titlePashto: 'اتم پړاو: راتلونکي او امري',
    duration: '۱ هفته',
    icon: ArrowRight,
    color: 'cyan',
    description: 'یادگیری زمان آینده و فعل امری',
    goals: [
      'ساختار زمان آینده',
      'فعل امری رسمی و غیررسمی',
      'درخواست کردن مودبانه',
    ],
    lessons: [
      { id: 'future-tense', title: 'زمان آینده' },
      { id: 'imperative', title: 'فعل امری' },
      { id: 'imperative-formal', title: 'امری رسمی' },
      { id: 'requests', title: 'درخواست کردن' },
    ],
    tips: 'برای آینده از «به» + فعل استفاده می‌شود.',
  },
  {
    phase: 9,
    title: 'مرحله ۹: مکالمات روزمره',
    titlePashto: 'نهم پړاو: ورځنۍ خبرې',
    duration: '۳-۴ هفته',
    icon: MessageCircle,
    color: 'orange',
    description: 'تمرین مکالمه در موقعیت‌های واقعی',
    goals: [
      'خرید در بازار و چانه زدن',
      'سفارش غذا در رستوران',
      'گرفتن تاکسی و مسیریابی',
      'مکالمه تلفنی',
      'رفتن به داکتر',
      'مهمانی و پذیرایی',
    ],
    lessons: [
      { id: 'conv-shopping', title: 'در بازار' },
      { id: 'conv-restaurant', title: 'در رستوران' },
      { id: 'conv-taxi', title: 'در تاکسی' },
      { id: 'conv-phone', title: 'مکالمه تلفنی' },
      { id: 'conv-doctor', title: 'در مطب داکتر' },
      { id: 'conv-guest', title: 'مهمانی' },
    ],
    tips: 'این مکالمات را با صدای بلند تمرین کنید. نقش هر دو طرف را بازی کنید.',
  },
  {
    phase: 10,
    title: 'مرحله ۱۰: پیشرفته و اصطلاحات',
    titlePashto: 'لسم پړاو: پرمختللی',
    duration: 'مداوم',
    icon: Star,
    color: 'purple',
    description: 'یادگیری اصطلاحات و ضرب‌المثل‌های کندهاری',
    goals: [
      'صداهای برگشته پیشرفته',
      'اصطلاحات روزمره',
      'ضرب‌المثل‌های پشتو',
      'اصطلاحات خاص کندهاری',
      'غذا و پخت و پز پیشرفته',
      'اعضای بدن پیشرفته',
    ],
    lessons: [
      { id: 'retroflex', title: 'صداهای برگشته' },
      { id: 'idioms', title: 'اصطلاحات' },
      { id: 'proverbs', title: 'ضرب‌المثل‌ها' },
      { id: 'kandahari-slang', title: 'اصطلاحات کندهاری' },
      { id: 'advanced-food-cooking', title: 'کولو (Cooking)' },
      { id: 'advanced-body-parts', title: 'جسم کے حصے' },
    ],
    tips: 'با پشتوزبانان صحبت کنید. فیلم و موسیقی پشتو گوش کنید. درس‌های پیشرفته را برای تعمق بیشتر ببینید.',
  },
  {
    phase: 11,
    title: 'مرحله ۱۱: تنوع لهجه‌ای و تلفظ',
    titlePashto: 'یولسم پړاو: لهجه‌ای تنوع',
    duration: 'مداوم',
    icon: Users,
    color: 'indigo',
    description: 'درک تنوع‌های لهجه‌ای و تلفظ‌های جایگزین در کندهاری',
    goals: [
      'درک تغییرات صوتی در لهجه‌های مختلف',
      'تلفظ‌های جایگزین (ش/س، ژ/ز)',
      'تنوع‌های منطقه‌ای کندهاری',
      'انطباق با گویشوران مختلف',
    ],
    lessons: [
      { id: 'kandahari-sounds', title: 'صداهای کندهاری' },
    ],
    tips: 'تنوع‌های لهجه‌ای طبیعی هستند. هر دو تلفظ (ش و س) در کندهاری قابل قبول است. با گویشوران مختلف تمرین کنید.',
  },
];

const colorClasses = {
  emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/50', text: 'text-emerald-400', icon: 'bg-emerald-500' },
  pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/50', text: 'text-pink-400', icon: 'bg-pink-500' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-400', icon: 'bg-blue-500' },
  amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/50', text: 'text-amber-400', icon: 'bg-amber-500' },
  teal: { bg: 'bg-teal-500/20', border: 'border-teal-500/50', text: 'text-teal-400', icon: 'bg-teal-500' },
  violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/50', text: 'text-violet-400', icon: 'bg-violet-500' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/50', text: 'text-red-400', icon: 'bg-red-500' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', text: 'text-cyan-400', icon: 'bg-cyan-500' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/50', text: 'text-orange-400', icon: 'bg-orange-500' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-400', icon: 'bg-purple-500' },
  indigo: { bg: 'bg-indigo-500/20', border: 'border-indigo-500/50', text: 'text-indigo-400', icon: 'bg-indigo-500' },
};

export default function RoadmapPage() {
  const [expandedPhase, setExpandedPhase] = useState(1);
  const { progress, completePhase, uncompletePhase, isPhaseCompleted } = useProgress();

  const togglePhase = (phase) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  const toggleComplete = (phase) => {
    if (isPhaseCompleted(phase)) {
      uncompletePhase(phase);
    } else {
      completePhase(phase);
    }
  };

  const completedCount = progress?.completedPhases?.length || 0;
  const progressPercentage = (completedCount / roadmapData.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Map className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">نقشه راه یادگیری</h1>
            <p className="text-slate-400">د زده کړې لارښود - مسیر کامل یادگیری پشتو کندهاری</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">پیشرفت کلی</span>
            <span className="text-indigo-400 font-bold">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {completedCount} از {roadmapData.length} مرحله تکمیل شده
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
          <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-100">۱۲</p>
          <p className="text-xs text-slate-500">مرحله</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
          <Zap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-100">۵۷</p>
          <p className="text-xs text-slate-500">درس</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
          <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-100">۳-۴</p>
          <p className="text-xs text-slate-500">ماه</p>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-4">
        {roadmapData.map((phase, idx) => {
          const colors = colorClasses[phase.color];
          const isExpanded = expandedPhase === phase.phase;
          const isCompleted = isPhaseCompleted(phase.phase);
          const Icon = phase.icon;

          return (
            <div 
              key={phase.phase}
              className={`bg-slate-800 rounded-2xl border transition-all ${
                isCompleted ? 'border-emerald-500/50' : 'border-slate-700'
              }`}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.phase)}
                className="w-full p-4 flex items-center gap-4 text-right"
              >
                {/* Phase Number */}
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {/* Connector Line */}
                  {idx < roadmapData.length - 1 && (
                    <div className={`absolute top-12 right-1/2 w-0.5 h-8 ${
                      isCompleted ? 'bg-emerald-500' : 'bg-slate-600'
                    }`} />
                  )}
                </div>

                {/* Phase Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold ${isCompleted ? 'text-emerald-400' : 'text-slate-100'}`}>
                      {phase.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${colors.text}`}>{phase.titlePashto}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </span>
                    <span>{phase.lessons.length} درس</span>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="text-slate-500">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-slate-700 pt-4">
                  <p className="text-slate-300 mb-4">{phase.description}</p>

                  {/* Goals */}
                  <div className={`${colors.bg} rounded-xl p-4 mb-4 border ${colors.border}`}>
                    <h4 className={`font-bold ${colors.text} mb-2`}>اهداف این مرحله:</h4>
                    <ul className="space-y-1">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <Circle className={`w-2 h-2 ${colors.text}`} />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lessons */}
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-300 mb-2">درس‌ها:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.lessons.map((lesson) => (
                        <Link
                          key={lesson.id}
                          to={`/lesson/${lesson.id}`}
                          className="bg-slate-700/50 hover:bg-slate-700 rounded-lg p-3 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <BookOpen className="w-4 h-4 text-slate-500" />
                          {lesson.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                    <h4 className="font-bold text-amber-400 mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      نکته:
                    </h4>
                    <p className="text-sm text-slate-300">{phase.tips}</p>
                  </div>

                  {/* Complete Button */}
                  <button
                    onClick={() => toggleComplete(phase.phase)}
                    className={`mt-4 w-full py-3 rounded-xl font-bold transition-all ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {isCompleted ? '✓ تکمیل شده' : 'علامت‌گذاری به عنوان تکمیل شده'}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final Tips */}
      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30">
        <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
          <Star className="w-6 h-6" />
          نکات مهم برای موفقیت
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>هر روز حداقل ۳۰ دقیقه تمرین کنید - ثبات مهم‌تر از مدت است</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>با صدای بلند تمرین کنید - تلفظ کندهاری نیاز به تمرین دارد</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>از صفحه صرف فعل برای تمرین گردان فعل‌ها استفاده کنید</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>مکالمات را با نقش‌بازی تمرین کنید - هر دو طرف مکالمه را بخوانید</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>اگر امکان دارد با پشتوزبانان صحبت کنید - تمرین واقعی بهترین روش است</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
