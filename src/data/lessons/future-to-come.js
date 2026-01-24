export const futureToComeLessson = {
  id: 'future-to-come',
  title: 'خواهم آمد (به راځم)',
  titleFa: 'خواهم آمد (به راځم)',
  titlePashto: 'به راځم',
  description: 'فعل آمدن در زمان آینده',
  difficulty: 'medium',
  duration: '۲۵ دقیقه',
  content: [
    {
      type: 'intro',
      title: 'فعل آمدن در آینده',
      text: 'در این درس یاد می‌گیریم چگونه فعل "آمدن" را در زمان آینده استفاده کنیم.',
    },
    {
      type: 'conjugation',
      title: 'گردان فعل آمدن - آینده',
      conjugations: [
        { pronoun: 'زه', pashto: 'به راځم', english: 'I will come', example: 'زه فردا به راځم' },
        { pronoun: 'ته', pashto: 'به راځې', english: 'you will come', example: 'ته فردا به راځې' },
        { pronoun: 'هغه', pashto: 'به راځي', english: 'he/she will come', example: 'هغه فردا به راځي' },
        { pronoun: 'موږ', pashto: 'به راځو', english: 'we will come', example: 'موږ فردا به راځو' },
        { pronoun: 'تاسو', pashto: 'به راځئ', english: 'you (pl) will come', example: 'تاسو فردا به راځئ' },
        { pronoun: 'هغوی', pashto: 'به راځي', english: 'they will come', example: 'هغوی فردا به راځي' },
      ],
    },
    {
      type: 'examples',
      title: 'مثال‌های عملی',
      examples: [
        { pashto: 'زه فردا خانه ته به راځم', english: 'I will come home tomorrow', farsi: 'من فردا به خانه خواهم آمد' },
        { pashto: 'ته کار ته به راځې', english: 'You will come to work', farsi: 'تو به کار خواهی آمد' },
        { pashto: 'هغه مهمانۍ ته به راځي', english: 'He will come to the party', farsi: 'او به مهمانی خواهد آمد' },
        { pashto: 'موږ مکتب ته به راځو', english: 'We will come to school', farsi: 'ما به مدرسه خواهیم آمد' },
      ],
    },
    {
      type: 'practice',
      title: 'تمرین',
      exercises: [
        { question: 'زه فردا _____ ؟', options: ['به راځم', 'راځم', 'راغلم'], answer: 'به راځم' },
        { question: 'ته خانه ته _____ ؟', options: ['به راځې', 'راځې', 'راغلې'], answer: 'به راځې' },
        { question: 'هغه مهمانۍ ته _____ ؟', options: ['به راځي', 'راځي', 'راغل'], answer: 'به راځي' },
      ],
    },
  ],
};
