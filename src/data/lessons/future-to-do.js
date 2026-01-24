export const futureToDoLesson = {
  id: 'future-to-do',
  title: 'خواهم کرد (به کوم)',
  titleFa: 'خواهم کرد (به کوم)',
  titlePashto: 'به کوم',
  description: 'فعل کردن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل کردن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "کردن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل کردن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به کوم', english: 'I will do', example: 'زه کار به کوم' },
        { pronoun: 'ته', pashto: 'به کوي', english: 'you will do', example: 'ته کار به کوي' },
        { pronoun: 'هغه', pashto: 'به کوي', english: 'he/she will do', example: 'هغه کار به کوي' },
        { pronoun: 'موږ', pashto: 'به کویو', english: 'we will do', example: 'موږ کار به کویو' },
        { pronoun: 'تاسو', pashto: 'به کوئ', english: 'you (pl) will do', example: 'تاسو کار به کوئ' },
        { pronoun: 'هغوی', pashto: 'به کوي', english: 'they will do', example: 'هغوی کار به کوي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا کار به کوم', english: 'I will do work tomorrow', farsi: 'من فردا کار خواهم کرد' },
        { pashto: 'ته تکالیف به کوي', english: 'You will do homework', farsi: 'تو تکالیف خواهی کرد' },
        { pashto: 'هغه ورزش به کوي', english: 'He will do exercise', farsi: 'او ورزش خواهد کرد' },
        { pashto: 'موږ پروژه به کویو', english: 'We will do a project', farsi: 'ما پروژه خواهیم کرد' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا _____ ؟', options: ['به کوم', 'کوم', 'وکړم'], answer: 'به کوم' },
        { question: 'ته تکالیف _____ ؟', options: ['به کوي', 'کوي', 'وکړې'], answer: 'به کوي' },
        { question: 'هغه ورزش _____ ؟', options: ['به کوي', 'کوي', 'وکړ'], answer: 'به کوي' },
      ],
    },
  ],
};
