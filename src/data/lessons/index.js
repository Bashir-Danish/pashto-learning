// Lesson imports - organized by category
// ۱. مقدماتی (Basics)
import { alphabetIntroLesson } from './alphabet-intro';
import { uniqueLettersLesson } from './unique-letters';
import { kandahariSoundsLesson } from './kandahari-sounds';
import { vowelsLesson } from './vowels';
import { numbers1to10Lesson } from './numbers-1-10';

// ۲. سلام و احوالپرسی (Greetings)
import { basicGreetingsLesson } from './basic-greetings';
import { howAreYouLesson } from './how-are-you';
import { introductionsLesson } from './introductions';
import { formalInformalLesson } from './formal-informal';

// ۳. ضمایر و پایه‌ها (Pronouns & Basics)
import { pronounsLesson } from './pronouns';
import { possessivePronounsLesson } from './possessive-pronouns';
import { demonstrativesLesson } from './demonstratives';
import { sentenceStructureLesson } from './sentence-structure';

// ۴. فعل حال (Present Tense Verbs)
import { verbToBeLesson } from './verb-to-be';
import { verbToGoLesson } from './verb-to-go';
import { verbToComeLesson } from './verb-to-come';
import { verbToEatLesson } from './verb-to-eat';
import { verbToDrinkLesson } from './verb-to-drink';
import { verbToDoLesson } from './verb-to-do';
import { verbToPourLesson } from './verb-to-pour';
import { verbToWantLesson } from './verb-to-want';
import { modalVerbsLesson } from './modal-verbs';
import { transitiveVerbsLesson } from './transitive-verbs';

// ۴.۵ فعل‌های جامع (Comprehensive Verbs - All Tenses)
import { comprehensiveVerbsLesson } from './comprehensive-verbs';

// ۵. واژگان پایه (Basic Vocabulary)
import { familyLesson } from './family';
import { numbers11to100Lesson } from './numbers-11-100';
import { foodLesson } from './food';
import { bodyPartsLesson } from './body-parts';
import { colorsLesson } from './colors';
import { daysMonthsLesson } from './days-months';

// ۶. فعل گذشته (Past Tense Verbs)
import { pastSimpleLesson } from './past-simple';
import { pastToBeLesson } from './past-to-be';
import { pastToGoLesson } from './past-to-go';
import { pastToComeLesson } from './past-to-come';
import { pastToEatLesson } from './past-to-eat';
import { pastToDrinkLesson } from './past-to-drink';
import { pastToDoLesson } from './past-to-do';
import { pastToPourLesson } from './past-to-pour';
import { pastToSeeLesson } from './past-to-see';

// ۷. دستور زبان میانی (Intermediate Grammar)
import { genderLesson } from './gender';
import { pluralLesson } from './plural';
import { adjectivesLesson } from './adjectives';
import { prepositionsLesson } from './prepositions';
import { questionsLesson } from './questions';
import { negationLesson } from './negation';

// ۸. فعل آینده و امری (Future & Imperative)
import { futureTenseLesson } from './future-tense';
import { futureToBeLesson } from './future-to-be';
import { futureToGoLesson } from './future-to-go';
import { futureToComeLessson } from './future-to-come';
import { futureToEatLesson } from './future-to-eat';
import { futureToDrinkLesson } from './future-to-drink';
import { futureToDoLesson } from './future-to-do';
import { futureToPourLesson } from './future-to-pour';
import { imperativeLesson } from './imperative';
import { imperativeFormalLesson } from './imperative-formal';
import { requestsLesson } from './requests';

// ۹. مکالمات روزمره (Daily Conversations)
import { convShoppingLesson } from './conv-shopping';
import { convRestaurantLesson } from './conv-restaurant';
import { convTaxiLesson } from './conv-taxi';
import { convPhoneLesson } from './conv-phone';
import { convDoctorLesson } from './conv-doctor';
import { convGuestLesson } from './conv-guest';

// ۱۰. پیشرفته (Advanced)
import { retroflexLesson } from './retroflex';
import { idiomsLesson } from './idioms';
import { proverbsLesson } from './proverbs';
import { kandahariSlangLesson } from './kandahari-slang';
import { advancedFoodCookingLesson } from './advanced-food-cooking';
import { advancedBodyPartsLesson } from './advanced-body-parts';

import categoriesData from '../categories.json';

// All lessons organized by category order
export const lessons = [
  // ۱. مقدماتی
  alphabetIntroLesson,
  uniqueLettersLesson,
  kandahariSoundsLesson,
  vowelsLesson,
  numbers1to10Lesson,
  
  // ۲. سلام و احوالپرسی
  basicGreetingsLesson,
  howAreYouLesson,
  introductionsLesson,
  formalInformalLesson,
  
  // ۳. ضمایر و پایه‌ها
  pronounsLesson,
  possessivePronounsLesson,
  demonstrativesLesson,
  sentenceStructureLesson,
  
  // ۴. فعل حال
  verbToBeLesson,
  verbToGoLesson,
  verbToComeLesson,
  verbToEatLesson,
  verbToDrinkLesson,
  verbToDoLesson,
  verbToPourLesson,
  verbToWantLesson,
  modalVerbsLesson,
  transitiveVerbsLesson,
  comprehensiveVerbsLesson,
  
  // ۵. واژگان پایه
  familyLesson,
  numbers11to100Lesson,
  foodLesson,
  bodyPartsLesson,
  colorsLesson,
  daysMonthsLesson,
  
  // ۶. فعل گذشته
  pastSimpleLesson,
  pastToBeLesson,
  pastToGoLesson,
  pastToComeLesson,
  pastToEatLesson,
  pastToDrinkLesson,
  pastToDoLesson,
  pastToPourLesson,
  pastToSeeLesson,
  
  // ۷. دستور زبان میانی
  genderLesson,
  pluralLesson,
  adjectivesLesson,
  prepositionsLesson,
  questionsLesson,
  negationLesson,
  
  // ۸. فعل آینده و امری
  futureTenseLesson,
  futureToBeLesson,
  futureToGoLesson,
  futureToComeLessson,
  futureToEatLesson,
  futureToDrinkLesson,
  futureToDoLesson,
  futureToPourLesson,
  imperativeLesson,
  imperativeFormalLesson,
  requestsLesson,
  
  // ۹. مکالمات روزمره
  convShoppingLesson,
  convRestaurantLesson,
  convTaxiLesson,
  convPhoneLesson,
  convDoctorLesson,
  convGuestLesson,
  
  // ۱۰. پیشرفته
  retroflexLesson,
  idiomsLesson,
  proverbsLesson,
  kandahariSlangLesson,
  advancedFoodCookingLesson,
  advancedBodyPartsLesson,
];

// Get lesson by ID
export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === id);
}

// Get all lessons in a category
export function getLessonsByCategory(categoryId) {
  const category = categoriesData.categories.find(c => c.id === categoryId);
  if (!category) return [];
  return category.lessons.map(l => getLessonById(l.id)).filter(Boolean);
}

// Get next lesson
export function getNextLesson(currentId) {
  const allLessonIds = categoriesData.categories.flatMap(c => c.lessons.map(l => l.id));
  const currentIndex = allLessonIds.indexOf(currentId);
  if (currentIndex === -1 || currentIndex === allLessonIds.length - 1) return null;
  
  const nextId = allLessonIds[currentIndex + 1];
  return getLessonById(nextId) || { id: nextId, title: categoriesData.categories
    .flatMap(c => c.lessons)
    .find(l => l.id === nextId)?.title || nextId };
}

// Get previous lesson
export function getPrevLesson(currentId) {
  const allLessonIds = categoriesData.categories.flatMap(c => c.lessons.map(l => l.id));
  const currentIndex = allLessonIds.indexOf(currentId);
  if (currentIndex <= 0) return null;
  
  const prevId = allLessonIds[currentIndex - 1];
  return getLessonById(prevId) || { id: prevId, title: categoriesData.categories
    .flatMap(c => c.lessons)
    .find(l => l.id === prevId)?.title || prevId };
}

// Get lesson progress info
export function getLessonProgress(lessonId) {
  const allLessonIds = categoriesData.categories.flatMap(c => c.lessons.map(l => l.id));
  const currentIndex = allLessonIds.indexOf(lessonId);
  return {
    current: currentIndex + 1,
    total: allLessonIds.length,
    percentage: Math.round(((currentIndex + 1) / allLessonIds.length) * 100)
  };
}

export default lessons;
