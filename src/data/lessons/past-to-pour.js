export const pastToPourLesson = {
  id: 'past-to-pour',
  title: 'واچم (گذشته)',
  titleFa: 'ریختم (واچم)',
  titlePashto: 'واچم',
  description: 'فعل اچول (ریختن) در زمان گذشته',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل اچول در گذشته',
      text: 'در این درس یاد می‌گیریم چگونه فعل "اچول" (ریختن) را در زمان گذشته استفاده کنیم. در پشتو، پیشوند "و" نشانه گذشته است.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل اچول - گذشته',
      conjugations: [
        { pronoun: 'زه', pashto: 'واچم', english: 'I poured', example: 'زه برایت چای واچم' },
        { pronoun: 'ته', pashto: 'واچې', english: 'you poured', example: 'ته آب واچې' },
        { pronoun: 'هغه', pashto: 'واچ', english: 'he/she poured', example: 'هغه شیر واچ' },
        { pronoun: 'موږ', pashto: 'واچو', english: 'we poured', example: 'موږ چای واچو' },
        { pronoun: 'تاسو', pashto: 'واچئ', english: 'you (pl) poured', example: 'تاسو آب واچئ' },
        { pronoun: 'هغوی', pashto: 'واچل', english: 'they poured', example: 'هغوی شربت واچل' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه دیروز برایت چای واچم', english: 'I poured tea for you yesterday', farsi: 'من دیروز برایت چای ریختم' },
        { pashto: 'ته آب واچې', english: 'You poured water', farsi: 'تو آب ریختی' },
        { pashto: 'هغه شیر واچ', english: 'He poured milk', farsi: 'او شیر ریخت' },
        { pashto: 'موږ چای واچو', english: 'We poured tea', farsi: 'ما چای ریختیم' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه برایت چای _____ ؟', options: ['واچم', 'اچم', 'به اچم'], answer: 'واچم' },
        { question: 'ته آب _____ ؟', options: ['واچې', 'اچې', 'به اچې'], answer: 'واچې' },
        { question: 'هغه شیر _____ ؟', options: ['واچ', 'اچي', 'به اچي'], answer: 'واچ' },
      ],
    },
  ],
};
