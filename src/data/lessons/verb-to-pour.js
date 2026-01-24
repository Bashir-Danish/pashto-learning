export const verbToPourLesson = {
  id: 'verb-to-pour',
  title: 'فعل اچول (اچم)',
  titleFa: 'فعل ریختن (اچم)',
  titlePashto: 'اچم',
  description: 'فعل اچول (ریختن) در زمان حال',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل اچول در حال',
      text: 'در این درس یاد می‌گیریم چگونه فعل "اچول" (ریختن) را در زمان حال استفاده کنیم. این فعل برای ریختن مایعات مثل چای، آب و شیر استفاده می‌شود.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل اچول - حال',
      conjugations: [
        { pronoun: 'زه', pashto: 'اچم', english: 'I pour', example: 'زه برایت چای اچم' },
        { pronoun: 'ته', pashto: 'اچې', english: 'you pour', example: 'ته آب اچې' },
        { pronoun: 'هغه', pashto: 'اچي', english: 'he/she pours', example: 'هغه شیر اچي' },
        { pronoun: 'موږ', pashto: 'اچو', english: 'we pour', example: 'موږ چای اچو' },
        { pronoun: 'تاسو', pashto: 'اچئ', english: 'you (pl) pour', example: 'تاسو آب اچئ' },
        { pronoun: 'هغوی', pashto: 'اچي', english: 'they pour', example: 'هغوی شربت اچي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'برایت چای اچم؟', english: 'Shall I pour tea for you?', farsi: 'برایت چای بریزم؟' },
        { pashto: 'ته آب اچې', english: 'You pour water', farsi: 'تو آب می‌ریزی' },
        { pashto: 'هغه شیر اچي', english: 'He pours milk', farsi: 'او شیر می‌ریزد' },
        { pashto: 'موږ چای اچو', english: 'We pour tea', farsi: 'ما چای می‌ریزیم' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'برایت چای _____ ؟', options: ['اچم', 'اچي', 'واچ'], answer: 'اچم' },
        { question: 'ته آب _____ ؟', options: ['اچې', 'اچي', 'واچ'], answer: 'اچې' },
        { question: 'هغه شیر _____ ؟', options: ['اچي', 'اچم', 'اچې'], answer: 'اچي' },
      ],
    },
  ],
};
