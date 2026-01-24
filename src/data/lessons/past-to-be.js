export const pastToBeLesson = {
  id: 'past-to-be',
  title: 'بودم (وم)',
  titleFa: 'بودم (وم)',
  titlePashto: 'وم',
  description: 'فعل بودن در زمان گذشته',
  difficulty: 'easy',
  duration: '۲۰ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل بودن در گذشته',
      text: 'در این درس یاد می‌گیریم چگونه فعل "بودن" را در زمان گذشته استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل بودن - گذشته',
      conjugations: [
        { pronoun: 'زه', pashto: 'وم', english: 'I was', example: 'زه خانه کې وم' },
        { pronoun: 'ته', pashto: 'وې', english: 'you were', example: 'ته خانه کې وې' },
        { pronoun: 'هغه', pashto: 'و', english: 'he/she was', example: 'هغه خانه کې و' },
        { pronoun: 'موږ', pashto: 'وو', english: 'we were', example: 'موږ خانه کې وو' },
        { pronoun: 'تاسو', pashto: 'وئ', english: 'you (pl) were', example: 'تاسو خانه کې وئ' },
        { pronoun: 'هغوی', pashto: 'و', english: 'they were', example: 'هغوی خانه کې و' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه دیروز خانه کې وم', english: 'I was at home yesterday', farsi: 'من دیروز در خانه بودم' },
        { pashto: 'ته مکتب کې وې', english: 'You were at school', farsi: 'تو در مدرسه بودی' },
        { pashto: 'هغه بازار کې و', english: 'He was at the market', farsi: 'او در بازار بود' },
        { pashto: 'موږ کار کې وو', english: 'We were at work', farsi: 'ما در کار بودیم' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه دیروز خانه کې _____ ؟', options: ['وم', 'یم', 'به یم'], answer: 'وم' },
        { question: 'ته مکتب کې _____ ؟', options: ['وې', 'یې', 'به یې'], answer: 'وې' },
        { question: 'هغه بازار کې _____ ؟', options: ['و', 'وي', 'به وي'], answer: 'و' },
      ],
    },
  ],
};
