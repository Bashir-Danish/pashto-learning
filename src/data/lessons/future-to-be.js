export const futureToBeLesson = {
  id: 'future-to-be',
  title: 'خواهم بود (به یم)',
  titleFa: 'خواهم بود (به یم)',
  titlePashto: 'به یم',
  description: 'فعل بودن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل بودن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "بودن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل بودن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به یم', english: 'I will be', example: 'زه معلم به یم' },
        { pronoun: 'ته', pashto: 'به یې', english: 'you will be', example: 'ته معلم به یې' },
        { pronoun: 'هغه', pashto: 'به وي', english: 'he/she will be', example: 'هغه معلم به وي' },
        { pronoun: 'موږ', pashto: 'به یو', english: 'we will be', example: 'موږ معلمان به یو' },
        { pronoun: 'تاسو', pashto: 'به یاست', english: 'you (pl) will be', example: 'تاسو معلمان به یاست' },
        { pronoun: 'هغوی', pashto: 'به وي', english: 'they will be', example: 'هغوی معلمان به وي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا خانه کې به یم', english: 'I will be at home tomorrow', farsi: 'من فردا در خانه خواهم بود' },
        { pashto: 'ته کار کې به یې', english: 'You will be at work', farsi: 'تو در کار خواهی بود' },
        { pashto: 'هغه بازار کې به وي', english: 'He will be at the market', farsi: 'او در بازار خواهد بود' },
        { pashto: 'موږ مکتب کې به یو', english: 'We will be at school', farsi: 'ما در مدرسه خواهیم بود' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا کجا _____ ؟', options: ['به یم', 'یم', 'وم'], answer: 'به یم' },
        { question: 'ته کار کې _____ ؟', options: ['به یې', 'یې', 'وې'], answer: 'به یې' },
        { question: 'هغه خانه کې _____ ؟', options: ['به وي', 'وي', 'یم'], answer: 'به وي' },
      ],
    },
  ],
};
