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

// ۶. راهنمای جامع افعال (Comprehensive Verb Guide)
import { verbsUnifiedRulesLesson } from './verbs-unified-rules';
import { verbCompToBeLesson } from './verb-comp-to-be';
import { verbCompToGoLesson } from './verb-comp-to-go';
import { verbCompToComeLesson } from './verb-comp-to-come';
import { verbCompToEatLesson } from './verb-comp-to-eat';
import { verbCompToDrinkLesson } from './verb-comp-to-drink';
import { verbCompToDoLesson } from './verb-comp-to-do';
import { verbCompToWantLesson } from './verb-comp-to-want';
import { verbCompToSeeLesson } from './verb-comp-to-see';
import { verbCompToSayLesson } from './verb-comp-to-say';
import { verbCompToHearLesson } from './verb-comp-to-hear';
import { verbCompToWriteLesson } from './verb-comp-to-write';
import { verbCompToReadLesson } from './verb-comp-to-read';
import { verbCompToHaveLesson } from './verb-comp-to-have';
import { verbCompToHitLesson } from './verb-comp-to-hit';
import { verbCompToWashLesson } from './verb-comp-to-wash';
import { verbCompToGiveLesson } from './verb-comp-to-give';
import { verbCompToTakeLesson } from './verb-comp-to-take';
import { verbCompToStandLesson } from './verb-comp-to-stand';
import { verbCompToRunLesson } from './verb-comp-to-run';
import { verbCompToCloseLesson } from './verb-comp-to-close';
import { verbCompToOpenLesson } from './verb-comp-to-open';
import { verbCompToCarryLesson } from './verb-comp-to-carry';
import { verbCompToBringLesson } from './verb-comp-to-bring';
import { verbCompToUnderstandLesson } from './verb-comp-to-understand';
import { verbCompToSitLesson } from './verb-comp-to-sit';
import { verbCompToSleepLesson } from './verb-comp-to-sleep';
import { verbCompToBecomeLesson } from './verb-comp-to-become';
import { verbCompToLoveLesson } from './verb-comp-to-love';
import { verbCompToWorkLesson } from './verb-comp-to-work';
import { verbCompToSpeakLesson } from './verb-comp-to-speak';
import { verbCompToLiveLesson } from './verb-comp-to-live';
import { verbCompToLearnLesson } from './verb-comp-to-learn';
import { verbCompToArriveLesson } from './verb-comp-to-arrive';
import { verbCompToWakeUpLesson } from './verb-comp-to-wake-up';
import { verbCompToWalkLesson } from './verb-comp-to-walk';
import { verbCompToPourLesson } from './verb-comp-to-pour';
import { verbCompToLeaveLesson } from './verb-comp-to-leave';
import { verbCompToStartLesson } from './verb-comp-to-start';
import { verbCompToExtractLesson } from './verb-comp-to-extract';
import { comprehensiveVerbsLesson } from './comprehensive-verbs';

// سایر درس‌ها
import { familyLesson } from './family';
import { numbers11to100Lesson } from './numbers-11-100';
import { foodLesson } from './food';
import { bodyPartsLesson } from './body-parts';
import { colorsLesson } from './colors';
import { daysMonthsLesson } from './days-months';
import { householdObjectsLesson } from './household-objects';
import { clothingAppearanceLesson } from './clothing-appearance';
import { cityLocationsLesson } from './city-locations';
import { emotionsFeelingsLesson } from './emotions-feelings';
import { weatherNatureLesson } from './weather-nature';
import { genderLesson } from './gender';
import { pluralLesson } from './plural';
import { adjectivesLesson } from './adjectives';
import { prepositionsLesson } from './prepositions';
import { questionsLesson } from './questions';
import { negationLesson } from './negation';
import { directionalPrefixesLesson } from './directional-prefixes';
import { obliqueCaseLesson } from './oblique-case';
import { vocativeCaseLesson } from './vocative-case';
import { requestsLesson } from './requests';
import { convShoppingLesson } from './conv-shopping';
import { convRestaurantLesson } from './conv-restaurant';
import { convTaxiLesson } from './conv-taxi';
import { convPhoneLesson } from './conv-phone';
import { convDoctorLesson } from './conv-doctor';
import { convGuestLesson } from './conv-guest';
import { convMarketDisputeLesson } from './conv-market-dispute';
import { convJobInterviewLesson } from './conv-job-interview';
import { convDirectionsLesson } from './conv-directions';
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

  // ۶. راهنمای جامع افعال
  verbsUnifiedRulesLesson,
  verbCompToBeLesson,
  verbCompToGoLesson,
  verbCompToComeLesson,
  verbCompToStandLesson,
  verbCompToSitLesson,
  verbCompToSleepLesson,
  verbCompToBecomeLesson,
  verbCompToUnderstandLesson,
  verbCompToArriveLesson,
  verbCompToWakeUpLesson,
  verbCompToWalkLesson,
  verbCompToEatLesson,
  verbCompToDrinkLesson,
  verbCompToDoLesson,
  verbCompToWantLesson,
  verbCompToSeeLesson,
  verbCompToSayLesson,
  verbCompToHearLesson,
  verbCompToWriteLesson,
  verbCompToReadLesson,
  verbCompToHaveLesson,
  verbCompToHitLesson,
  verbCompToWashLesson,
  verbCompToGiveLesson,
  verbCompToTakeLesson,
  verbCompToRunLesson,
  verbCompToCloseLesson,
  verbCompToOpenLesson,
  verbCompToCarryLesson,
  verbCompToBringLesson,
  verbCompToLoveLesson,
  verbCompToWorkLesson,
  verbCompToSpeakLesson,
  verbCompToLiveLesson,
  verbCompToLearnLesson,
  verbCompToPourLesson,
  verbCompToLeaveLesson,
  verbCompToStartLesson,
  verbCompToExtractLesson,
  comprehensiveVerbsLesson,

  // ۵. واژگان پایه
  familyLesson,
  numbers11to100Lesson,
  foodLesson,
  bodyPartsLesson,
  colorsLesson,
  daysMonthsLesson,
  householdObjectsLesson,
  clothingAppearanceLesson,
  cityLocationsLesson,
  emotionsFeelingsLesson,
  weatherNatureLesson,

  // ۷. دستور زبان میانی
  genderLesson,
  pluralLesson,
  adjectivesLesson,
  prepositionsLesson,
  questionsLesson,
  negationLesson,
  directionalPrefixesLesson,
  obliqueCaseLesson,
  vocativeCaseLesson,

  // ۹. مکالمات روزمره
  convShoppingLesson,
  convRestaurantLesson,
  convTaxiLesson,
  convPhoneLesson,
  convDoctorLesson,
  convGuestLesson,
  convMarketDisputeLesson,
  convJobInterviewLesson,
  convDirectionsLesson,
  requestsLesson,

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
  return getLessonById(nextId) || {
    id: nextId, title: categoriesData.categories
      .flatMap(c => c.lessons)
      .find(l => l.id === nextId)?.title || nextId
  };
}

// Get previous lesson
export function getPrevLesson(currentId) {
  const allLessonIds = categoriesData.categories.flatMap(c => c.lessons.map(l => l.id));
  const currentIndex = allLessonIds.indexOf(currentId);
  if (currentIndex <= 0) return null;

  const prevId = allLessonIds[currentIndex - 1];
  return getLessonById(prevId) || {
    id: prevId, title: categoriesData.categories
      .flatMap(c => c.lessons)
      .find(l => l.id === prevId)?.title || prevId
  };
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
