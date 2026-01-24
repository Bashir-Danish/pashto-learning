export const futureToDrinkLesson = {
  id: 'future-to-drink',
  title: 'خواهم نوشید (به څښم)',
  titleFa: 'خواهم نوشید (به څښم)',
  titlePashto: 'به څښم',
  description: 'فعل نوشیدن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل نوشیدن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "نوشیدن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل نوشیدن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به څښم', english: 'I will drink', example: 'زه آب به څښم' },
        { pronoun: 'ته', pashto: 'به څښي', english: 'you will drink', example: 'ته آب به څښي' },
        { pronoun: 'هغه', pashto: 'به څښي', english: 'he/she will drink', example: 'هغه آب به څښي' },
        { pronoun: 'موږ', pashto: 'به څښیو', english: 'we will drink', example: 'موږ آب به څښیو' },
        { pronoun: 'تاسو', pashto: 'به څښئ', english: 'you (pl) will drink', example: 'تاسو آب به څښئ' },
        { pronoun: 'هغوی', pashto: 'به څښي', english: 'they will drink', example: 'هغوی آب به څښي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه چای به څښم', english: 'I will drink tea', farsi: 'من چای خواهم نوشید' },
        { pashto: 'ته آب به څښي', english: 'You will drink water', farsi: 'تو آب خواهی نوشید' },
        { pashto: 'هغه شیر به څښي', english: 'He will drink milk', farsi: 'او شیر خواهد نوشید' },
        { pashto: 'موږ شربت به څښیو', english: 'We will drink juice', farsi: 'ما آب میوه خواهیم نوشید' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه چای _____ ؟', options: ['به څښم', 'څښم', 'وڅښم'], answer: 'به څښم' },
        { question: 'ته آب _____ ؟', options: ['به څښي', 'څښي', 'وڅښې'], answer: 'به څښي' },
        { question: 'هغه شیر _____ ؟', options: ['به څښي', 'څښي', 'وڅښ'], answer: 'به څښي' },
      ],
    },
  ],
};
