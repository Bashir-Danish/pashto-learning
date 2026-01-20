// گردان فعل‌های پښتو - Pashto Verb Conjugations
// شامل همه زمان‌ها و اشکال رسمی/غیررسمی

export const verbConjugations = {
  // فعل بودن - To Be
  'to-be': {
    id: 'to-be',
    infinitive: 'اوسېدل',
    infinitiveFarsi: 'بودن',
    root: 'یم/دی',
    type: 'irregular',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'یم', farsi: 'هستم', pronunciation: 'yam' },
          { pronoun: 'ته', pashto: 'یې', farsi: 'هستی', pronunciation: 'ye' },
          { pronoun: 'هغه (م)', pashto: 'دی', farsi: 'است', pronunciation: 'day' },
          { pronoun: 'هغه (ز)', pashto: 'ده', farsi: 'است', pronunciation: 'da' },
          { pronoun: 'موږ', pashto: 'یو', farsi: 'هستیم', pronunciation: 'yu' },
          { pronoun: 'تاسو', pashto: 'یاست', farsi: 'هستید', pronunciation: 'yāst' },
          { pronoun: 'هغوی', pashto: 'دي', farsi: 'هستند', pronunciation: 'di' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'وم', farsi: 'بودم', pronunciation: 'wam' },
          { pronoun: 'ته', pashto: 'وې', farsi: 'بودی', pronunciation: 'we' },
          { pronoun: 'هغه (م)', pashto: 'و', farsi: 'بود', pronunciation: 'wu' },
          { pronoun: 'هغه (ز)', pashto: 'وه', farsi: 'بود', pronunciation: 'wa' },
          { pronoun: 'موږ', pashto: 'وو', farsi: 'بودیم', pronunciation: 'wu' },
          { pronoun: 'تاسو', pashto: 'وئ', farsi: 'بودید', pronunciation: 'wey' },
          { pronoun: 'هغوی', pashto: 'ول', farsi: 'بودند', pronunciation: 'wal' },
        ],
      },
    },
    examples: [
      { pashto: 'زه ښه یم', farsi: 'من خوبم' },
      { pashto: 'هغه داکتر دی', farsi: 'او داکتر است' },
      { pashto: 'زه پرون کور کې وم', farsi: 'من دیروز در خانه بودم' },
    ],
  },

  // فعل رفتن - To Go
  'to-go': {
    id: 'to-go',
    infinitive: 'تلل',
    infinitiveFarsi: 'رفتن',
    root: 'ځ',
    pastRoot: 'لاړ',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ځم', farsi: 'می‌روم', pronunciation: 'dzam' },
          { pronoun: 'ته', pashto: 'ځې', farsi: 'می‌روی', pronunciation: 'dze' },
          { pronoun: 'هغه', pashto: 'ځي', farsi: 'می‌رود', pronunciation: 'dzi' },
          { pronoun: 'موږ', pashto: 'ځو', farsi: 'می‌رویم', pronunciation: 'dzu' },
          { pronoun: 'تاسو', pashto: 'ځئ', farsi: 'می‌روید', pronunciation: 'dzey' },
          { pronoun: 'هغوی', pashto: 'ځي', farsi: 'می‌روند', pronunciation: 'dzi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'لاړم', farsi: 'رفتم', pronunciation: 'lāṛam' },
          { pronoun: 'ته', pashto: 'لاړې', farsi: 'رفتی', pronunciation: 'lāṛe' },
          { pronoun: 'هغه (م)', pashto: 'لاړ', farsi: 'رفت', pronunciation: 'lāṛ' },
          { pronoun: 'هغه (ز)', pashto: 'لاړه', farsi: 'رفت', pronunciation: 'lāṛa' },
          { pronoun: 'موږ', pashto: 'لاړو', farsi: 'رفتیم', pronunciation: 'lāṛu' },
          { pronoun: 'تاسو', pashto: 'لاړئ', farsi: 'رفتید', pronunciation: 'lāṛey' },
          { pronoun: 'هغوی', pashto: 'لاړل', farsi: 'رفتند', pronunciation: 'lāṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به ځم', farsi: 'خواهم رفت', pronunciation: 'ba dzam' },
          { pronoun: 'ته', pashto: 'به ځې', farsi: 'خواهی رفت', pronunciation: 'ba dze' },
          { pronoun: 'هغه', pashto: 'به ځي', farsi: 'خواهد رفت', pronunciation: 'ba dzi' },
          { pronoun: 'موږ', pashto: 'به ځو', farsi: 'خواهیم رفت', pronunciation: 'ba dzu' },
          { pronoun: 'تاسو', pashto: 'به ځئ', farsi: 'خواهید رفت', pronunciation: 'ba dzey' },
          { pronoun: 'هغوی', pashto: 'به ځي', farsi: 'خواهند رفت', pronunciation: 'ba dzi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'لاړ شه', farsi: 'برو', pronunciation: 'lāṛ sha' },
          { pronoun: 'تاسو', pashto: 'لاړ شئ', farsi: 'بروید', pronunciation: 'lāṛ shey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه ځه', farsi: 'نرو', pronunciation: 'ma dza' },
          { pronoun: 'تاسو', pashto: 'مه ځئ', farsi: 'نروید', pronunciation: 'ma dzey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه کور ته ځم', farsi: 'من به خانه می‌روم' },
      { pashto: 'هغه پرون بازار ته لاړ', farsi: 'او دیروز به بازار رفت' },
      { pashto: 'زه به سبا کابل ته ځم', farsi: 'من فردا به کابل خواهم رفت' },
    ],
  },


  // فعل آمدن - To Come
  'to-come': {
    id: 'to-come',
    infinitive: 'راتلل',
    infinitiveFarsi: 'آمدن',
    root: 'راځ',
    pastRoot: 'راغل',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'راځم', farsi: 'می‌آیم', pronunciation: 'rādzam' },
          { pronoun: 'ته', pashto: 'راځې', farsi: 'می‌آیی', pronunciation: 'rādze' },
          { pronoun: 'هغه', pashto: 'راځي', farsi: 'می‌آید', pronunciation: 'rādzi' },
          { pronoun: 'موږ', pashto: 'راځو', farsi: 'می‌آییم', pronunciation: 'rādzu' },
          { pronoun: 'تاسو', pashto: 'راځئ', farsi: 'می‌آیید', pronunciation: 'rādzey' },
          { pronoun: 'هغوی', pashto: 'راځي', farsi: 'می‌آیند', pronunciation: 'rādzi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'راغلم', farsi: 'آمدم', pronunciation: 'rāghlam' },
          { pronoun: 'ته', pashto: 'راغلې', farsi: 'آمدی', pronunciation: 'rāghle' },
          { pronoun: 'هغه (م)', pashto: 'راغی', farsi: 'آمد', pronunciation: 'rāghay' },
          { pronoun: 'هغه (ز)', pashto: 'راغله', farsi: 'آمد', pronunciation: 'rāghla' },
          { pronoun: 'موږ', pashto: 'راغلو', farsi: 'آمدیم', pronunciation: 'rāghlu' },
          { pronoun: 'تاسو', pashto: 'راغلئ', farsi: 'آمدید', pronunciation: 'rāghley' },
          { pronoun: 'هغوی', pashto: 'راغلل', farsi: 'آمدند', pronunciation: 'rāghlal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به راځم', farsi: 'خواهم آمد', pronunciation: 'ba rādzam' },
          { pronoun: 'ته', pashto: 'به راځې', farsi: 'خواهی آمد', pronunciation: 'ba rādze' },
          { pronoun: 'هغه', pashto: 'به راځي', farsi: 'خواهد آمد', pronunciation: 'ba rādzi' },
          { pronoun: 'موږ', pashto: 'به راځو', farsi: 'خواهیم آمد', pronunciation: 'ba rādzu' },
          { pronoun: 'تاسو', pashto: 'به راځئ', farsi: 'خواهید آمد', pronunciation: 'ba rādzey' },
          { pronoun: 'هغوی', pashto: 'به راځي', farsi: 'خواهند آمد', pronunciation: 'ba rādzi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'راشه', farsi: 'بیا', pronunciation: 'rāsha' },
          { pronoun: 'تاسو', pashto: 'راشئ', farsi: 'بیایید', pronunciation: 'rāshey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه راځه', farsi: 'نیا', pronunciation: 'ma rādza' },
          { pronoun: 'تاسو', pashto: 'مه راځئ', farsi: 'نیایید', pronunciation: 'ma rādzey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه اوس راځم', farsi: 'من الان می‌آیم' },
      { pashto: 'هغه پرون راغی', farsi: 'او دیروز آمد' },
      { pashto: 'راشه!', farsi: 'بیا!' },
    ],
  },

  // فعل خوردن - To Eat
  'to-eat': {
    id: 'to-eat',
    infinitive: 'خوړل',
    infinitiveFarsi: 'خوردن',
    root: 'خور',
    pastRoot: 'وخوړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'خورم', farsi: 'می‌خورم', pronunciation: 'khoram' },
          { pronoun: 'ته', pashto: 'خورې', farsi: 'می‌خوری', pronunciation: 'khore' },
          { pronoun: 'هغه', pashto: 'خوري', farsi: 'می‌خورد', pronunciation: 'khori' },
          { pronoun: 'موږ', pashto: 'خورو', farsi: 'می‌خوریم', pronunciation: 'khoru' },
          { pronoun: 'تاسو', pashto: 'خورئ', farsi: 'می‌خورید', pronunciation: 'khorey' },
          { pronoun: 'هغوی', pashto: 'خوري', farsi: 'می‌خورند', pronunciation: 'khori' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        note: 'فعل متعدی - با مفعول مطابقت می‌کند',
        conjugations: [
          { pronoun: 'ما', pashto: 'وخوړ', farsi: 'خوردم (مذکر)', pronunciation: 'wakhoṛ' },
          { pronoun: 'ما', pashto: 'وخوړه', farsi: 'خوردم (مونث)', pronunciation: 'wakhoṛa' },
          { pronoun: 'تا', pashto: 'وخوړ', farsi: 'خوردی', pronunciation: 'wakhoṛ' },
          { pronoun: 'هغه', pashto: 'وخوړ', farsi: 'خورد', pronunciation: 'wakhoṛ' },
          { pronoun: 'موږ', pashto: 'وخوړل', farsi: 'خوردیم', pronunciation: 'wakhoṛal' },
          { pronoun: 'تاسو', pashto: 'وخوړل', farsi: 'خوردید', pronunciation: 'wakhoṛal' },
          { pronoun: 'هغوی', pashto: 'وخوړل', farsi: 'خوردند', pronunciation: 'wakhoṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به خورم', farsi: 'خواهم خورد', pronunciation: 'ba khoram' },
          { pronoun: 'ته', pashto: 'به خورې', farsi: 'خواهی خورد', pronunciation: 'ba khore' },
          { pronoun: 'هغه', pashto: 'به خوري', farsi: 'خواهد خورد', pronunciation: 'ba khori' },
          { pronoun: 'موږ', pashto: 'به خورو', farsi: 'خواهیم خورد', pronunciation: 'ba khoru' },
          { pronoun: 'تاسو', pashto: 'به خورئ', farsi: 'خواهید خورد', pronunciation: 'ba khorey' },
          { pronoun: 'هغوی', pashto: 'به خوري', farsi: 'خواهند خورد', pronunciation: 'ba khori' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'وخوره', farsi: 'بخور', pronunciation: 'wakhora' },
          { pronoun: 'تاسو', pashto: 'وخورئ', farsi: 'بخورید', pronunciation: 'wakhorey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه خوره', farsi: 'نخور', pronunciation: 'ma khora' },
          { pronoun: 'تاسو', pashto: 'مه خورئ', farsi: 'نخورید', pronunciation: 'ma khorey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه ډوډۍ خورم', farsi: 'من غذا می‌خورم' },
      { pashto: 'ما ډوډۍ وخوړه', farsi: 'من غذا خوردم' },
      { pashto: 'وخوره!', farsi: 'بخور!' },
    ],
  },

  // فعل نوشیدن - To Drink
  'to-drink': {
    id: 'to-drink',
    infinitive: 'څښل',
    infinitiveFarsi: 'نوشیدن',
    root: 'څښ',
    pastRoot: 'وڅښ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'څښم', farsi: 'می‌نوشم', pronunciation: 'tsṣ̌am' },
          { pronoun: 'ته', pashto: 'څښې', farsi: 'می‌نوشی', pronunciation: 'tsṣ̌e' },
          { pronoun: 'هغه', pashto: 'څښي', farsi: 'می‌نوشد', pronunciation: 'tsṣ̌i' },
          { pronoun: 'موږ', pashto: 'څښو', farsi: 'می‌نوشیم', pronunciation: 'tsṣ̌u' },
          { pronoun: 'تاسو', pashto: 'څښئ', farsi: 'می‌نوشید', pronunciation: 'tsṣ̌ey' },
          { pronoun: 'هغوی', pashto: 'څښي', farsi: 'می‌نوشند', pronunciation: 'tsṣ̌i' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'وڅښه', farsi: 'نوشیدم', pronunciation: 'watsṣ̌a' },
          { pronoun: 'تا', pashto: 'وڅښه', farsi: 'نوشیدی', pronunciation: 'watsṣ̌a' },
          { pronoun: 'هغه', pashto: 'وڅښه', farsi: 'نوشید', pronunciation: 'watsṣ̌a' },
          { pronoun: 'موږ', pashto: 'وڅښل', farsi: 'نوشیدیم', pronunciation: 'watsṣ̌al' },
          { pronoun: 'تاسو', pashto: 'وڅښل', farsi: 'نوشیدید', pronunciation: 'watsṣ̌al' },
          { pronoun: 'هغوی', pashto: 'وڅښل', farsi: 'نوشیدند', pronunciation: 'watsṣ̌al' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به څښم', farsi: 'خواهم نوشید', pronunciation: 'ba tsṣ̌am' },
          { pronoun: 'ته', pashto: 'به څښې', farsi: 'خواهی نوشید', pronunciation: 'ba tsṣ̌e' },
          { pronoun: 'هغه', pashto: 'به څښي', farsi: 'خواهد نوشید', pronunciation: 'ba tsṣ̌i' },
          { pronoun: 'موږ', pashto: 'به څښو', farsi: 'خواهیم نوشید', pronunciation: 'ba tsṣ̌u' },
          { pronoun: 'تاسو', pashto: 'به څښئ', farsi: 'خواهید نوشید', pronunciation: 'ba tsṣ̌ey' },
          { pronoun: 'هغوی', pashto: 'به څښي', farsi: 'خواهند نوشید', pronunciation: 'ba tsṣ̌i' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'وڅښه', farsi: 'بنوش', pronunciation: 'watsṣ̌a' },
          { pronoun: 'تاسو', pashto: 'وڅښئ', farsi: 'بنوشید', pronunciation: 'watsṣ̌ey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه څښه', farsi: 'ننوش', pronunciation: 'ma tsṣ̌a' },
          { pronoun: 'تاسو', pashto: 'مه څښئ', farsi: 'ننوشید', pronunciation: 'ma tsṣ̌ey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه چای څښم', farsi: 'من چای می‌نوشم' },
      { pashto: 'ما اوبه وڅښلې', farsi: 'من آب نوشیدم' },
    ],
  },


  // فعل کردن - To Do
  'to-do': {
    id: 'to-do',
    infinitive: 'کول',
    infinitiveFarsi: 'کردن',
    root: 'کو',
    pastRoot: 'وکړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'کوم', farsi: 'می‌کنم', pronunciation: 'kawam' },
          { pronoun: 'ته', pashto: 'کوې', farsi: 'می‌کنی', pronunciation: 'kawe' },
          { pronoun: 'هغه', pashto: 'کوي', farsi: 'می‌کند', pronunciation: 'kawi' },
          { pronoun: 'موږ', pashto: 'کوو', farsi: 'می‌کنیم', pronunciation: 'kawu' },
          { pronoun: 'تاسو', pashto: 'کوئ', farsi: 'می‌کنید', pronunciation: 'kawey' },
          { pronoun: 'هغوی', pashto: 'کوي', farsi: 'می‌کنند', pronunciation: 'kawi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'وکړ', farsi: 'کردم (مذکر)', pronunciation: 'wakṛ' },
          { pronoun: 'ما', pashto: 'وکړه', farsi: 'کردم (مونث)', pronunciation: 'wakṛa' },
          { pronoun: 'تا', pashto: 'وکړ', farsi: 'کردی', pronunciation: 'wakṛ' },
          { pronoun: 'هغه', pashto: 'وکړ', farsi: 'کرد', pronunciation: 'wakṛ' },
          { pronoun: 'موږ', pashto: 'وکړل', farsi: 'کردیم', pronunciation: 'wakṛal' },
          { pronoun: 'تاسو', pashto: 'وکړل', farsi: 'کردید', pronunciation: 'wakṛal' },
          { pronoun: 'هغوی', pashto: 'وکړل', farsi: 'کردند', pronunciation: 'wakṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به کوم', farsi: 'خواهم کرد', pronunciation: 'ba kawam' },
          { pronoun: 'ته', pashto: 'به کوې', farsi: 'خواهی کرد', pronunciation: 'ba kawe' },
          { pronoun: 'هغه', pashto: 'به کوي', farsi: 'خواهد کرد', pronunciation: 'ba kawi' },
          { pronoun: 'موږ', pashto: 'به کوو', farsi: 'خواهیم کرد', pronunciation: 'ba kawu' },
          { pronoun: 'تاسو', pashto: 'به کوئ', farsi: 'خواهید کرد', pronunciation: 'ba kawey' },
          { pronoun: 'هغوی', pashto: 'به کوي', farsi: 'خواهند کرد', pronunciation: 'ba kawi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'وکړه', farsi: 'بکن', pronunciation: 'wakṛa' },
          { pronoun: 'تاسو', pashto: 'وکړئ', farsi: 'بکنید', pronunciation: 'wakṛey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه کوه', farsi: 'نکن', pronunciation: 'ma kawa' },
          { pronoun: 'تاسو', pashto: 'مه کوئ', farsi: 'نکنید', pronunciation: 'ma kawey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه کار کوم', farsi: 'من کار می‌کنم' },
      { pashto: 'ما کار وکړ', farsi: 'من کار کردم' },
    ],
  },

  // فعل خواستن - To Want
  'to-want': {
    id: 'to-want',
    infinitive: 'غوښتل',
    infinitiveFarsi: 'خواستن',
    root: 'غواړ',
    pastRoot: 'وغوښت',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'غواړم', farsi: 'می‌خواهم', pronunciation: 'ghwāṛam' },
          { pronoun: 'ته', pashto: 'غواړې', farsi: 'می‌خواهی', pronunciation: 'ghwāṛe' },
          { pronoun: 'هغه', pashto: 'غواړي', farsi: 'می‌خواهد', pronunciation: 'ghwāṛi' },
          { pronoun: 'موږ', pashto: 'غواړو', farsi: 'می‌خواهیم', pronunciation: 'ghwāṛu' },
          { pronoun: 'تاسو', pashto: 'غواړئ', farsi: 'می‌خواهید', pronunciation: 'ghwāṛey' },
          { pronoun: 'هغوی', pashto: 'غواړي', farsi: 'می‌خواهند', pronunciation: 'ghwāṛi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'وغوښتل', farsi: 'خواستم', pronunciation: 'waghwuṣ̌tal' },
          { pronoun: 'تا', pashto: 'وغوښتل', farsi: 'خواستی', pronunciation: 'waghwuṣ̌tal' },
          { pronoun: 'هغه', pashto: 'وغوښتل', farsi: 'خواست', pronunciation: 'waghwuṣ̌tal' },
          { pronoun: 'موږ', pashto: 'وغوښتل', farsi: 'خواستیم', pronunciation: 'waghwuṣ̌tal' },
          { pronoun: 'تاسو', pashto: 'وغوښتل', farsi: 'خواستید', pronunciation: 'waghwuṣ̌tal' },
          { pronoun: 'هغوی', pashto: 'وغوښتل', farsi: 'خواستند', pronunciation: 'waghwuṣ̌tal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به غواړم', farsi: 'خواهم خواست', pronunciation: 'ba ghwāṛam' },
          { pronoun: 'ته', pashto: 'به غواړې', farsi: 'خواهی خواست', pronunciation: 'ba ghwāṛe' },
          { pronoun: 'هغه', pashto: 'به غواړي', farsi: 'خواهد خواست', pronunciation: 'ba ghwāṛi' },
          { pronoun: 'موږ', pashto: 'به غواړو', farsi: 'خواهیم خواست', pronunciation: 'ba ghwāṛu' },
          { pronoun: 'تاسو', pashto: 'به غواړئ', farsi: 'خواهید خواست', pronunciation: 'ba ghwāṛey' },
          { pronoun: 'هغوی', pashto: 'به غواړي', farsi: 'خواهند خواست', pronunciation: 'ba ghwāṛi' },
        ],
      },
    },
    examples: [
      { pashto: 'زه چای غواړم', farsi: 'من چای می‌خواهم' },
      { pashto: 'ته څه غواړې؟', farsi: 'تو چه می‌خواهی؟' },
    ],
  },

  // فعل دیدن - To See
  'to-see': {
    id: 'to-see',
    infinitive: 'لیدل',
    infinitiveFarsi: 'دیدن',
    root: 'وین',
    pastRoot: 'ولید',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'وینم', farsi: 'می‌بینم', pronunciation: 'winam' },
          { pronoun: 'ته', pashto: 'وینې', farsi: 'می‌بینی', pronunciation: 'wine' },
          { pronoun: 'هغه', pashto: 'ویني', farsi: 'می‌بیند', pronunciation: 'wini' },
          { pronoun: 'موږ', pashto: 'وینو', farsi: 'می‌بینیم', pronunciation: 'winu' },
          { pronoun: 'تاسو', pashto: 'وینئ', farsi: 'می‌بینید', pronunciation: 'winey' },
          { pronoun: 'هغوی', pashto: 'ویني', farsi: 'می‌بینند', pronunciation: 'wini' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'ولید', farsi: 'دیدم (مذکر)', pronunciation: 'walid' },
          { pronoun: 'ما', pashto: 'ولیده', farsi: 'دیدم (مونث)', pronunciation: 'walida' },
          { pronoun: 'تا', pashto: 'ولید', farsi: 'دیدی', pronunciation: 'walid' },
          { pronoun: 'هغه', pashto: 'ولید', farsi: 'دید', pronunciation: 'walid' },
          { pronoun: 'موږ', pashto: 'ولیدل', farsi: 'دیدیم', pronunciation: 'walidal' },
          { pronoun: 'تاسو', pashto: 'ولیدل', farsi: 'دیدید', pronunciation: 'walidal' },
          { pronoun: 'هغوی', pashto: 'ولیدل', farsi: 'دیدند', pronunciation: 'walidal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به وینم', farsi: 'خواهم دید', pronunciation: 'ba winam' },
          { pronoun: 'ته', pashto: 'به وینې', farsi: 'خواهی دید', pronunciation: 'ba wine' },
          { pronoun: 'هغه', pashto: 'به ویني', farsi: 'خواهد دید', pronunciation: 'ba wini' },
          { pronoun: 'موږ', pashto: 'به وینو', farsi: 'خواهیم دید', pronunciation: 'ba winu' },
          { pronoun: 'تاسو', pashto: 'به وینئ', farsi: 'خواهید دید', pronunciation: 'ba winey' },
          { pronoun: 'هغوی', pashto: 'به ویني', farsi: 'خواهند دید', pronunciation: 'ba wini' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'وګوره', farsi: 'ببین', pronunciation: 'wgora' },
          { pronoun: 'تاسو', pashto: 'وګورئ', farsi: 'ببینید', pronunciation: 'wgorey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه ګوره', farsi: 'نبین', pronunciation: 'ma gora' },
          { pronoun: 'تاسو', pashto: 'مه ګورئ', farsi: 'نبینید', pronunciation: 'ma gorey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه تا وینم', farsi: 'من تو را می‌بینم' },
      { pashto: 'ما هغه ولید', farsi: 'من او را دیدم' },
      { pashto: 'بیا وینو!', farsi: 'باز می‌بینیم!' },
    ],
  },

  // فعل گفتن - To Say
  'to-say': {
    id: 'to-say',
    infinitive: 'ویل',
    infinitiveFarsi: 'گفتن',
    root: 'وای',
    pastRoot: 'وویل',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'وایم', farsi: 'می‌گویم', pronunciation: 'wāyam' },
          { pronoun: 'ته', pashto: 'وایې', farsi: 'می‌گویی', pronunciation: 'wāye' },
          { pronoun: 'هغه', pashto: 'وایي', farsi: 'می‌گوید', pronunciation: 'wāyi' },
          { pronoun: 'موږ', pashto: 'وایو', farsi: 'می‌گوییم', pronunciation: 'wāyu' },
          { pronoun: 'تاسو', pashto: 'وایئ', farsi: 'می‌گویید', pronunciation: 'wāyey' },
          { pronoun: 'هغوی', pashto: 'وایي', farsi: 'می‌گویند', pronunciation: 'wāyi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'وویل', farsi: 'گفتم', pronunciation: 'wawayal' },
          { pronoun: 'تا', pashto: 'وویل', farsi: 'گفتی', pronunciation: 'wawayal' },
          { pronoun: 'هغه', pashto: 'وویل', farsi: 'گفت', pronunciation: 'wawayal' },
          { pronoun: 'موږ', pashto: 'وویل', farsi: 'گفتیم', pronunciation: 'wawayal' },
          { pronoun: 'تاسو', pashto: 'وویل', farsi: 'گفتید', pronunciation: 'wawayal' },
          { pronoun: 'هغوی', pashto: 'وویل', farsi: 'گفتند', pronunciation: 'wawayal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به وایم', farsi: 'خواهم گفت', pronunciation: 'ba wāyam' },
          { pronoun: 'ته', pashto: 'به وایې', farsi: 'خواهی گفت', pronunciation: 'ba wāye' },
          { pronoun: 'هغه', pashto: 'به وایي', farsi: 'خواهد گفت', pronunciation: 'ba wāyi' },
          { pronoun: 'موږ', pashto: 'به وایو', farsi: 'خواهیم گفت', pronunciation: 'ba wāyu' },
          { pronoun: 'تاسو', pashto: 'به وایئ', farsi: 'خواهید گفت', pronunciation: 'ba wāyey' },
          { pronoun: 'هغوی', pashto: 'به وایي', farsi: 'خواهند گفت', pronunciation: 'ba wāyi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'ووایه', farsi: 'بگو', pronunciation: 'wawāya' },
          { pronoun: 'تاسو', pashto: 'ووایئ', farsi: 'بگویید', pronunciation: 'wawāyey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه وایه', farsi: 'نگو', pronunciation: 'ma wāya' },
          { pronoun: 'تاسو', pashto: 'مه وایئ', farsi: 'نگویید', pronunciation: 'ma wāyey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه رښتیا وایم', farsi: 'من راست می‌گویم' },
      { pashto: 'هغه څه وویل؟', farsi: 'او چه گفت؟' },
    ],
  },


  // فعل شنیدن - To Hear
  'to-hear': {
    id: 'to-hear',
    infinitive: 'اورېدل',
    infinitiveFarsi: 'شنیدن',
    root: 'اور',
    pastRoot: 'واورېد',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'اورم', farsi: 'می‌شنوم', pronunciation: 'awram' },
          { pronoun: 'ته', pashto: 'اورې', farsi: 'می‌شنوی', pronunciation: 'awre' },
          { pronoun: 'هغه', pashto: 'اوري', farsi: 'می‌شنود', pronunciation: 'awri' },
          { pronoun: 'موږ', pashto: 'اورو', farsi: 'می‌شنویم', pronunciation: 'awru' },
          { pronoun: 'تاسو', pashto: 'اورئ', farsi: 'می‌شنوید', pronunciation: 'awrey' },
          { pronoun: 'هغوی', pashto: 'اوري', farsi: 'می‌شنوند', pronunciation: 'awri' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'واورېدل', farsi: 'شنیدم', pronunciation: 'wāwredal' },
          { pronoun: 'تا', pashto: 'واورېدل', farsi: 'شنیدی', pronunciation: 'wāwredal' },
          { pronoun: 'هغه', pashto: 'واورېدل', farsi: 'شنید', pronunciation: 'wāwredal' },
          { pronoun: 'موږ', pashto: 'واورېدل', farsi: 'شنیدیم', pronunciation: 'wāwredal' },
          { pronoun: 'تاسو', pashto: 'واورېدل', farsi: 'شنیدید', pronunciation: 'wāwredal' },
          { pronoun: 'هغوی', pashto: 'واورېدل', farsi: 'شنیدند', pronunciation: 'wāwredal' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'واوره', farsi: 'بشنو', pronunciation: 'wāwra' },
          { pronoun: 'تاسو', pashto: 'واورئ', farsi: 'بشنوید', pronunciation: 'wāwrey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه اوره', farsi: 'نشنو', pronunciation: 'ma awra' },
          { pronoun: 'تاسو', pashto: 'مه اورئ', farsi: 'نشنوید', pronunciation: 'ma awrey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه غږ اورم', farsi: 'من صدا می‌شنوم' },
      { pashto: 'واوره!', farsi: 'بشنو!' },
    ],
  },


  // فعل نوشتن - To Write
  'to-write': {
    id: 'to-write',
    infinitive: 'لیکل',
    infinitiveFarsi: 'نوشتن',
    root: 'لیک',
    pastRoot: 'ولیک',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'لیکم', farsi: 'می‌نویسم', pronunciation: 'likam' },
          { pronoun: 'ته', pashto: 'لیکې', farsi: 'می‌نویسی', pronunciation: 'like' },
          { pronoun: 'هغه', pashto: 'لیکي', farsi: 'می‌نویسد', pronunciation: 'liki' },
          { pronoun: 'موږ', pashto: 'لیکو', farsi: 'می‌نویسیم', pronunciation: 'liku' },
          { pronoun: 'تاسو', pashto: 'لیکئ', farsi: 'می‌نویسید', pronunciation: 'likey' },
          { pronoun: 'هغوی', pashto: 'لیکي', farsi: 'می‌نویسند', pronunciation: 'liki' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'ولیکل', farsi: 'نوشتم', pronunciation: 'walikal' },
          { pronoun: 'تا', pashto: 'ولیکل', farsi: 'نوشتی', pronunciation: 'walikal' },
          { pronoun: 'هغه', pashto: 'ولیکل', farsi: 'نوشت', pronunciation: 'walikal' },
          { pronoun: 'موږ', pashto: 'ولیکل', farsi: 'نوشتیم', pronunciation: 'walikal' },
          { pronoun: 'تاسو', pashto: 'ولیکل', farsi: 'نوشتید', pronunciation: 'walikal' },
          { pronoun: 'هغوی', pashto: 'ولیکل', farsi: 'نوشتند', pronunciation: 'walikal' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'ولیکه', farsi: 'بنویس', pronunciation: 'walika' },
          { pronoun: 'تاسو', pashto: 'ولیکئ', farsi: 'بنویسید', pronunciation: 'walikey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه لیکه', farsi: 'ننویس', pronunciation: 'ma lika' },
          { pronoun: 'تاسو', pashto: 'مه لیکئ', farsi: 'ننویسید', pronunciation: 'ma likey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه لیک لیکم', farsi: 'من نامه می‌نویسم' },
      { pashto: 'ولیکه!', farsi: 'بنویس!' },
    ],
  },


  // فعل خواندن - To Read
  'to-read': {
    id: 'to-read',
    infinitive: 'لوستل',
    infinitiveFarsi: 'خواندن',
    root: 'لول',
    pastRoot: 'ولوست',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'لولم', farsi: 'می‌خوانم', pronunciation: 'lwalam' },
          { pronoun: 'ته', pashto: 'لولې', farsi: 'می‌خوانی', pronunciation: 'lwale' },
          { pronoun: 'هغه', pashto: 'لولي', farsi: 'می‌خواند', pronunciation: 'lwali' },
          { pronoun: 'موږ', pashto: 'لولو', farsi: 'می‌خوانیم', pronunciation: 'lwalu' },
          { pronoun: 'تاسو', pashto: 'لولئ', farsi: 'می‌خوانید', pronunciation: 'lwaley' },
          { pronoun: 'هغوی', pashto: 'لولي', farsi: 'می‌خوانند', pronunciation: 'lwali' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'ولوستل', farsi: 'خواندم', pronunciation: 'walwastal' },
          { pronoun: 'تا', pashto: 'ولوستل', farsi: 'خواندی', pronunciation: 'walwastal' },
          { pronoun: 'هغه', pashto: 'ولوستل', farsi: 'خواند', pronunciation: 'walwastal' },
          { pronoun: 'موږ', pashto: 'ولوستل', farsi: 'خواندیم', pronunciation: 'walwastal' },
          { pronoun: 'تاسو', pashto: 'ولوستل', farsi: 'خواندید', pronunciation: 'walwastal' },
          { pronoun: 'هغوی', pashto: 'ولوستل', farsi: 'خواندند', pronunciation: 'walwastal' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'ولوله', farsi: 'بخوان', pronunciation: 'walwala' },
          { pronoun: 'تاسو', pashto: 'ولولئ', farsi: 'بخوانید', pronunciation: 'walwaley' },
        ],
      },
    },
    examples: [
      { pashto: 'زه کتاب لولم', farsi: 'من کتاب می‌خوانم' },
      { pashto: 'ما کتاب ولوستل', farsi: 'من کتاب خواندم' },
    ],
  },


  // فعل داشتن - To Have
  'to-have': {
    id: 'to-have',
    infinitive: 'لرل',
    infinitiveFarsi: 'داشتن',
    root: 'لر',
    pastRoot: 'درلود',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'لرم', farsi: 'دارم', pronunciation: 'laram' },
          { pronoun: 'ته', pashto: 'لرې', farsi: 'داری', pronunciation: 'lare' },
          { pronoun: 'هغه', pashto: 'لري', farsi: 'دارد', pronunciation: 'lari' },
          { pronoun: 'موږ', pashto: 'لرو', farsi: 'داریم', pronunciation: 'laru' },
          { pronoun: 'تاسو', pashto: 'لرئ', farsi: 'دارید', pronunciation: 'larey' },
          { pronoun: 'هغوی', pashto: 'لري', farsi: 'دارند', pronunciation: 'lari' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'درلود', farsi: 'داشتم', pronunciation: 'darlod' },
          { pronoun: 'تا', pashto: 'درلودې', farsi: 'داشتی', pronunciation: 'darlode' },
          { pronoun: 'هغه', pashto: 'درلود', farsi: 'داشت', pronunciation: 'darlod' },
          { pronoun: 'موږ', pashto: 'درلودل', farsi: 'داشتیم', pronunciation: 'darlodal' },
          { pronoun: 'تاسو', pashto: 'درلودل', farsi: 'داشتید', pronunciation: 'darlodal' },
          { pronoun: 'هغوی', pashto: 'درلودل', farsi: 'داشتند', pronunciation: 'darlodal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به لرم', farsi: 'خواهم داشت', pronunciation: 'ba laram' },
          { pronoun: 'ته', pashto: 'به لرې', farsi: 'خواهی داشت', pronunciation: 'ba lare' },
          { pronoun: 'هغه', pashto: 'به لري', farsi: 'خواهد داشت', pronunciation: 'ba lari' },
          { pronoun: 'موږ', pashto: 'به لرو', farsi: 'خواهیم داشت', pronunciation: 'ba laru' },
          { pronoun: 'تاسو', pashto: 'به لرئ', farsi: 'خواهید داشت', pronunciation: 'ba larey' },
          { pronoun: 'هغوی', pashto: 'به لري', farsi: 'خواهند داشت', pronunciation: 'ba lari' },
        ],
      },
    },
    examples: [
      { pashto: 'زه یو کور لرم', farsi: 'من یک خانه دارم' },
      { pashto: 'هغه ډېر پیسې لري', farsi: 'او پول زیادی دارد' },
      { pashto: 'ما یو موټر درلود', farsi: 'من یک ماشین داشتم' },
    ],
  },


  // فعل دادن - To Give
  'to-give': {
    id: 'to-give',
    infinitive: 'ورکول',
    infinitiveFarsi: 'دادن',
    root: 'ورکو',
    pastRoot: 'ورکړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ورکوم', farsi: 'می‌دهم', pronunciation: 'warkawam' },
          { pronoun: 'ته', pashto: 'ورکوې', farsi: 'می‌دهی', pronunciation: 'warkawe' },
          { pronoun: 'هغه', pashto: 'ورکوي', farsi: 'می‌دهد', pronunciation: 'warkawi' },
          { pronoun: 'موږ', pashto: 'ورکوو', farsi: 'می‌دهیم', pronunciation: 'warkawu' },
          { pronoun: 'تاسو', pashto: 'ورکوئ', farsi: 'می‌دهید', pronunciation: 'warkawey' },
          { pronoun: 'هغوی', pashto: 'ورکوي', farsi: 'می‌دهند', pronunciation: 'warkawi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'ورکړ', farsi: 'دادم', pronunciation: 'warkṛ' },
          { pronoun: 'تا', pashto: 'ورکړ', farsi: 'دادی', pronunciation: 'warkṛ' },
          { pronoun: 'هغه', pashto: 'ورکړ', farsi: 'داد', pronunciation: 'warkṛ' },
          { pronoun: 'موږ', pashto: 'ورکړل', farsi: 'دادیم', pronunciation: 'warkṛal' },
          { pronoun: 'تاسو', pashto: 'ورکړل', farsi: 'دادید', pronunciation: 'warkṛal' },
          { pronoun: 'هغوی', pashto: 'ورکړل', farsi: 'دادند', pronunciation: 'warkṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به ورکوم', farsi: 'خواهم داد', pronunciation: 'ba warkawam' },
          { pronoun: 'ته', pashto: 'به ورکوې', farsi: 'خواهی داد', pronunciation: 'ba warkawe' },
          { pronoun: 'هغه', pashto: 'به ورکوي', farsi: 'خواهد داد', pronunciation: 'ba warkawi' },
          { pronoun: 'موږ', pashto: 'به ورکوو', farsi: 'خواهیم داد', pronunciation: 'ba warkawu' },
          { pronoun: 'تاسو', pashto: 'به ورکوئ', farsi: 'خواهید داد', pronunciation: 'ba warkawey' },
          { pronoun: 'هغوی', pashto: 'به ورکوي', farsi: 'خواهند داد', pronunciation: 'ba warkawi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'ورکړه', farsi: 'بده', pronunciation: 'warkṛa' },
          { pronoun: 'تاسو', pashto: 'ورکړئ', farsi: 'بدهید', pronunciation: 'warkṛey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه ورکوه', farsi: 'نده', pronunciation: 'ma warkawa' },
          { pronoun: 'تاسو', pashto: 'مه ورکوئ', farsi: 'ندهید', pronunciation: 'ma warkawey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه تا ته کتاب ورکوم', farsi: 'من به تو کتاب می‌دهم' },
      { pashto: 'ما هغه ته پیسې ورکړې', farsi: 'من به او پول دادم' },
      { pashto: 'ورکړه!', farsi: 'بده!' },
    ],
  },


  // فعل گرفتن - To Take/Get
  'to-take': {
    id: 'to-take',
    infinitive: 'اخیستل',
    infinitiveFarsi: 'گرفتن',
    root: 'اخل',
    pastRoot: 'واخیست',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'اخلم', farsi: 'می‌گیرم', pronunciation: 'akhlam' },
          { pronoun: 'ته', pashto: 'اخلې', farsi: 'می‌گیری', pronunciation: 'akhle' },
          { pronoun: 'هغه', pashto: 'اخلي', farsi: 'می‌گیرد', pronunciation: 'akhli' },
          { pronoun: 'موږ', pashto: 'اخلو', farsi: 'می‌گیریم', pronunciation: 'akhlu' },
          { pronoun: 'تاسو', pashto: 'اخلئ', farsi: 'می‌گیرید', pronunciation: 'akhley' },
          { pronoun: 'هغوی', pashto: 'اخلي', farsi: 'می‌گیرند', pronunciation: 'akhli' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'واخیستل', farsi: 'گرفتم', pronunciation: 'wākhīstal' },
          { pronoun: 'تا', pashto: 'واخیستل', farsi: 'گرفتی', pronunciation: 'wākhīstal' },
          { pronoun: 'هغه', pashto: 'واخیستل', farsi: 'گرفت', pronunciation: 'wākhīstal' },
          { pronoun: 'موږ', pashto: 'واخیستل', farsi: 'گرفتیم', pronunciation: 'wākhīstal' },
          { pronoun: 'تاسو', pashto: 'واخیستل', farsi: 'گرفتید', pronunciation: 'wākhīstal' },
          { pronoun: 'هغوی', pashto: 'واخیستل', farsi: 'گرفتند', pronunciation: 'wākhīstal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به اخلم', farsi: 'خواهم گرفت', pronunciation: 'ba akhlam' },
          { pronoun: 'ته', pashto: 'به اخلې', farsi: 'خواهی گرفت', pronunciation: 'ba akhle' },
          { pronoun: 'هغه', pashto: 'به اخلي', farsi: 'خواهد گرفت', pronunciation: 'ba akhli' },
          { pronoun: 'موږ', pashto: 'به اخلو', farsi: 'خواهیم گرفت', pronunciation: 'ba akhlu' },
          { pronoun: 'تاسو', pashto: 'به اخلئ', farsi: 'خواهید گرفت', pronunciation: 'ba akhley' },
          { pronoun: 'هغوی', pashto: 'به اخلي', farsi: 'خواهند گرفت', pronunciation: 'ba akhli' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'واخله', farsi: 'بگیر', pronunciation: 'wākhla' },
          { pronoun: 'تاسو', pashto: 'واخلئ', farsi: 'بگیرید', pronunciation: 'wākhley' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه اخله', farsi: 'نگیر', pronunciation: 'ma akhla' },
          { pronoun: 'تاسو', pashto: 'مه اخلئ', farsi: 'نگیرید', pronunciation: 'ma akhley' },
        ],
      },
    },
    examples: [
      { pashto: 'زه کتاب اخلم', farsi: 'من کتاب می‌گیرم' },
      { pashto: 'ما پیسې واخیستلې', farsi: 'من پول گرفتم' },
      { pashto: 'واخله!', farsi: 'بگیر!' },
    ],
  },


  // فعل بردن - To Carry/Take Away
  'to-carry': {
    id: 'to-carry',
    infinitive: 'وړل',
    infinitiveFarsi: 'بردن',
    root: 'وړ',
    pastRoot: 'یووړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'وړم', farsi: 'می‌برم', pronunciation: 'waṛam' },
          { pronoun: 'ته', pashto: 'وړې', farsi: 'می‌بری', pronunciation: 'waṛe' },
          { pronoun: 'هغه', pashto: 'وړي', farsi: 'می‌برد', pronunciation: 'waṛi' },
          { pronoun: 'موږ', pashto: 'وړو', farsi: 'می‌بریم', pronunciation: 'waṛu' },
          { pronoun: 'تاسو', pashto: 'وړئ', farsi: 'می‌برید', pronunciation: 'waṛey' },
          { pronoun: 'هغوی', pashto: 'وړي', farsi: 'می‌برند', pronunciation: 'waṛi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'یووړ', farsi: 'بردم', pronunciation: 'yūwaṛ' },
          { pronoun: 'تا', pashto: 'یووړ', farsi: 'بردی', pronunciation: 'yūwaṛ' },
          { pronoun: 'هغه', pashto: 'یووړ', farsi: 'برد', pronunciation: 'yūwaṛ' },
          { pronoun: 'موږ', pashto: 'یووړل', farsi: 'بردیم', pronunciation: 'yūwaṛal' },
          { pronoun: 'تاسو', pashto: 'یووړل', farsi: 'بردید', pronunciation: 'yūwaṛal' },
          { pronoun: 'هغوی', pashto: 'یووړل', farsi: 'بردند', pronunciation: 'yūwaṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به وړم', farsi: 'خواهم برد', pronunciation: 'ba waṛam' },
          { pronoun: 'ته', pashto: 'به وړې', farsi: 'خواهی برد', pronunciation: 'ba waṛe' },
          { pronoun: 'هغه', pashto: 'به وړي', farsi: 'خواهد برد', pronunciation: 'ba waṛi' },
          { pronoun: 'موږ', pashto: 'به وړو', farsi: 'خواهیم برد', pronunciation: 'ba waṛu' },
          { pronoun: 'تاسو', pashto: 'به وړئ', farsi: 'خواهید برد', pronunciation: 'ba waṛey' },
          { pronoun: 'هغوی', pashto: 'به وړي', farsi: 'خواهند برد', pronunciation: 'ba waṛi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'یوسه', farsi: 'ببر', pronunciation: 'yūsa' },
          { pronoun: 'تاسو', pashto: 'یوسئ', farsi: 'ببرید', pronunciation: 'yūsey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه وړه', farsi: 'نبر', pronunciation: 'ma waṛa' },
          { pronoun: 'تاسو', pashto: 'مه وړئ', farsi: 'نبرید', pronunciation: 'ma waṛey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه کتاب وړم', farsi: 'من کتاب می‌برم' },
      { pashto: 'هغه بکس یووړ', farsi: 'او چمدان برد' },
      { pashto: 'یوسه!', farsi: 'ببر!' },
    ],
  },


  // فعل آوردن - To Bring
  'to-bring': {
    id: 'to-bring',
    infinitive: 'راوړل',
    infinitiveFarsi: 'آوردن',
    root: 'راوړ',
    pastRoot: 'راوړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'راوړم', farsi: 'می‌آورم', pronunciation: 'rāwaṛam' },
          { pronoun: 'ته', pashto: 'راوړې', farsi: 'می‌آوری', pronunciation: 'rāwaṛe' },
          { pronoun: 'هغه', pashto: 'راوړي', farsi: 'می‌آورد', pronunciation: 'rāwaṛi' },
          { pronoun: 'موږ', pashto: 'راوړو', farsi: 'می‌آوریم', pronunciation: 'rāwaṛu' },
          { pronoun: 'تاسو', pashto: 'راوړئ', farsi: 'می‌آورید', pronunciation: 'rāwaṛey' },
          { pronoun: 'هغوی', pashto: 'راوړي', farsi: 'می‌آورند', pronunciation: 'rāwaṛi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'راوړل', farsi: 'آوردم', pronunciation: 'rāwaṛal' },
          { pronoun: 'تا', pashto: 'راوړل', farsi: 'آوردی', pronunciation: 'rāwaṛal' },
          { pronoun: 'هغه', pashto: 'راوړل', farsi: 'آورد', pronunciation: 'rāwaṛal' },
          { pronoun: 'موږ', pashto: 'راوړل', farsi: 'آوردیم', pronunciation: 'rāwaṛal' },
          { pronoun: 'تاسو', pashto: 'راوړل', farsi: 'آوردید', pronunciation: 'rāwaṛal' },
          { pronoun: 'هغوی', pashto: 'راوړل', farsi: 'آوردند', pronunciation: 'rāwaṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به راوړم', farsi: 'خواهم آورد', pronunciation: 'ba rāwaṛam' },
          { pronoun: 'ته', pashto: 'به راوړې', farsi: 'خواهی آورد', pronunciation: 'ba rāwaṛe' },
          { pronoun: 'هغه', pashto: 'به راوړي', farsi: 'خواهد آورد', pronunciation: 'ba rāwaṛi' },
          { pronoun: 'موږ', pashto: 'به راوړو', farsi: 'خواهیم آورد', pronunciation: 'ba rāwaṛu' },
          { pronoun: 'تاسو', pashto: 'به راوړئ', farsi: 'خواهید آورد', pronunciation: 'ba rāwaṛey' },
          { pronoun: 'هغوی', pashto: 'به راوړي', farsi: 'خواهند آورد', pronunciation: 'ba rāwaṛi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'راوړه', farsi: 'بیاور', pronunciation: 'rāwaṛa' },
          { pronoun: 'تاسو', pashto: 'راوړئ', farsi: 'بیاورید', pronunciation: 'rāwaṛey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه راوړه', farsi: 'نیاور', pronunciation: 'ma rāwaṛa' },
          { pronoun: 'تاسو', pashto: 'مه راوړئ', farsi: 'نیاورید', pronunciation: 'ma rāwaṛey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه چای راوړم', farsi: 'من چای می‌آورم' },
      { pashto: 'هغه ډوډۍ راوړله', farsi: 'او غذا آورد' },
      { pashto: 'راوړه!', farsi: 'بیاور!' },
    ],
  },


  // فعل فهمیدن/دانستن - To Understand/Know
  'to-understand': {
    id: 'to-understand',
    infinitive: 'پوهېدل',
    infinitiveFarsi: 'فهمیدن',
    root: 'پوه',
    pastRoot: 'پوه شو',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'پوهېږم', farsi: 'می‌فهمم', pronunciation: 'poheẓ̌am' },
          { pronoun: 'ته', pashto: 'پوهېږې', farsi: 'می‌فهمی', pronunciation: 'poheẓ̌e' },
          { pronoun: 'هغه', pashto: 'پوهېږي', farsi: 'می‌فهمد', pronunciation: 'poheẓ̌i' },
          { pronoun: 'موږ', pashto: 'پوهېږو', farsi: 'می‌فهمیم', pronunciation: 'poheẓ̌u' },
          { pronoun: 'تاسو', pashto: 'پوهېږئ', farsi: 'می‌فهمید', pronunciation: 'poheẓ̌ey' },
          { pronoun: 'هغوی', pashto: 'پوهېږي', farsi: 'می‌فهمند', pronunciation: 'poheẓ̌i' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'پوه شوم', farsi: 'فهمیدم', pronunciation: 'poh shwam' },
          { pronoun: 'ته', pashto: 'پوه شوې', farsi: 'فهمیدی', pronunciation: 'poh shwe' },
          { pronoun: 'هغه (م)', pashto: 'پوه شو', farsi: 'فهمید', pronunciation: 'poh sho' },
          { pronoun: 'هغه (ز)', pashto: 'پوه شوه', farsi: 'فهمید', pronunciation: 'poh shwa' },
          { pronoun: 'موږ', pashto: 'پوه شوو', farsi: 'فهمیدیم', pronunciation: 'poh shwu' },
          { pronoun: 'تاسو', pashto: 'پوه شوئ', farsi: 'فهمیدید', pronunciation: 'poh shwey' },
          { pronoun: 'هغوی', pashto: 'پوه شول', farsi: 'فهمیدند', pronunciation: 'poh shwal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به پوهېږم', farsi: 'خواهم فهمید', pronunciation: 'ba poheẓ̌am' },
          { pronoun: 'ته', pashto: 'به پوهېږې', farsi: 'خواهی فهمید', pronunciation: 'ba poheẓ̌e' },
          { pronoun: 'هغه', pashto: 'به پوهېږي', farsi: 'خواهد فهمید', pronunciation: 'ba poheẓ̌i' },
          { pronoun: 'موږ', pashto: 'به پوهېږو', farsi: 'خواهیم فهمید', pronunciation: 'ba poheẓ̌u' },
          { pronoun: 'تاسو', pashto: 'به پوهېږئ', farsi: 'خواهید فهمید', pronunciation: 'ba poheẓ̌ey' },
          { pronoun: 'هغوی', pashto: 'به پوهېږي', farsi: 'خواهند فهمید', pronunciation: 'ba poheẓ̌i' },
        ],
      },
    },
    examples: [
      { pashto: 'زه پوهېږم', farsi: 'من می‌فهمم' },
      { pashto: 'ته پښتو پوهېږې؟', farsi: 'تو پشتو می‌فهمی؟' },
      { pashto: 'زه پوه شوم', farsi: 'من فهمیدم' },
    ],
  },


  // فعل نشستن - To Sit
  'to-sit': {
    id: 'to-sit',
    infinitive: 'کېناستل',
    infinitiveFarsi: 'نشستن',
    root: 'کېن',
    pastRoot: 'کېناست',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'کېنم', farsi: 'می‌نشینم', pronunciation: 'kenam' },
          { pronoun: 'ته', pashto: 'کېنې', farsi: 'می‌نشینی', pronunciation: 'kene' },
          { pronoun: 'هغه', pashto: 'کېني', farsi: 'می‌نشیند', pronunciation: 'keni' },
          { pronoun: 'موږ', pashto: 'کېنو', farsi: 'می‌نشینیم', pronunciation: 'kenu' },
          { pronoun: 'تاسو', pashto: 'کېنئ', farsi: 'می‌نشینید', pronunciation: 'keney' },
          { pronoun: 'هغوی', pashto: 'کېني', farsi: 'می‌نشینند', pronunciation: 'keni' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'کېناستم', farsi: 'نشستم', pronunciation: 'kenāstam' },
          { pronoun: 'ته', pashto: 'کېناستې', farsi: 'نشستی', pronunciation: 'kenāste' },
          { pronoun: 'هغه (م)', pashto: 'کېناست', farsi: 'نشست', pronunciation: 'kenāst' },
          { pronoun: 'هغه (ز)', pashto: 'کېناسته', farsi: 'نشست', pronunciation: 'kenāsta' },
          { pronoun: 'موږ', pashto: 'کېناستو', farsi: 'نشستیم', pronunciation: 'kenāstu' },
          { pronoun: 'تاسو', pashto: 'کېناستئ', farsi: 'نشستید', pronunciation: 'kenāstey' },
          { pronoun: 'هغوی', pashto: 'کېناستل', farsi: 'نشستند', pronunciation: 'kenāstal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به کېنم', farsi: 'خواهم نشست', pronunciation: 'ba kenam' },
          { pronoun: 'ته', pashto: 'به کېنې', farsi: 'خواهی نشست', pronunciation: 'ba kene' },
          { pronoun: 'هغه', pashto: 'به کېني', farsi: 'خواهد نشست', pronunciation: 'ba keni' },
          { pronoun: 'موږ', pashto: 'به کېنو', farsi: 'خواهیم نشست', pronunciation: 'ba kenu' },
          { pronoun: 'تاسو', pashto: 'به کېنئ', farsi: 'خواهید نشست', pronunciation: 'ba keney' },
          { pronoun: 'هغوی', pashto: 'به کېني', farsi: 'خواهند نشست', pronunciation: 'ba keni' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'کېنه', farsi: 'بنشین', pronunciation: 'kena' },
          { pronoun: 'تاسو', pashto: 'کېنئ', farsi: 'بنشینید', pronunciation: 'keney' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه کېنه', farsi: 'ننشین', pronunciation: 'ma kena' },
          { pronoun: 'تاسو', pashto: 'مه کېنئ', farsi: 'ننشینید', pronunciation: 'ma keney' },
        ],
      },
    },
    examples: [
      { pashto: 'زه دلته کېنم', farsi: 'من اینجا می‌نشینم' },
      { pashto: 'کېنه!', farsi: 'بنشین!' },
      { pashto: 'هغه کېناست', farsi: 'او نشست' },
    ],
  },


  // فعل ایستادن - To Stand
  'to-stand': {
    id: 'to-stand',
    infinitive: 'ودرېدل',
    infinitiveFarsi: 'ایستادن',
    root: 'ودرېږ',
    pastRoot: 'ودرېد',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ودرېږم', farsi: 'می‌ایستم', pronunciation: 'wadreẓ̌am' },
          { pronoun: 'ته', pashto: 'ودرېږې', farsi: 'می‌ایستی', pronunciation: 'wadreẓ̌e' },
          { pronoun: 'هغه', pashto: 'ودرېږي', farsi: 'می‌ایستد', pronunciation: 'wadreẓ̌i' },
          { pronoun: 'موږ', pashto: 'ودرېږو', farsi: 'می‌ایستیم', pronunciation: 'wadreẓ̌u' },
          { pronoun: 'تاسو', pashto: 'ودرېږئ', farsi: 'می‌ایستید', pronunciation: 'wadreẓ̌ey' },
          { pronoun: 'هغوی', pashto: 'ودرېږي', farsi: 'می‌ایستند', pronunciation: 'wadreẓ̌i' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ودرېدم', farsi: 'ایستادم', pronunciation: 'wadredam' },
          { pronoun: 'ته', pashto: 'ودرېدې', farsi: 'ایستادی', pronunciation: 'wadrede' },
          { pronoun: 'هغه (م)', pashto: 'ودرېد', farsi: 'ایستاد', pronunciation: 'wadred' },
          { pronoun: 'هغه (ز)', pashto: 'ودرېده', farsi: 'ایستاد', pronunciation: 'wadreda' },
          { pronoun: 'موږ', pashto: 'ودرېدو', farsi: 'ایستادیم', pronunciation: 'wadredu' },
          { pronoun: 'تاسو', pashto: 'ودرېدئ', farsi: 'ایستادید', pronunciation: 'wadredey' },
          { pronoun: 'هغوی', pashto: 'ودرېدل', farsi: 'ایستادند', pronunciation: 'wadredal' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'ودرېږه', farsi: 'بایست', pronunciation: 'wadreẓ̌a' },
          { pronoun: 'تاسو', pashto: 'ودرېږئ', farsi: 'بایستید', pronunciation: 'wadreẓ̌ey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه ودرېږه', farsi: 'نایست', pronunciation: 'ma wadreẓ̌a' },
          { pronoun: 'تاسو', pashto: 'مه ودرېږئ', farsi: 'نایستید', pronunciation: 'ma wadreẓ̌ey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه دلته ودرېږم', farsi: 'من اینجا می‌ایستم' },
      { pashto: 'ودرېږه!', farsi: 'بایست!' },
      { pashto: 'هغه ودرېد', farsi: 'او ایستاد' },
    ],
  },


  // فعل خوابیدن - To Sleep
  'to-sleep': {
    id: 'to-sleep',
    infinitive: 'ویدېدل',
    infinitiveFarsi: 'خوابیدن',
    root: 'ویده',
    pastRoot: 'ویده شو',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ویده کېږم', farsi: 'می‌خوابم', pronunciation: 'wida keẓ̌am' },
          { pronoun: 'ته', pashto: 'ویده کېږې', farsi: 'می‌خوابی', pronunciation: 'wida keẓ̌e' },
          { pronoun: 'هغه', pashto: 'ویده کېږي', farsi: 'می‌خوابد', pronunciation: 'wida keẓ̌i' },
          { pronoun: 'موږ', pashto: 'ویده کېږو', farsi: 'می‌خوابیم', pronunciation: 'wida keẓ̌u' },
          { pronoun: 'تاسو', pashto: 'ویده کېږئ', farsi: 'می‌خوابید', pronunciation: 'wida keẓ̌ey' },
          { pronoun: 'هغوی', pashto: 'ویده کېږي', farsi: 'می‌خوابند', pronunciation: 'wida keẓ̌i' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ویده شوم', farsi: 'خوابیدم', pronunciation: 'wida shwam' },
          { pronoun: 'ته', pashto: 'ویده شوې', farsi: 'خوابیدی', pronunciation: 'wida shwe' },
          { pronoun: 'هغه (م)', pashto: 'ویده شو', farsi: 'خوابید', pronunciation: 'wida sho' },
          { pronoun: 'هغه (ز)', pashto: 'ویده شوه', farsi: 'خوابید', pronunciation: 'wida shwa' },
          { pronoun: 'موږ', pashto: 'ویده شوو', farsi: 'خوابیدیم', pronunciation: 'wida shwu' },
          { pronoun: 'تاسو', pashto: 'ویده شوئ', farsi: 'خوابیدید', pronunciation: 'wida shwey' },
          { pronoun: 'هغوی', pashto: 'ویده شول', farsi: 'خوابیدند', pronunciation: 'wida shwal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به ویده شم', farsi: 'خواهم خوابید', pronunciation: 'ba wida sham' },
          { pronoun: 'ته', pashto: 'به ویده شې', farsi: 'خواهی خوابید', pronunciation: 'ba wida she' },
          { pronoun: 'هغه', pashto: 'به ویده شي', farsi: 'خواهد خوابید', pronunciation: 'ba wida shi' },
          { pronoun: 'موږ', pashto: 'به ویده شو', farsi: 'خواهیم خوابید', pronunciation: 'ba wida shu' },
          { pronoun: 'تاسو', pashto: 'به ویده شئ', farsi: 'خواهید خوابید', pronunciation: 'ba wida shey' },
          { pronoun: 'هغوی', pashto: 'به ویده شي', farsi: 'خواهند خوابید', pronunciation: 'ba wida shi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'ویده شه', farsi: 'بخواب', pronunciation: 'wida sha' },
          { pronoun: 'تاسو', pashto: 'ویده شئ', farsi: 'بخوابید', pronunciation: 'wida shey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه ویده کېږه', farsi: 'نخواب', pronunciation: 'ma wida keẓ̌a' },
          { pronoun: 'تاسو', pashto: 'مه ویده کېږئ', farsi: 'نخوابید', pronunciation: 'ma wida keẓ̌ey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه ویده کېږم', farsi: 'من می‌خوابم' },
      { pashto: 'هغه ویده شو', farsi: 'او خوابید' },
      { pashto: 'ویده شه!', farsi: 'بخواب!' },
    ],
  },


  // فعل شدن - To Become
  'to-become': {
    id: 'to-become',
    infinitive: 'کېدل',
    infinitiveFarsi: 'شدن',
    root: 'کېږ',
    pastRoot: 'شو',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'کېږم', farsi: 'می‌شوم', pronunciation: 'keẓ̌am' },
          { pronoun: 'ته', pashto: 'کېږې', farsi: 'می‌شوی', pronunciation: 'keẓ̌e' },
          { pronoun: 'هغه', pashto: 'کېږي', farsi: 'می‌شود', pronunciation: 'keẓ̌i' },
          { pronoun: 'موږ', pashto: 'کېږو', farsi: 'می‌شویم', pronunciation: 'keẓ̌u' },
          { pronoun: 'تاسو', pashto: 'کېږئ', farsi: 'می‌شوید', pronunciation: 'keẓ̌ey' },
          { pronoun: 'هغوی', pashto: 'کېږي', farsi: 'می‌شوند', pronunciation: 'keẓ̌i' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'شوم', farsi: 'شدم', pronunciation: 'shwam' },
          { pronoun: 'ته', pashto: 'شوې', farsi: 'شدی', pronunciation: 'shwe' },
          { pronoun: 'هغه (م)', pashto: 'شو', farsi: 'شد', pronunciation: 'sho' },
          { pronoun: 'هغه (ز)', pashto: 'شوه', farsi: 'شد', pronunciation: 'shwa' },
          { pronoun: 'موږ', pashto: 'شوو', farsi: 'شدیم', pronunciation: 'shwu' },
          { pronoun: 'تاسو', pashto: 'شوئ', farsi: 'شدید', pronunciation: 'shwey' },
          { pronoun: 'هغوی', pashto: 'شول', farsi: 'شدند', pronunciation: 'shwal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به شم', farsi: 'خواهم شد', pronunciation: 'ba sham' },
          { pronoun: 'ته', pashto: 'به شې', farsi: 'خواهی شد', pronunciation: 'ba she' },
          { pronoun: 'هغه', pashto: 'به شي', farsi: 'خواهد شد', pronunciation: 'ba shi' },
          { pronoun: 'موږ', pashto: 'به شو', farsi: 'خواهیم شد', pronunciation: 'ba shu' },
          { pronoun: 'تاسو', pashto: 'به شئ', farsi: 'خواهید شد', pronunciation: 'ba shey' },
          { pronoun: 'هغوی', pashto: 'به شي', farsi: 'خواهند شد', pronunciation: 'ba shi' },
        ],
      },
      imperative: {
        name: 'امری',
        namePashto: 'امري',
        conjugations: [
          { pronoun: 'ته', pashto: 'شه', farsi: 'بشو', pronunciation: 'sha' },
          { pronoun: 'تاسو', pashto: 'شئ', farsi: 'بشوید', pronunciation: 'shey' },
        ],
        negative: [
          { pronoun: 'ته', pashto: 'مه کېږه', farsi: 'نشو', pronunciation: 'ma keẓ̌a' },
          { pronoun: 'تاسو', pashto: 'مه کېږئ', farsi: 'نشوید', pronunciation: 'ma keẓ̌ey' },
        ],
      },
    },
    examples: [
      { pashto: 'زه ستړی کېږم', farsi: 'من خسته می‌شوم' },
      { pashto: 'هغه داکتر شو', farsi: 'او داکتر شد' },
      { pashto: 'ښه شه!', farsi: 'خوب شو!' },
    ],
  },


  // فعل دوست داشتن - To Love/Like
  'to-love': {
    id: 'to-love',
    infinitive: 'خوښول',
    infinitiveFarsi: 'دوست داشتن',
    root: 'خوښ',
    pastRoot: 'خوښ کړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        note: 'در پشتو معمولاً با ساختار "ما خوښېږي" استفاده می‌شود',
        conjugations: [
          { pronoun: 'ما', pashto: 'خوښېږي', farsi: 'دوست دارم', pronunciation: 'khwax̌eẓ̌i' },
          { pronoun: 'تا', pashto: 'خوښېږي', farsi: 'دوست داری', pronunciation: 'khwax̌eẓ̌i' },
          { pronoun: 'هغه', pashto: 'خوښېږي', farsi: 'دوست دارد', pronunciation: 'khwax̌eẓ̌i' },
          { pronoun: 'موږ', pashto: 'خوښېږي', farsi: 'دوست داریم', pronunciation: 'khwax̌eẓ̌i' },
          { pronoun: 'تاسو', pashto: 'خوښېږي', farsi: 'دوست دارید', pronunciation: 'khwax̌eẓ̌i' },
          { pronoun: 'هغوی', pashto: 'خوښېږي', farsi: 'دوست دارند', pronunciation: 'khwax̌eẓ̌i' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'خوښېده', farsi: 'دوست داشتم', pronunciation: 'khwax̌eda' },
          { pronoun: 'تا', pashto: 'خوښېده', farsi: 'دوست داشتی', pronunciation: 'khwax̌eda' },
          { pronoun: 'هغه', pashto: 'خوښېده', farsi: 'دوست داشت', pronunciation: 'khwax̌eda' },
          { pronoun: 'موږ', pashto: 'خوښېده', farsi: 'دوست داشتیم', pronunciation: 'khwax̌eda' },
          { pronoun: 'تاسو', pashto: 'خوښېده', farsi: 'دوست داشتید', pronunciation: 'khwax̌eda' },
          { pronoun: 'هغوی', pashto: 'خوښېده', farsi: 'دوست داشتند', pronunciation: 'khwax̌eda' },
        ],
      },
    },
    examples: [
      { pashto: 'ما ته خوښېږې', farsi: 'من تو را دوست دارم' },
      { pashto: 'ما چای خوښېږي', farsi: 'من چای دوست دارم' },
      { pashto: 'هغه ته خوښېږم', farsi: 'او مرا دوست دارد' },
    ],
  },


  // فعل کار کردن - To Work
  'to-work': {
    id: 'to-work',
    infinitive: 'کار کول',
    infinitiveFarsi: 'کار کردن',
    root: 'کار کو',
    pastRoot: 'کار وکړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'کار کوم', farsi: 'کار می‌کنم', pronunciation: 'kār kawam' },
          { pronoun: 'ته', pashto: 'کار کوې', farsi: 'کار می‌کنی', pronunciation: 'kār kawe' },
          { pronoun: 'هغه', pashto: 'کار کوي', farsi: 'کار می‌کند', pronunciation: 'kār kawi' },
          { pronoun: 'موږ', pashto: 'کار کوو', farsi: 'کار می‌کنیم', pronunciation: 'kār kawu' },
          { pronoun: 'تاسو', pashto: 'کار کوئ', farsi: 'کار می‌کنید', pronunciation: 'kār kawey' },
          { pronoun: 'هغوی', pashto: 'کار کوي', farsi: 'کار می‌کنند', pronunciation: 'kār kawi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'کار وکړ', farsi: 'کار کردم', pronunciation: 'kār wakṛ' },
          { pronoun: 'تا', pashto: 'کار وکړ', farsi: 'کار کردی', pronunciation: 'kār wakṛ' },
          { pronoun: 'هغه', pashto: 'کار وکړ', farsi: 'کار کرد', pronunciation: 'kār wakṛ' },
          { pronoun: 'موږ', pashto: 'کار وکړل', farsi: 'کار کردیم', pronunciation: 'kār wakṛal' },
          { pronoun: 'تاسو', pashto: 'کار وکړل', farsi: 'کار کردید', pronunciation: 'kār wakṛal' },
          { pronoun: 'هغوی', pashto: 'کار وکړل', farsi: 'کار کردند', pronunciation: 'kār wakṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به کار کوم', farsi: 'کار خواهم کرد', pronunciation: 'ba kār kawam' },
          { pronoun: 'ته', pashto: 'به کار کوې', farsi: 'کار خواهی کرد', pronunciation: 'ba kār kawe' },
          { pronoun: 'هغه', pashto: 'به کار کوي', farsi: 'کار خواهد کرد', pronunciation: 'ba kār kawi' },
          { pronoun: 'موږ', pashto: 'به کار کوو', farsi: 'کار خواهیم کرد', pronunciation: 'ba kār kawu' },
          { pronoun: 'تاسو', pashto: 'به کار کوئ', farsi: 'کار خواهید کرد', pronunciation: 'ba kār kawey' },
          { pronoun: 'هغوی', pashto: 'به کار کوي', farsi: 'کار خواهند کرد', pronunciation: 'ba kār kawi' },
        ],
      },
    },
    examples: [
      { pashto: 'زه په دفتر کې کار کوم', farsi: 'من در دفتر کار می‌کنم' },
      { pashto: 'هغه ډېر کار کوي', farsi: 'او زیاد کار می‌کند' },
      { pashto: 'ما پرون کار وکړ', farsi: 'من دیروز کار کردم' },
    ],
  },


  // فعل صحبت کردن - To Speak/Talk
  'to-speak': {
    id: 'to-speak',
    infinitive: 'خبرې کول',
    infinitiveFarsi: 'صحبت کردن',
    root: 'خبرې کو',
    pastRoot: 'خبرې وکړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'خبرې کوم', farsi: 'صحبت می‌کنم', pronunciation: 'khabre kawam' },
          { pronoun: 'ته', pashto: 'خبرې کوې', farsi: 'صحبت می‌کنی', pronunciation: 'khabre kawe' },
          { pronoun: 'هغه', pashto: 'خبرې کوي', farsi: 'صحبت می‌کند', pronunciation: 'khabre kawi' },
          { pronoun: 'موږ', pashto: 'خبرې کوو', farsi: 'صحبت می‌کنیم', pronunciation: 'khabre kawu' },
          { pronoun: 'تاسو', pashto: 'خبرې کوئ', farsi: 'صحبت می‌کنید', pronunciation: 'khabre kawey' },
          { pronoun: 'هغوی', pashto: 'خبرې کوي', farsi: 'صحبت می‌کنند', pronunciation: 'khabre kawi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'خبرې وکړې', farsi: 'صحبت کردم', pronunciation: 'khabre wakṛe' },
          { pronoun: 'تا', pashto: 'خبرې وکړې', farsi: 'صحبت کردی', pronunciation: 'khabre wakṛe' },
          { pronoun: 'هغه', pashto: 'خبرې وکړې', farsi: 'صحبت کرد', pronunciation: 'khabre wakṛe' },
          { pronoun: 'موږ', pashto: 'خبرې وکړې', farsi: 'صحبت کردیم', pronunciation: 'khabre wakṛe' },
          { pronoun: 'تاسو', pashto: 'خبرې وکړې', farsi: 'صحبت کردید', pronunciation: 'khabre wakṛe' },
          { pronoun: 'هغوی', pashto: 'خبرې وکړې', farsi: 'صحبت کردند', pronunciation: 'khabre wakṛe' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به خبرې کوم', farsi: 'صحبت خواهم کرد', pronunciation: 'ba khabre kawam' },
          { pronoun: 'ته', pashto: 'به خبرې کوې', farsi: 'صحبت خواهی کرد', pronunciation: 'ba khabre kawe' },
          { pronoun: 'هغه', pashto: 'به خبرې کوي', farsi: 'صحبت خواهد کرد', pronunciation: 'ba khabre kawi' },
          { pronoun: 'موږ', pashto: 'به خبرې کوو', farsi: 'صحبت خواهیم کرد', pronunciation: 'ba khabre kawu' },
          { pronoun: 'تاسو', pashto: 'به خبرې کوئ', farsi: 'صحبت خواهید کرد', pronunciation: 'ba khabre kawey' },
          { pronoun: 'هغوی', pashto: 'به خبرې کوي', farsi: 'صحبت خواهند کرد', pronunciation: 'ba khabre kawi' },
        ],
      },
    },
    examples: [
      { pashto: 'زه پښتو خبرې کوم', farsi: 'من پشتو صحبت می‌کنم' },
      { pashto: 'ته پښتو خبرې کوې؟', farsi: 'تو پشتو صحبت می‌کنی؟' },
      { pashto: 'موږ خبرې وکړې', farsi: 'ما صحبت کردیم' },
    ],
  },


  // فعل زندگی کردن - To Live
  'to-live': {
    id: 'to-live',
    infinitive: 'ژوند کول',
    infinitiveFarsi: 'زندگی کردن',
    root: 'ژوند کو',
    pastRoot: 'ژوند وکړ',
    type: 'intransitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ژوند کوم', farsi: 'زندگی می‌کنم', pronunciation: 'zhwand kawam' },
          { pronoun: 'ته', pashto: 'ژوند کوې', farsi: 'زندگی می‌کنی', pronunciation: 'zhwand kawe' },
          { pronoun: 'هغه', pashto: 'ژوند کوي', farsi: 'زندگی می‌کند', pronunciation: 'zhwand kawi' },
          { pronoun: 'موږ', pashto: 'ژوند کوو', farsi: 'زندگی می‌کنیم', pronunciation: 'zhwand kawu' },
          { pronoun: 'تاسو', pashto: 'ژوند کوئ', farsi: 'زندگی می‌کنید', pronunciation: 'zhwand kawey' },
          { pronoun: 'هغوی', pashto: 'ژوند کوي', farsi: 'زندگی می‌کنند', pronunciation: 'zhwand kawi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'ژوند وکړ', farsi: 'زندگی کردم', pronunciation: 'zhwand wakṛ' },
          { pronoun: 'ته', pashto: 'ژوند وکړ', farsi: 'زندگی کردی', pronunciation: 'zhwand wakṛ' },
          { pronoun: 'هغه', pashto: 'ژوند وکړ', farsi: 'زندگی کرد', pronunciation: 'zhwand wakṛ' },
          { pronoun: 'موږ', pashto: 'ژوند وکړل', farsi: 'زندگی کردیم', pronunciation: 'zhwand wakṛal' },
          { pronoun: 'تاسو', pashto: 'ژوند وکړل', farsi: 'زندگی کردید', pronunciation: 'zhwand wakṛal' },
          { pronoun: 'هغوی', pashto: 'ژوند وکړل', farsi: 'زندگی کردند', pronunciation: 'zhwand wakṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به ژوند کوم', farsi: 'زندگی خواهم کرد', pronunciation: 'ba zhwand kawam' },
          { pronoun: 'ته', pashto: 'به ژوند کوې', farsi: 'زندگی خواهی کرد', pronunciation: 'ba zhwand kawe' },
          { pronoun: 'هغه', pashto: 'به ژوند کوي', farsi: 'زندگی خواهد کرد', pronunciation: 'ba zhwand kawi' },
          { pronoun: 'موږ', pashto: 'به ژوند کوو', farsi: 'زندگی خواهیم کرد', pronunciation: 'ba zhwand kawu' },
          { pronoun: 'تاسو', pashto: 'به ژوند کوئ', farsi: 'زندگی خواهید کرد', pronunciation: 'ba zhwand kawey' },
          { pronoun: 'هغوی', pashto: 'به ژوند کوي', farsi: 'زندگی خواهند کرد', pronunciation: 'ba zhwand kawi' },
        ],
      },
    },
    examples: [
      { pashto: 'زه په کابل کې ژوند کوم', farsi: 'من در کابل زندگی می‌کنم' },
      { pashto: 'هغه په کندهار کې ژوند کوي', farsi: 'او در قندهار زندگی می‌کند' },
      { pashto: 'موږ دلته ژوند کوو', farsi: 'ما اینجا زندگی می‌کنیم' },
    ],
  },


  // فعل یاد گرفتن - To Learn
  'to-learn': {
    id: 'to-learn',
    infinitive: 'زده کول',
    infinitiveFarsi: 'یاد گرفتن',
    root: 'زده کو',
    pastRoot: 'زده کړ',
    type: 'transitive',
    tenses: {
      present: {
        name: 'حال',
        namePashto: 'اوسمهال',
        conjugations: [
          { pronoun: 'زه', pashto: 'زده کوم', farsi: 'یاد می‌گیرم', pronunciation: 'zda kawam' },
          { pronoun: 'ته', pashto: 'زده کوې', farsi: 'یاد می‌گیری', pronunciation: 'zda kawe' },
          { pronoun: 'هغه', pashto: 'زده کوي', farsi: 'یاد می‌گیرد', pronunciation: 'zda kawi' },
          { pronoun: 'موږ', pashto: 'زده کوو', farsi: 'یاد می‌گیریم', pronunciation: 'zda kawu' },
          { pronoun: 'تاسو', pashto: 'زده کوئ', farsi: 'یاد می‌گیرید', pronunciation: 'zda kawey' },
          { pronoun: 'هغوی', pashto: 'زده کوي', farsi: 'یاد می‌گیرند', pronunciation: 'zda kawi' },
        ],
      },
      past: {
        name: 'گذشته',
        namePashto: 'تېرمهال',
        conjugations: [
          { pronoun: 'ما', pashto: 'زده کړل', farsi: 'یاد گرفتم', pronunciation: 'zda kṛal' },
          { pronoun: 'تا', pashto: 'زده کړل', farsi: 'یاد گرفتی', pronunciation: 'zda kṛal' },
          { pronoun: 'هغه', pashto: 'زده کړل', farsi: 'یاد گرفت', pronunciation: 'zda kṛal' },
          { pronoun: 'موږ', pashto: 'زده کړل', farsi: 'یاد گرفتیم', pronunciation: 'zda kṛal' },
          { pronoun: 'تاسو', pashto: 'زده کړل', farsi: 'یاد گرفتید', pronunciation: 'zda kṛal' },
          { pronoun: 'هغوی', pashto: 'زده کړل', farsi: 'یاد گرفتند', pronunciation: 'zda kṛal' },
        ],
      },
      future: {
        name: 'آینده',
        namePashto: 'راتلونکی',
        conjugations: [
          { pronoun: 'زه', pashto: 'به زده کوم', farsi: 'یاد خواهم گرفت', pronunciation: 'ba zda kawam' },
          { pronoun: 'ته', pashto: 'به زده کوې', farsi: 'یاد خواهی گرفت', pronunciation: 'ba zda kawe' },
          { pronoun: 'هغه', pashto: 'به زده کوي', farsi: 'یاد خواهد گرفت', pronunciation: 'ba zda kawi' },
          { pronoun: 'موږ', pashto: 'به زده کوو', farsi: 'یاد خواهیم گرفت', pronunciation: 'ba zda kawu' },
          { pronoun: 'تاسو', pashto: 'به زده کوئ', farsi: 'یاد خواهید گرفت', pronunciation: 'ba zda kawey' },
          { pronoun: 'هغوی', pashto: 'به زده کوي', farsi: 'یاد خواهند گرفت', pronunciation: 'ba zda kawi' },
        ],
      },
    },
    examples: [
      { pashto: 'زه پښتو زده کوم', farsi: 'من پشتو یاد می‌گیرم' },
      { pashto: 'ما پښتو زده کړل', farsi: 'من پشتو یاد گرفتم' },
      { pashto: 'ته څه زده کوې؟', farsi: 'تو چه یاد می‌گیری؟' },
    ],
  },
};



// لیست فعل‌ها برای نمایش
export const verbList = [
  { id: 'to-be', name: 'بودن', namePashto: 'اوسېدل', root: 'یم/دی' },
  { id: 'to-go', name: 'رفتن', namePashto: 'تلل', root: 'ځ' },
  { id: 'to-come', name: 'آمدن', namePashto: 'راتلل', root: 'راځ' },
  { id: 'to-eat', name: 'خوردن', namePashto: 'خوړل', root: 'خور' },
  { id: 'to-drink', name: 'نوشیدن', namePashto: 'څښل', root: 'څښ' },
  { id: 'to-do', name: 'کردن', namePashto: 'کول', root: 'کو' },
  { id: 'to-want', name: 'خواستن', namePashto: 'غوښتل', root: 'غواړ' },
  { id: 'to-see', name: 'دیدن', namePashto: 'لیدل', root: 'وین' },
  { id: 'to-say', name: 'گفتن', namePashto: 'ویل', root: 'وای' },
  { id: 'to-hear', name: 'شنیدن', namePashto: 'اورېدل', root: 'اور' },
  { id: 'to-write', name: 'نوشتن', namePashto: 'لیکل', root: 'لیک' },
  { id: 'to-read', name: 'خواندن', namePashto: 'لوستل', root: 'لول' },
  { id: 'to-have', name: 'داشتن', namePashto: 'لرل', root: 'لر' },
  { id: 'to-give', name: 'دادن', namePashto: 'ورکول', root: 'ورکو' },
  { id: 'to-take', name: 'گرفتن', namePashto: 'اخیستل', root: 'اخل' },
  { id: 'to-carry', name: 'بردن', namePashto: 'وړل', root: 'وړ' },
  { id: 'to-bring', name: 'آوردن', namePashto: 'راوړل', root: 'راوړ' },
  { id: 'to-understand', name: 'فهمیدن', namePashto: 'پوهېدل', root: 'پوه' },
  { id: 'to-sit', name: 'نشستن', namePashto: 'کېناستل', root: 'کېن' },
  { id: 'to-stand', name: 'ایستادن', namePashto: 'ودرېدل', root: 'ودرېږ' },
  { id: 'to-sleep', name: 'خوابیدن', namePashto: 'ویدېدل', root: 'ویده' },
  { id: 'to-become', name: 'شدن', namePashto: 'کېدل', root: 'کېږ' },
  { id: 'to-love', name: 'دوست داشتن', namePashto: 'خوښول', root: 'خوښ' },
  { id: 'to-work', name: 'کار کردن', namePashto: 'کار کول', root: 'کار کو' },
  { id: 'to-speak', name: 'صحبت کردن', namePashto: 'خبرې کول', root: 'خبرې کو' },
  { id: 'to-live', name: 'زندگی کردن', namePashto: 'ژوند کول', root: 'ژوند کو' },
  { id: 'to-learn', name: 'یاد گرفتن', namePashto: 'زده کول', root: 'زده کو' },
];

// تابع برای گرفتن گردان یک فعل
export function getVerbConjugation(verbId) {
  return verbConjugations[verbId];
}

// تابع برای گرفتن همه فعل‌ها
export function getAllVerbs() {
  return verbList;
}

export default verbConjugations;