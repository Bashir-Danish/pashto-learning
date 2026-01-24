export const pastToPourLesson = {
  id: 'past-to-pour',
  title: 'ریختم (وریخت)',
  titleFa: 'ریختم (وریخت)',
  titlePashto: 'وریخت',
  description: 'فعل ریختن در زمان گذشته',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل ریختن در گذشته',
      text: 'در این درس یاد می‌گیریم چگونه فعل "ریختن" را در زمان گذشته استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل ریختن - گذشته',
      conjugations: [
        { pronoun: 'زه', pashto: 'وریختم', english: 'I poured', example: 'زه چای وریختم' },
        { pronoun: 'ته', pashto: 'وریختې', english: 'you poured', example: 'ته چای وریختې' },
        { pronoun: 'هغه', pashto: 'وریخت', english: 'he/she poured', example: 'هغه چای وریخت' },
        { pronoun: 'موږ', pashto: 'وریختو', english: 'we poured', example: 'موږ چای وریختو' },
        { pronoun: 'تاسو', pashto: 'وریختئ', english: 'you (pl) poured', example: 'تاسو چای وریختئ' },
        { pronoun: 'هغوی', pashto: 'وریختل', english: 'they poured', example: 'هغوی چای وریختل' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه دیروز چای وریختم', english: 'I poured tea yesterday', farsi: 'من دیروز چای ریختم' },
        { pashto: 'ته آب وریختې', english: 'You poured water', farsi: 'تو آب ریختی' },
        { pashto: 'هغه شیر وریخت', english: 'He poured milk', farsi: 'او شیر ریخت' },
        { pashto: 'موږ شربت وریختو', english: 'We poured juice', farsi: 'ما آب میوه ریختیم' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه دیروز چای _____ ؟', options: ['وریختم', 'ریختم', 'به ریختم'], answer: 'وریختم' },
        { question: 'ته آب _____ ؟', options: ['وریختې', 'ریختې', 'به ریختې'], answer: 'وریختې' },
        { question: 'هغه شیر _____ ؟', options: ['وریخت', 'ریخته', 'به ریخته'], answer: 'وریخت' },
      ],
    },
  ],
};
