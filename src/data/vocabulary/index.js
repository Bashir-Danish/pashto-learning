// Kandahari Pashto Vocabulary Index
// فهرست واژگان پښتو کندهاری

export { default as bodyParts } from './body-parts.js';
export { default as numbers } from './numbers.js';
export { default as food } from './food.js';
export { default as colors } from './colors.js';
export { default as verbs } from './verbs.js';
export { default as greetings } from './greetings.js';
export { default as slang } from './slang.js';
export { default as conversations } from './conversations.js';
export { default as family } from './family.js';

// دسته‌بندی‌های واژگان
export const vocabularyCategories = [
  {
    id: 'greetings',
    title: 'سلام و احوالپرسی',
    titlePashto: 'سلام او حال احوال',
    description: 'سلام‌ها، خداحافظی و عبارات روزمره',
  },
  {
    id: 'family',
    title: 'خانواده',
    titlePashto: 'کورنۍ',
    description: 'اعضای خانواده و خویشاوندان',
  },
  {
    id: 'numbers',
    title: 'اعداد',
    titlePashto: 'شمېرې',
    description: 'اعداد ۱ تا ۱۰۰ و بیشتر',
  },
  {
    id: 'body-parts',
    title: 'اعضای بدن',
    titlePashto: 'د بدن غړي',
    description: 'سر، دست، پا و اعضای داخلی',
  },
  {
    id: 'food',
    title: 'غذا و خوراکی',
    titlePashto: 'خواړه',
    description: 'غذاها، میوه‌ها، سبزیجات و نوشیدنی‌ها',
  },
  {
    id: 'colors',
    title: 'رنگ‌ها',
    titlePashto: 'رنګونه',
    description: 'رنگ‌های اصلی و ترکیبی',
  },
  {
    id: 'verbs',
    title: 'فعل‌ها',
    titlePashto: 'فعلونه',
    description: 'فعل‌های رایج و صرف آنها',
  },
  {
    id: 'slang',
    title: 'اصطلاحات عامیانه',
    titlePashto: 'عامیانه اصطلاحات',
    description: 'عبارات محاوره‌ای و ضرب‌المثل‌ها',
  },
  {
    id: 'conversations',
    title: 'مکالمات',
    titlePashto: 'خبرې اترې',
    description: 'مکالمات روزمره در موقعیت‌های مختلف',
  },
];
