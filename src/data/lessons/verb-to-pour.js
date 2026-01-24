export const verbToPourLesson = {
  id: 'verb-to-pour',
  title: 'فعل ریختن (ریختم)',
  titleFa: 'فعل ریختن (ریختم)',
  titlePashto: 'ریختم',
  description: 'فعل ریختن در زمان حال',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل ریختن در حال',
      text: 'در این درس یاد می‌گیریم چگونه فعل "ریختن" را در زمان حال استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل ریختن - حال',
      conjugations: [
        { pronoun: 'زه', pashto: 'ریختم', english: 'I pour', example: 'زه آب ریختم' },
        { pronoun: 'ته', pashto: 'ریختې', english: 'you pour', example: 'ته آب ریختې' },
        { pronoun: 'هغه', pashto: 'ریخته', english: 'he/she pours', example: 'هغه آب ریخته' },
        { pronoun: 'موږ', pashto: 'ریختو', english: 'we pour', example: 'موږ آب ریختو' },
        { pronoun: 'تاسو', pashto: 'ریختئ', english: 'you (pl) pour', example: 'تاسو آب ریختئ' },
        { pronoun: 'هغوی', pashto: 'ریخته', english: 'they pour', example: 'هغوی آب ریخته' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه چای ریختم', english: 'I pour tea', farsi: 'من چای می‌ریزم' },
        { pashto: 'ته آب ریختې', english: 'You pour water', farsi: 'تو آب می‌ریزی' },
        { pashto: 'هغه شیر ریخته', english: 'He pours milk', farsi: 'او شیر می‌ریزد' },
        { pashto: 'موږ شربت ریختو', english: 'We pour juice', farsi: 'ما آب میوه می‌ریزیم' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه چای _____ ؟', options: ['ریختم', 'ریخته', 'ریخت'], answer: 'ریختم' },
        { question: 'ته آب _____ ؟', options: ['ریختې', 'ریخته', 'ریخت'], answer: 'ریختې' },
        { question: 'هغه شیر _____ ؟', options: ['ریخته', 'ریختم', 'ریختې'], answer: 'ریخته' },
      ],
    },
  ],
};
