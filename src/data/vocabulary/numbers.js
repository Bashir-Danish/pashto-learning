// اعداد پښتو کندهاری - Numbers in Kandahari Pashto
// ۱ تا ۱۰۰ با تلفظ کندهاری

export const numbers = {
  // اعداد ۱ تا ۱۰
  basic: [
    { number: 1, pashto: 'یو', farsi: 'یک', pronunciation: 'yo' },
    { number: 2, pashto: 'دوه', farsi: 'دو', pronunciation: 'dwa' },
    { number: 3, pashto: 'درې', farsi: 'سه', pronunciation: 'dre' },
    { number: 4, pashto: 'څلور', farsi: 'چهار', pronunciation: 'tsalór' },
    { number: 5, pashto: 'پنځه', farsi: 'پنج', pronunciation: 'pindzá' },
    { number: 6, pashto: 'شپږ', farsi: 'شش', pronunciation: 'shpaẓ̌' },
    { number: 7, pashto: 'اووه', farsi: 'هفت', pronunciation: 'owá' },
    { number: 8, pashto: 'اته', farsi: 'هشت', pronunciation: 'atá' },
    { number: 9, pashto: 'نهه', farsi: 'نه', pronunciation: 'nahá' },
    { number: 10, pashto: 'لس', farsi: 'ده', pronunciation: 'las' },
  ],

  // اعداد ۱۱ تا ۲۰
  teens: [
    { number: 11, pashto: 'یوولس', farsi: 'یازده', pronunciation: 'yowólas' },
    { number: 12, pashto: 'دولس', farsi: 'دوازده', pronunciation: 'dwólas' },
    { number: 13, pashto: 'دیارلس', farsi: 'سیزده', pronunciation: 'dyārlas' },
    { number: 14, pashto: 'څوارلس', farsi: 'چهارده', pronunciation: 'tswarlas' },
    { number: 15, pashto: 'پنځلس', farsi: 'پانزده', pronunciation: 'pindzálas' },
    { number: 16, pashto: 'شپاړس', farsi: 'شانزده', pronunciation: 'shpāṛas' },
    { number: 17, pashto: 'اوولس', farsi: 'هفده', pronunciation: 'owólas' },
    { number: 18, pashto: 'اتلس', farsi: 'هجده', pronunciation: 'atlas' },
    { number: 19, pashto: 'نولس', farsi: 'نوزده', pronunciation: 'nolas' },
    { number: 20, pashto: 'شل', farsi: 'بیست', pronunciation: 'shəl' },
  ],

  // دهگان‌ها
  tens: [
    { number: 10, pashto: 'لس', farsi: 'ده', pronunciation: 'las' },
    { number: 20, pashto: 'شل', farsi: 'بیست', pronunciation: 'shəl' },
    { number: 30, pashto: 'دېرش', farsi: 'سی', pronunciation: 'dérsh' },
    { number: 40, pashto: 'څلوېښت', farsi: 'چهل', pronunciation: 'tsalwéṣ̌t' },
    { number: 50, pashto: 'پنځوس', farsi: 'پنجاه', pronunciation: 'pindzós' },
    { number: 60, pashto: 'شپېته', farsi: 'شصت', pronunciation: 'shpéta' },
    { number: 70, pashto: 'اویا', farsi: 'هفتاد', pronunciation: 'awyā' },
    { number: 80, pashto: 'اتیا', farsi: 'هشتاد', pronunciation: 'atyā' },
    { number: 90, pashto: 'نوي', farsi: 'نود', pronunciation: 'nawí' },
    { number: 100, pashto: 'سل', farsi: 'صد', pronunciation: 'sal' },
  ],

  // اعداد ترکیبی (۲۱-۲۹ به عنوان نمونه)
  twenties: [
    { number: 21, pashto: 'یویشت', farsi: 'بیست و یک', pronunciation: 'yowísht' },
    { number: 22, pashto: 'دوه ویشت', farsi: 'بیست و دو', pronunciation: 'dwa wísht' },
    { number: 23, pashto: 'درې ویشت', farsi: 'بیست و سه', pronunciation: 'dre wísht' },
    { number: 24, pashto: 'څلور ویشت', farsi: 'بیست و چهار', pronunciation: 'tsalór wísht' },
    { number: 25, pashto: 'پنځه ویشت', farsi: 'بیست و پنج', pronunciation: 'pindzá wísht' },
  ],

  // اعداد بزرگ
  large: [
    { number: 100, pashto: 'سل', farsi: 'صد', pronunciation: 'sal' },
    { number: 200, pashto: 'دوه سوه', farsi: 'دویست', pronunciation: 'dwa swa' },
    { number: 1000, pashto: 'زر', farsi: 'هزار', pronunciation: 'zar' },
    { number: 10000, pashto: 'لس زره', farsi: 'ده هزار', pronunciation: 'las zára' },
    { number: 100000, pashto: 'سل زره', farsi: 'صد هزار', pronunciation: 'sal zára' },
    { number: 1000000, pashto: 'میلیون', farsi: 'میلیون', pronunciation: 'milyón' },
  ],

  // جملات با اعداد
  sentences: [
    {
      pashto: 'زه پنځه کاله لرم',
      farsi: 'من پنج سال دارم',
      pronunciation: 'za pindzá kāla laram',
    },
    {
      pashto: 'دا کتاب دوه سوه افغانۍ دی',
      farsi: 'این کتاب دویست افغانی است',
      pronunciation: 'dā kitāb dwa swa afghānəy day',
    },
    {
      pashto: 'زما درې وروڼه دي',
      farsi: 'من سه برادر دارم',
      pronunciation: 'zmā dre wroṇa di',
    },
    {
      pashto: 'ساعت څو ده؟',
      farsi: 'ساعت چند است؟',
      pronunciation: 'sā\'at tso da?',
    },
    {
      pashto: 'ساعت لس ده',
      farsi: 'ساعت ده است',
      pronunciation: 'sā\'at las da',
    },
  ],
};

export default numbers;
