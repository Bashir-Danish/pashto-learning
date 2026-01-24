export const futureToGoLesson = {
  id: 'future-to-go',
  title: 'خواهم رفت (به ځم)',
  titleFa: 'خواهم رفت (به ځم)',
  titlePashto: 'به ځم',
  description: 'فعل رفتن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل رفتن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "رفتن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل رفتن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به ځم', english: 'I will go', example: 'زه بازار ته به ځم' },
        { pronoun: 'ته', pashto: 'به ځې', english: 'you will go', example: 'ته بازار ته به ځې' },
        { pronoun: 'هغه', pashto: 'به ځي', english: 'he/she will go', example: 'هغه بازار ته به ځي' },
        { pronoun: 'موږ', pashto: 'به ځو', english: 'we will go', example: 'موږ بازار ته به ځو' },
        { pronoun: 'تاسو', pashto: 'به ځئ', english: 'you (pl) will go', example: 'تاسو بازار ته به ځئ' },
        { pronoun: 'هغوی', pashto: 'به ځي', english: 'they will go', example: 'هغوی بازار ته به ځي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا کابل ته به ځم', english: 'I will go to Kabul tomorrow', farsi: 'من فردا به کابل خواهم رفت' },
        { pashto: 'ته مکتب ته به ځې', english: 'You will go to school', farsi: 'تو به مدرسه خواهی رفت' },
        { pashto: 'هغه کار ته به ځي', english: 'He will go to work', farsi: 'او به کار خواهد رفت' },
        { pashto: 'موږ بازار ته به ځو', english: 'We will go to the market', farsi: 'ما به بازار خواهیم رفت' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا کابل ته _____ ؟', options: ['به ځم', 'ځم', 'لاړم'], answer: 'به ځم' },
        { question: 'ته مکتب ته _____ ؟', options: ['به ځې', 'ځې', 'لاړې'], answer: 'به ځې' },
        { question: 'هغه کار ته _____ ؟', options: ['به ځي', 'ځي', 'لاړ'], answer: 'به ځي' },
      ],
    },
  ],
};
