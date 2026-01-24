export const futureToPourLesson = {
  id: 'future-to-pour',
  title: 'به اچم (آینده)',
  titleFa: 'خواهم ریخت (به اچم)',
  titlePashto: 'به اچم',
  description: 'فعل اچول (ریختن) در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل اچول در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "اچول" (ریختن) را در زمان آینده استفاده کنیم. برای آینده از "به" + فعل استفاده می‌شود.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل اچول - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به اچم', english: 'I will pour', example: 'زه برایت چای به اچم' },
        { pronoun: 'ته', pashto: 'به اچې', english: 'you will pour', example: 'ته آب به اچې' },
        { pronoun: 'هغه', pashto: 'به اچي', english: 'he/she will pour', example: 'هغه شیر به اچي' },
        { pronoun: 'موږ', pashto: 'به اچو', english: 'we will pour', example: 'موږ چای به اچو' },
        { pronoun: 'تاسو', pashto: 'به اچئ', english: 'you (pl) will pour', example: 'تاسو آب به اچئ' },
        { pronoun: 'هغوی', pashto: 'به اچي', english: 'they will pour', example: 'هغوی شربت به اچي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا برایت چای به اچم', english: 'I will pour tea for you tomorrow', farsi: 'من فردا برایت چای خواهم ریخت' },
        { pashto: 'ته آب به اچې', english: 'You will pour water', farsi: 'تو آب خواهی ریخت' },
        { pashto: 'هغه شیر به اچي', english: 'He will pour milk', farsi: 'او شیر خواهد ریخت' },
        { pashto: 'موږ چای به اچو', english: 'We will pour tea', farsi: 'ما چای خواهیم ریخت' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا برایت چای _____ ؟', options: ['به اچم', 'اچم', 'واچم'], answer: 'به اچم' },
        { question: 'ته آب _____ ؟', options: ['به اچې', 'اچې', 'واچې'], answer: 'به اچې' },
        { question: 'هغه شیر _____ ؟', options: ['به اچي', 'اچي', 'واچ'], answer: 'به اچي' },
      ],
    },
  ],
};
