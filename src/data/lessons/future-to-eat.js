export const futureToEatLesson = {
  id: 'future-to-eat',
  title: 'خواهم خورد (به خورم)',
  titleFa: 'خواهم خورد (به خورم)',
  titlePashto: 'به خورم',
  description: 'فعل خوردن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل خوردن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "خوردن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل خوردن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به خورم', english: 'I will eat', example: 'زه فردا به خورم' },
        { pronoun: 'ته', pashto: 'به خوري', english: 'you will eat', example: 'ته فردا به خوري' },
        { pronoun: 'هغه', pashto: 'به خوري', english: 'he/she will eat', example: 'هغه فردا به خوري' },
        { pronoun: 'موږ', pashto: 'به خوریو', english: 'we will eat', example: 'موږ فردا به خوریو' },
        { pronoun: 'تاسو', pashto: 'به خورئ', english: 'you (pl) will eat', example: 'تاسو فردا به خورئ' },
        { pronoun: 'هغوی', pashto: 'به خوري', english: 'they will eat', example: 'هغوی فردا به خوري' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا غذا به خورم', english: 'I will eat food tomorrow', farsi: 'من فردا غذا خواهم خورد' },
        { pashto: 'ته نان به خوري', english: 'You will eat bread', farsi: 'تو نان خواهی خورد' },
        { pashto: 'هغه میوه به خوري', english: 'He will eat fruit', farsi: 'او میوه خواهد خورد' },
        { pashto: 'موږ ناشتا به خوریو', english: 'We will eat breakfast', farsi: 'ما صبحانه خواهیم خورد' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا _____ ؟', options: ['به خورم', 'خورم', 'وخوړم'], answer: 'به خورم' },
        { question: 'ته نان _____ ؟', options: ['به خوري', 'خوري', 'وخوړې'], answer: 'به خوري' },
        { question: 'هغه میوه _____ ؟', options: ['به خوري', 'خوري', 'وخوړ'], answer: 'به خوري' },
      ],
    },
  ],
};
