// سلام و احوالپرسی در پښتو کندهاری - Greetings in Kandahari Pashto
// با نسخه‌های رسمی و غیررسمی

export const greetings = {
  // سلام‌های رسمی
  formal: [
    {
      pashto: 'سلام علیکم',
      farsi: 'سلام علیکم',
      pronunciation: 'salām alaykum',
      response: 'وعلیکم السلام',
      responsePronunciation: 'wa alaykum as-salām',
      usage: 'برای همه موقعیت‌ها مناسب است',
    },
    {
      pashto: 'ستړی مه شئ',
      farsi: 'خسته نباشید (رسمی)',
      pronunciation: 'staṛáy ma shey',
      response: 'تاسو هم ستړي مه شئ',
      responsePronunciation: 'tāso ham staṛáy ma shey',
      usage: 'برای بزرگترها و افراد رسمی',
    },
    {
      pashto: 'حال مو څنګه دی؟',
      farsi: 'حالتان چطور است؟',
      pronunciation: 'hāl mo tsanga day?',
      response: 'الحمدلله ښه یم، مننه',
      responsePronunciation: 'alhamdulillāh ṣ̌a yam, manána',
      usage: 'احوالپرسی رسمی',
    },
    {
      pashto: 'خدای پامان',
      farsi: 'خداحافظ',
      pronunciation: 'khudāy pāmān',
      response: 'په مخه دې ښه',
      responsePronunciation: 'pa makha de ṣ̌a',
      usage: 'خداحافظی رسمی',
    },
    {
      pashto: 'تشریف راوړئ',
      farsi: 'بفرمایید (دعوت)',
      pronunciation: 'tashríf rāwṛey',
      usage: 'دعوت کردن رسمی',
    },
  ],

  // سلام‌های غیررسمی
  informal: [
    {
      pashto: 'سلام',
      farsi: 'سلام',
      pronunciation: 'salām',
      usage: 'برای دوستان و همسالان',
    },
    {
      pashto: 'ستړی مه شې',
      farsi: 'خسته نباشی',
      pronunciation: 'staṛáy ma she',
      response: 'ته هم ستړی مه شې',
      responsePronunciation: 'ta ham staṛáy ma she',
      usage: 'برای دوستان و کوچکترها',
    },
    {
      pashto: 'څنګه یې؟',
      farsi: 'چطوری؟',
      pronunciation: 'tsanga ye?',
      response: 'ښه یم، ته څنګه یې؟',
      responsePronunciation: 'ṣ̌a yam, ta tsanga ye?',
      usage: 'احوالپرسی دوستانه',
    },
    {
      pashto: 'څه حال دی؟',
      farsi: 'چه حالی؟',
      pronunciation: 'tsa hāl day?',
      usage: 'احوالپرسی خودمانی',
    },
    {
      pashto: 'ښه یې؟',
      farsi: 'خوبی؟',
      pronunciation: 'ṣ̌a ye?',
      usage: 'سوال کوتاه',
    },
    {
      pashto: 'بیا وینو',
      farsi: 'بعداً می‌بینمت',
      pronunciation: 'byā wino',
      usage: 'خداحافظی دوستانه',
    },
  ],


  // مقایسه رسمی و غیررسمی
  comparison: [
    {
      context: 'سلام کردن',
      formal: { pashto: 'سلام علیکم', farsi: 'سلام علیکم' },
      informal: { pashto: 'سلام', farsi: 'سلام' },
    },
    {
      context: 'خسته نباشی',
      formal: { pashto: 'ستړی مه شئ', farsi: 'خسته نباشید' },
      informal: { pashto: 'ستړی مه شې', farsi: 'خسته نباشی' },
    },
    {
      context: 'چطوری؟',
      formal: { pashto: 'حال مو څنګه دی؟', farsi: 'حالتان چطور است؟' },
      informal: { pashto: 'څنګه یې؟', farsi: 'چطوری؟' },
    },
    {
      context: 'خوبم',
      formal: { pashto: 'الحمدلله ښه یم', farsi: 'الحمدلله خوبم' },
      informal: { pashto: 'ښه یم', farsi: 'خوبم' },
    },
    {
      context: 'خداحافظ',
      formal: { pashto: 'خدای پامان', farsi: 'خداحافظ' },
      informal: { pashto: 'بیا وینو', farsi: 'بعداً می‌بینمت' },
    },
    {
      context: 'بفرمایید',
      formal: { pashto: 'تشریف راوړئ', farsi: 'بفرمایید' },
      informal: { pashto: 'راشه', farsi: 'بیا' },
    },
  ],

  // احوالپرسی
  howAreYou: [
    {
      pashto: 'څنګه یې؟',
      farsi: 'چطوری؟',
      pronunciation: 'tsanga ye?',
      type: 'غیررسمی',
    },
    {
      pashto: 'څنګه یاست؟',
      farsi: 'چطور هستید؟',
      pronunciation: 'tsanga yāst?',
      type: 'رسمی',
    },
    {
      pashto: 'حال مو څنګه دی؟',
      farsi: 'حالتان چطور است؟',
      pronunciation: 'hāl mo tsanga day?',
      type: 'رسمی',
    },
    {
      pashto: 'روغ جوړ یې؟',
      farsi: 'سالم هستی؟',
      pronunciation: 'rogh joṛ ye?',
      type: 'غیررسمی',
    },
    {
      pashto: 'کورنۍ څنګه ده؟',
      farsi: 'خانواده چطور است؟',
      pronunciation: 'koranəy tsanga da?',
      type: 'هر دو',
    },
    {
      pashto: 'ماشومان ښه دي؟',
      farsi: 'بچه‌ها خوبند؟',
      pronunciation: 'māshomān ṣ̌a di?',
      type: 'هر دو',
    },
  ],

  // پاسخ‌ها
  responses: [
    {
      pashto: 'ښه یم، مننه',
      farsi: 'خوبم، ممنون',
      pronunciation: 'ṣ̌a yam, manána',
      type: 'غیررسمی',
    },
    {
      pashto: 'الحمدلله ښه یم',
      farsi: 'الحمدلله خوبم',
      pronunciation: 'alhamdulillāh ṣ̌a yam',
      type: 'رسمی',
    },
    {
      pashto: 'ډېر ښه یم',
      farsi: 'خیلی خوبم',
      pronunciation: 'ḍer ṣ̌a yam',
      type: 'غیررسمی',
    },
    {
      pashto: 'ته څنګه یې؟',
      farsi: 'تو چطوری؟',
      pronunciation: 'ta tsanga ye?',
      type: 'غیررسمی',
    },
    {
      pashto: 'تاسو څنګه یاست؟',
      farsi: 'شما چطور هستید؟',
      pronunciation: 'tāso tsanga yāst?',
      type: 'رسمی',
    },
    {
      pashto: 'ټول ښه دي، الحمدلله',
      farsi: 'همه خوبند، الحمدلله',
      pronunciation: 'ṭol ṣ̌a di, alhamdulillāh',
      type: 'هر دو',
    },
  ],

  // سلام بر اساس وقت روز
  timeOfDay: [
    {
      pashto: 'سهار مو په خیر',
      farsi: 'صبح بخیر',
      pronunciation: 'sahār mo pa khayr',
      type: 'رسمی',
    },
    {
      pashto: 'سهار دې په خیر',
      farsi: 'صبحت بخیر',
      pronunciation: 'sahār de pa khayr',
      type: 'غیررسمی',
    },
    {
      pashto: 'ماښام مو په خیر',
      farsi: 'عصر بخیر',
      pronunciation: 'māṣ̌ām mo pa khayr',
      type: 'رسمی',
    },
    {
      pashto: 'شپه مو په خیر',
      farsi: 'شب بخیر',
      pronunciation: 'shpa mo pa khayr',
      type: 'رسمی',
    },
    {
      pashto: 'شپه دې په خیر',
      farsi: 'شبت بخیر',
      pronunciation: 'shpa de pa khayr',
      type: 'غیررسمی',
    },
  ],

  // تشکر و عذرخواهی
  thanksAndApology: [
    {
      pashto: 'مننه',
      farsi: 'ممنون',
      pronunciation: 'manána',
      type: 'غیررسمی',
    },
    {
      pashto: 'ډېره مننه',
      farsi: 'خیلی ممنون',
      pronunciation: 'ḍera manána',
      type: 'هر دو',
    },
    {
      pashto: 'ستاسو مننه',
      farsi: 'از شما ممنون',
      pronunciation: 'stāso manána',
      type: 'رسمی',
    },
    {
      pashto: 'هیڅ نه',
      farsi: 'خواهش می‌کنم',
      pronunciation: 'hits na',
      type: 'غیررسمی',
    },
    {
      pashto: 'بخښنه غواړم',
      farsi: 'ببخشید',
      pronunciation: 'bakhṣ̌əna ghwāṛam',
      type: 'رسمی',
    },
    {
      pashto: 'بخښه',
      farsi: 'ببخش',
      pronunciation: 'bakhṣ̌a',
      type: 'غیررسمی',
    },
    {
      pashto: 'معذرت غواړم',
      farsi: 'معذرت می‌خواهم',
      pronunciation: 'ma\'zarat ghwāṛam',
      type: 'رسمی',
    },
  ],

  // خوش‌آمدگویی
  welcome: [
    {
      pashto: 'په خیر راغلاست',
      farsi: 'خوش آمدید',
      pronunciation: 'pa khayr rāghlāst',
      type: 'رسمی',
    },
    {
      pashto: 'په خیر راغلې',
      farsi: 'خوش آمدی',
      pronunciation: 'pa khayr rāghle',
      type: 'غیررسمی',
    },
    {
      pashto: 'تشریف راوړئ',
      farsi: 'بفرمایید',
      pronunciation: 'tashríf rāwṛey',
      type: 'رسمی',
    },
    {
      pashto: 'راشه',
      farsi: 'بیا',
      pronunciation: 'rāsha',
      type: 'غیررسمی',
    },
    {
      pashto: 'کور دې آباد',
      farsi: 'خانه‌ات آباد',
      pronunciation: 'kor de ābād',
      type: 'غیررسمی',
    },
    {
      pashto: 'کور مو آباد',
      farsi: 'خانه‌تان آباد',
      pronunciation: 'kor mo ābād',
      type: 'رسمی',
    },
  ],

  // مکالمه نمونه
  sampleConversation: [
    { speaker: 'A', pashto: 'سلام علیکم!', farsi: 'سلام علیکم!' },
    { speaker: 'B', pashto: 'و علیکم السلام! ستړی مه شې', farsi: 'و علیکم السلام! خسته نباشی' },
    { speaker: 'A', pashto: 'ته هم ستړی مه شې. څنګه یې؟', farsi: 'تو هم خسته نباشی. چطوری؟' },
    { speaker: 'B', pashto: 'الحمدلله ښه یم. ته څنګه یې؟', farsi: 'الحمدلله خوبم. تو چطوری؟' },
    { speaker: 'A', pashto: 'زه هم ښه یم، مننه. کورنۍ ښه ده؟', farsi: 'من هم خوبم، ممنون. خانواده خوب است؟' },
    { speaker: 'B', pashto: 'ټول ښه دي، الحمدلله. ستاسو کورنۍ؟', farsi: 'همه خوبند، الحمدلله. خانواده شما؟' },
    { speaker: 'A', pashto: 'هغوی هم ښه دي. خو اوس باید لاړ شم', farsi: 'آنها هم خوبند. ولی حالا باید بروم' },
    { speaker: 'B', pashto: 'ښه، خدای پامان!', farsi: 'خوب، خداحافظ!' },
    { speaker: 'A', pashto: 'په مخه دې ښه، بیا وینو!', farsi: 'به سلامت، بعداً می‌بینمت!' },
  ],

  // نکته فرهنگی
  culturalNote: {
    pashto: 'په پښتو کې «ستړی مه شې» یو ډېر مهم سلام دی. دا د درناوي او مینې نښه ده. کله چې یو څوک کار کوي یا له سفره راځي، پښتانه ورته وایي «ستړی مه شې». جواب یې «ته هم ستړی مه شې» یا «مننه» دی.',
    farsi: 'در پښتو «ستړی مه شې» (خسته نباشی) یک سلام بسیار مهم است. این نشانه احترام و محبت است. وقتی کسی کار می‌کند یا از سفر برمی‌گردد، پښتون‌ها به او می‌گویند «ستړی مه شې». جواب آن «ته هم ستړی مه شې» (تو هم خسته نباشی) یا «مننه» (ممنون) است.',
  },
};

export default greetings;
