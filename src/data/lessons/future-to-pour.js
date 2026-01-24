export const futureToPourLesson = {
  id: 'future-to-pour',
  title: 'خواهم ریخت (به ریختم)',
  titleFa: 'خواهم ریخت (به ریختم)',
  titlePashto: 'به ریختم',
  description: 'فعل ریختن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل ریختن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "ریختن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل ریختن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به ریختم', english: 'I will pour', example: 'زه چای به ریختم' },
        { pronoun: 'ته', pashto: 'به ریختې', english: 'you will pour', example: 'ته چای به ریختې' },
        { pronoun: 'هغه', pashto: 'به ریخته', english: 'he/she will pour', example: 'هغه چای به ریخته' },
        { pronoun: 'موږ', pashto: 'به ریختو', english: 'we will pour', example: 'موږ چای به ریختو' },
        { pronoun: 'تاسو', pashto: 'به ریختئ', english: 'you (pl) will pour', example: 'تاسو چای به ریختئ' },
        { pronoun: 'هغوی', pashto: 'به ریخته', english: 'they will pour', example: 'هغوی چای به ریخته' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا چای به ریختم', english: 'I will pour tea tomorrow', farsi: 'من فردا چای خواهم ریخت' },
        { pashto: 'ته آب به ریختې', english: 'You will pour water', farsi: 'تو آب خواهی ریخت' },
        { pashto: 'هغه شیر به ریخته', english: 'He will pour milk', farsi: 'او شیر خواهد ریخت' },
        { pashto: 'موږ شربت به ریختو', english: 'We will pour juice', farsi: 'ما آب میوه خواهیم ریخت' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا چای _____ ؟', options: ['به ریختم', 'ریختم', 'وریختم'], answer: 'به ریختم' },
        { question: 'ته آب _____ ؟', options: ['به ریختې', 'ریختې', 'وریختې'], answer: 'به ریختې' },
        { question: 'هغه شیر _____ ؟', options: ['به ریخته', 'ریخته', 'وریخت'], answer: 'به ریخته' },
      ],
    },
  ],
};
