export const PastToDrinkLesson = {
  id: 'past-to-drink',
  title: 'نوشیدم (وڅښم)',
  titleFa: 'نوشیدم (وڅښم)',
  titlePashto: 'وڅښم',
  description: 'فعل نوشیدن در زمان گذشته',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل نوشیدن در گذشته',
      text: 'در این درس یاد می‌گیریم چگونه فعل "نوشیدن" را در زمان گذشته استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل نوشیدن - گذشته',
      conjugations: [
        { pronoun: 'زه', pashto: 'وڅښم', english: 'I drank', example: 'زه چای وڅښم' },
        { pronoun: 'ته', pashto: 'وڅښې', english: 'you drank', example: 'ته چای وڅښې' },
        { pronoun: 'هغه', pashto: 'وڅښ', english: 'he/she drank', example: 'هغه چای وڅښ' },
        { pronoun: 'موږ', pashto: 'وڅښو', english: 'we drank', example: 'موږ چای وڅښو' },
        { pronoun: 'تاسو', pashto: 'وڅښئ', english: 'you (pl) drank', example: 'تاسو چای وڅښئ' },
        { pronoun: 'هغوی', pashto: 'وڅښل', english: 'they drank', example: 'هغوی چای وڅښل' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه دیروز چای وڅښم', english: 'I drank tea yesterday', farsi: 'من دیروز چای نوشیدم' },
        { pashto: 'ته آب وڅښې', english: 'You drank water', farsi: 'تو آب نوشیدی' },
        { pashto: 'هغه شیر وڅښ', english: 'He drank milk', farsi: 'او شیر نوشید' },
        { pashto: 'موږ شربت وڅښو', english: 'We drank juice', farsi: 'ما آب میوه نوشیدیم' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه دیروز چای _____ ؟', options: ['وڅښم', 'څښم', 'به څښم'], answer: 'وڅښم' },
        { question: 'ته آب _____ ؟', options: ['وڅښې', 'څښې', 'به څښي'], answer: 'وڅښې' },
        { question: 'هغه شیر _____ ؟', options: ['وڅښ', 'څښ', 'به څښي'], answer: 'وڅښ' },
      ],
    },
  ],
};
